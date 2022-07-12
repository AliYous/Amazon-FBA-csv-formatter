import React, { useEffect, useState } from "react";
import { turnSoftwareDataToFormattedCSV } from "./lib/helpers/DataReportHelper";
import Papa from "papaparse";
const App = () => {
  const [array, setArray] = useState([]);

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setArray(results.data);
      },
    });
  };

  const handleOnSubmit = (e) => {
    parseFile(e.target.files[0]);
  };

  useEffect(() => {
    turnSoftwareDataToFormattedCSV(array);
  }, [array]);

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnSubmit}
        />
      </form>

      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
