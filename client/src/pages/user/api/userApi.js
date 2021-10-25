export async function requestUserLoginAPI({ username }) {
  const url = '/api/user/userLogin';
  //const url = 'api/user/router/userRouter/userLogin';
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
  return data;
}