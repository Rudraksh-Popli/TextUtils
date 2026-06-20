import "./App.css";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (alertMessage, alertType) => {
        setAlert({
            message: alertMessage,
            type: alertType
        })
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }
    const toggleDarkMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "black";
        }
        else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };
    return (
        <>
            <Router>
                <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleDarkMode={toggleDarkMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route exact path="/about" element={<About mode={mode} />} />
                        <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Uppercase to Lowercase, Lowercase to Uppercase, Copy Manipulated Text" mode={mode} showAlert={showAlert} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
