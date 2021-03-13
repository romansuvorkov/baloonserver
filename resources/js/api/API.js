export default class API {
  constructor() {
    // this.server = 'http://localhost:8000/api';
    this.server = 'https://lit-sierra-16668.herokuapp.com/api';
  }

  getAllItems(address) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${this.server}/${address}`);
      xhr.setRequestHeader('X-CSRF-TOKEN', window.csrfToken);
      xhr.addEventListener('load', () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            return resolve(data.data);
          }
        }
        return reject(xhr.responseText);
      });
      xhr.send();
    });
  }

  lazyload(address, number) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${this.server}/${address}/${number}`);
      xhr.setRequestHeader('X-CSRF-TOKEN', window.csrfToken);
      xhr.addEventListener('load', () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            return resolve(data.data);
          }
        }
        return reject(xhr.responseText);
      });
      xhr.send();
    });
  }

  sendOrder(name, phone, messenger) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('phone', phone);
      params.append('messenger', messenger);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${this.server}/test`);
      xhr.setRequestHeader('X-CSRF-TOKEN', window.csrfToken);
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          return resolve(xhr.responseText);
        }
        return reject(xhr.responseText);
      });
      xhr.send(params);
    });
  }
}
// const axios = window.axios;
// console.log(axios);

// const BASE_API_URL = 'http://localhost:8000/api';

// export default {
//   getAllPosts: (teset) =>
//   window.axios.get(`${BASE_API_URL}/${teset}`)
// }
