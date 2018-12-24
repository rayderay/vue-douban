import request from "superagent";
import jsonp from "superagent-jsonp";

const state = {
  novel: [],
  reality: [],
  travel: [],
  bookTags: []
};

const mutations = {
  getBook(state, payload) {
    switch (payload.tag) {
      case "novel":
        state.novel = payload.res;
        break;
      case "reality":
        state.reality = payload.res;
        break;
      case "travel":
        state.travel = payload.res;
        break;
      default:
        state.novel = payload.res;
    }
  }
};

const actions = {
  getBook({ commit }) {
    request
      .get("https://api.douban.com/v2/book/search?q=虚构类&count=8")
      .use(jsonp({ timeout: 1000 }))
      .end((err, res) => {
        if (!err) {
          commit({
            type: "getBook",
            tag: "novel",
            res: res.body.books
          });
        }
      });
    request
      .get("https://api.douban.com/v2/book/search?q=非虚构类&count=8")
      .use(jsonp({ timeout: 1000 }))
      .end((err, res) => {
        if (!err) {
          commit({
            type: "getBook",
            tag: "reality",
            res: res.body.books
          });
        }
      });
    request
      .get("https://api.douban.com/v2/book/search?q=旅行&count=8")
      .use(jsonp({ timeout: 1000 }))
      .end((err, res) => {
        if (!err) {
          commit({
            type: "getBook",
            tag: "travel",
            res: res.body.books
          });
        }
      });
  }
};

export default {
  state,
  mutations,
  actions
};
