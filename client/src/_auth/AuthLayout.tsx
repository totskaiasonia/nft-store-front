import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
    const isAuthanticated = false;
  return (
    <>
    {
        isAuthanticated
        ?
        <Navigate to="/"/>
        :
        <>
            <section>
                <Outlet/>
            </section>
        </>
    }
    </>
  )
}

export default AuthLayout