// 任意の整数
let num = 30

// ３の倍数かつ５の倍数
if ((num % 3 === 0) && ( num % 5 === 0)) {
    console.log('３と５の倍数です');
}
// ３の倍数
else if (num % 3 === 0 ){
    console.log('３の倍数です');
}
// ５の倍数
else if (num % 5 === 0){
    console.log('5の倍数です');
}
// それ以外
else {
    console.log(num)
}