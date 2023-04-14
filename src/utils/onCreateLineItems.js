// @ts-nocheck
async function onCreateLintItems(id) {
  const productData = await strapi.service("api::product.product").findOne(id, {
    populate: "*",
  });

  return productData;
}

module.exports = { onCreateLintItems };
