// We don't want to use 6 and 13
// We don't like to get any number that 14 or more 

for(let i = 1; i <= 15; i++) {
    if(i === 6 || i === 13) continue
else if(i === 15) break;
    console.log(`The number is`, i);
}

