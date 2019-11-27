import React from 'react';
import { Provider } from "react-redux"
import store from './store'
// import Cursos from './components/cursos'
import Routes from "./routes";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
