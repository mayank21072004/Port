import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
// import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"
import Chatbot from "./component/Chatbot/Chatbot"
import Footer from "./component/Footer"
// import chatboticon from "./component/chatboticon/chatboticon"
import chtbot from "./component/pic/chtbot.jpg"
import "./App.css"


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      {/* <Testimonial />
      <Blog /> */}
      <Chatbot />
      <Footer />
      {/* <chatboticon /> */}
      <div className="iconclass">
        <span>
          <a href="#chatbot">
            <img src={chtbot} alt="Profile-pic" className="logo" />
          </a>
        </span>
      </div>
    </>
  )
}

export default App
