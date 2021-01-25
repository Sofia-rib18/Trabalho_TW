let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        /*maneira de como podemos ver que este produto foi adicionado ao carrinho*/
        name: 'iMac APPLE 21.5"',
        tag :'imac 21.5',  /*para depois conseguir ir buscar as imagens*/
        price: 1349,
        inCart: 0
    }
];
/*eventListener para sempre que se carrega no botão adicionar carrinho*/

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers((products[i]));
        totalCost(products[i]);
    })
}


function onLoadCartNumbers(){ /*esta função faz com que o número de produtos do carrinho não desapareça quando se faz o refresh da página*/
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers) {
        document.querySelector("span").textContent = productNumbers;
    }
}


function cartNumbers(product) { /*função que conta o número de produtos no carrinho*/
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);  /*converte para um número*/
    if (productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1); /*caso já existir algum produto no carrinho ele vai somar o número de vezes que é adicionado algum produto*/
        document.querySelector("span").textContent = productNumbers + 1; /*estamos a atualizar o número de produtos existentes no carrinho*/
    }
    else{
        localStorage.setItem("cartNumbers", 1); /*se caso este produto não tiver no carrinho*/
        document.querySelector("span").textContent = 1; /*estamos a atualizar o número de produtos existentes no carrinho*/
    }
    setItems(product);
}


function setItems(product) { /*função para adicionar diferentes produtos ao carrinho*/
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){  /*se caso carregarmos mais do que uma vez no adicionar carrinho de um certo produto ele vai contar o número de vezes que foi adicionado*/
        if (cartItems[product.tag] == undefined) {
            cartItems = {   /*vai buscar o que estiver antes no carrinho e acrescentar um produto novo*/
                ...cartItems, 
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else{ /*caso o produto ainda não existir no carrinho*/
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); /*ao usar o JSON em vez de cartItems aparecer como objeto de javascript e aparece os elementos colocados no produto*/
}


function totalCost(product) { /*função para saber o preço total dos produtos*/
    let cartCost = localStorage.getItem("totalCost");
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    if(cartCost != null){ /*vai somar o preço dos produtos*/
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }

}


function displayCart() {  /*função para mostrar os produtos adicionados no carrinho*/
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    if (cartItems && productContainer){
        productContainer.innerHtml = "";
        Object.values(cartItems).map(item => {  /*verifica os valores dentro do cartItems*/
            productContainer.innerHTML += `<div class="product">  
                                                <img src="./images/${item.tag}.png"> 
                                                <span>${item.name}</span>
                                            </div>
                                            <div class ="price">Preço:€${item.price}</div>
                                            <div class ="quantity>
                                                Quantidade:${item.inCart}
                                            </div>
                                            <div class ="total">
                                                Total:€${item.inCart * item.price}
                                            </div>`
        });

        productContainer.innerHTML += `
            <div class = "basketTotalContainer">
                <h4 class = "basketTotalTitle>
                </h4>
                <h4 class ="basketTotal">
                    Preço Total:€${cartCost}
                </h4>
            `
    }
}

function shopping(){
    var shopping_submit = document.getElementById("shopping-btn");
    shopping_submit.innerHTML = alert("Compra realizada com sucesso");
}


onLoadCartNumbers()
displayCart()