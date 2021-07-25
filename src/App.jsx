import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";

const App = () => {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div>
        <switch>
          <Route exact path="/">
            <Products products={products} />
          </Route>
        </switch>
      </div>
    </Router>
  );
};

export default App;