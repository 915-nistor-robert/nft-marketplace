import './TrendingSection.scss'
import {TRENDING_COLLECTIONS} from "../../../utils/GeneralUtils";
import TrendingCollection from "../../elements/TrendingCollection/TrendingCollection";
import {useEffect, useState} from "react";

export default function TrendingSection() {
    const [visibleCollections, setVisibleCollections] = useState(3);

    const handleResize = () => {
        const width = window.innerWidth;

        if (width > 1281) {
            setVisibleCollections(3);
        } else if (width <= 1281 && width > 768) {
            setVisibleCollections(2);
        } else {
            setVisibleCollections(1);
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return <div className={'trending-section-container'}>
        <div className={'trending-section-content'}>
            <h3 className={'trending-section-title'}>Trending Collection</h3>
            <p className={'trending-section-description'}>Checkout Our Weekly Updated Trending Collection.</p>
            <div className={'trending-nfts-container'}>
                {TRENDING_COLLECTIONS.slice(0, visibleCollections).map((collection, index) => {
                    return <TrendingCollection id={collection.id} userImage={collection.userImage}
                                               userName={collection.userName} collectionName={collection.collectionName}
                                               collectionImages={collection.collectionImages}/>
                })
                }
            </div>
        </div>
    </div>
}