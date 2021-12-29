var arr4 = [2,0,6,1,77,0,52,0,25,7];
var arr5 = [];
var j = 0;
for(i=0; i < arr4.length; i++){
    if(arr4[i] > 10){
        arr5[j] = arr4[i];
        j++;
    }
}
console.log(arr5);


