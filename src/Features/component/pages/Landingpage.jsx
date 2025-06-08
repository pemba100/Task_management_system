import React from 'react'
import Home from '../Home'
import Features from '../Features'
import Contact from '../Contact'

const landingpage = () => {
  return (
    <>
      <Home/>
      <section id='features'>  <Features/> </section>
        <section id='contact'><Contact/> </section>

    </>
  )
}

export default landingpage
