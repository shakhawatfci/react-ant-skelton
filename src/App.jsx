// import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
// import registerServiceWorker from './ServiceWorker';

const App = () => {
  // useEffect(() => {
  //   registerServiceWorker();
  // });
  return (
    <>

      <Routes>
        <Route path="/*" element={<PublicLayout />} >
        </Route>
        <Route path="admin/*" element={<AdminLayout />} >
        </Route>
      </Routes>
    </>
  );
};
export default App;
