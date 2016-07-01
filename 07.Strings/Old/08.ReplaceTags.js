/*
 Problem 8. Replace tags

 Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].

 Example:
 input 	                                                output
 <p>Please visit <a                                     <p>Please visit
  href="http://academy.telerik.com">our site</a> to     [URL=http://academy.telerik.com]our site[/URL] to
  choose a training course. Also visit <a               choose a training course. Also visit
   href="www.devbg.org">our forum</a> to discuss the    [URL=www.devbg.org]our forum[/URL] to discuss the
    courses.</p> 	                                    courses.</p>
 */
console.log('Task 8:');

function replaceHTMLtag(text){
    var result = text;
    while(result.indexOf('<a href="')>0){
        //console.log(result.indexOf('<a href="'));
        result=result.replace('<a href="','[/URL=')
            .replace('">',']')
            .replace('</a>','[/URL]');
    }
    return result;
}

var html='<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

console.log(html);
console.log(replaceHTMLtag(html));

console.log(' ');