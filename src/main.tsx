import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// redux 연결
import { Provider } from "react-redux";
import { store } from "./redux/config/configStore.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
        <App />
    </Provider>
  </StrictMode>
)
