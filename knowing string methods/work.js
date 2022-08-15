
function highandlow(arr){
    let highestnum=arr[0]
    let lowestnum=arr[0]
    let total=0
    for(let i=0;i<arr.length;i++){
if(highestnum<arr[i] ){
    highestnum=arr[i]
}
}   
    for(let i=0;i<arr.length;i++){
if(lowestnum>arr[i] ){
    lowestnum=arr[i]
}
}   
console.log(lowestnum,highestnum)

for(let num of arr){
    if(highestnum!==num && lowestnum!==num){
        total+=num
    }
}
return total
}
console.log(highandlow([]))


function sum(num,target){
    let arr=[]
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]+num[j]==target){
                console.log(i,j)
                arr.push(i,j)
            }
        }
    }
   return arr
}

console.log(sum([1,3,5,-3,9],14))
function sumto(num,target){
    let arr=[]
    for(let i=0;i<num.length;i++){
        if(num[i]+num[i+1]==target){
            arr.push(i,i+1)
        }
    }
return arr
}
console.log(sumto([1,3,5,-3,9],4))





let Name=[1,5,3,6,4]
console.log(Name)
Name.sort()