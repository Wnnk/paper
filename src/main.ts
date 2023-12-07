import { createApp } from 'vue';
// import "./style.css";
import './style.scss';
import App from './App.vue';
import './samples/node-api';
import router from './routers/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './ElementStyle.scss';
import * as Icons from "@element-plus/icons-vue";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  });


