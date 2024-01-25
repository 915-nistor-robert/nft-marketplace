import './TopCreator.scss'
import CreatorInterface from "../../../utils/interfaces/CreatorInterface";

export default function TopCreator(props: CreatorInterface) {
    return <div className={'top-creator-container'}>
        <div className={'top-creator-avatar'}>
            <div className={'creator-index'}>{props.id}</div>
            <img className={'top-creator-image'} src={props.userImage} alt={'creator-image'}/>
        </div>
        <div className={'top-creator-info'}>
            <p className={'top-creator-name'}>{props.userName}</p>
            <div className={'top-creator-sales'}>
                <p className={'top-creator-sales-title'}>Total Sales: </p>
                <p className={'top-creator-sales-value'}>{props.sales} ETH</p>
            </div>
        </div>
    </div>
}