// @ts-nocheck
"use strict";

const { onCreateLintItems } = require("../../../utils/onCreateLineItems");
const {
  onCreateLineItemsProduct,
} = require("../../../utils/onCreateLineItemProduct");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { email, products, redirect_url, address } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const productData = await onCreateLintItems(product.id);
          const result = onCreateLineItemsProduct(
            productData,
            product.quantity
          );
          return result;
        })
      );

      const checkOutSessionData = {
        line_items: lineItems,
        mode: "payment",
        success_url: `${redirect_url}/bill?payment_success=true`,
        cancel_url: `${redirect_url}/bill?payment_success=false`,
        shipping_address_collection: { allowed_countries: ["US", "TH", "CH"] },
        payment_method_types: ["card"],
        customer_email: email,
        custom_text: {
          shipping_address: {
            message: address,
          },
        },
      };

      const session = await stripe.checkout.sessions.create(
        checkOutSessionData
      );

      await strapi.service("api::order.order").create({
        data: {
          products: lineItems,
          stripeId: session.id,
          redirect_url: redirect_url,
          address: address,
          email: email,
        },
      });

      await Promise.all(
        products.map(async (product) => {
          const productData = await strapi
            .service("api::product.product")
            .findOne(product.id);

          await strapi.entityService.update(
            "api::product.product",
            product.id,
            {
              data: {
                stock: productData.stock - product.quantity,
              },
            }
          );
        })
      );

      return {
        stripeSession: session,
      };
    } catch (error) {
      ctx.respond.status = 500;
      console.error(error);
      return error;
    }
  },
}));
