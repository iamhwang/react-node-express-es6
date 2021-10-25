export const sqlMemosGet = `
  SELECT NO, MEMO 
  FROM user_memo
  WHERE 1=1
  ORDER BY NO DESC
  LIMIT 5
`;
