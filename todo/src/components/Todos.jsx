import Todo from "./Todo";

/*
  todos-komponenten har ansvar for å håndtere
  og vise en samling med todo-oppgaver.
*/
export default function Todos({todoItems, setTodoList}){

    return (
        <section className="flex-r">
            <h2>Todos</h2>
            {/*
              her renderer vi Todo-komponenten.
              tanken er at Todo-komponenten skal brukes til
              å vise én enkelt todo.
              
              senere kan vi bruke todoItems-arrayet sammen
              med map() for å sende data til Todo-komponenten
              via props og vise alle oppgavene dynamisk.
            */}

            {/*
            viktig å legge med key hver gang vi mapper
            men hvorfor? = den kjører ikke uten
            */}


            {todoItems.map((item) => <Todo key={item.id} title={item.title}
            content={item.content} id={item.id} setTodoList={setTodoList}/>)}
        </section>
    )
}