import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {logo} from '../../assets/images';
import { openBoard } from "../../provider/store";
const cx = classNames.bind(styles);
export default function Header() {
    return (
        <header className={cx('header')}>
            <img className={cx('header__img')} src={logo} alt="logo-name"/>
            <h1 className={cx('header__heading')}>Scoring Software</h1>
            <div className={cx('header__setting')} onClick={() => openBoard("#setting")}>
                <i className={cx("fa-solid fa-gear header__setting-icon")}></i>
                <span className={cx("header__setting-message")}>Setting</span>
            </div>
        </header>
    )
}