import React, { Component } from 'react'

import AstroCat from '../images/AstroCat.jpg'
import DinoCat from '../images/DinoCat.png'
import DjCat from '../images/DjCat.jpg'
import JetPackCat from '../images/JetPackCat.png'
import SamuriaCat from '../images/SamuriaCat.png'
import TopGunCat from '../images/TopGunCat.png'

export class OctoCats extends Component {
  render() {
    return (
      <section class="octocats">
        <ul>
          <li>
            <img src={SamuriaCat} alt="" />
            <p>#149: Terracottocat</p>
          </li>
          <li>
            <img src={DjCat} alt="" />
            <p>#137: Vinyltocat</p>
          </li>
          <li>
            <img src={DinoCat} alt="" />
            <p>#130: Dinotocat</p>
          </li>
          <li>
            <img src={AstroCat} alt="" />
            <p>#127: McEfeeline</p>
          </li>
          <li>
            <img src={SamuriaCat} alt="" />
            <p>#149: Terracottocat</p>
          </li>
          <li>
            <img src={DjCat} alt="" />
            <p>#137: Vinyltocat</p>
          </li>
          <li>
            <img src={DinoCat} alt="" />
            <p>#130: Dinotocat</p>
          </li>
          <li>
            <img src={AstroCat} alt="" />
            <p>#127: McEfeeline</p>
          </li>
          <li>
            <img src={SamuriaCat} alt="" />
            <p>#149: Terracottocat</p>
          </li>
          <li>
            <img src={DjCat} alt="" />
            <p>#137: Vinyltocat</p>
          </li>
          <li>
            <img src={DinoCat} alt="" />
            <p>#130: Dinotocat</p>
          </li>
          <li>
            <img src={AstroCat} alt="" />
            <p>#127: McEfeeline</p>
          </li>
        </ul>
      </section>
    )
  }
}

export default OctoCats
