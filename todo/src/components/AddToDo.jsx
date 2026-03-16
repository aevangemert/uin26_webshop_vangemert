import "../style/form.scss"
export default function AddToDo({todo, setTodo, setTodoList}) {
    /*
    arrow-function
    anonym funksjon: noe vi kan brukere senere på f.eks knappetrykk for
    å passe på at funksjoner som ligger på andre knapper ikke skal starte
    med en gang, men skal aktiveres når man trykker på selve knappen
    */
    const handleChange = (e) => {
        const { name, value } = e.target
        //prev = previous -> tar med det man har hatt tidligere 
        /* 
        definerer prev, innebygd variabel i react, det tidligere av verdi,
        kan være tall, strinverdi, objekt, array, kan være hva som helst.
        starter opp første gang en pre count som begynner å telle, husker det tidligere tallet,
        men pluss på 1. staten oppdateres hver gang, husker tidligere verdi man gjør endringer
        på det som ligger i staten vår 
        den husker alt umiddelbart!
          */
        setTodo((prev) => ({ ...prev, [name]: value }))
        // setTodo(e.target.value)
        console.log(e.target.value)
        console.log({ [name]: value })
        console.log("Todo state", todo)

    }

    const handleClick = (e) => {
        //dette eventet (preventDefault) forhindrer at det refreshes
        e.preventDefault()
        const uniqueID = crypto.randomUUID()
        setTodoList((prev) => ([...prev, {id:uniqueID,...todo}]))
        console.log(todo)
    }

    return (
        <form className="todoform" onSubmit={handleClick}>
            <label htmlFor="todotitle">Todo tittel</label>
            <input name="title" type="text" id="todotitle" placeholder="Dra på butikken" onChange={handleChange} />
            <label htmlFor="todocontent">Beskrivelse:</label>
            <textarea name="content" id="todocontent" onChange={handleChange}></textarea>
            <button>Make todo</button>
        </form>
    )
}