import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddExpense from "./pages/AddExpense.jsx";
import AddSaving from "./pages/AddSaving.jsx";
import AddInvestment from "./pages/AddInvestment.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/add-saving" element={<AddSaving />} />
        <Route path="/add-investment" element={<AddInvestment />} />
      </Routes>
    </Router>
  );
}

export default App;
