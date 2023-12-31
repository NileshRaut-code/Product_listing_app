import logo from './logo.svg';
import './App.css';
import Body from './Comp/Body';
import Header from './Comp/Header';
import Footer from './Comp/Footer';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './utils/store.js';


function App() {

 

  return (

    
   
    <Provider store={store}>
     
     <Header/>
     
      
       <Outlet/>
       <Footer/>
     </Provider>
    
  );
}

export default App;
