import * as React from "react"
import Logo from '../images/logo.svg'
import rr from '../images/rr.svg'

// import './reset.scss'
import './index.scss'

const IndexPage = () => {
  return (
    <main>
      <header>
        <img className="icon" src={rr} alt="Strüktür Icon" />
        <img id="logo" src={Logo} alt="Strüktür Logo" />
      </header>
      <div className="content">
        <p>
          STRÜKTÜR is a Berlin-based association dedicated to forming and expanding the support structures for arts & artists from the geography of Turkey. Its mission lies at the heart of the collective production of migratory and diasporic knowledge and the creation of trans-communal exchange. Through residencies, publications, workshops, and public programs; STRÜKTÜR aims to root, grow, and disperse artistic research and diasporic thinking transcending borders, communities, and generations.
          <br />  <br />
          Our first open call for an artist in residence and future programs will be announced in June 2024.
        </p>
        <p>

          Contact <br />
          <a href="mailto:info@struektuer.org">
            info@struektuer.org
          </a> <br />
     
          Instagram &nbsp;
          <a href="https://www.instagram.com/struektuer/">
            @struektuer
          </a> <br />
        </p>
        <p>
          Founded by <br />
          Bengisu Çağlayan <br />
          Gözde Gazioğlu <br />
          Yelta Köm <br />
          Hatice Marx <br />
          Tuna Ortaylı Kazıcı <br />
          Vivien Tauchmann <br />
          Alper Turan <br />
          Prof. Dr. Füsun Türetken
        </p>
        {/* <p>
          Executive Board <br />
          Prof. Dr. Füsun Türetken <br />
          Gözde Gazioğlu <br />
          Tuna Ortaylı Kazıcı <br />
          Hatice Marx
        </p> */}
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Strüktür Home Page</title>
