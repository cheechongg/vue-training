export default {
  // called by Vue.use(FirstPlugin)
  install(Vue, options) {
    const db = "test";

    // create a mixin
    Vue.prototype.$italicHTML = function () {
      console.log(this.db);
      return db;
    };
  },
};
