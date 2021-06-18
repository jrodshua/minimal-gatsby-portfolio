import React from "react"
import styled from "styled-components"
import WeatherCards from "./weatherCards"

const Wrapper = styled.div`
  aside {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    aside {
      flex-direction: row;
    }
  }
`

// data.timelines[0].intervals .map
// data.timelines[0].intervals.map => d.startTime = date string
// data.timelines[0].intervals.amp => d.values.temperatureMax || d.values.temperatureMin = temps number

const WeatherComp = ({ data, isChecked }) => {
  const options = { weekday: "long" }

  return (
    <Wrapper>
      <aside>
        {isChecked &&
          data.data.timelines[0].intervals.map(dataObj => {
            const d = new Date(dataObj.startTime)
            const dDate = d.getDate()
            const dDay = new Intl.DateTimeFormat("en-US", options).format(d)
            return (
              <WeatherCards
                key={dataObj.startTime}
                dDate={dDate}
                dDay={dDay}
                temp={dataObj.values.temperatureMax}
              />
            )
          })}
      </aside>
    </Wrapper>
  )
}

export default WeatherComp
