import App from "@/App";
import { AuthPage } from "@/pages/authpage/AuthPage";
import { ChatPage } from "@/pages/chatPage/ChatPages";
import { NotFoundPage } from "@/pages/notFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
         children: [
      {
        path: "/",
        element: <ChatPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    }
])

export default router