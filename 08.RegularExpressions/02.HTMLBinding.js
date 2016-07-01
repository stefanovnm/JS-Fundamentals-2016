/*
 Problem 2. HTML binding

 Write a function that puts the value of an object into the content/attributes of HTML tags.
 Add the function to the String.prototype

 Example 1:

 input

 var str = '<div data-bind-content="name"></div>';
 str.bind(str, {name: 'Steven'});

 output

 <div data-bind-content="name">Steven</div>

 Example 2:

 input

 var bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></à>'
 str.bind(str, {name: 'Elena', link: 'http://telerikacademy.com'});

 output

 <a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</à>

 */
console.log('Task 2:');
if(!String.prototype.bind){
    String.prototype.bind = function(options){
        var str =this,
            pattern = /data\-bind\-\w+="(\w+)"/,
            patternContent =  /data\-bind\-content="name"/g,
            patternLink =  /data\-bind\-href="link"/g,
            patternClass =  /data\-bind\-class="name"/g,
            patternWord = /"\w+"/;
        /*
        console.log(str.match(patternContent));
        console.log(str.match(patternClass));
        console.log(str.match(patternLink));*/
        //console.log(str.match(pattern));

        for( var option in options){
            var temp = str.match(pattern);
            console.log(temp[1]);
            //console.log(temp.toString().match(patternWord).toString().replace(/"/g,''));
            //temp = temp.toString().match(patternWord).toString().replace(/"/g,'');
            if(option==temp[1]){
                console.log(options[option]);
                //str = str.replace(pattern,options[option]);
            }
        }

        //not finishd!
        //this is mess, but i have to go to the exam...

        return this.toString();
    }
}

var str = '<div data-bind-content="name"></div>';
console.log(str.bind({name: 'Steven'}));

var bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>'
console.log(bindingString.bind({ name: 'Elena', link: 'http://telerikacademy.com' }));


function solve(args) {
    var input1 = args[0],
        input2 = args[1];

    console.log(input2.toString().bind(input1));
    String.prototype.bind = function (options) {
        var str = this,
            pattern = /data\-bind\-\w+="(\w+)"/,
            patternContent = /data\-bind\-content="name"/g,
            patternLink = /data\-bind\-href="link"/g,
            patternClass = /data\-bind\-class="name"/g,
            patternWord = /"\w+"/;
        /*
        console.log(str.match(patternContent));
        console.log(str.match(patternClass));
        console.log(str.match(patternLink));*/
        //console.log(str.match(pattern));

        for (var option in options) {
            var temp = str.match(pattern);
            console.log(temp[1]);
            //console.log(temp.toString().match(patternWord).toString().replace(/"/g,''));
            //temp = temp.toString().match(patternWord).toString().replace(/"/g,'');
            if (option == temp[1]) {
                console.log(options[option]);
                //str = str.replace(pattern,options[option]);
            }
        }

        return this.toString();
        }
}