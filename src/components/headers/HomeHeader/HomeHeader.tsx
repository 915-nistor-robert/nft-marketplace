import {burgerMenuIcon, marketplaceLogo, userIcon} from "../../../assets";
import BaseButton from "../../buttons/BaseButton/BaseButton"
import './HomeHeader.scss'
import {useNavigate} from "react-router-dom";

export default function HomeHeader() {
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/sign-up');
    }

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <div className={'header-container'}>
            <div className={'header-logo'} onClick={handleLogoClick}>
                <img src={marketplaceLogo} alt={'LOGO'}/>
            </div>
            <div className={'header-links'}>
                <a href={'#'}>NFT Marketplace</a>
                <a href={'#'}>Rankings</a>
                <a href={'#'}>Connect a wallet</a>
                <div className={'sign-up-button'}>
                    <BaseButton text={'Sign up'} disabled={false} filled={true} icon={userIcon} onClick={handleSignUp}/>
                </div>
            </div>
            <div className={'header-burger-menu'}>
                <img src={burgerMenuIcon} alt={'MENU'}/>
            </div>
        </div>
    )
}