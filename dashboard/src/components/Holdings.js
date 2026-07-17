import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import VerticalGraph from "./VerticalGraph";

const Holdings = () => {
  const [allholdings, setAllHoldings] = useState([]);

  useEffect(() => {
    api.get("/allholdings")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  const labels = allholdings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allholdings.map((stock) => stock.price),
        backgroundColor: allholdings.map((stock) =>
          stock.price >= stock.avg
            ? "rgba(40, 167, 69, 0.6)"
            : "rgba(220, 53, 69, 0.6)",
        ),
      },
    ],
  };

  useEffect(() => {

api.get("/allholdings").then((res) => {
  console.log(res.data);
  setAllHoldings(res.data);
});
  },[]);
  return (
    <>
      <h3 className="title">Holdings ({allholdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>


          {allholdings.map((stock,index)=>{

            const currVal= stock.price*stock.qty;
            const isLoss = currVal - stock.avg * stock.qty < 0;
            const isProfit=currVal-stock.avg*stock.qty>=0.0;
            const profClass= isProfit? "profit":"loss";
            const dayClass= isLoss?"red":"green";

            
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}.</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={ profClass}>{(currVal-stock.avg*stock.qty).toFixed(2)}</td>
                <td className={ profClass}>{stock.net}</td>
                <td className={ dayClass}>{stock.day}.</td>
              </tr>
            );
          })}

        </table>
      </div>

      <div className="row p4 mt-5">
        <div className="col">
          
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      
      <div className="mt-5" style={{ height: "400px" }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};
    

export default Holdings;
