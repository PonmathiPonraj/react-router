import { Route, Switch } from 'react-router-dom';
import Welcome from './page/Welcome';
import Products from './page/Products';
import MainHeader from './Components/MainHeader';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route Path="/welcome">
            <Welcome />
          </Route>
          <Route Path="/products" exact>
            <Products />
          </Route>
          <Route Path='/products/:productID/'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//our-domain.com/welcome => Welcome Component
//our-domain.com/products => Products Component
//our-domain.com/product-detail/a-book