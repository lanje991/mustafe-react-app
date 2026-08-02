import "./App.css";
import Clicker from "./components/Clicker";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Inputter from "./components/Inputter";
import Notification from "./components/Notification";
import ThemeToggle from "./components/themeSwitcher";
import Welcome from "./components/WelcomeMessage";


function App() {
  return (
    <>
      <ThemeToggle />
      <Greeting name="Mohamed" surname="Abdirahman" />

      <Header />
      <Dashboard isLoggedIn={true} />

      <Notification hasNewMessages ={true}/>
      <Counter />
      <Clicker />
      <Inputter />
      <Welcome />
    </>
  );
}

export default App;
