import Vue from 'vue';
import Fetch from '@pandora/fetch';
import Gateway from '@pandora/fetch-plugin-jdwl-gw';
import uuidv4 from 'uuid/v4';

export const EVN = {
  DEVELOPMENT: 'development',
  PREPARE: 'prepare',
  PRODUCTION: 'production',
};

export const env = process.env.NODE_ENV;
// export const ENV = EVN.PREPARE;

const appid = 158;
Fetch.use(Gateway, {
  env,
  // env: 'prepare', // process.env.VUE_APP_ENV,
  domain: 'logistics-mrd.jd.com',
  appid,
  clientInfo: {
    appName: 'c2c',
    client: 'm',
  },
});

const urlWhiteList = [];

Fetch.interceptors.push((request, next) => {
  Vue.loading.show();
  const { url, options } = request;
  const inWhiteList =
    urlWhiteList.findIndex(item => item === url.replace(options.root, '')) >= 0;
  // eslint-disable-next-line no-param-reassign
  request.options.headers = {
    'jexpress-trace-id': uuidv4(),
    'event-id': uuidv4(),
    'app-key': 'jexpress',
    'biz-type': 'service-monitor',
    'source-client': 2,
    access: 'H5',
    'jexpress-report-time': Date.now(),
    version: '1.0.0',
  };
  next((response) => {
    Vue.loading.hide();
    if (inWhiteList) {
      return;
    }
    const { error_response: errorResponse } = response.data || {};
    if (errorResponse) {
      const { code } = errorResponse;
      if (code === 2 || code === 65) {
        Vue.toast.show('哎哟，网络太拥挤了，请稍候再试');
      } else if (code === 120) {
        Vue.toast.show('您的账号存在安全风险，请联系客服');
      } else if (code !== 142 && code !== 143) {
        Vue.toast.show('系统开小差了，请稍候再试');
      }
      // eslint-disable-next-line consistent-return
      return Promise.reject(response);
    }
  });
});

Fetch.interceptors.push((request, next) => {
  Vue.loading.show();
  const { url, options } = request;
  if (url.indexOf('/@mock') > -1) {
    console.log('Fetch request = ', request.options);
    let mockUrl = url.replace(options.root, 'http://localhost:3000');
    mockUrl = mockUrl.replace('/@mock', '');
    // eslint-disable-next-line no-param-reassign
    request.url = mockUrl;

    console.log('Fetch.mockUrl = ', mockUrl);
  }
  next(() => {
    Vue.loading.hide();
  });
});

Fetch.mock = function (methodName, ...rest) {
  const url = `http://localhost:3000${methodName}`;
  return Fetch.gw(url, ...rest);
};

Vue.prototype.$fetch = Fetch;
