// const teo = {
//     name : 'teo',
//     age : 20 ,
//     sayhello : function(){
//         console.log(`Xin chao ban ${this.name}`);
//     }
// }
// // teo.sayhello();
// const onClick = teo.sayhello;
// onClick.bind({name : 'ti'})();

// function dosth(fn){
//     fn(word);
// }

// dosth( console.log);
function cong(a , b = 0){
    return a + b;
}
console.log(cong(1,2))