import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  // Redirect
} from "react-router-dom";

import { ToastContainer as DefaultToastContainer } from "react-toastify";

// Import Contexts
import { theme, ThemeProvider } from "./context/ThemeProvider";

// Import Utility Components
import SuspenseFallback from "./components/SuspenseFallback";
import ErrorBoundary from "./components/ErrorBoundary";
import NoPage from "./components/UnknownPage";

// Other assets
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

// Import Pages
import Dashboard from "./pages/Dashboard";

const DashboardIndexSection = React.lazy(() =>
  import("./layouts/Dum")
);


const ToastContainer = (props) => (
  <DefaultToastContainer style={{ zIndex: "1900" }} {...props} />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <React.Suspense fallback={<SuspenseFallback />}>
          <Router>
            <Switch>
              {/* DASHBOARD */}
              <Route exact path="/" element={<Dashboard />}>
                <Route index element={<DashboardIndexSection />} />
              </Route>
              <Route path="*" element={<NoPage />} />
            </Switch>
          </Router>
          <ToastContainer />
        </React.Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
