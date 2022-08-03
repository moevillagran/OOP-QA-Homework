class Product {
    //Constructed the elements that can be input in the class
    constructor(name, code, image_url, stock_quantity, price){
        this.name = name;
        this.code = code;
        this.image_url = image_url;
        this.stock_quantity = stock_quantity;
        this.price = price;

    }
//This method helps set the name
    setName(_name){
        this.name = _name;
    }
//This method returns the name
    getName(){
        return this.name;
    }
//This method sets the code being entered
    setCode(_code){
        this.code = _code;
    }

    setImageURL(){
        return this.image_url;
    }
//This method adds the stock
    addStock(){
        return this.stockQuantity++;
    }
//This method removes the stock
    removeStock(){
        return this.stockQuantity--;
    }
};

class Food extends Product {
    constructor(name, code, image_url, stock_quantity, price, category, expiration_date){
        super(name, code, image_url, stock_quantity, price);
        this.category = category;
        this.expiration_date = expiration_date;
    }   

    setCategory(_category){
        this.category = _category;
    }

    getCategory(){
        return this.category;
    }

    setExpiration(_expiration_date){
        this.expiration_date = _expiration_date;
    }

    getExpiration(){
        return this.expiration_date;
    }

}

const Food1 = new Food("Beans", 6789, "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/beans-580x800.jpg", 500, 20, "Food", "01/08/2022");
console.log(Food1);

