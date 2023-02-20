import "./Table.css"
const Table = ({ data = [], columns = [], actionHandler }) => {
  console.log("table columns", columns, data);
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, i) => {
            return <th key={column.key + i}>{column?.columnName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => {
                if (column.key === "actions") {
                  return (
                    <td key={column.key} style={{width: column.width}} className={column.className}>
                      <button
                        className="edit"
                        onClick={() => actionHandler("EDIT", row, column)}
                      >
                        Edit
                      </button>{" "}
                      |{" "}
                      <button
                        className="delete"
                        onClick={() => actionHandler("DELETE", row, column)}
                      >
                        Delete
                      </button>
                    </td>
                  );
                }
                return <td  style={{width: column.width}} className={column.className}>{row[column?.key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
