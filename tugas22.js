function tugas22(){
    let x = "Saya ingin belajar bersama";
    let y = x.split(" ");
    y.forEach(function(item,index,array){
        console.log("Item : " + item + " Index ke " + index);
    });
};

tugas22();