import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import { fetchData } from "../../redux";
import styles from "./CountryPicker.module.css";
import { connect } from "react-redux";
function CountryPicker(props) {
  const [fetchedCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchCountries]);
  return (
    <div className={styles.container}>
      <FormControl className={styles.formControl}>
        <NativeSelect
          onChange={(e) => {
            props.fetchDataByCountry(e.target.value);
          }}
        >
          <option value="">Globally</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataByCountry: (country) => {
      dispatch(fetchData(country));
    },
  };
};
export default connect(null, mapDispatchToProps)(CountryPicker);
