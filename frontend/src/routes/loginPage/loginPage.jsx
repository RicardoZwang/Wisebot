import { SignIn } from '@clerk/clerk-react';
import './loginPage.css'

const LoginPage = () => {
    return (
    <div className='loginPage'>
        <SignIn 
        path='/login' 
        signUpUrl='/register' 
        forceRedirectUrl="/dashboard"
        />
    </div>
    )
}
export default LoginPage;