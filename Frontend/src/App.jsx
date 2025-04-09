import React from "react";
import Layout from "./Layout/Layout";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;
