import React from "react"
import styled from "styled-components"

const StyledCards = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 40px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.25rem;
  font-size: 14px;

  .cards-top {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .cards-top-date {
    font-weight: bold;
    margin-left: 6px;
  }

  svg {
  }

  .cards-temp {
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    height: 150px;
    width: 150px;
    margin: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    .cards-top {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        padding: 0 0.25rem;
      }
    }

    svg {
      height: 25%;
      width: auto;
    }
  }
`

const WeatherCards = () => {
  return (
    <StyledCards>
      <div className="cards-top">
        <div>Friday</div>
        <div className="cards-top-date">18</div>
      </div>
      <OnFireSvg />
      <div className="cards-temp">116°</div>
    </StyledCards>
  )
}

export default WeatherCards

function OnFireSvg(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M22.088 13.126L24 12l-1.912-1.126a2.172 2.172 0 01-.788-2.942L22.393 6l-2.22-.02a2.171 2.171 0 01-2.153-2.153L18 1.608l-1.932 1.093a2.172 2.172 0 01-2.941-.788L12 0l-1.127 1.913a2.172 2.172 0 01-2.941.788L6 1.608l-.02 2.219A2.171 2.171 0 013.827 5.98L1.607 6 2.7 7.932a2.172 2.172 0 01-.788 2.942L0 12l1.912 1.126a2.172 2.172 0 01.788 2.942L1.607 18l2.22.02a2.171 2.171 0 012.153 2.153L6 22.392l1.932-1.093a2.172 2.172 0 012.941.788L12 24l1.127-1.913a2.172 2.172 0 012.941-.788L18 22.392l.02-2.219a2.173 2.173 0 012.153-2.153l2.22-.02-1.093-1.932a2.172 2.172 0 01.788-2.942zM11.971 20c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 18a6 6 0 010-12v12z" />
    </svg>
  )
}
