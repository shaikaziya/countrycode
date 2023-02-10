import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { countryConfig } from "./Constant";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Dropdown() {
  const [country, setCountry] = useState(countryConfig);
  const { countrycode } = useParams();
  useEffect(() => {
    getAPI();
  }, [country]);

  const getAPI = () => {
    axios
      .get(`https://63e4b7ccc04baebbcdaa694d.mockapi.io/countryConfig`)
      .then((response) => {
        const result = response.data;
        console.log(result)
      })
      .catch((err) => err.message);
  };

  const handleChange = (event) => {
    setCountry(event.target.value);
    const selectedData = countryConfig.find(
      (ele) => ele.name === event.target.value
    );
    localStorage.setItem("countryCode", selectedData.countryCode);
    // localStorage.setItem("Lang");


  };

  // axios
  // .get(`https://63e4b7ccc04baebbcdaa694d.mockapi.io/countryConfig`)
  // .then((response) => {
  //   const result = response.data;
  //   console.log(result)
  // })
  // .catch((err) => err.message);

  
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
          label="Country"
          onChange={handleChange}
        >
          {countryConfig.map((countryConfigdata) => {
            return (
              <MenuItem value={countryConfigdata.name}>
                {countryConfigdata.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
