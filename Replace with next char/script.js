let str = prompt("Enter a string");
newStr = str.split('');
for(let char in newStr){
    char = (char +1)%26;
    console.log(char);
}