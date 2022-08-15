import ReactDOM from 'react-dom/client';
import App from './App';
import FakestoreProvider from "./context/FakestoreContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FakestoreProvider>
    <App />
  </FakestoreProvider>
);