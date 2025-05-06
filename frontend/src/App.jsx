import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";

/**
 * @file src/App.jsx
 * @description Holds the logic for the app routing system and defines the main layout of the web site.
 * @author Adrian Cardona Candil
 */

/**
 * @function Layout
 * @description Application layout component. Defines the scaffold of the application placing header,
 * main content and footer.
 * @returns {JSX.Element} Layout component.
 */
const Layout = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

/**
 * @function App
 * @description Main component of the application. Sets up routing system and layout.
 * @returns {JSX.Element} App main component.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
