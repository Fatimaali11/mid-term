import React from 'react';
// import Cart from './components/Cart/Cart'
import AppDownload  from './components/AppDownload/AppDownload'
import Loginpopup from './components/loginpopup/loginpopup'
import Cart from './components/Cart/Cart';
import PlaceOrder from '../components/PlaceOder/Place.Order';
function App() {
  return (
    <div className="App">
<PlaceOrder/>
 <Cart/>
 <AppDownload/>
 <Loginpopup/>
</div>
  );
}

export default App