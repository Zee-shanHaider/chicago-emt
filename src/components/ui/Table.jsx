import React from "react";
import { Table } from "reactstrap";

const MyTable = ({ headers, data }) => {
  return (
    <Table sort={true} responsiveTag={true}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => {
              const key = header.toLowerCase().replace(/ /g, "");
              return <td key={colIndex}>{row[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
