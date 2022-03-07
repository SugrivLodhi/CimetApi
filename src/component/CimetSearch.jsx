import { useEffect, useState } from "react";

const CimetToken = ({ token, setToken }) => {
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
