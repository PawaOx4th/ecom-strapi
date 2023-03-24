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
  app.registerHook(
    "Admin/CM/pages/ListView/inject-column-in-table",
    ({ displayedHeaders, layout }) => {
      return {
        displayedHeaders: [...displayedHeaders],
        layout,
      };
    }
  );
};

export default {
  config,
  bootstrap,
};
