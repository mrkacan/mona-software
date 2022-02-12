import './App.css';
import {motion} from 'framer-motion';

function App() {
    return (
        <div className="App">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 1, 1],
                }}
                transition={{
                    duration: 3,
                    ease: "easeIn",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 0
                }}
            >
                <h1>
                    Under<br/>Construction <br/><br/>Mona Software
                </h1>
            </motion.div>
        </div>
    );
}

export default App;
