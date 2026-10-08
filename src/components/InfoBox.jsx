function InfoBox ({name}){
    return(
        <section className="InfoBox">
            <p>{name}</p>
            <button onClick={()=>{console.log("Kliknięto technolgie: " + name);}}>
                Pokaż technologie
            </button>
        </section>
    )
}
export default InfoBox;