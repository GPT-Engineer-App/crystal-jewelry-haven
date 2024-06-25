import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Bracelets from "./pages/Bracelets.jsx";
import Jewelry from "./pages/Jewelry.jsx";
import CleansingTools from "./pages/CleansingTools.jsx";
import Candles from "./pages/Candles.jsx";
import Apparel from "./pages/Apparel.jsx";
import Subscription from "./pages/Subscription.jsx";
import Cosmetics from "./pages/Cosmetics.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/cleansing-tools" element={<CleansingTools />} />
        <Route path="/candles" element={<Candles />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
      </Routes>
    </Router>
  );
}

export default App;
