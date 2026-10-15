let number=[10,20,30,40,40,50];
let largest=number[0];
for(let num of number)
{
    if(num>largest)
    {
        largest=num;
    }
}
console.log(largest);