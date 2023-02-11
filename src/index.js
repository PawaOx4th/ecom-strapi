"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
  // async bootstrap({ strapi }) {
  //   for (let i = 0; i <= 20; i++) {
  //     await strapi.entityService.create("api::product.product", {
  //       data: {
  //         name: faker.commerce.productName(),
  //         desc: faker.commerce.productDescription(),
  //         isNew: faker.datatype.boolean(),
  //         price: faker.commerce.price(),
  //         stock: faker.datatype.number({ min: 20, max: 200 }),
  //       },
  //     });
  //   }
  // },
};
