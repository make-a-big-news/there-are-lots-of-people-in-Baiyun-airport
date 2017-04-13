/**
 * 全局配置
 */

import API from '@/api';
import constant from './constants';

export default function plugin(Vue) {
    // api 全局注入
    Vue.API = API;
    Vue.prototype.$API = API;

    // 业务常量全局注入
    Vue.const = constant;
    Vue.prototype.$const = constant;
}