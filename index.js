import express from 'express';

import axios from 'axios';

const app = express();

const port = 3000;

const lon = 7.291400; // longitude city

const lat = 51.284119; // latitude city

const units = `metric`;  // metric system

const api = ''; // api token

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${api}`; // api request

app.use(express.static("public")); // use css

app.get("/", async(req, res) => {

    try {

        const result = await axios.get(url); // Gets the Api Call

        res.render("index.ejs", {

            temp: Math.round(JSON.stringify(result.data.main.temp)) // Round the temp to the nearest Integer and give the JSON from the api to the index.ejs file

        });

    } catch (error) {

        console.log(error.result); // catch error

        res.status(500);

    }

 });

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

  });