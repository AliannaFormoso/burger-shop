import React, { useState } from "react";
import { State, Country } from "country-state-city";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping details</h1>
        <form>
          <div>
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div>
            <label>Country</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
              {Country.getAllCountries().map((country) => (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">State</option>
              {State.getStatesOfCountry(selectedCountry).map((state) => (
                <option value={state.isoCode} key={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Zip Code" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Telephone Number" />
          </div>
          <Popup
            trigger={
              <Link className="link" to="/myorders">
                Confirm Order
              </Link>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(0%, -500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Processing your order!
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
