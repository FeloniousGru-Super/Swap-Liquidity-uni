import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Swap from './pages/Swap';
import Liquidity from './pages/Liquidity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/swap" element={<Swap />} />
        <Route path="/liquidity" element={<Liquidity />} />
        <Route path="*" element={<Swap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
