var modules = [];

var angular = {};

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


check('ng-app module does exist', modules.some((module) => module.name === document.getElementsByTagName("html")[0].getAttribute("ng-app")), true);


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

//TODO: read about try-catch statement

try{
    throw 'aasdfa'
} catch(e) {
    console.log(e + ' is the error')
}