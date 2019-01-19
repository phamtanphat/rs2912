const teo = {
    name : 'teo',
    age : 20 ,
    sayhello : function(){
        console.log(`Xin chao ban ${this.name}`);
    }
}
// teo.sayhello();
const onClick = teo.sayhello;
onClick.bind({name : 'ti'})();