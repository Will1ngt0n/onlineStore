import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineStore';
  less = 'less';
  qty 
products=[{pic:"assets/Acer.jpg", description: "Acer 2GB RAM 500GB HDD Notebook", name: "Acer Notebook", price: "3799.99"},
          {pic: "/assets/professional-500x500.png", description: "Mecer 4GB RAM 500GB HDD Desktop Computer with keyboard and mouse.", name: "Mecer Desktop suite", price: "5299.99"},
          {pic: "assets/9576ac24.png", description: "Trailer ergonomic mouse with right-side duo buttons", name: "Trailer ergonomic keyboard", price: "249.99"},
          {pic: "assets/eSqHoTuhrh5NfhiLgEV9kX-970-80.jpg", description: "Intel Core i9-9960X Central Processing Unit", name: "Intel Core i9 Processor", price: "1799.99"},
          {pic: "assets/Intel Core i5-3330 3330 - 3 GHz Quad-Core Processor CPu Only.jpg", description: "Intel Core i5-3330 3GHz Quad-Core Processor",name:"Intel Core i5 3GHz Processor", price:"1359.99"},
          {pic: "assets/Intel Core i5-4750T 2.9 GHz Dual-Core Processor BX80646I54570T.jpg", description: "Intel Core i5-4750T 2.9GHz Dual-Core Processor", name: "Intel Core  i5 2.9GHz Processor", price: "1149.99"},
          {pic: "assets/intel-core-2-duo-e8400-3-0-ghz-6mb-1333-mhz-socket-775-original-imaefzr37z5jnng6.jpeg", description: "Intel Core 3GHz procesesor", name: "Intel Core duo", price: "599.99"},
          {pic: "assets/newmouse-3.jpg", description: "Logitech multi-key Bluetooth mouse", name: "Logitech Bluetooth mouse", price: "269.99"}

];
arrayExist: boolean= false;
newPic: string =""
newDescription: string ="";
newName: string = "";
newPrice: number = 0;
newQuantity: number = 1;
newOverallPrice: number= 0;
  cart =[];
  total: number = 0;
  cartTotal: number = 0;
  numItems: number = 0;

  buttonDisabledID: number = 0
 /** images: ImageData = []*/ 
 
  
  pageload(){
    
  }
  removeFromCart(cartItems){
    let index = this.cart.indexOf(cartItems);
    this.cart.splice(index,1);

    if(this.cart.length<1){
      this.arrayExist = false;
    }
    this.total = 0;
    this.numItems =0;
    let i = 0;
    for (i=0; i<this.cart.length;i++){
      
      this.total =this.total + Number(this.cart[i].cartOverallPrice)
      this.numItems=this.numItems + Number(this.cart[i].cartQuantity)
    }
  }


  addToCart(product){
    this.newPic= product.pic;
    this.newDescription=product.description;
    this.newName=product.name;
    this.newPrice = product.price;
    this.newQuantity = 1;
  this.newOverallPrice = this.newQuantity*this.newPrice;
  
  let i: number =0;
  for (i = 0; i<this.cart.length; i++){
    if(product.name == this.cart[i].cartName){
      alert("")
      this.cart[i].cartQuantity++
      this.cart[i].cartOverallPrice = Number(this.cart[i].cartPrice*this.cart[i].cartQuantity)
      let totals: number =Number(product.price)
    this.total = this.total + totals
    this.numItems = this.numItems + this.newQuantity
      return null
    }
  }
    this.cart.push({cartPic: this.newPic, cartDescription:this.newDescription, cartName: this.newName, cartPrice: this.newPrice, cartQuantity: this.newQuantity, cartOverallPrice: this.newOverallPrice});
    this.arrayExist = true;
    this.cartTotal = Number(this.cartTotal)+Number(product.cartOverallPrice)



    let totals: number =Number(product.price)
    this.total = this.total + totals
    this.numItems = this.numItems + this.newQuantity

   
  }

  changeQuantity(cartItems){
    let mQuantity: any = cartItems.cartQuantity;
    cartItems.cartQuantity = mQuantity;

    if(cartItems.cartQuantity){
      cartItems.cartOverallPrice = cartItems.cartQuantity*cartItems.cartPrice;
    }
    
    

    
  }

  minus(cartItems){
    let alertText: string =""
    let mQuantity =  cartItems.cartQuantity;
    mQuantity=mQuantity -1;
    if(mQuantity>0){
      cartItems.cartQuantity = mQuantity;
    } else {
      document.getElementById("alertText").innerHTML = "You cant have less than 1 items, click button below to remove from cart"
    }
    

    cartItems.cartOverallPrice = cartItems.cartQuantity*cartItems.cartPrice;
    this.total= 0;
    this.numItems = 0
    let i = 0;
    for (i=0; i<this.cart.length;i++){
      
      this.total =this.total + Number(this.cart[i].cartOverallPrice)
      this.numItems=this.numItems + Number(this.cart[i].cartQuantity)
    }
    
  }

  add(cartItems){
    document.getElementById("alertText").innerHTML = ""
    let mQuantity =  cartItems.cartQuantity;
    mQuantity=mQuantity +1;
    cartItems.cartQuantity = mQuantity;
  
    cartItems.cartOverallPrice = cartItems.cartQuantity*cartItems.cartPrice;

    this.total = 0;
    this.numItems =0;
    let i = 0;
    for (i=0; i<this.cart.length;i++){
      this.total =this.total + Number(this.cart[i].cartOverallPrice)
      this.numItems=this.numItems + Number(this.cart[i].cartQuantity)
    }


   
  }
}






