import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { countryConfig } from "./Constant";
import axios from "axios";
export default function Dropdown() {
  const [country, setCountry] = useState("US");
  const [locallang, setLocallang] = useState("en-US");

  useEffect(() => {
    localStorage.setItem("countryCode", country);
    localStorage.setItem("lang", locallang);
  }, []);
  const handleChange = (event) => {
    setCountry(event.target.value);
    const selectedData = countryConfig.find(
      (ele) => ele.name === event.target.value
    );
    localStorage.setItem("countryCode", selectedData.countryCode);
    const localcountrycode = localStorage.getItem("countryCode");
    console.log(localcountrycode);
    axios
      .get(
        `https://63e4b7ccc04baebbcdaa694d.mockapi.io/countryConfig?countryCode=${localcountrycode}`
      )
      .then((response) => {
        const result = response.data;
        console.log(result);
        const getData = result.filter(
          (ele) => ele.countryCode === localcountrycode
        );
        console.log(result[0].countryCode);
        const jsonArr = result[0].supportedLocates[0].local;
        localStorage.setItem("lang", jsonArr);
        console.log(jsonArr,41,"jsonArr")
        const locallang = localStorage.getItem("lang", jsonArr);
        console.log(locallang,43,"locallang")
      });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" default="USA">
          Country
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          defaultValue={1}
          label="Country"
          onChange={handleChange}
        >
          {countryConfig.map((countryConfigdata) => {
            return (
              <MenuItem
                key={countryConfigdata.name}
                value={countryConfigdata.name}
              >
                {countryConfigdata.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}


// en-US-->english
// es-419-->spanish
// es-AR-->
// pt-BR-->porc