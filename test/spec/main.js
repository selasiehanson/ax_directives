'use strict';

describe("Main Controller", function (){
	beforeEach(module("AxDxts"));

	it("should have a main controller", function (){
		expect(AxDxts.MainCtrl).not.toEqual(null);
	});
});