import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import About from './Comp/About';
import Header from './Comp/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter, json } from 'react-router-dom';
import Body from './Comp/Body';
import MockData from './utils/MockData.json'
global.fetch=jest.fn(()=>{
  return Promise.resolve(()=>
 { json:()=>Promise.resolve(MockData)})

});

test('renders learn react link', () => {
  render(
 <BrowserRouter>
  <Provider store={store}>
    <Header />
    <Body/>
  </Provider>
 </BrowserRouter>
  );

  const btn=screen.getByRole("button",{name:"+"});
  //const btn=screen.getByText("Login") //always used above
  fireEvent.click(btn);


  expect(btn).toBeInTheDocument()
  
});
