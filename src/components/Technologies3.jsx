function Technologies3({name, category, hours, image}) {
    const getImageUrl = (fileName) =>{
        return new URL(`../assets/${fileName}`, import.meta.url).href;
    };

    return (
        <section className="Technologies3">
            <h3>{name}</h3>
            <img src={getImageUrl(image)}  alt={name}/>
            <p>Kategoria: <p className="categoryLabel">{category}</p></p>
            <p>Liczba godzin: {hours}</p>
            
        </section>
    )
}
export default Technologies3;