import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/layout.scss'
import './App.css'
import "./style/todocard.scss"
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'



function App() {
  /*
  hva er meningen med useState()? denne kommer til å bli brukt masse,
  vær også obs på hva som er inni useState slik at det blir mappet riktig
  */

  const todoItems = [
    {
      id: 0,
      title: "Gå på butta",
      content: "Kjøpe databrus på tilbud"
    },
    {
      id: 1,
      title: "Fullføre arbeidskrav 1 i databasesystemer",
      content: "Gå igjennom quizen og gjør ferdig langsvar om normalisering og ER-modeller"
    },
    {
      id: 2,
      title: "Kjøpe hundeskål til bikkja",
      content: "Uriah treng slow-feeding skål fordi ho sluke maten sin"
    }
  ]

  const [todoList, setTodoList] = useState(todoItems)
  const [todo, setTodo] = useState()

  /*
      dette er en liste med todo-objekter.
      Hvert objekt representerer én oppgave og inneholder:
      - id: unik identifikator (viktig når man renderer lister i React
      - title: kort tittel på oppgaven
      - content: mer detaljert beskrivelse
      
      vi bruker en array for å enkelt kunne jobbe med flere todos.
    */

  
  return (
    <main>
      <h1>Todo app</h1>
      {/* 
        her bruker vi Todos-komponentet.
        Dette komponentet har ansvar for å hente inn og vise
        alle enkeltstående todo-elementer, slik at App-komponentet
        holder seg enkel og oversiktlig.
      */}
     {/*den gule blir lest og tolket som en funksjon, dette er state funksjonen*/}
     {/*GETTER/SETTER*/}
      <AddToDo todo={todo} setTodo={setTodo} setTodoList={setTodoList}/>
      <Todos todoItems={todoList} setTodoList={setTodoList}/>
    </main>
  )
}

export default App
