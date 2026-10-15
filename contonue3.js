function findnum()
{
    let num=[10,20,30,40,50,60];
    for(let number of num)
    {
        if(number===30)
        {
            return number;
        }
    }
}
console.log(findnum())