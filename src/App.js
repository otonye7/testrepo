import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.component';
import CreateForm from './components/create-form/create-form.component';
import Events from './components/events/events.component';

function App() {
  return (
    <div className="App">
        <Routes>
           <Route  path={'/'} exact={true}  element={<Home />} /> 
           <Route  path={'/create'} exact={true}  element={<CreateForm />} /> 
           <Route  path={'/events'} exact={true}  element={<Events />} /> 
      </Routes>
    </div>
  );
}

export default App;
