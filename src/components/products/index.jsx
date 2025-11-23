import { useEffect, useState } from "react"
import ProductItem from "./component/product-item"
import './style.css'


const initialState = false

function ProductList({name, city, listOfProducts}){

    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0)
    const [changeStyle, setChangeStyle] = useState(false)
    const handleToggleText = ()=>{
        setFlag(!flag)
    }

    useEffect(()=>{
        console.log('Load only once')
    }, [])//this will only run on page load once

    useEffect(()=>{
        // console.log("Count Changes")
        if(count===10) setChangeStyle(true)
    }, [count])

    console.log(changeStyle)

    const handleIncreaseCount = ()=>{
        setCount(count + 1)
    }

    return(
        <div>
            <h3 className="title">Ecommerce Project</h3>
            <button  onClick={handleToggleText}>Toggle Text</button>
            {/* {renderTextBlock} */}
            {/* <ProductItem /> */}

            {
                flag?<h4>{name} and {city}</h4>: <h4>Hello</h4>
            }

            <div>
                <button style={{backgroundColor: changeStyle? 'black': 'white', color: changeStyle? 'white' : 'black'}} onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count is {count}</p>
            </div>
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