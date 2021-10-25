export const sqlUserLogin = `
  SELECT NO, ID 
  FROM user_info
  WHERE 1=1
  AND ID = ?
  AND PW = ?
`;
