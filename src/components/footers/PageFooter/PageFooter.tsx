import './PageFooter.scss'
import {discordLogo, instagramLogo, marketplaceLogo, twitterLogo, youtubeLogo} from "../../../assets";
import BaseButton from "../../buttons/BaseButton/BaseButton";

export default function PageFooter() {
    return <div className={'page-footer-container'}>
        <div className={'page-footer-content'}>
            <div className={'page-footer-marketplace'}>
                <img className={'page-footer-marketplace-logo'} src={marketplaceLogo} alt={'LOGO'}/>
                <p className={'page-footer-marketplace-description'}>
                    NFT marketplace UI created with Anima for Figma.</p>
                <p className={'page-footer-join-text'}>Join out community</p>
                <div className={'page-footer-socials'}>
                    <img className={'page-footer-social-icon'} src={discordLogo} alt={'DISCORD'}/>
                    <img className={'page-footer-social-icon'} src={youtubeLogo} alt={'YOUTUBE'}/>
                    <img className={'page-footer-social-icon'} src={twitterLogo} alt={'TWITTER'}/>
                    <img className={'page-footer-social-icon'} src={instagramLogo} alt={'INSTAGRAM'}/>
                </div>
            </div>
            <div className={'page-footer-explore'}>
                <p className={'page-footer-explore-title'}>Explore</p>
                <p className={'page-footer-explore-text'}>Marketplace</p>
                <p className={'page-footer-explore-text'}>Rankings</p>
                <p className={'page-footer-explore-text'}>Connect a wallet</p>
            </div>
            <div className={'page-footer-join'}>
                <p className={'page-footer-join-title'}>Join Our Weekly Digest</p>
                <p className={'page-footer-join-text'}>Get exclusive promotions & updates straight to your inbox.</p>
                <div className={'page-footer-join-input'}>
                    <input className={'page-footer-join-input-text'} type={'text'}
                           placeholder={'Enter your email here'}/>
                    <div className={'page-footer-join-input-button'}>
                        <BaseButton text={'Subscribe'} filled={true} />
                    </div>
                </div>
            </div>

        </div>
    </div>
}