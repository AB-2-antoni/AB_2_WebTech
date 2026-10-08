function showInfo(){
    console.log("Hello: Informacja w konsoli")
}

function OnClickLekcja(){
    return(
        <button onClick={showInfo}>
            Pokaz info w konsoli
        </button>
    )
}
export default OnClickLekcja;