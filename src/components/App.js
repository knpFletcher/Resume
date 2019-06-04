import React from 'react'
import Aside from './Aside/Aside'
import Header from './Header/Header'
import Content from './Content/Content'
import './App.css'

const App = () =>
<>
  <Header />
  <main className="l-main">
    <Aside />
    <Content />
  </main>
</>

export default App