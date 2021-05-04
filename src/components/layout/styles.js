import styled from "@emotion/styled"

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-flow: row;
  grid-gap: 40px;

  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
    min-width: 370px;
  }
`

// justify-content: flex-start;
export const Main = styled.main`
  height: 100%;
  padding-top: 36px;
  width: 100%;

  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 780px) {
    padding-top: 0;
    align-items: flex-start;
  }
`

//max-width: calc(75% - 64px);
export const Children = styled.div`
  width: 100%;
  max-width: 80%;
  padding-right: 0;
  

  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 0;
    order: 3;    
  }

  img {
    max-width: 90%
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`
