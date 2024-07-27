import './App.css'
import {Routes, Route} from 'react-router-dom';
import { Good, Home, Store } from './_root/pages';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import {
  Header,
  Footer
} from './sections';
import { useEffect } from 'react';
import { config } from './setup';

function App() {

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', config.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', config.secondaryColor);

    document.documentElement.style.setProperty('--gradient-1-color', config.gradient_color_1);
    document.documentElement.style.setProperty('--gradient-2-color', config.gradient_color_2);
    document.documentElement.style.setProperty('--gradient-3-color', config.gradient_color_3);

    document.documentElement.style.setProperty('--search_gradient-1-color', config.search_gradient_color_1);
    document.documentElement.style.setProperty('--search_gradient-2-color', config.search_gradient_color_2);
    document.documentElement.style.setProperty('--search_gradient-3-color', config.search_gradient_color_3);
    
    document.documentElement.style.setProperty('--stepper_icon_gradient-color_1', config.stepper_icon_gradient_color_1);
    document.documentElement.style.setProperty('--stepper_icon_gradient-color_2', config.stepper_icon_gradient_color_2);
    document.documentElement.style.setProperty('--stepper_icon-color', config.stepper_icon_color);
  }, []);
  return (
    <>
      <Header/>
      <main className='main'>
        <Routes>
          <Route element={<AuthLayout/>}>
            <Route path='/sign-in' element={<SignInForm/>} />
            <Route path='/sign-up' element={<SignUpForm/>} />
          </Route>

          <Route element={<RootLayout/>}>
            <Route index element={<Home/>} />
            <Route path='/store/:category' element={<Store/>}/>
            <Route path='/goods/:nftId' element={<Good/>}/>
          </Route>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
