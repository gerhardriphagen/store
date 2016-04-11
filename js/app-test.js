describe('Creating and calling modules', function() {

    it('created module does exist', function() {
        angular.module('module1',[]);
        expect(modules.some((module) => module.name === 'module1')).toBe(true);
    });


    it('existing module can be called', function() {
        expect((modules.filter((module) => module.name === 'module1')[0]) !== null && typeof (modules.filter((module) => module.name === 'module1')[0])).toBe('object');
    });

    //TODO: Fix this test
    it('ng-app module does exist', function() {
        expect(modules.some((module) => module.name === document.querySelector("[ng-app]").getAttribute("ng-app"))).toBe(true)
    });


    it('uncreated module does not exist', function() {
        
        var error = false;
        try{
            angular.module('module2');
        } catch(e) {
            error = true;
        }
        
        expect(error).toBe(true);
    });

    it('existing module cannot be created', function() {

        var error = false;
        try{
            angular.module('module1',[]);
        } catch(e) {
            error = true;
        }

        expect(error).toBe(true);
    });
    
});

//TODO: Write tests for getElement (querySelector)