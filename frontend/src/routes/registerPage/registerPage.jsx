import { SignUp } from '@clerk/clerk-react';
import './registerPage.css'

const RegisterPage = () => {
    return (
    <div className='registerPage'>
        <SignUp path='/register' signInUrl='login'/>
        </div>
    )
}
export default RegisterPage;