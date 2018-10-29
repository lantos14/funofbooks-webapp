import { socket } from '../store/store.js';

export function login(email, password) {
  return new Promise((resolve, reject) => {
    socket.emit('authenticate', {
      strategy: 'local',
      email,
      password,
    }, (error, data) => {
      if (error) {
        reject(error);
      }
      socket.emit('authenticate', {
        token: data.accessToken,
      }, (mesSock, dataSock) => {
        resolve(dataSock);
      });
    });
  });
}

export function getData(url) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.FOB_SERVER_TOKEN,
    }
  })
    .then(response => response.json())
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
}

export function postData(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.FOB_SERVER_TOKEN,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}
