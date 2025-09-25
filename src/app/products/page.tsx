
import ProductCard from "@/components/ProductCard";
import { ProductProps } from "@/type";

const ProductPage = async () => {
    const res = await fetch('http://localhost:5000/products', {
      cache: 'no-store'
    })
    const pruducts = await res.json();
 


    return (
        <div>
          <h1> All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {pruducts.map((product:ProductProps) => (
        <ProductCard key={product.id} 
        product={product}
        />
      ))}
    </div>
        </div>
    );
};

export default ProductPage;