import {useState, useEffect, Fragment} from 'react';
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import { deleteItem } from '../../provider/store';
const cx = classNames.bind(styles);
export default function Content() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/datas/0')
            .then(response => response.json())
            .then(respone => {
                setData(respone.data);
            })
            .catch(() => {
                setData([]);
            })
    }, []);
    function semesterGPA(point, stcd) {
        return Math.round((point / stcd + Number.EPSILON) * 100) / 100;
    }
    return (
        <div className={cx("content")}>
            <table className={cx("content__table")}>
                <thead>
                    <tr className={cx("content__table-title")}>
                        <th>STT</th>
                        <th>Mã Môn</th>
                        <th>Tên Môn</th>
                        <th>TC</th>
                        <th>% KT</th>
                        <th>% Thi</th>
                        <th>Kiểm tra</th>
                        <th>Thi L1</th>
                        <th>TK1(10)</th>
                        <th>TK(10)</th>
                        <th>TK1(CH)</th>
                        <th>TK(CH)</th>
                        <th>TK(4)</th>
                        <th>KQ</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((values, index) => {
                        let TBHK10 = 0, TBHK4 = 0, STCD = 0;
                        return (
                            <Fragment key={index}>
                                    <tr key={"a" + index}>
                                        <th colSpan="13" align="left" 
                                            style={
                                                {
                                                    backgroundColor: "var(--background-color)",
                                                    border: "none",
                                                    color: '#000'
                                                }
                                            }>
                                            &ensp;Học kỳ: {index + 1} - Năm học {2022 + index} - {2023 + index}
                                        </th> 
                                        <th colSpan="1" align="center" 
                                            className={cx('content__table-delete')}
                                            data-index={index}
                                            onClick={() => deleteItem(index)}
                                            style={
                                                {
                                                    backgroundColor: "var(--background-color)",
                                                    border: "none",
                                                    color: '#000'
                                                }
                                            }>
                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                        </th>
                                    </tr>
                                    {values.map((value, index) => {
                                        const TK110 = Math.round((value.KT / 100 * value.KTRA + value.THI / 100 * value.THIL1 + Number.EPSILON) *10) / 10;
                                        const TK10 = Math.round((value.KT / 100 * value.KTRA + value.THI / 100 * value.THIL1 + Number.EPSILON) *10) / 10;
                                        let TK1CH, TKCH, TK4, KQ = 'Đạt';
                                        if(TK10 >= 8.5) {
                                            TK1CH = 'A';
                                            TK4 = 4;
                                        }
                                        else if(TK10 < 8.5 && TK10 >= 7) {
                                            TK1CH = 'B';
                                            TK4 = 3;
                                        }
                                        else if(TK10 < 7 && TK10 >= 5.5) {
                                            TK1CH = 'C';
                                            TK4 = 2;
                                        }
                                        else if(TK10 < 5.5 && TK10 >= 4) {
                                            TK1CH = 'D';
                                            TK4 = 1;
                                        }
                                        else {
                                            TK1CH = 'F';
                                            TK4 = 0;
                                            KQ = 'X';
                                        }
                                        TKCH = TK1CH;
                                        TBHK10 += TK10 * value.TC;
                                        TBHK4 += TK4 * value.TC;
                                        STCD += value.TC;
                                        return (
                                        <tr key={value.index}>
                                            <th>{value.index}</th>
                                            <th>{value.MMH}</th>
                                            <th>{value.TMH}</th>
                                            <th>{value.TC}</th>
                                            <th>{value.KT}</th>
                                            <th>{value.THI}</th>
                                            <th>{value.KTRA}</th>
                                            <th>{value.THIL1}</th>
                                            <th>{TK110}</th>
                                            <th>{TK10}</th>
                                            <th>{TK1CH}</th>
                                            <th>{TKCH}</th>
                                            <th>{TK4}</th>
                                            <th>{KQ}</th>
                                        </tr>
                                        )}
                                    )}
                                    <tr key={'b' + index}>
                                        <th colSpan="14" align="left">
                                            &ensp;Điểm trung bình học kỳ hệ 10: &nbsp; {semesterGPA(TBHK10, STCD)}
                                        </th>
                                    </tr>
                                    <tr key={'c' + index}>
                                        <th colSpan="14" align="left">
                                            &ensp;Điểm trung bình học kỳ hệ 4: &nbsp; {semesterGPA(TBHK4, STCD)}
                                        </th>
                                    </tr>
                                    <tr key={'d' + index}>
                                        <th colSpan="14" align="left">
                                            &ensp;Số tính chỉ đạt: &nbsp; {STCD}    
                                        </th>
                                    </tr>
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}