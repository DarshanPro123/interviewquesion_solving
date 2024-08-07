import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";

const App = () => {
  const [country, setCountry] = useState("0");
  const countries = [
    {
      name: "India",
      value: "IN",
      cites: ["Gujrat", "Delhi", "Maharastra"],
    },
    {
      name: "USA",
      value: "US",
      cites: ["NewYork", "Washington", "California"],
    },
    {
      name: "UK",
      value: "UK",
      cites: ["London", "Manchester", "Birmingham"],
    },
    {
      name: "Australia",
      value: "AU",
      cites: ["Sydney", "Melbourne", "Brisbane"],
    },
  ];

  return (
    <>
      <div>
        <h1>Countries</h1>
        <select
          value={country}
          onChange={(e) => {
            console.log(e.target.value);
            setCountry(e.target.value);
          }}
        >
          {countries.map((item, index) => {
            return (
              <>
                <option value={index} key={index}>
                  {item.name}
                </option>
              </>
            );
          })}
        </select>

        <h1>Cities</h1>
        <select value={country}>
          {countries[country].cites.map((item, index) => {
            return (
              <>
                {" "}
                <option value={index} key={index}>
                  {item}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <Footer />
    </>
  );
};

export default App;
