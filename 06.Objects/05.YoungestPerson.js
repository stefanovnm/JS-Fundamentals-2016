function solve(args) {
    
    var arrayOfPeople = [],
        length = args.length,
        index = 0;

    for (var i = 0; i < length; i+=1) {
        var tempFirstname,
            tempLastname,
            tempAge;

        if (i%3 ==0) {
            tempFirstname = args[i];
        }
        if (i % 3 == 1) {
            tempLastname = args[i];
        }
        if (i % 3 == 2) {
            arrayOfPeople[index] = new Person(tempFirstname, tempLastname, parseInt(args[i]));
            index += 1;
        }
    }

    function findYoungest(obj) {
        var tempIndex=0,
            tempAge = obj[0].age;

        for (var i = 0, tempLength = obj.length; i < tempLength; i+=1) {
            if (tempAge > obj[i].age) {
                tempIndex = i;
                tempAge = obj[i].age;
            }
        }

        console.log(obj[tempIndex].firstname + " " + obj[tempIndex].lastname);
    }

    findYoungest(arrayOfPeople);

    function Person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    Person.prototype.toString = function () {
        return this.firstname.toString() + ' ' + this.lastname.toString();
    }

}