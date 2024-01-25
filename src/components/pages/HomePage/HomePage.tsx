import HomeHeader from "../../headers/HomeHeader/HomeHeader";
import './HomePage.scss';
import DiscoverSection from "../../sections/DiscoverSection/DiscoverSection";
import TrendingSection from "../../sections/TrendingSection/TrendingSection";
import TopCreatorsSection from "../../sections/TopCreatorsSection/TopCreatorsSection";
import PageFooter from "../../footers/PageFooter/PageFooter";

export default function HomePage() {
    return (
        <div className={'home-page-container'}>
            <HomeHeader/>
            <DiscoverSection/>
            <TrendingSection/>
            <TopCreatorsSection/>
            <PageFooter/>
        </div>
    );
}