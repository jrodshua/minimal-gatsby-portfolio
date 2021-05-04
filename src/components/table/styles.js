import styled from "@emotion/styled"

export const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  outline: none;

  @media (max-width: 520px) {
    :hover {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.title};
    }
  }

  svg {
    width: 10px;
    height: 10px;
    margin-right: 10px;

    @media (max-width: 520px) {
      display: none;
    }
  }
`
