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
  console.log('sendReg data: ', data);

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
