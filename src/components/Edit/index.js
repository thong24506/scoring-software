import classNames from "classnames/bind";
import styles from './Edit.module.scss';
import { closeBoard, getDataInput } from "../../provider/store";
const cx = classNames.bind(styles);

function addInput() {
    const editInputList = document.querySelector("#edit__board-input-list div table tbody");
    const NOS = document.querySelector("#edit__board-input input[name=input-NOS]").value;
    let input = '';
    for(let i = 1; i <= NOS; i++) {
        input  += 
            `<tr>
                <th>${i}</th>
                <th><input type="text" spellcheck="false"/></th>
                <th><input type="text" spellcheck="false"/></th>
                <th><input type="number" spellcheck="false"/></th>
                <th><input type="number" spellcheck="false"/></th>
                <th><input type="number" spellcheck="false"/></th>
                <th><input type="number" spellcheck="false"/></th>
                <th><input type="number" spellcheck="false"/></th>
            </tr> `  
    }
    editInputList.innerHTML = input;
}
export default function Edit() {
    return (
        <div className={cx("edit")} id="edit">
            <div className={cx("edit__board")}>
                <span className={cx("edit__board-close-icon")} onClick={() => closeBoard("#edit")}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </span>
                <div className={cx("edit__board-input")} id="edit__board-input"> 
                    <div className={cx("edit__board-input-NOS")}>
                        <label htmlFor="">Number Of Subjects</label>    
                        <input type="number" name="input-NOS" spellCheck={false}/>
                        <button className={cx("edit__board-input-NOS-btn")}
                            onClick={() => addInput()}
                        >Add</button>
                    </div>
                    <div id="edit__board-input-list">
                        <div className={cx("edit__board-input-sub")}>
                            <table className={cx("edit-table")}>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã môn học</th>
                                        <th>Tên môn học</th>
                                        <th>Tín chỉ</th>
                                        <th>%KT</th>
                                        <th>%THi</th>
                                        <th>Kiểm tra</th>
                                        <th>Thi L1</th>
                                    </tr>
                                </thead>
                                <tbody>                          
                                </tbody>
                            </table>
                        </div>                                                       
                    </div>
                </div>
                <div className={cx("edit__board-btn-save")}>
                    <button onClick={getDataInput}>Save</button>
                </div>                                      
            </div>
        </div>
    )
}