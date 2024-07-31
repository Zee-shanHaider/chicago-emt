import React from "react";
import { Table } from "reactstrap";
import Status from "./Status";

const MyTable = ({ headers, data }) => {
  const statusArray = ["paid", "not paid", "pending", "not started"];
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
              return (
                <>
                  <td key={colIndex}>
                    {statusArray.includes(key) ? (
                      row[key] === "Not Paid" ? (
                        <Status text={row[key]} flag={"danger"} />
                      ) : (
                        <Status text={row[key]} flag={"success"} />
                      )
                    ) : (
                      row[key]
                    )}
                  </td>
                </>
              );
            })}
          </tr>
        ))}
      </tbody>

      {/* <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => {
              const key = header.toLowerCase().replace(/ /g, "");
              return <td key={colIndex}>{row[key]}</td>;
            })}
          </tr>
        ))}
      </tbody> */}
    </Table>
  );
};

export default MyTable;
