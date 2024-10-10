function Book(title, autor, year){
  this.title = title;
  this.autor = autor;
  this.year = year;
  // this.info = function(){
  //     console.log('Book info');
  // }
}

Book.prototype.getInfo = function(){
  return `Book info ${this.title} wrote ${this.year}`;
}
let firstBook = new Book('Harry Potter', 'J. Rowling', '1997');
let secondBook = new Book('Harry Potter 2', 'J. Rowling', '2000');

console.log(firstBook);
// firstBook.info();
console.log(firstBook.getInfo());
console.log(secondBook);
console.log(secondBook.getInfo());
console.log([1,2]);

class BookClass{
  constructor (title, autor, year){
      this._title = title;
      this._autor = autor;
      this._year = year;
  }
  getAllInfo(){
      console.log(`Info ${this._autor} and ${this._title}`);
  }
  get title(){
      return this._title;
  }
  set title(value){
      this._title = value;
  }
  static createObjFromCsv(value){
      const [title, autor, year] = value.split(',');
      return new BookClass(title, autor, year);
  }
}

let thirdBook = new BookClass('Harry Potter 3', 'J. Rowling', '2003');
// thirdBook.createObjFromCsv('Test, hello, 1990');
let newBook = BookClass.createObjFromCsv('Test, hello, 1990');
console.log(`Static method`);
console.log(newBook);


thirdBook.getAllInfo();
console.log(thirdBook.title);
thirdBook.title = 'Spider Man';
console.log(thirdBook);

class Product {
  constructor(name, price){
      this._name = name;
      this._price = price;
  }
  getInfo(){
      console.log(`${this._name} has price ${this._price}`);
  }
}

class Electonics extends Product {
  constructor(name, price, type){
      super(name, price);
      this._type = type;
  }

  getElectronicInfo(){
      console.log(`${this._name} for type ${this._type}`);
  }
}

let laptop = new Electonics('HP', 900, 'laptop');
laptop.getInfo();
laptop.getElectronicInfo();

class Basket{
  constructor(){
      this.products = [];
  }
  addProduct(product){
      this.products.push(product);
  }
  get totalPrice(){
      let price = 0;
      this.products.forEach(item =>price+=item._price);
      return price;
  }
}

let book = new Product('Simple book', 100);
let phone = new Electonics('mobile phone', 250, 'mobile');

let basket = new Basket();
basket.addProduct(book);
basket.addProduct(phone);

console.log(basket);
console.log(basket.totalPrice);