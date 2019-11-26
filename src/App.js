import React from 'react';
import { Provider } from "react-redux"
import store from './store'
import Cursos from './components/Cursos'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cursos />
      </div>
    </Provider>
  );
}

export default App;
