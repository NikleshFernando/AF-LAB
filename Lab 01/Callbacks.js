function getValue(callback){
    let value = 0;
    setTimeout(()=>{
        value = 10;
        callback(value);
    },1000);
}

function multiplyValue(value,callback){
    setTimeout(()=>{
        let value1 = 10;
        callback(value*value1);

    },1000);
}

console.log(getValue((value)=>{
    multiplyValue(value,(newValue)=>{
        console.log(newValue);
    });
}));

console.log(`Hey`);