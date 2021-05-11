let n = prompt()
let s = ''
for(let i=n.length-1;i>-1;i--){
    s += n[i]
}
if(n==s){
    console.log('YES')
}else{
    console.log('NO')
}