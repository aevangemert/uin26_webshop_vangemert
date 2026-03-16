import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {

  const titles = ["Kategorier", "Om oss", "Produkter"]

  return (
    // React krever bruk av <> </> rundt
    <main>

      {titles.map((item, i)=> <Title key={i} title={item} />)}
      <h2>Dette er kjempegøy!</h2>
    </main>
  
  )
}

export default App
