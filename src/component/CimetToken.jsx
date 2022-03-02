import { useEffect, useState } from "react";

const CimetToken = () => {
  const [token, setToken] = useState("");
  const [apidata, setApiData] = useState("");
  const [apidata2, setApiData2] = useState("");
  useEffect(() => {
    //  const requestToken = {
    //    method:'POST',
    //    headers: { 'Content-Type': 'application/json' ,
    //   key:'4NKQ3-815C2-8T5Q2-16318-55301'}
    //       }
    fetch(
      "https://devcore02.cimet.io/v1/generate-token?api-key=4NKQ3-815C2-8T5Q2-16318-55301"
    )
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        setApiData(data);
      });
    fetch(
      "https://devcore02.cimet.io/v1/search-address?Api-key=4NKQ3-815C2-8T5Q2-16318-55301"
    )
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        setApiData2(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="TokenDashboard">
      <h1>Cimet Token Generator</h1>
      <input
        type=""
        text
        placeholder="Search Address"
        onChange={(e) => setToken(e.target.value)}
        value={token}
      />
    </div>
  );
};
export default CimetToken;
