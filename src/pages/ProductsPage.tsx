import ProductCard from "../components/ProductCard";
import products from "../data/products"; 

const ProductsPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-40 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
