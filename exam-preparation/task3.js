function solve(args) {
    let rules = {};

    String.prototype.last = function () {
        return this[this.length -1];
    }
    Array.prototype.last = function () {
        return this[this.length -1];
    }

    let noSpace = {
        '+' : true,
        '>' : true,
        '.' : true,
        '#' : true,
        '{' : true,
        '~' : true
    };

    let isInRule = false;
    let orderIndex =0;
    let currentSelector = null;

    for (let i=0 ; i < args.length; i+=1) {
        if (isInRule) {
            
            let split = args[i].trim().replace(/\s+/g, '').split(':');
            
            if (split.last() === '}' ) {
                isInRule = false;
            }else{
                let property = {name: split[0], value: split[1].replace(';', '')},
                    properties = rules[currentSelector].props;

                for (let k =0; k < properties.length; k+=1) {
                    if (properties[k].name == property.name) {
                        properties.splice(k,1);
                        break;
                    }
                }

                properties.push(property);
            }

        }else{
            let split = args[i].trim().split(/\s+/g);
            let selector = '';
            
            for(let j = 0; j<split.length; j+=1){

                if ((selector === '') || noSpace[split[j][0]] || noSpace[selector.last()]) {
                    selector += split[j];
                }else{
                    selector += ' ' + split[j];
                }
            }

            if (selector[selector.length-1] =='{') {
                isInRule = true;

                if(!rules[selector]){
                    rules[selector]={
                        props: [],
                        order: orderIndex
                    };

                    orderIndex+=1;
                }   

                currentSelector = selector;
            }

        }

        

        
    }

    let ordered =[];

    for (const propName in rules) {
            let properties = rules[propName]
                                        .props
                                        .map(nvp => nvp.name + ':'+ nvp.value)
                                        .join(';');
            let finishedSelector = propName + properties + '}';
            
            //console.log(finishedSelector);

            let index = rules[propName].order;
            //console.log(finishedSelector);
            ordered[index] = finishedSelector;
        } 
    console.log(ordered.join(''));
}

solve([
	'#the-big-b{',
	'		color: yellow;',
	'size: big;',
	'}',
	'.muppet{',
	'powers: all;',
	'skin: fluffy;',
	'}',
	'.water-spirit {',
	'powers: water;',
	'alignment : not-good;',
	'}',
	'all{',
	'meant-for: nerdy-children;',
	'}',
    '#gosho   {',
    'pesho: eivan;',
    '}',
	'.muppet {',
	'powers: everything;',
	'}',
	'all .muppet {',
	'	alignment : good       ;',
	'}',
    '#gosho   {',
    'tosho: neeivan;',
    '}',
	'.muppet+     .water-spirit{',
	'power: everything-a-muppet-can-do-and-water;',
	'}'
]);