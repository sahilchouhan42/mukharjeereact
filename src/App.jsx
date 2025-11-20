import { FunctionalComponent } from "./components/FunctionalComponent"
import ProductList from "./components/products"
const dummyProductData = ['Product 1', 'Product 2', 'Product 3', 'Product 4']


function App() {

  return (
    <>
    {/* <FunctionalComponent /> */}
    <ProductList listOfProducts={dummyProductData} name='sangam' city='delhi' />
    </>
  )
}

export default App
