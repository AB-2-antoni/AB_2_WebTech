function Technology({ name, category, hours }) {
    return (
        <section className="Technology">
            <p>Nazwa: {name}</p>
            <p>Kategoria: {category}</p>
            <p>Godziny: {hours}</p>
        </section>
    )
}
export default Technology;