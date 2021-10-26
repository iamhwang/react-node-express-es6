/*
 -- 기능명 : NotFoundPage.jsx 유닛테스트
 -- 작성자 : 황태영
 -- 작성일 : 2021.10.26
 -- 수정일 :
 -- 수정내용:
*/

import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage.jsx 정상적으로 렌더링되면', () => {
  it('화면에 NOT FOUND 글자가 보인다', () => {
    const { container } = render(<NotFoundPage />);

    expect(container).toHaveTextContent('NOT FOUND');
  });
});

