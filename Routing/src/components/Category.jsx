import { useOutletContext, useParams } from "react-router-dom"
import { use, useEffect, useState } from "react"

export default function Category() {

    const {apiEndPoint, defaultApiUrl} = useOutletContext()

    const [apiData, setApiData] = useState([])
    const [spritesImg, setSpritesImg] = useState([])
    const { slug } = useParams()

    console.log("Denne kommer fra Category", apiEndPoint)

    const getSingleData = async () => {
        //hvis apiEndPoint finnes, bruk url i apiEndPoit, hvis det ikke finns skal vi bruke defaultApiUrl + slug
        const response = await fetch(apiEndPoint ? apiEndPoint : defaultApiUrl+slug)
        const data = await response.json()

        // const {type, pokemon} = data

        setApiData({data})
         console.log(apiData)
    }

    console.log("Cat", apiData, apiEndPoint)
    console.log("Key values:", Object.keys(apiData?.sprites))

    useEffect(() => {
        getSingleData()
        setSpritesImg(Object.keys(apiData?.sprites))
    }, [slug, apiEndPoint])

    console.log("Minebilder", spritesImg)

    //får ikke mappa igjennom et objekt, må peke til hva vi skal hente
    //ikke bruk JS til å endre på utseende, gjør det med css (sass?)
    return <main>
        <h1>{apiData?.name}</h1>
        <section>
            <h2>Bilder</h2>
             {/*hvordan kan man lage img dynamisk slik at man ikke må skrive samme linja mange mange ganger?*/}
            <img src={apiData?.sprites?.front_default} alt={apiData?.name} />
        </section>
    </main>
}