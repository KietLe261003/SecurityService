import "./Assests/lib/flaticon/font/flaticon.css";
import "./Assests/lib/owlcarousel/assets/owl.carousel.min.css";
import "./Assests/css/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import { clientRoute } from "./Routes/ClientRoute";
import NotFoundPage from "./Page/404Page/NotFoundPage";
function App() {
  return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {clientRoute.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element></route.element>}
              />
            );
          })}
        </Route>
        <Route path="/*" element={<NotFoundPage></NotFoundPage>}>

        </Route>
      </Routes>
  );
}

export default App;
