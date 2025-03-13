import { HashRouter, Route, Routes, Navigate } from "react-router"
import Labs from "./Labs"
import Kambaz from "./Kambaz"
import store from "./Kambaz/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz/>}/>
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App
