import Navbar from './components/Navigation';
import './App.css';

const App = () => {
  // store.dispatch(fetchRockets());
  // store.dispatch(getMissons());
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="Navbar" replace />} />
        <Route path="/myProfile/*" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
};
export default App;
