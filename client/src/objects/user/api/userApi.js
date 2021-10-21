export async function requestDataApi() {
  fetch('/api/data/')
    .then((res) => res.json())
    .then(res => console.log(res));
}

export async function requestUserLoginAPI({ username }) {
  const url = '/api/user/userLogin';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
    }),
  });

  const data = await response.json();
  console.log(data);
  return data;
}