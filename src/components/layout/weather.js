import React from "react"
import { useQuery } from "react-query"
import WeatherComp from "./weatherComp"

const queryStartDate = new Date().toISOString()
const queryEndDate = new Date(
  new Date().setDate(new Date().getDate() + 4)
).toISOString()
const weatherApi = process.env.GATSBY_SECRET_KEY

// const url = `https://api.tomorrow.io/v4/timelines?location=36.16987760,-115.13952930&fields=temperature&units=imperial&timesteps=1h&startTime=${queryStartDate}&endTime=${queryEndDate}&timezone=America/Los_Angeles&apikey=${weatherApi}`

const url = `https://api.tomorrow.io/v4/timelines?location=36.16987760,-115.13952930&fields=temperatureMin&fields=temperatureMax&units=imperial&timesteps=1d&startTime=${queryStartDate}&endTime=${queryEndDate}&timezone=America/Los_Angeles&apikey=${weatherApi}`

const Weather = ({ isChecked }) => {
  const { data } = useQuery("weatherApiData", async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
    if (!response.ok) {
      throw new Error("There was an error with the network response")
    }
    return response.json()
  })

  return (
    <>
      <WeatherComp data={data} isChecked={isChecked} />
    </>
  )
}

export default Weather
