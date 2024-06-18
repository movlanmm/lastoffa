import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import "./assets/css/plugins/flaticon.css";
import "./assets/css/plugins/swiper.min.css";
import "./assets/css/plugins/jquery.fancybox.css";
import "./assets/css/keenicons/duotone/style.css"
import "./assets/css/keenicons/outline/style.css"
import "./assets/css/keenicons/solid/style.css"
import { RouterProvider } from "react-router";
import { router } from "./utils/router.tsx";
import "swiper/css";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </>
);
