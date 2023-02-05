function deBounce (fn, t){
    let timeout
    if(timeout){
        clearTimeout(timeout)
    }
    return function(){
        timeout = setTimeout(()=>{fn()}, t)
    }  
}

