function Book({ title, author }) {
    return (
        <section className="book">
            <p>{title}</p>
            <p>Autor:{author}</p>
        </section>
    )    
}
export default Book;