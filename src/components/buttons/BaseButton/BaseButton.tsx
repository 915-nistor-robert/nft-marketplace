import {MouseEventHandler} from "react";
import './BaseButton.scss'

export interface IBaseButton {
    id?: string;
    disabled?: boolean;
    icon?: string;
    text?: string;
    filled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    alt?: string;
}

export default function BaseButton(props: IBaseButton) {
    return <button onClick={props.onClick}
                   className={props.filled ?
                       'base-button-container filled' : 'base-button-container'}
                   disabled={props.disabled}>
        <img src={props.icon} alt={props.alt}/>
        <p>{props.text}</p>
    </button>
}