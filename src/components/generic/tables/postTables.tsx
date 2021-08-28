import React from "react";
export default function PostTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    title: string;
    category: string;
    publisher: string;
    publishDate: string;
  }[];
}) {
  return (
    <div className="cardcst cst-table w-100">
      <h3 className="fw600 fs24 lh48">{title}</h3>
      <table className="post-table table table-borderless">
        <tr>
          {columns.map((x, i) => (
            <th>
              <div>{x}</div>
            </th>
          ))}
        </tr>

        {Array.from({ length: 10 }).map((x, i) => (
          <tr>
            <td>
              <div>{rows[0].title}</div>
            </td>
            <td>
              <div>{rows[0].category}</div>
            </td>
            <td>
              <div>{rows[0].publisher}</div>
            </td>
            <td>
              <div>{rows[0].publishDate}</div>
            </td>
            <td></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
