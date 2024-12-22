import './App.css';
import { useState } from "react";

function App() {
    const [isFirstBg, setIsFirstBg] = useState(true);

    const handleToggleBackground = () => {
        setIsFirstBg((prev) => !prev);
    };

    return (
        <div
            className={`fullscreen ${isFirstBg ? "first-bg" : "second-bg"}`}
        >
            <button onClick={handleToggleBackground} style={{ margin: 20 }}>
                Toggle Background
            </button>
        </div>
    );
}

export default App;
