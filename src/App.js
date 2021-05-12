import Routes from './pages/Routes';
import SearchProvider from './context/Search';
import './App.css';

function App() {
  return (
    <SearchProvider>
        <Routes />
    </SearchProvider>
  );
}

export default App;
