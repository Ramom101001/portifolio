import React from 'react'
import "./home.css";
import Body from "../../components/body"
import Header from "../../components/header"
import Footer from "../../components/footer"

function Home() {
  return <div className='home'>
        <Header/>
        <Body/>
        <Footer/>
    </div>
}

export default Home