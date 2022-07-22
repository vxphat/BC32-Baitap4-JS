//Bài 1: Xuât 3 số theo thứ tự tăng dần
document.getElementById('btnTinhTangDan').onclick = function () {
    //input
    var a = Number(document.getElementById('soThu1').value);
    var b = Number(document.getElementById('soThu2').value);
    var c = Number(document.getElementById('soThu3').value);
    //output
    var kq = '';

    if (a > b) {
        if (b > c) {
            kq = c + '<' + b + '<' + a
        } else if (a > c) {
            kq = b + '<' + c + '<' + a
        } else {
            kq = b + '<' + a + '<' + c
        }
    } else if (b > c) {
        if (a > c) {
            kq = c + '<' + a + '<' + b
        } else {
            kq = a + '<' + c + '<' + b
        }
    } else {
        kq = a + '<' + b + '<' + c
    }


    document.getElementById('ketQua-b1').innerHTML = kq;
}

//Bài 2: Chào hỏi các thành viên trong gia đình
document.getElementById('btnLoiChao').onclick = function () {
    //input
    var loiChao = document.getElementById('loiChao').value;
    // var mom = document.getElementById('mom').value;
    // var brother = document.getElementById('brother').value;
    // var sister = document.getElementById('sister').value;
    //output
    var kq = '';
    //process
    switch (loiChao) {
        case "B":
            kq = 'Xin chào Bố!'
            break;
        case "M":
            kq = 'Xin chào Mẹ!'
            break;
        case "A":
            kq = 'Xin chào Anh trai!'
            break;
        default:
            kq = 'Xin chào Em gái!'

    }
    document.getElementById('ketQua-b2').innerHTML = kq;
}

//Bài 3: Đém số chẵn lẻ
document.getElementById('btnDemSo').onclick = function () {
    //input
    let so1 = +document.getElementById('so-1').value;
    let so2 = +document.getElementById('so-2').value;
    let so3 = +document.getElementById('so-3').value;
    let soChan = 0;
    let soLe = 0;

    //output
    let kq = '';
    //process
    if (so1 % 2 === 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }

    if (so2 % 2 === 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }

    if (so3 % 2 === 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }

    document.getElementById('ketQua-b3').innerHTML = 'Có ' + soChan + ' số chẵn - ' + soLe + ' số lẻ.';
}

//Bài 4: Đoán hình tam giác
document.getElementById('btnDoanTamGiac').onclick = function () {
    let a = +document.getElementById('canh-a').value;
    let b = +document.getElementById('canh-b').value;
    let c = +document.getElementById('canh-c').value;

    let kq = '';

    if (a === b && a === c && b === c) {
        kq = 'Tam giác đều';
    } else if (a === b) {
        kq = 'Tam giác cân';
    } else if (c ** 2 === a ** 2 + b ** 2) {
        kq = 'Tam giác vuông';
    } else {
        kq = 'Tam giác khác';
    }
    document.getElementById('ketQua-b4').innerHTML = kq;


}