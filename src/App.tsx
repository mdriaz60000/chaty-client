import { Outlet } from "react-router-dom"

function App() {
  

  return (
    <>
         <div className="flex h-screen w-full flex-col bg-background">
      <Outlet />
      {/* <Toaster position="top-center" /> */}
    </div>
    </>
  )
}

export default App
