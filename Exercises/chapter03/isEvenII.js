function isEvenII(num) {

    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else if (num < 0){
        return isEvenII(-num);
    } else  {
        return isEvenII(num - 2);
    }

}

console.log(isEvenII(55));