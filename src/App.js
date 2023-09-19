import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route Path="/welcome">
          <Welcome />
        </Route>
        <Route Path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;

//our-domain.com/welcome => Welcome Component
//our-domain.com/products => Products Component