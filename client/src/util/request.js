import Vue from 'vue'

const buildUrl = (url, params) => {
  let str = '?'
  for (const key in params) {
    url += str + key + '=' + params[key];
    str = '&';
  }
  return url;
};

const normalAjax = (url, param, fn) => {
  const _url = buildUrl(url, param);
  Vue.http.get(_url).then((response) => {
    if (response.ok) {
      fn(1, response.body);
    } else { // 此处处理
      fn(0, response.body)
    }
  }, (error) => {
    fn(0, error)
  })
};

const normalAjaxPost = (url, params, fn, originResult) => {
  Vue.http.post(url, params).then((response) => {
    if (response.ok) {
      fn(1, response.body);
    } else { // 此处处理
      fn(0, response.body)
    }
  }, (error) => {
    fn(0, error)
  })
};

export default {
  normalAjax,
  normalAjaxPost
}
