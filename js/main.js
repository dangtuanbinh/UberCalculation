// Bang gia taxi
const UBERX_FIRST_PRICE = 8000;
const UBERX_SECOND_PRICE = 12000;
const UBERX_THIRD_PRICE = 1000;
const UBERX_WAITING_TIME = 2000;

const UBERSUV_FIRST_PRICE = 9000;
const UBERSUV_SECOND_PRICE = 14000;
const UBERSUV_THIRD_PRICE = 12000;
const UBERSUV_WAITING_TIME = 3000;

const UBERBLACK_FIRST_PRICE = 10000;
const UBERBLACK_SECOND_PRICE = 16000;
const UBERBLACK_THIRD_PRICE = 14000;
const UBERBLACK_WAITING_TIME = 4000;

// Ham tinh tien
function main() {
    // Dau vao: Loai xe, so km, thoi gian cho

    // 1.1 so km, thoi gian cho
    var soKm = document.getElementById("txtKm").value;
    var timeCho = document.getElementById("txtTime").value;
    var uberType;
    var totalAmount = 0;
    // Phai ep keu bien soKm va timeCho
    // Cach 1: dung parse
    soKM = parseFloat(soKm);
    timeCho = parseFloat(timeCho);

    // Cach 2: 
    // soKm = soKm *1;

    // Cach 3:
    // soKm = +soKm;


    // Process: giai thuat
    // 1.2 loai xe: vi la radio button nen se khong the lay value => phai dom toi ca 3 button va kiem tra xem button nao duoc check ( su dung thuoc tinh ".checked" cua radio button)




    // 2.1 dung swtich case, loai xe nao thi dung bang gia do
    // Khong can "=== true", dua tren nguen ly Turthy va Falsy trong so sanh.
    // Falsy : "0" , null, undefined, false
    // Truthy: tat ca truong hop khong thuoc falsy

    uberType = checkUberType();
    // Thay "uberType === undefined" bang "!uberType"
    if (!uberType) return;
    switch (uberType) {
        case 'uberX':
            totalAmount = countTotalAmount(soKM, timeCho, UBERX_FIRST_PRICE,UBERX_SECOND_PRICE, UBERX_THIRD_PRICE, UBERX_WAITING_TIME)
            break;
        case 'uberSUV':
            totalAmount = countTotalAmount(soKM, timeCho, UBERSUV_FIRST_PRICE,UBERSUV_SECOND_PRICE, UBERSUV_THIRD_PRICE, UBERSUV_WAITING_TIME)
            break;
        case 'uberBlack':
            totalAmount = countTotalAmount(soKM, timeCho, UBERBLACK_FIRST_PRICE,UBERBLACK_SECOND_PRICE, UBERBLACK_THIRD_PRICE, UBERBLACK_WAITING_TIME)
            break;
        default:
            return;
    }

    // Dau ra : tien
    document.getElementById("divThanhTien").style.display = 'block';
    document.getElementById("xuatTien").innerHTML = totalAmount.toLocaleString() + " VND";

}


function checkUberType() {
    var uberX = document.getElementById("uberX");
    var uberSUV = document.getElementById("uberSUV");
    var uberBlack = document.getElementById("uberBlack");

    // Khi if chi co 1 dong, khong can {}
    if (uberX.checked) return "uberX";
    //Khong can phai dung "else" vi "return" o tren
    if (uberSUV.checked) return "uberSUV";
    if (uberBlack.checked) return "uberBlack";

    alert("Vui long chon loai xe");
    // khi ham "return" : nghia la ham dung hoat dong

}

function countTotalAmount(soKm, timeCho, firstPrice, secondPrice, thirdPrice, waitingPrice) {
    if (soKm <= 1) {
       return firstPrice + timeCho*waitingPrice;
    } else if (soKm > 1 && soKm <= 20) {
        return firstPrice + (soKm - 1)* secondPrice + timeCho * waitingPrice;
    } else {
        return firstPrice + (soKm - 1) * thirdPrice + timeCho * waitingPrice;
    }
}