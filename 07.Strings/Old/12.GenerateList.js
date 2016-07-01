/*
 Problem 12. Generate list

 Write a function that creates a HTML <ul> using a template for every HTML <li>.
 The source of the list should be an array of elements.
 Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.

 Example: HTML:

 <div data-type="template" id="list-item">
 <strong>-{name}-</strong> <span>-{age}-</span>
 /div>

 JavaScript:

 var people = [{name: 'Peter', age: 14},…];
 var tmpl = document.getElementById('list-item').innerHtml;
 var peopleList = generateList(people, template);
 //peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'

 */
console.log('Task 12:');

function generateList(people,template){
    var result='<ul>',
        range = people.length,
        i,
        liContent,
        prop,
        props =[];

    for(prop in people[0]){
        props.push(prop);
    }

    for(i=0;i<range;i+=1){
        liContent=template;
        result+='<li>';
        for(prop in people[0]){
            liContent=liContent.replace(new RegExp('\\-{' + prop + '\\}-','g'),people[i][prop]);
        }
        result+=liContent+'</li>';
    }
    return result+'</ul>';
}

var people = [{ name: 'Peter', age: 14 },
    { name: 'Nikola', age: 29 }];
var template = '<strong>-{name}-</strong> <span>-{age}-</span>';

console.log(generateList(people,template));