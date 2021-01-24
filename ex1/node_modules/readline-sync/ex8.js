for (let i = 1; i < 101; i++) {
    if ((i%7==0) || ((i + '').includes(7))) { 
        console.log("boom");
    }else {console.log(i);
    }}