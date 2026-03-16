import { Link, useOutletContext, useParams } from "react-router-dom"
import CategoryCard from "./CategoryCard"
import { useState, useEffect } from "react"

export default function Categories() {
    const { slug } = useParams()
    const { apiEndPoint, defaultApiUrl } = useOutletContext()
    const [apiData, setApiData] = useState()

    const getData = async () => {
        //hvis apiEndPoint finnes, bruk url i apiEndPoit, hvis det ikke finns skal vi bruke defaultApiUrl + slug
        const response = await fetch(apiEndPoint ? apiEndPoint : defaultApiUrl + slug)
        const data = await response.json()

        setApiData(data.results)
    }

    /*
    - jeg ønsker ny path som tar seg av denne håndteringen,
    - hvordan ville dere gått fram? hvordan vil jeg flytte på ting?
    - hvordan henger ting sammen? 
    */
    useEffect(() => {
        getData()
    }, [slug])

    return (
        <main>
            <h1>{slug}</h1>
            {apiData?.map((item) => <CategoryCard key={item?.name + 'xt'} name={item?.name} url={item.url}/>)}
        </main>

    )
}