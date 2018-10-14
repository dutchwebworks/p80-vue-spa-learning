import Vue from "vue";
import Vuex from "vuex";
import News from "./modules/news";

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {

        },
        modules: {
            News
        }
    })
}

export default store;