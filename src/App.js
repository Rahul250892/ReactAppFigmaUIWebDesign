import React from 'react'
import { Footer,Blog,Posibilty,Header,UIUX,Features } from './containers'
import { Article,Brand,CTA,Feat,Navbar, } from './Components'

import './App.css'
import Feature from './Components/feature/Feat'
const App = () => {
  return (
<div className='App' >
<div className='gradient__bg' >
  <Navbar />
  <Header />
</div>
<Brand />
<UIUX />
<Feature/>

<Posibilty />
    <CTA />
    <Blog />
    <Footer />
    
</div>
  )
}

export default App
