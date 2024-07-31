import React, { Suspense } from "react";
import "./index.scss";

// ** Router Import
import Router from "./router/Router";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
