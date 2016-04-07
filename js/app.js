var modules = [];

var angular = {};


function getElement(selector){

    if (selector.substr(0,1) === ".") {                             //css selector is class
        var classname = selector.substr(1);
        var elements = document.getElementsByClassName(classname);
        for (element in elements) {
            console.log(elements[element].outerHTML)
        }
    }

    if(selector.substr(0,1) === "#"){                               //css selector is id
        var idname = selector.substr(1);
        var element = document.getElementById(idname).outerHTML;
        console.log(element)
    }

    if (selector.indexOf("[") !== -1) {                             //css selector is attribute
        var attrname = selector.slice(1,-1);
        var allElements = document.getElementsByTagName('*');
        for (i = 0; i < allElements.length; i++) {
            if (allElements[i].getAttribute(attrname) !== null) {
                console.log(allElements[i].outerHTML);
            }
        }
    }

    if (selector.indexOf("[") === -1 && selector.substr(0,1) !== "#" && selector.substr(0,1) !== "."){
        var tagElements = document.getElementsByTagName(selector);  //css selector is tag
        for (i=0 ; i < tagElements.length; i++){
            console.log(tagElements[i].outerHTML)
        }
    }
}

getElement('[ng-app]');


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