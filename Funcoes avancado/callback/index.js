function rand(min=1000, max=3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout( () => {
        console.log('f1'), rand() 
        if (callback) callback();
    });
}
function f2(callback){
    setTimeout( () => {
        console.log('f2'), rand() 
        if (callback) callback();
    });
}
function f3(callback){
    setTimeout( () => {
        console.log('f3'), rand() 
        if (callback) callback();
    });
}

//hell of arrow functions kkkk
//f1( ()=> f2( () => f3( () => console.log('Acabou')) ));

//functions anonimas
f1( function() {
    f2( function() {
        f3 ( function () {
            console.log('Acabou');
        })
    });
});