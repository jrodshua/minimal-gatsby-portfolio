import React, { useState } from "react"

import Icons, { iconData } from "../icons/icons"
import { Button } from "./styles"

const Table = () => {
  const [showLyft, setShowLyft] = useState(false)
  const [showUber, setShowUber] = useState(false)
  const [showSolar, setShowSolar] = useState(false)

  const { down, right } = iconData

  const rightArrow = (
    <Icons
      iWidth={right.width}
      iHeight={right.height}
      iView={right.viewBox}
      iPath={right.path}
    />
  )

  const downArrow = (
    <Icons
      iWidth={down.width}
      iHeight={down.height}
      iView={down.viewBox}
      iPath={down.path}
    />
  )

  const lyftDetails = (
    <tr>
      <td colSpan={3}>
        <ul>
          <li>
            At the beginning of each bullet point, use an action verb to
            immediately catch the employer’s
          </li>
          <li>
            Remember, how can you add value to the employer who reads this? Use
            examples with numbers
          </li>
          <li>
            Keep your resume quick and to the point. You can use your cover
            letter to expand on areas you
          </li>
        </ul>
      </td>
    </tr>
  )

  const uberDetails = (
    <tr>
      <td colSpan={3}>
        <ul>
          <li>
            At the beginning of each bullet point, use an action verb to
            immediately catch the employer’s
          </li>
          <li>
            Remember, how can you add value to the employer who reads this? Use
            examples with numbers
          </li>
          <li>
            Keep your resume quick and to the point. You can use your cover
            letter to expand on areas you
          </li>
        </ul>
      </td>
    </tr>
  )

  const solarDetails = (
    <tr>
      <td colSpan={3}>
        <ul>
          <li>
            At the beginning of each bullet point, use an action verb to
            immediately catch the employer’s
          </li>
          <li>
            Remember, how can you add value to the employer who reads this? Use
            examples with numbers
          </li>
          <li>
            Keep your resume quick and to the point. You can use your cover
            letter to expand on areas you
          </li>
        </ul>
      </td>
    </tr>
  )

  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>From</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Button onClick={() => setShowLyft(!showLyft)}>
              {showLyft ? downArrow : rightArrow} Lyft
            </Button>
          </td>
          <td>Ops Specialist</td>
          <td>02/2017 - 05/2020</td>
        </tr>
        {showLyft && lyftDetails}
        <tr>
          <td>
            <Button onClick={() => setShowUber(!showUber)}>
              {showUber ? downArrow : rightArrow} Uber
            </Button>
          </td>
          <td>Partnerships Associate</td>
          <td>07/2016 - 02/2017</td>
        </tr>
        {showUber && uberDetails}
        <tr>
          <td>
            <Button onClick={() => setShowSolar(!showSolar)}>
              {showSolar ? downArrow : rightArrow} SolarCity
            </Button>
          </td>
          <td>Sales Specialist</td>
          <td>05/2015 - 07/2016</td>
        </tr>
        {showSolar && solarDetails}
      </tbody>
    </table>
  )
}

export default Table
