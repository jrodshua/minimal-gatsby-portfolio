/* @jsx jsx */
import { css, jsx } from "@emotion/react"

export default function Overlay({ isMenuOpen, ...rest }) {
  return (
    <div
      css={css`
        ::after {
          content: "";
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 999;
          display: ${isMenuOpen ? `block` : `none`};
        }
      `}
      aria-label="Close menu"
      {...rest}
    />
  )
}
