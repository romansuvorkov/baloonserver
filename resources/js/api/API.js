export default class API {
    constructor() {
      this.server = 'http://localhost:8000/api';
    //   this.server = 'https://ahj-diploma-serv.herokuapp.com';
    }

    getAllItems(address) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.server}/${address}`);
        xhr.addEventListener('load', () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                // console.log(xhr);
                const data = JSON.parse(xhr.responseText);
                // console.log(data);
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
          xhr.addEventListener('load', () => {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
              console.log(xhr);
              const data = JSON.parse(xhr.responseText);
              console.log(data.data);
              return resolve(data.data);
              }
            }
            return reject(xhr.responseText);
          });
          xhr.send();
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