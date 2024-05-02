import "./App.css";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactWithFilter from './wrapperComponents/ContactWithFilter'
import AddContactWithNav from "./wrapperComponents/AddContactWithNav";
const router=createBrowserRouter([
  {
      path:'/',
      element:<ContactWithFilter/>
  },{
      path:'/all-contacts',
      element:<ContactWithFilter/>
  },{
      path:'/add-contact',
      element:<AddContactWithNav/>
  }
])
function App() {
  return (
      <div className="app-render-class">
        <RouterProvider router={router}> </RouterProvider>
      </div>
  );
}

export default App;
// {
//<AddContact />
// }
