import Card from "./components/shared/Card";
import { products } from "./products";

function App() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold">Featured Products</h1>
      <hr className="border-1 my-4 w-20 border-sky-300" />
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product, i) => {
          return (
            <Card
              key={i}
              image={product.image}
              name={product.name}
              category={product.name}
              previousPrice={product.previousPrice}
              currentPrice={product.currentPrice}
              colors={product.colors}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
