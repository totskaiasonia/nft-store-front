import './App.css'
import {Routes, Route} from 'react-router-dom';
import { Home, Store } from './_root/pages';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import {
  Header,
  Footer
} from './sections';

function App() {
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
            <Route path='/store' element={<Store/>}/>
          </Route>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
