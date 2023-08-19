// HTML要素をclassで取得し、定数に代入する。
const btnElement=document.getElementById('btn');
const textElement=document.getElementById('text');
// ボタンをクリックした時に表示を変える
btnElement.addEventListener('click',()=>{
    textElement.textContent='ボタンをクリックしました';
})