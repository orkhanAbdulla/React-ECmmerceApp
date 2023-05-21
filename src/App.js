import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { AppRoute } from "./routes/AppRoute";
function App() {
  return (
    <Routes>
      {publicRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={<AppRoute {...route} isAuthProtected={false} />}
        />
      ))}
      {privateRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={<AppRoute {...route} isAuthProtected={true} />}
        />
      ))}
    </Routes>
  );
}

export default App;
