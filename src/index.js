"use strict";
const { faker } = require("@faker-js/faker");

console.log("🐳 :", new Date().toISOString());

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
  bootstrap({ strapi }) {},
  // async bootstrap({ strapi }) {
  //   strapi.db.lifecycles.subscribe({
  //     models: ["plugin::users-permissions.user"],

  //     // // your lifecycle hooks
  //     // async afterCreate() {
  //     //   console.log("user created!");
  //     // },
  //   });
  // },
};
