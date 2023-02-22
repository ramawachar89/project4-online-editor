import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Home from './component/home/home';
import DataProvider from './component/data/context';
function App() {
  return (
    <>
 <DataProvider>
 <Home/>
 </DataProvider>
    
   
  
    </>
  );
}

export default App;
