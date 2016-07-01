/*
 Problem 6. Extract text from HTML

 Write a function that extracts the content of a html page given as text.
 The function should return anything that is in a tag, without the tags.

 Example:

 <html>
 <head>
 <title>Sample site</title>
 </head>
 <body>
 <div>text
 <div>more text</div>
 and more...
 </div>
 in body
 </body>
 </html>

 Result: Sample sitetextmore textand more...in body
 */
console.log('Task 6:');

function extractText(text){
    var i=0,
         length = text.length,
         result='';
    for(i=0;i<length;i+=1){
        if(text[i]==='<'){
            i=text.indexOf('>',i+1);
            //console.log(text[i]);
        }else{
            result+=text[i];
        }
    }
    return result;
}

var text = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
console.log(text);
console.log(extractText(text));
console.log(' ');