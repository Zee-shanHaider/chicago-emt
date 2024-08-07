import React, { useState } from "react";
import { Table, Tooltip } from "reactstrap";
import Status from "./Status";
import { useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IconWithTooltip } from "../notification/AllNotifications";

const MyTable = ({ headers, data }) => {
  const statusArray = ["paid", "not paid", "pending", "not started"];
  const skin = useSelector((state) => state.layout.skin);

  return (
    <div class="container-fluid h-25">
      <div class="row">
        <div class="col-md-12 overflow-auto" style={{ maxHeight: "400px" }}>
          <Table
            responsive
            className="table table-hover max-height-300"
            sort={true}
          >
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
                      <td className="text-nowrap" key={colIndex}>
                        {statusArray.includes(key) ? (
                          row[key] === "Not Paid" ? (
                            <Status text={row[key]} flag={"danger"} />
                          ) : (
                            <Status text={row[key]} flag={"success"} />
                          )
                        ) : header.toLowerCase() === "actions" ? (
                          <div className="d-flex gap-2">
                            <IconWithTooltip
                              id="viewTooltip"
                              handleClick={() => navigate(`${email.id}`)} // Adjust as per your logic
                              IconComponent={FaRegEye}
                              size={20}
                              tooltip="View"
                            />
                            <IconWithTooltip
                              id="editTooltip"
                              handleClick={() => {
                                setEmailId(email.id); // Adjust as per your logic
                                setSelectedTabIndex(1); // Adjust as per your logic
                              }}
                              IconComponent={CiEdit}
                              size={20}
                              tooltip="Edit"
                            />
                            <IconWithTooltip
                              id="deleteTooltip"
                              IconComponent={MdDeleteOutline}
                              size={20}
                              tooltip="Delete"
                            />
                          </div>
                        ) : (
                          row[key] // Assuming this renders non-status fields
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyTable;
