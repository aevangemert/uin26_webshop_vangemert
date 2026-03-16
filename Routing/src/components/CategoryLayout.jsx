import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function CategoryLayout() {

    const [apiData, setApiData] = useState([])

    const [apiEndpoint, setApiEndPoint] = useState()

    const defaultApiUrl = 'https://pokeapi.co/api/v2/'

    //asynkron funksjon, venter med å kjøre den funksjonen som ikke er helt lasta slik at siden ikke kræsjer
    //unngår mellomrom
    //await må være med overalt når man jobber med API
    const getData = async () => {
        //await = vent på å få data
        const response = await fetch(defaultApiUrl)
        const data = await response.json()
        const {type, pokemon, item} = data

        setApiData({type, pokemon, item})
    }

    console.log("Sjekk", apiData)
    console.log("Denne kommer fra Layout", apiEndpoint)

    //blokk-parantes skal stå tom, skal kjøres når??
    useEffect(() => {
        getData()
    }, [])

    return (
        //fragments er slayy!! lager ikke en ekstra node (f.eks pakker ikke <div> rundt)
        <>
            <nav className="main-nav">
                {Object.keys(apiData)?.map((item) => <Link key={item+'-slay'} to={item} onClick={()=> setApiEndPoint(defaultApiUrl + item)}>{item}</Link>)}
                {/* {apiData?.map((item) => <Link key={item.name + '-xt'} to={item.name} onClick={() => setApiEndPoint(item.url)}>{item.name}</Link>)} */}
            </nav>
            {/*
            på outlet kan jeg si "på deg skal du få tilgang til data"
            alt innenfor denne har tilgang til det..
            Outlet er plassen hvor child-routes rendres.
            */}
            <Outlet context={{apiEndpoint, defaultApiUrl, setApiEndPoint}} />
        </>
    )
}