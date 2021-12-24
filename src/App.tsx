import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthDashboard from './childrenRouting/AuthDashboard';
import NotFound from './containers/NotFound';
import UnAuthDashboard from './childrenRouting/UnAuthDashboard';
import { connect } from 'react-redux';

function App(props: any) {
  //  console.log(props.profile.profileprofileState)
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
const mapStateToProps = (state: any) => ({
  profile: state
});

export default connect(mapStateToProps)(App);
//export default App;
