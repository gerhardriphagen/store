var modules = [];

var angular = {};





function testMethod(value){
    var testArray = [1,2,3];

    if(testArray.some((x)=>x === value)){
        console.log('value found')
    }
    else {
        console.log('value not found')
    }
}

testMethod(1);



//TODO: find out why 'some' method is not working with this array of html elements
function getElement(selector){
    var allElements = document.getElementsByTagName("*");

    if(allElements.some((element) => element === selector)){
        console.log('element found')
    }
    else {
        console.log('element not found')
    }
}

getElement('html');






angular.module = function(name,dependencies) {
    if (dependencies === undefined) {

        if (modules.some((module) => module.name === name)) {
            return(modules.filter((module) => module.name === name)[0])
        }
        else {
            throw 'this module does not exist, please create it first'
        }
    }

    else {
        if (modules.some((module) => module.name === name)) {
            throw 'this module already exists, call it or create one with different name'
        }
        else {
            modules.push({name: name, dependencies: dependencies});
            return(name + ' is created');
        }
    }
};

angular.module('module1',[]);
check('created module does exist', modules.some((module) => module.name === 'module1'), true);


angular.module('module1');
check('existing module can be called', (modules.filter((module) => module.name === 'module1')[0]) !== null && typeof (modules.filter((module) => module.name === 'module1')[0]) === 'object', true);


check('ng-app module does exist', modules.some((module) => module.name === document.querySelector("[ng-app]").getAttribute("ng-app")), true);


var error = false;
try{
    angular.module('module2');
} catch(e) {
    error = true;
}
check('uncreated module does not exist', error, true);


var error = false;
try{
    angular.module('module1',[]);
} catch(e) {
    error = true;
}
check('existing module cannot be created', error, true);


function check(testname ,actual, expected) {
    if(actual === expected) {
        console.log(testname + ' passed')
    } else {
        console.log(testname + ' failed')
    }
}