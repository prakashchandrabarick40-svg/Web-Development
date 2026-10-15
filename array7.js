let number=[10,20,30,40,50];
let smallest=number[4];
for(let num of number)
{
    if(num<smallest)
    {
        smallest=num;
    }
}
console.log(smallest);