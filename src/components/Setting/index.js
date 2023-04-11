import classNames from "classnames/bind";
import styles from './Setting.module.scss';
import {closeBoard, mode} from '../../provider/store';
const cx = classNames.bind(styles);
export default function Setting() {

    return (
        <div className={cx("setting")} id="setting">
            <div className={cx("setting__board")}>
                <span className={cx("setting__board-close-icon")} onClick={() => closeBoard("#setting")}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </span>
                <ul className={cx("setting__board-list")}>
                    <li className={cx("setting__board-item")}>
                        
                        <span className={cx("setting__board-mode")}>
                            <span>
                                <i className="fa-solid fa-sun"></i> | <i className="fa-solid fa-moon"></i>
                            </span>
                            <span>
                                <input 
                                    type="radio" id="light" name="mode" value="light" defaultChecked
                                    onChange={(e) => mode(e)}
                                />
                                <label htmlFor="light">Light</label>
                            </span>
                            <span>
                                <input 
                                    type="radio" id="dark" name="mode" value="dark"
                                    onChange={(e) => mode(e)}
                                />
                                <label htmlFor="dark">Dark</label>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}