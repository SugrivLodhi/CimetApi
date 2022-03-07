import "./styles.css";
import CimetToken from "./component/CimetToken";
import { useState } from "react";
import CimetSearch from "./component/CimetSearch";

export default function App() {
  const [token, setToken] = useState("");
  const [address, setAddress] = useState([
    {
      id: 1,
      adress: "unit 38 50"
    },
    {
      id: 2,
      adress: "barangaroo"
    },
    {
      id: 3,
      adress: "concord west"
    },
    {
      id: 5,
      adress: "Ainslie"
    },
    {
      id: 6,
      adress: "Barton"
    },
    {
      id: 7,
      adress: "Belconnen"
    },
    {
      id: 8,
      adress: "Calwell"
    },
    {
      id: 9,
      adress: "Canberra Bc"
    },
    {
      id: 10,
      adress: "concord west"
    },
    {
      id: 11,
      adress: "Charnwood"
    },
    {
      id: 12,
      adress: "Dickson"
    },
    {
      id: 13,
      adress: "Fadden"
    }
  ]);
  return (
    <div className="App">
      <CimetSearch token={token} setToken={setToken} />
      <CimetToken
        address={address.filter((addr) => {
          return addr.adress.toLowerCase().includes(token);
        })}
      />
    </div>
  );
}
