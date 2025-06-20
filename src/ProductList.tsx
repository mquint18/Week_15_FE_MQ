
import ProductCard from "./ProductCard";

function ProductList() {

    return(
    <>    
    <div>
    <ProductCard product={{name: "Bananas",
        quantity: 6,
        picture: "src/assets/bananas.jpg",
        checked: false}} />
    </div>
    <div>
    <ProductCard product={{ 
        name: "Skippy Peanut Butter",
        quantity: 1,
        picture: "src/assets/skippy.webp",
        checked: false   
    }} />
</div>
<div>
    <ProductCard product={{
        name: 'Ground Chicken',
        quantity: 2,
        picture: "src/assets/chicken.jpg",
        checked: false
        }} />
</div>
<div>
    <ProductCard product={{
        name: 'Cheerios',
        quantity: 3,
        picture: "src/assets/cherios.jpg",
        checked: false
    }} />
    </div>
    
    </>
 
)
    }

    export default ProductList;