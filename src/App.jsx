import { RouterProvider } from "react-router-dom"
import routes from "./Routers/Router"


function App() {

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
