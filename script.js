// 1. Display the area and perimeter of an object created from using Rectangle
// Constructor that has width and height properties and 2 methods (using
// prototype property) for calculating area, perimeter.
// a. Add function displayInfo() to display a message declaring the width,
// height, area and perimeter of the created object.
// b. Create Class Property that counts numbers of created objects and
// Class method to retrieve it.

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  Rectangle.count++;
}
Rectangle.count=0

Rectangle.prototype.area = function () {
  return this.height * this.width;
};
Rectangle.prototype.perimeter = function () {
  return (this.height + this.width) * 2;
};
Rectangle.displayInfo = function () {
  return Rectangle.count;
};

var x=new Rectangle(44,33);
var l=new Rectangle(44,33);
var g=new Rectangle(44,33);
console.log(Rectangle.displayInfo()); 

