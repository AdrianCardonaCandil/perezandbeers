import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/common/Header";
import routes from "./routes/routes";

/**
 * @file App.jsx
 * @description Holds the main application component that sets up routing logic. Defines also the base layout.
 * @author Adrian Cardona Candil
 */

// Mock data for the header component
const header = {
  label: "menu"
}

/**
 * @function Layout
 * @description Main placeholder where the application components will be rendered. Routes will be defined here.
 * @returns {JSX.Element} Layout component.
 */

const Layout = () => {
  return (
    <div className="min-h-screen bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] text-[var(--on-surface-light)] dark:text-[var(--on-surface-dark)] text-sm md:text-base lg:text-lg">
      <Header header={header} />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  )
}

/**
 * @function App
 * @description Main application component. Sets up layout inside the router.
 * @returns {JSX.Element} App component.
 */

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App;