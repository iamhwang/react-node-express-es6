export async function requestMemosGetApi({ username }) {
  const url = '/api/memo/memosGet';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no: username,
    }),
  });

  const data = await response.json();
  return data;
}