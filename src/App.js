import "./styles.css";
import { RouterProvider } from "react-router";
import {getAuth} from 'firebase/auth';
import "./App.css";
import { router } from "./Routes/Route/Routes";
import app from "./firebase/firebase.init";



const auth = getAuth(app)

function App() {
  return <div className="App">
  
<RouterProvider router={router}></RouterProvider>
  </div>
}

export default App;
