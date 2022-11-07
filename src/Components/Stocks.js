import React from "react";
import { stockData } from "../date";
function Stocks() {
  const DisplayData1 = stockData.map((data) => {
    return (
      <tr>
        <td>{data.userId}</td>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );
  });
  return (
    <div>
      {/* <div>
        {stockData.map((data,key)=>{
            return (
                <div key={key}> */}
      {/* // <tr>
                      //   <td>{data.userId}</td>
                      //   <td>{ data.id }</td>
                      //   <td>{data.title }</td>
                      //   <td>{ data.body }</td>
                      </tr> */}
      {/* data.userId + 
                        " , " +
                        data.id  +
                        " , " +
                        data.title + 
                        " , " + 
                        data.body  */}
      // {/* </tr> */}
      {/* </div> */}){/* // })} */}
      //{" "}
    </div>
    // </div>
  );
}

export default Stocks;
