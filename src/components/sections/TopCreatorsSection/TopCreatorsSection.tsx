import './TopCreatorsSection.scss'
import BaseButton from "../../buttons/BaseButton/BaseButton";
import {purpleRocketIcon} from "../../../assets";
import {TOP_CREATORS} from "../../../utils/GeneralUtils";
import TopCreator from "../../elements/TopCreator/TopCreator";
import {useEffect, useState} from "react";

export default function TopCreatorsSection() {
    const [visibleCreators, setVisibleCreators] = useState(12);

    const handleResize = () => {
        const width = window.innerWidth;

        if (width > 1281) {
            setVisibleCreators(12);
        } else if (width <= 1281 && width > 768) {
            setVisibleCreators(6);
        } else {
            setVisibleCreators(5);
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return <div className={'top-creators-section'}>
        <div className={'top-creators-content'}>
            <div className={'top-creators-header'}>
                <div className={'top-creators-header-left'}>
                    <p className={'top-creators-title'}>Top Creators</p>
                    <p className={'top-creators-description'}>Checkout Our Weekly Updated Top Creators.</p>
                </div>
                <div className={'rankings-button-wrapper'}>
                    <BaseButton filled={false} disabled={false} text={'View Rankings'} icon={purpleRocketIcon}
                                alt={'Rankings'}/>
                </div>
            </div>

            <div className={'top-creators-list'}>
                {TOP_CREATORS.slice(0, visibleCreators).map((creator, index) => {
                    return <TopCreator id={creator.id} userImage={creator.userImage} userName={creator.userName}
                                       sales={creator.sales}/>
                })}
            </div>
            <div className={'rankings-button-wrapper mobile'}>
                <BaseButton filled={false} disabled={false} text={'View Rankings'} icon={purpleRocketIcon}
                            alt={'Rankings'}/>
            </div>
        </div>
    </div>
}