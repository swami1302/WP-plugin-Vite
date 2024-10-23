import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let target = document.getElementById("user-main");
if (target) {
    let root=createRoot(target);
    root.render(<App />);
} else {
    setTimeout(() => {
        target = document.getElementById("user-main");
        if (target) {
            let root=createRoot(target);
            root.render(<App />);
        }
    }, 1000)
}
// createRoot(document.getElementById('user-main')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
