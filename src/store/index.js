// import {createApp} from 'vue' //引入 Vue
// import Vuex from 'vuex' //引入 Vuex
// import App from "../App.vue";
import { createStore } from "vuex";
import user from './modules/user' //引入 user module
import count from "@/store/modules/count";

// createApp(App).use(Vuex)
//
// const store = new Vuex.Store({
//     modules: {
//         user, //使用 user.js 中的 action
//         count,
//     }
// })
//
// export default store


export default createStore({
    modules: {
        user,
        count,
    }
});