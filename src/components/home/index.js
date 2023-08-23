import React from 'react'
import "./home.css";
import Body from "../body"
import Header from "../header"
import Footer from "../footer"

function Home() {
  return <div className='home'>
      <div>
        <Header/>
      </div>

      <div>
        <Body/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
}

export default Home