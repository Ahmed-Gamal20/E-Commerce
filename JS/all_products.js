fetch("/JS/item.json")
  .then((response) => response.json())
  .then((data) => {

    const other_product_swiper = document.getElementById(
      "products_dev"
    );
   
    all_product_json = data;

    data.forEach((product) => {
 
                    //  


        const old_price_pragraph=product.old_price ?`<p class="old_price">$${product.old_price}</p>`:"";


                
        const percent_disc_div = product.old_price ?`<span class="sale_present">%${Math.floor(((product.old_price - product.price) / product.old_price) * 100 )}</span>`:"";



        products_dev.innerHTML += `  <div class="product swiper-slide">
                <div class="icons">
                    <span><i onclick="addtocart(${product.id},this)" class="fa-sharp fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-sharp fa-solid fa-heart"></i></span>
                    <span><i class="fa-sharp fa-solid fa-share-nodes"></i></span>
                </div>

                ${ percent_disc_div}

                <div class="img_product">
                    <img src="${product.img}">
                    <img class="img_hover" src="${product.img_hover}">
                    
                </div>
                <h3 class="name_product"><a href="#">${product.name}</a></h3>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                   ${old_price_pragraph}
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                
            </div>`;
      '5000'
    });

  });
