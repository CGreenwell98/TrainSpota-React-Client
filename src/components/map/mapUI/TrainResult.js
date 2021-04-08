import React from "react";

const TrainResult = ({ data, passBtnActive }) => {
  return (
    <div className="train-data-box">
      <h5>Platform {data.platform}</h5>
      <small>{data.operator_name}</small>
      <ul>
        {passBtnActive ? (
          <li className="pass-box">
            <b>PASS</b> {data.pass_time}
          </li>
        ) : (
          <>
            <li className="arv-box">
              <b>ARV</b> {data.arrival_time}
            </li>
            <li className="dep-box">
              <b>DEP </b> {data.departure_time}
            </li>
          </>
        )}
      </ul>
      <div className="train-destination-box">
        <div>{data.origin_name}</div>
        <i className="fas fa-arrow-right"></i>
        <div>{data.destination_name}</div>
      </div>
    </div>
  );
};

export default TrainResult;
