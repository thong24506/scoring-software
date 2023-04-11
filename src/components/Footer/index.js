import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import {openBoard} from '../../provider/store';
const cx = classNames.bind(styles);

export default function Footer() {
    const [point, setPoint] = useState({});
    useEffect(() => {
        fetch('http://localhost:3000/datas/0')
            .then(response => response.json())
            .then((datas) => {
                let data = datas.data;
                let point10 = 0, point4 = 0, TTC = 0;
                data.map((values) => values.map((value) => {
                        const tbPoint = Math.round((value.KT / 100 * value.KTRA + value.THI / 100 * value.THIL1  + Number.EPSILON) * 10) / 10;
                        const point = value.TC * tbPoint
                        point10 += point;
                        if(tbPoint >= 8.5) point4 += 4 * value.TC;
                        else if(tbPoint < 8.5 && tbPoint >= 7) point4 += 3 * value.TC;
                        else if(tbPoint < 7 && tbPoint >= 5.5) point4 += 2 * value.TC;
                        else if(tbPoint < 5.5 && tbPoint >= 4) point4 += 1 * value.TC;
                        TTC += value.TC;
                        return '';
                    })
                )
                point10 = Math.round((point10 / TTC + Number.EPSILON) * 100) / 100;
                point4 = Math.round((point4 / TTC + Number.EPSILON) * 100) / 100;
                setPoint({point10, point4, TTC});
            })
            .catch(() => {
                setPoint({});
            })
    }, [])
    return (
        <footer className={cx("footer")}>
            <table className={cx("footer__table")}>
                <tbody>
                    <tr className={cx("footer__table-row")}>
                        <th className={cx("footer__table-item")}>
                            &ensp;Điểm trung bình tích lũy: &nbsp; {point.point10}
                        </th>
                    </tr>
                    <tr className={cx("footer__table-row")}>
                        <th className={cx("footer__table-item")}>
                            &ensp;Điểm trung bình tích lũy hệ 4: &nbsp; {point.point4}
                        </th>
                    </tr>
                    <tr className={cx("footer__table-row")}>
                        <th className={cx("footer__table-item")}>
                            &ensp;Số tín chỉ tích lũy: &nbsp; {point.TTC}
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className={cx("footer__edit")} id="btn-edit">
                    <button className={cx("footer__edit-button") } 
                        onClick={() => {
                            openBoard("#edit");
                        }}
                    >
                        Edit
                    </button>
            </div>
        </footer>
    )
}