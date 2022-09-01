import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="text-xl font-bold">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
