"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sqlUserLogin = exports.sqlUserLogin = "\n  SELECT NO, ID \n  FROM user_info\n  WHERE 1=1\n  AND ID = ?\n  AND PW = ?\n";
//# sourceMappingURL=uesrSql.js.map