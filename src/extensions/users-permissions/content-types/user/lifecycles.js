// @ts-nocheck
// src/extensions/users-permissions/content-types/user/lifecycles.js
module.exports = {
  async afterCreate(event) {
    const { result } = event;

    await strapi.service("api::profile.profile").create({
      data: {
        user: result.id,
      },
    });
  },
  async beforeDelete(event) {
    const { result, params, state, model } = event;
    const {
      where: { id },
    } = params;
    if (id) {
      console.log("🍟 USERID :", id);
      const response = await strapi.db.query("api::profile.profile").findOne({
        where: {
          user: {
            id: id,
          },
        },
        populate: {
          user: true,
        },
      });

      console.log("🟢 response :", response);
      await strapi.service("api::profile.profile").delete(response.id);
    }
  },
};
