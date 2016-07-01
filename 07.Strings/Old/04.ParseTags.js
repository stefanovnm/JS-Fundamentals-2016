/*
 Problem 4. Parse tags

 You are given a text. Write a function that changes the text in all regions:

 <upcase>text</upcase> to uppercase.
 <lowcase>text</lowcase> to lowercase
 <mixcase>text</mixcase> to mix casing(random)

 Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

 The expected result:
 We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

 Note: Regions can be nested.
 */
console.log('Task 4:');
var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else."
console.log(text);

function changeInRegions(text){
    var  workingText= text,
        i=0,
        length=workingText.length,
        res='';

    while(i<length){
        if(workingText[i]!=='<'){
            res+=workingText[i];
            i+=1;
        }else{
            i+=1;
            if(workingText[i]==='m'){
                i+=8;
                while(workingText[i]!=='<'){
                    if(Math.random()<0.5){
                        res+=workingText[i].toUpperCase();
                    }else{
                        res+=workingText[i].toLowerCase();
                    }
                    i+=1;
                }
                i+=10;
            }
            if(workingText[i]==='l'){
                i+=8;
                while(workingText[i]!=='<'){
                    res += workingText[i].toLowerCase();
                    i+=1;
                }
                i+=10;
            }
            if(workingText[i]==='u') {
                i+=7;
                while(workingText[i]!=='<') {
                    res += workingText[i].toUpperCase();
                    i+=1;
                }
                i+=9;
            }
        }
    }

    return res;
}
//not working with nested regions

console.log(changeInRegions(text));
console.log(' ');