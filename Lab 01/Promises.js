function getValue(){
    let value = 10;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            value = 20;
            resolve(value);
        },1000);
    })

}
getValue().then((value)=>{
     console.log(value);
});

