import React from "react";
import { Cards, Charts, CountryPicker } from "../index";
function Dashboard() {
  return (
    <div>
      <CountryPicker />
      <Cards />

      <Charts />
    </div>
  );
}

export default Dashboard;
