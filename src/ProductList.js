import Product from "./Product";

function ProductList(){
    return(
        <div className="productList">
            <Product name="Levis Jeans" price="2000" url="https://th.bing.com/th/id/OIP.QilEwZjrWJwf8JdNHqv8OgHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3"/>
            <Product name="Samsung M51" price="34,000" url="https://th.bing.com/th/id/OIP.ITVjyTlvdWNzSsbHLguo8QHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3"/>
            <Product name="Dell Monitor" price="10,000" url="https://th.bing.com/th/id/OIP.7GUE-cYD3MFGfTjMnnOmEAHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3"/>
        </div>
    )
    
}

export default ProductList;