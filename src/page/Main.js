import Currentweather from "../components/CurrentWeather";
import Prevision from "../components/Prevision";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  color: "white",
  backdropFilter: "blur(3px)",
  backgroundColor: "rgb(87, 171, 255)",
};

function Main() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [temp, setTemp] = useState("vatan");
  const [name, setName] = useState("");
  const [currentWeather, setCurrentWeather] = useState([]);
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
 

  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
    params: {
      q: temp,
      cnt: "7",
      mode: "null",
      lon: "0",
      type: "link, accurate",
      lat: "0",
      units: "imperial, metric",
    },
    headers: {
      "X-RapidAPI-Key": "e70a278c51msh4c71456d4ea4498p123b2bjsnd730fa1a83fd",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const activateLasers = () => {
    if (!temp.replace(/\s/g, "").length) {
      setOpen(true);
    } else {
      axios
        .request(options)
        .then(function (response) {
          setLoading(false);
          setCurrentWeather(response.data.list[0]);
          setList(response.data.list);
          setName(response.data.city.name);
        })
        .catch(function (error) {
          console.error(error);
          setOpen(true);
        });
    }
  };

  const getCurrentWeather = async () => {
    axios
      .request(options)
      .then(function (response) {
        setLoading(false);
        setCurrentWeather(response.data.list[0]);
        setList(response.data.list);
        setName(response.data.city.name);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Oooops!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This city doesn't exist try again
            </Typography>
          </Box>
        </Modal>
      </div>

      <div className="ContaintSearch">
        <div className="containerss">
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" onChange={(e) => setTemp(e.target.value)} />
            <button onClick={activateLasers}>Search</button>
          </div>
        </div>

        <Currentweather currentWeather={currentWeather} name={name} />
      </div>

      <Prevision list={list} />
    </div>
  );
}
export default Main;
