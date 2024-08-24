import { Home } from "./pages/Home";
import { LeftSideBar } from "./components/LeftSideBar";
import { Chat } from "./pages/Chat";
import { NewContacts } from "./components/NewContacts";
import { ErrorPage } from "./pages/ErrorPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/**
 * The main application component that sets up routing and provides Redux store context.
 *
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="bg-container">
        <header>
          <h1>Chat App</h1>
        </header>
        <main>
          <div className="main-container">
            {/* providing the store here */}
            <Provider store={store}>
              {/* new contacts to be added */}
              <NewContacts />
              {/* Left6 nav for contacts list */}
              <div className="left-container">
                <LeftSideBar />
              </div>
              {/* Right content (Home, Chat, Error pages) with routing feature */}
              <div className="right-container">
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={<Home />}
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path="/chat"
                    element={<Chat />}
                    errorElement={<ErrorPage />}
                  />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </div>
            </Provider>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
