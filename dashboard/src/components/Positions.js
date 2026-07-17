import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api/axiosInstance";


const Positions = () => {

  const [allpositions, setAllPositions] = useState([]);

  useEffect(() => {
    api.get("/allpositions").then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
    }).catch((err) => {
      console.error("Error fetching positions:", err);
    });

  }, []);



  return (
    <>
      <h3 className="title">{allpositions.length}</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>


          {allpositions.map((stock,index)=>{

            const currVal= stock.price*stock.qty;
            const isLoss = currVal - stock.avg * stock.qty < 0;
            const isProfit=currVal-stock.avg*stock.qty>=0.0;
            const profClass= isProfit? "profit":"loss";
            const dayClass= isLoss?"red":"green";

            
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}.</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profClass}>
                  {(currVal - stock.avg * stock.qty).toFixed(2)}
                </td>
               
                <td className={dayClass}>{stock.day}.</td>
              </tr>
            );
          })}


        </table>
      </div>
    </>
  );
};

export default Positions;
