import './TrendingCollection.scss'
import CollectionInterface from "../../../utils/interfaces/CollectionInterface";

export default function TrendingCollection(props: CollectionInterface) {
    return <div className={'trending-collection-container'}>
        <div className={'trending-collection-images-container'}>
            <img className={'trending-collection-primary-image'} src={props.collectionImages[0]} alt={'NFT'}/>
            <div className={'trending-collection-secondary-images'}>
                <img className={'trending-collection-secondary-image'} src={props.collectionImages[1]} alt={'NFT'}/>
                <img className={'trending-collection-secondary-image'} src={props.collectionImages[2]} alt={'NFT'}/>
                <div className={'trending-collection-images-count'}>
                    <p>1025+</p>
                </div>
            </div>
        </div>
        <div className={'trending-collection-info-container'}>
            <p className={'trending-collection-name'}>{props.collectionName}</p>
            <div className={'trending-collection-user'}>
                <img className={'trending-collection-user-image'} src={props.userImage} alt={'User'}/>
                <p className={'trending-collection-user-name'}>{props.userName}</p>
            </div>
        </div>
    </div>
}