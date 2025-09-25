import { ProductProps } from "@/type";
import Image from "next/image";



const ProductCard = ({ product }: {product:ProductProps}) => {
    console.log(product)

    const { productName, price, image, brand, category} = product
  return (
    <div className="  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <div className="relative w-full h-48">
    <Image
      src={image}
      alt={productName}
      fill
      className="object-cover"
    />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
    <p className="text-sm text-gray-500">{brand} • {category}</p>
    <p className="text-xl font-bold text-blue-600 mt-2">৳ {price}</p>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
      Add to Cart
    </button>
  </div>
</div>

  );
};

export default ProductCard;
