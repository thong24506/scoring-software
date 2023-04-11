import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { setFavicon } from './provider/store';
import {Header, Content, Footer, Setting, Edit} from './components';
const cx = classNames.bind(styles);
function App() {
  setFavicon();
  return (
    <div className={cx("App")}>
      <Header/>
      <Content/>
      <Footer/>
      <Setting/>
      <Edit/>
    </div>
  );
}

export default App;


// // 20230406125453
// // http://localhost:3000/data

// [
//   [
//     {
//       "index": 1,
//       "MMH": 841402,
//       "TMH": "Đại số tuyến tính",
//       "TC": 3,
//       "KT": 40,
//       "THI": 60,
//       "KTRA": 10,
//       "THIL1": 5.8
//     },
//     {
//       "index": 2,
//       "MMH": 841021,
//       "TMH": "Kiến trúc máy tính",
//       "TC": 3,
//       "KT": 50,
//       "THI": 50,
//       "KTRA": 9,
//       "THIL1": 6.2
//     },
//     {
//       "index": 3,
//       "MMH": 841401,
//       "TMH": "Giải tích 1",
//       "TC": 3,
//       "KT": 40,
//       "THI": 60,
//       "KTRA": 6.6,
//       "THIL1": 8
//     },
//     {
//       "index": 4,
//       "MMH": 841020,
//       "TMH": "Cơ sở lập trình",
//       "TC": 3,
//       "KT": 50,
//       "THI": 50,
//       "KTRA": 8.8,
//       "THIL1": 6.5
//     },
//     {
//       "index": 5,
//       "MMH": 841403,
//       "TMH": "Cấu trúc rời rạc",
//       "TC": 4,
//       "KT": 50,
//       "THI": 50,
//       "KTRA": 9.4,
//       "THIL1": 8
//     }
//   ]
// ]
// 841402
// 841021
// 841401
// 841020
// 841403

// Đại số tuyến tính
// Kiến trúc máy tính
// Giải tích 1
// Cơ sở lập trình
// Cấu trúc rời rạc

// 10
// 9
// 6.6
// 8.8
// 9.4

// 5.8
// 6.2
// 8
// 6.5
// 8
