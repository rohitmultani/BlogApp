
import './App.css';
import {Fragment} from 'react'
import { 
  Routes,
  Route,
} from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from './store/Data';
import Home from './pages/Home';
import Learn from './pages/Learn';
import { Provider } from 'react-redux';
import store from './Utils/Store';
function App() {
  return (
    <Fragment>
       <Provider store={store}>
      
    <Routes>
    {/* <Home/> */}
    <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Learn />} />
      </Routes>

    </Provider>
    </Fragment>
  )
    }

export default App;
