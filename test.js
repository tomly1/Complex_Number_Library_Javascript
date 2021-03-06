var Complex = require('./lib/complex.js');
var expect = require('expect.js');

describe('The complexNumber library', function(){

	it('should create a complex number',function(){
		var complexNumber = new Complex(3,5);
		expect(complexNumber.real).to.equal(3);
		expect(complexNumber.img).to.equal(5);
	});

	it('should add two complex number', function(){

		var complexNumber = new Complex(3,5);
		var complexNumber2 = new Complex(2,3);
		var result = complexNumber.add(complexNumber2);
		expect(result.real).to.equal(5);
		expect(result.img).to.equal(8);

	});

	it('should add multiple complex numbers', function(){
		var z = new Complex(1, 1);
		var y =  new Complex(1,1);
		var x =  new Complex(1,1);

		var t = ((z.add(y)).add(x));

		expect(t.real).to.equal(3);
		expect(t.img).to.equal(3);
	});

	it('should subtract complex numbers', function(){
		var x = new Complex(1, 2);
		var y =  new Complex(1,1);
		var z = new Complex(1, 11);

		var subtract = x.sub(y);		

		expect(subtract.real).to.equal(0);
		expect(subtract.img).to.equal(1);
	});

	it('should subtract multiple complex numbers', function(){
		
		var z = new Complex(1, 11);
		var y =  new Complex(1,1);
		var x = new Complex(1, 2);

		var t = ((z.sub(y)).sub(x));
		
		expect(t.real).to.equal(-1);
		expect(t.img).to.equal(8);
	});	

	it('should multiply two complex numbers', function(){
		var x = new Complex(1, 4);
		var y =  new Complex(3,2);
		var result = x.multiply(y);

		expect(result.real).to.equal(-5);
		expect(result.img).to.equal(14);

	});

	it('should multiply more than two complex numbers', function(){
		var x =  new Complex(1, 4);
		var y =  new Complex(3,2);
		var z =  new Complex(1,2);
		var result = (x.multiply(y)).multiply(z);

		expect(result.real).to.equal(-33);
		expect(result.img).to.equal(4);

	});

	it('should divide two complex numbers', function(){
		var x = new Complex(1, 4);
		var y =  new Complex(3,2);
		var result = x.divide(y);

		expect(result.real).to.equal(11/13);
		expect(result.img).to.equal(10/13);
	});

	it('should find the conjugate of complex numbers', function(){

		var conjugateNumber = new Complex(1 , 3).conjugate();

		expect(conjugateNumber.real).to.equal(1);
		expect(conjugateNumber.img).to.equal(-3);

	});

	it('should find the conjugate of complex numbers', function(){

		var conjugateNumber = new Complex(-1 , -3).conjugate();

		expect(conjugateNumber.real).to.equal(-1);
		expect(conjugateNumber.img).to.equal(3);
	});

	it('should find the magnitude of complex numbers', function(){

		var magnitudeNumber = new Complex(-3 , -4).magnitude();
		expect(magnitudeNumber).to.equal(5);
	});

	it('should test the equals method', function(){
		expect(new Complex(2, 3).equals(new Complex(2, 3))).to.be.ok();
		expect(new Complex(2, 3).equals(new Complex(2, 4))).not.to.be.ok();
		expect(new Complex(2, 3).equals(new Complex(1, 3))).not.to.be.ok();
	});

	it('should multiply complex numbers by -1 by calling the negate function ', function(){

		var negateNumber = new Complex(-3 , -4).negate();
		expect(negateNumber.real).to.equal(3);
		expect(negateNumber.img).to.equal(4);
	});

	it('should calculate the angle between the real and the im vectors', function(){
		expect(new Complex(1, 1).angle()).to.equal(Math.PI / 4);
		expect(new Complex(-1, -1).angle()).to.equal(-3 * Math.PI / 4);
		expect(new Complex(0, 1).angle()).to.equal(Math.PI / 2);
		expect(new Complex(1, 0.5 * Math.sqrt(4 / 3)).angle()).to.equal(Math.PI / 6);
		expect(new Complex(1, 0.5 * Math.sqrt(4 / 3)).angle()).to.equal(Math.PI / 6);
	});

	it('should return values in string', function(){
		var value1 = new Complex(1,3);
		var value2 = new Complex(2,1);
		var total = value1.add(value2);
		expect(total.toString()).to.equal('3+4i');
	});

	it('should return the sine of the complex number', function(){
		var z = new Complex(1, 2).sin().toString();
		expect(z).to.equal('3.165778513+1.959601041i');
	});

	it('should return the cosine of the complex number', function(){
		var z = new Complex(1, 2).cos().toString();
		expect(z).to.equal('2.032723007-3.051897799i');
	});

	it('should return the tangent of the complex number', function(){
		var z = new Complex(1, 2).tan().toString();
		expect(z).to.equal('0.033812826+1.014793616i');
	});

	it('should return the hyperbolic sine of the complex number', function(){
		var z = new Complex(1, 2).sinh().toString();
		expect(z).to.equal('-0.489056259+1.403119251i');
	});

	it('should return the hyperbolic cosine of the complex number', function(){
		var z = new Complex(1, 2).cosh().toString();
		expect(z).to.equal('-0.642148125+1.068607421i');
	});

	it('should return the hyperbolic tangent of the complex number', function(){
		var z = new Complex(1, 2).tanh().toString();
		expect(z).to.equal('1.166736257-0.243458201i');
	});

	it('should return values in Polar Form', function(){
		var value1 = new Complex(-1,4);
		var value2 = new Complex(2,-3);
		var total = value1.add(value2);
		expect(total.toString()).to.equal('1+i');
		expect(total.toPolar()).to.equal('1.4142135623730951 0.7853981633974483');
	});

	it('it should return the exponential', function(){
		var z = new Complex(4,3).exp().toString();
		expect(z).to.equal('-54.051758861+7.704891373i');
	});

	it('it should take the natural logarithm', function(){
		var z = new Complex(4,3).log().toString();
		expect(z).to.equal('1.609437912+0.643501109i');
	});

	it('should take the square root of the complex number', function(){
		var z = new Complex(1,4).sqrt().toString();
		expect(z).to.equal('1.60048518+1.249621068i');
	});
});