import {logo} from '../assets/images';
export function setFavicon() {
    const favicon = document.querySelector("link.favicon")
    favicon.setAttribute('href', logo);
}

export function openBoard(string) {
    const Board = document.querySelector(string);
    Board.style.display = "flex";
}

export function closeBoard(string) {
    const Board = document.querySelector(string);
    Board.style.display = "none";
}

export function mode(e) {
    const value = e.target.getAttribute("value");
    if(value === "light") {
        document.documentElement.style.setProperty('--primary-color', '#00ffff');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--white', '#ffff');
        document.documentElement.style.setProperty('--black', '#000');
        document.documentElement.style.setProperty('--content-color', '#fff');
        
    } 
    else if(value === "dark") {
        document.documentElement.style.setProperty('--primary-color', '#000');
        document.documentElement.style.setProperty('--text-color', '#666');
        document.documentElement.style.setProperty('--white', '#18191a');
        document.documentElement.style.setProperty('--black', '#999');
        document.documentElement.style.setProperty('--content-color', '#000');
    }
    else {
        console.log('ERROR VALUE');
    }
}

export function getDataInput() {
    function callAPI(callback) {
        fetch("http://localhost:3000/datas/0")
        .then(response => response.json())
        .then(callback)
    }
    callAPI(function(response) {
        const inputs = document.querySelectorAll('#edit__board-input-list table tbody input');
        const inputsLength = inputs.length;
        if(inputsLength !== 0) {
            let datas = response;
            let data = [];
            for(let i = 1; i <= inputsLength / 7; i++) {
                let obj = {
                    index: 0,
                    MMH: 0,
                    TMH: "",
                    TC: 0,
                    KT: 0,
                    THI: 0,
                    KTRA: 0,
                    THIL1: 0
                };
                obj.index = i;
                obj.MMH = inputs[(i - 1) * 7 + 0].value;
                obj.TMH = inputs[(i - 1) * 7 + 1].value;
                obj.TC = Number(inputs[(i - 1) * 7 + 2].value);
                obj.KT = Number(inputs[(i - 1) * 7 + 3].value);
                obj.THI = Number(inputs[(i - 1) * 7 + 4].value);
                obj.KTRA = Number(inputs[(i - 1) * 7 + 5].value);
                obj.THIL1 = Number(inputs[(i - 1) * 7 + 6].value);
                data.push(obj);
            }
            datas.data.push(data);
            fetch("http://localhost:3000/datas/0", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datas)
            })
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    window.location.reload();
                })
        } 
    });
}

export function deleteItem(index) {
    function callAPI(callback) {
        fetch("http://localhost:3000/datas/0")
        .then(response => response.json())
        .then(callback)
    }
    callAPI(function(response) {
        const datas = response;
        let data = response.data;
        data.splice(index, 1);
        datas.data = data;
        fetch("http://localhost:3000/datas/0", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datas)
            })
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    window.location.reload();
                })
    })
}
