import Vue from "vue";
import Vuex from "vuex";
import News from "./modules/News";

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