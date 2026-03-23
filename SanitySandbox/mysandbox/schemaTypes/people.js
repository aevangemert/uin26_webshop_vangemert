export const people = {
    name: "people",
    title: "Personer",
    //to ulike versjoner
    //document eller object -> to verdiene som er gyldig som innholdstyper i sanity
    //object -> skal se på utover i kurset
    type: "document",
    fields: [
        {name : "fullname", title: "Fullt navn", type: "string"},
        {name : "image", title: "Bilde", type: "image"}
    ]
}

export default people