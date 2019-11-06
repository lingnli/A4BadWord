/*
在handlebars頁面中，可以使用
{{#if condition}}
判斷condition是否為true
{{/if}}

若要使用判斷a===b是否相等
則需自定一個handlebars-helpers.js引入
*/

const Handlebars = require("handlebars");

Handlebars.registerHelper("ifEquals", function(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});
