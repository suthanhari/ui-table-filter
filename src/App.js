import Create from './component/Create';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateForm from './component/CreateForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/create' element={<CreateForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
