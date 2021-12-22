import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthDashboard from './childrenRouting/AuthDashboard';
import NotFound from './containers/NotFound';
import UnAuthDashboard from './childrenRouting/UnAuthDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<AuthDashboard />} />
        <Route path="/auth/*" element={<UnAuthDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
