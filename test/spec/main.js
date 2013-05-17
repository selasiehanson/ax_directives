'use strict';

describe("Main Controller", function (){
	var mainModule;
	var scope, controller;
	beforeEach(module("ax_directives"));

	it("should have a main controller", inject(function (version,$rootScope, $controller){
		
		beforeEach(function (){
			scope = $rootScope.$new();
			
			controller = $controller("MainCtrl",{
				$scope : scope
			});
		});

		expect(version).toEqual("0.0.1");

	}));

	describe("Adding new users", function (){
		it("should have an 'addUser' method", function (){
			expect(scope.addUser).not.toEqual(null);
		});
		
		it("should add a new user when a user is present", function (){
			expect(scope.users.length).toEqual(0);
			scope.addUser("kweku")
			expect(scope.users.length).toEqual(1);
		});

		it("should NOT add a new user when a user is absent", function (){
			expect(scope.users.length).toEqual(0);
			scope.addUser();
			expect(scope.users.length).not.toEqual(1);
		});

	});
});


describe("Unit test for Greeter", function (){
	var $compile;
	var $rootScope;

	beforeEach(module('ax_directives'));

	beforeEach(inject(function (_$compile_, _$rootScope_) {
		$compile = _$compile_ ;
		$rootScope = _$rootScope_ ;
	}));

	it("Replaces the element with the text 'Hello World' ", function (){
		var element = $compile("<greet></greet>")($rootScope);

		expect(element.html()).toContain("Hello World");
	});

});