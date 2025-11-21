import ProductItem from "./component/product-item"
import './style.css'


function ProductList({name, city, listOfProducts}){

    const flag = true;

    const renderTextBlock=(getFlag)=>{
        return getFlag?<h4>Name is {name}, he/she is belongs to {city}</h4>:<h4>Hello World!!!</h4>
    }
    return(
        <div>
            <h3 className="title">Ecommerce Project</h3>
            {renderTextBlock}
            {/* <ProductItem /> */}
            <ul>
                {
                    listOfProducts.map((item,i)=>
                    <ProductItem singleProductItem = {item} key={i} />
                )}
            </ul>
        </div>
    )
}

export default ProductList