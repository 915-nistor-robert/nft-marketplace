import './SignUpPage.scss'
import {signUpImage} from "../../../assets";
import HomeHeader from "../../headers/HomeHeader/HomeHeader";
import {signUpDescription} from "../../../utils/GeneralUtils";
import {useState} from "react";
import BaseButton from "../../buttons/BaseButton/BaseButton";
import {useNavigate} from "react-router-dom";
import PageFooter from "../../footers/PageFooter/PageFooter";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/')

    };
    return <div className={'sign-up-container'}>
        <HomeHeader/>
        <div className={'sign-up-content'}>
            <img className={'sign-up-image'} src={signUpImage} alt={'IMAGE'}/>
            <div className={'sign-up-right-content'}>
                <h1 className={'sign-up-title'}>Create Account</h1>
                <p className={'sign-up-description'}>
                    {signUpDescription}
                </p>
                <form className={'sign-up-form'} onSubmit={handleSubmit}>
                    <input className={'sign-up-input'} type={'text'} name={'username'} placeholder={'Username'}
                           value={formData.username}
                           onChange={handleChange}/>
                    <input className={'sign-up-input'} type={'text'} name={'email'} placeholder={'Email Address'}
                           value={formData.email}
                           onChange={handleChange}/>
                    <input className={'sign-up-input'} type={'password'} name={'password'} placeholder={'Password'}
                           value={formData.password}
                           onChange={handleChange}/>
                    <input className={'sign-up-input'} type={'password'} name={'confirmedPassword'}
                           placeholder={'Confirm Password'} value={formData.confirmedPassword}
                           onChange={handleChange}/>
                </form>
                <div className={'sign-up-confirm-button'}>
                    <BaseButton onClick={handleSubmit} filled={true} text={'Create Account'}
                                disabled={false}></BaseButton>
                </div>
            </div>
        </div>
        <PageFooter/>
    </div>

}