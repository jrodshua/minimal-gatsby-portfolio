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
            Program owner for both NV Express Drive & Driver Advisory Council
          </li>
          <li>
            Responsible for leading a team of 9 associates, across 3 remote
            sites
          </li>
          <li>
            Oversaw all rental vehicle/driver ops & Hertz/Pep Boys partnerships
          </li>
          <li>
            Developed initiatives to foster growth, team culture and streamline
            processes
          </li>
        </ul>
      </td>
    </tr>
  )

  const uberDetails = (
    <tr>
      <td colSpan={3}>
        <ul>
          <li>Helped launch Uber Eats platform in Las Vegas, NV</li>
          <li>Responsible for restaurant ops/accounts & new partnerships</li>
          <li>
            Individually acquired 35% of all accounts available on platform at
            launch
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
            Design pv systems, analyze energy data, and provide video
            consultations
          </li>
          <li>
            Achieved top 3 rank as an advisor, resulting in a promotion to
            specialist
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
