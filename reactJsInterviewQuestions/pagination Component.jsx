import React, { useEffect } from "react";

function paginatation({data,itemPerPage}){
    const [page,setPage]=useState(1);  //track currentpage number
    const totalPages=Math.ceil(data.length/itemPerPage);
    const currentData=data.slice((page-1)*itemPerPage,page*itemPerPage);

    //.slice(start, end) start = (2-1)*5 = 5
// end = 2*5 = 10
// data.slice(5, 10) → items 6–10
return (
    <div>
      <ul>
        {currentData.map((item,i) => <li key={i}>{item}</li>)}
      </ul>
      <button onClick={() => setPage(p => Math.max(p-1,1))}>Prev</button>
      <span>{page}/{totalPages}</span>
      <button onClick={() => setPage(p => Math.min(p+1,totalPages))}>Next</button>
    </div>
  );
}

//usage
const dataList = Array.from({length: 20}, (_,i)=>`Item ${i+1}`);
export default () => <Pagination data={dataList} itemsPerPage={5} />;