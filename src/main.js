import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from "./store";
import * as ELIcons from '@element-plus/icons-vue'


const app = createApp(App).use(store).use(router).use(ElementPlus);
for (let iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
}
// app.use(router);
// app.use(ElementPlus);
// app.use(store);



app.mount("#app");