import React from "react";
import dayjs from "dayjs";
const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    "th",
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log("🌹    :", app);
  app.registerHook(
    "Admin/CM/pages/ListView/inject-column-in-table",
    ({ displayedHeaders, layout }) => {
      return {
        displayedHeaders: [
          ...displayedHeaders,
          // {
          //   key: "__created_by_id_key__",
          //   name: "created_by_id",
          //   fieldSchema: { type: "string" },
          //   metadatas: {
          //     label: "created by",
          //     sortable: true,
          //   },
          //   cellFormatter: (data) => {
          //     return (
          //       <div>
          //         {data["createdBy"]["firstname"]}{" "}
          //         {data["createdBy"]["lastname"]}
          //       </div>
          //     );
          //   },
          // },
          // {
          //   key: "__update_at_id_key__",
          //   name: "update_at",
          //   fieldSchema: { type: "string" },
          //   metadatas: {
          //     label: "custom display updateAt",
          //     sortable: true,
          //   },
          //   cellFormatter: (data) => {
          //     return (
          //       <div>
          //         {dayjs(data["updateAt"]).format("DD/MM/YYYY HH:mm:ss")}
          //       </div>
          //     );
          //   },
          // },
        ],
        layout,
      };
    }
  );
};

export default {
  config,
  bootstrap,
};
