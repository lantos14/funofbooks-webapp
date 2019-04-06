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

export function sendReg(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}

export function sendLogin(url, data) {
  console.log('api login data: ', data); //eslint-disable-line
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      strategy: 'local',
      email: data.email,
      password: data.password,
    }),
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}

export function getUsername(url, email, token) {
  return fetch(`${url}?email=${email}`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}
