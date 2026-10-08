function Product({name, price}){
    return(
        <section className="produkt">
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>{console.log("Wybrano produkt: " + name);}}>
                Pokaż produkt
            </button>

        </section>
    )
}
export default Product;