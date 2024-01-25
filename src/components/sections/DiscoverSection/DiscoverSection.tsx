import {discoverSectionDescription} from "../../../utils/GeneralUtils";
import BaseButton from "../../buttons/BaseButton/BaseButton";
import {highlightedNFT, rocketIcon, userPlaceholder} from "../../../assets";
import './DiscoverSection.scss'

export default function DiscoverSection() {
    return <div className={'discover-section-container'}>
        <div className={'discover-section-content'}>
            <div className={'discover-section-content-left'}>
                <h1 className={'discover-section-title'}>Discover Digital Art & Collect NFTs</h1>
                <p className={'discover-section-description'}>{discoverSectionDescription}</p>
                <div className={'get-started-button'}>
                    <BaseButton filled={true} text={'Get started'} icon={rocketIcon} onClick={() => {
                    }} alt={'rocket-icon'}/>
                </div>
                <div className={'discover-statistics-wrapper'}>
                    <div className={'discover-statistics'}>
                        <div className={'discover-statistics-number'}>240k+</div>
                        <div className={'discover-statistics-text'}>Total sales</div>
                    </div>
                    <div className={'discover-statistics'}>
                        <div className={'discover-statistics-number'}>100k+</div>
                        <div className={'discover-statistics-text'}>Auctions</div>
                    </div>
                    <div className={'discover-statistics'}>
                        <div className={'discover-statistics-number'}>240k+</div>
                        <div className={'discover-statistics-text'}>Artists</div>
                    </div>
                </div>
            </div>
            <div className={'discover-section-content-right'}>
                <div className={'highlighted-nft'}>
                    <img className={'highlighted-nft-image'} src={highlightedNFT} alt={'NFT'}/>
                    <div className={'highlighted-nft-description'}>
                        <p className={'highlighted-nft-title'}>Space Walking</p>
                        <div className={'highlighted-nft-user'}>
                            <img src={userPlaceholder} alt={'user'}/>
                            <p>Animakid</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'discover-mobile-bottom'}>
                <div className={'get-started-button'}>
                    <BaseButton filled={true} text={'Get started'} icon={rocketIcon} onClick={() => {
                    }} alt={'rocket-icon'}/>
                </div>
                <div className={'discover-statistics-wrapper'}>
                    <div className={'discover-statistics'}>
                        <div className={'discover-statistics-number'}>240k+</div>
                        <div className={'discover-statistics-text'}>Total sales</div>
                    </div>
                    <div className={'discover-statistics'}>
                        <div className={'discover-statistics-number'}>100k+</div>
                        <div className={'discover-statistics-text'}>Auctions</div>
                    </div>
                    <div className={'discover-statistics'}>
                        <div className={'discover-statistics-number'}>240k+</div>
                        <div className={'discover-statistics-text'}>Artists</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}