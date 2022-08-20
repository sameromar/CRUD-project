var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCategory = document.getElementById("productCategory")
var productDesc = document.getElementById("productDesc")
var count = document.getElementById("number")
var productContainer ;
let mood='new';
let global;
if(localStorage.getItem("products")==null){
    productContainer=[];
}
else {
    productContainer=JSON.parse(localStorage.getItem("products"))
    displayProduct() 
}

function addProduct(){
    var product = {
        name: productName.value , 
        price: productPrice.value ,
        category: productCategory.value ,
        desc: productDesc.value ,
        num:count.value,
    }
  if(mood==='new'){
      if(product.num>1){
          for(let i=0;i<product.num;i++){
            productContainer.push(product)
          }
      }
      else{
        productContainer.push(product)
      }
  }
  else {
    productContainer[global]=product;
    mood='new';
    document.getElementById("addProduct").innerHTML='Add Product';
  }
    localStorage.setItem("products",JSON.stringify(productContainer))
    displayProduct() 
    clearInp()
}
//displayProduct
function displayProduct(){
    var rowProduct = "";
        for (var i = 0; i < productContainer.length ; i++) {
            rowProduct += `
            <tr>
                <td>${i+1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td><button type="button" class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
                </td>
                <td><button type="button" class="btn btn-warning" onclick="update(${i})">Update</button>
                </td>
            </tr>`    
}
    document.getElementById("tBody").innerHTML= rowProduct
}
//clear
function clearInp(){
    productName.value = "" 
    productPrice.value = "" 
    productCategory.value = "" 
    productDesc.value = "" 
    count.value=""
} 

// Delete
function deleteRow(i){
    productContainer.splice(i,1);
    localStorage.setItem("products",JSON.stringify(productContainer));
    displayProduct() 

}
// Delete
function deleteAll(){
    productContainer.splice(0);
    localStorage.setItem("products",JSON.stringify(productContainer));
    displayProduct() 
}

//update 
function update(i){
         productName.value=productContainer[i].name;
        productPrice.value=productContainer[i].price;
         productCategory.value=productContainer[i].category;
       productDesc.value=productContainer[i].desc;
       document.getElementById("addProduct").innerHTML='update'
       mood='update';
       global=i;
}

//searcch
function Search(kelma){
    var rowProduct2 = "";
        for (var i = 0; i < productContainer.length ; i++) {
            if(productContainer[i].name.includes(kelma.toLowerCase().trim())==true || productContainer[i].price.includes(kelma.trim())==true ){
            rowProduct2 += `
            <tr>
                <td>${i+1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td><button type="button" class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
                </td>
                <td><button type="button" class="btn btn-warning" onclick="update(${i})">Update</button>
                </td>
            </tr>`    
}
 }
 document.getElementById("tBody").innerHTML= rowProduct2
    
}


