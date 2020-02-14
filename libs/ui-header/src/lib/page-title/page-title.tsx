import React from 'react';

import './page-title.scss';

/* eslint-disable-next-line */
export interface PageTitleProps {}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <div>
      <h1>Welcome to my-site!</h1>
    </div>
  );
};

export default PageTitle;
