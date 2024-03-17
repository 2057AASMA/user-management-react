import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./page/theme/Layout";
import UserManagement from "./page/UserManagement";
import Contact from "./page/Contact";
import FAQ from "./page/FAQ";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/user-management" element={<UserManagement/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
