import React from 'react'
import Container from './Components/Container'
import "./Components/photoGallery.css";

const App = () => {
  return (
    <div>
      <h1 className='mainTitle'>Photo Gallery from Pixels API</h1>
      <h3 className='subTitle'>In a time with so much social distance, it feels heartwarming to see people touching each other, sharing a hug, giving and receiving love. </h3>
      <p className='aclaration'>***This web-page was created during the COVID-19's nightmare</p>
      <h4 className='aboutSearch'>That works for me, but maybe you rather contemplate pictures of <span id="keyWords">sweet kittens, wild nature or expensive cars</span>... You can choose how to delight your eyes and bring joy to your soul... </h4>
      <Container />
      <hr />
      <h5 className="footer">This web-page was created by Caro_escala using <a href="https://www.pexels.com/es-es/api/">Pexels API</a></h5>
    </div>
  )
}

export default App

