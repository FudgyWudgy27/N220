let words = ["Indiana", "University", "Purdue", "University", "Indianapolis"]
/*
for(let n = 1; n <= 10; n++)
{
    console.log(n);
}

let y = "! Yeah! ";

for(i = 0; i < 1; i++)
{
    console.log(words[0] + y + words[1] + y + words[2] + y + words[3] + y + words[4] + y);
}
*/
for(let i = 0; i < words.length; i++)
{
    words[i] = words[i].toUpperCase();
}

console.log(words);