

import { useState } from 'react';
import { Pagination } from 'rsuite';

const PaginationComponent = ({onChangeHandler}:{onChangeHandler:(page:number)=>void}) => {
  const [activePage, setActivePage] = useState(1);
function pageChangeHandler(page:number) {
    setActivePage(()=>page)
onChangeHandler(activePage)
}
  return (
    <>
      <Pagination total={100} limit={10} activePage={activePage} onChangePage={(e)=>pageChangeHandler(e)} />
    </>
  );
};

export default PaginationComponent