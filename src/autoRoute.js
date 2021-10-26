/*
 -- 기능명 : Routes 파일 자동 로드
 -- 작성자 : 황태영
 -- 작성일 : 2021.10.26
 -- 수정일 :
 -- 수정내용:
*/
import glob from 'glob';

export default function autoRoute({ app }) {
  glob.sync('src/api/**/router/*.js').map(path => {
    app.use('/api', require(`./${path.substring(4, path.length)}`));
  });
}