import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dropdown from "./Dropdown";
import "./CSS/BasicCard.css";

export default function BasicCard() {
  const styles = { width: "250px", marginLeft: "510px" };
  return (
    <div>
      <h2>Check Eligibility</h2>
      <Card sx={{ minWidth: 275 }} style={styles}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Let's make sure your card is eligible to enroll in Visa Purchase
            Alerts.
          </Typography>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
            />
          </Typography> */}
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Dropdown></Dropdown>
          </Typography>
          <br></br>
         
         

          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            In what country was the card was originally Issued? This cannot be
            changed after registering
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button variant="contained" className="Button" onClick={() => {}}>
            Check eligibility
          </Button>
        </CardActions>
        <CardActions>
          <Button variant="text" className="Button">
            Cancel
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
