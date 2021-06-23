import React from "react";

import { Provider } from "react-redux"
import store from "./redux/store/"
import Page from "./Page"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page />
      </div>
    </Provider>
  );
}
export default App;
