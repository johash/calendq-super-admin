import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="text-xl font-bold">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
