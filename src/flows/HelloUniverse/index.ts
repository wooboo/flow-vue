import Vue from 'vue';
import App from './HelloWorld.vue';

export default (data: object) => {
  return new Vue({
    render: h => h(App, data),
  });
};
