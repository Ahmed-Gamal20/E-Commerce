fetch("/JS/item.json")
  .then((response) => response.json())
  .then((data) => {
    const swiper_item_sale = document.getElementById("swiper_item_sale");

    const other_product_swiper = document.getElementById(
      "other_product_swiper"
    );
    const other_product_swiper2 = document.getElementById(
      "other_product_swiper2"
    );

    all_product_json = data;

    data.forEach((product) => {
      if (product.old_price) {
        const percent_disc = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        swiper_item_sale.innerHTML += `  <div class="product swiper-slide">
                <div class="icons">
                    <span><i onclick="addtocart(${product.id},this)" class="fa-sharp fa-solid fa-cart-plus"></i></span>
                    <span><i /*onclick="addtocart(${product.id},this)"*/ class="fa-sharp fa-solid fa-heart"></i></span>
                    <span><i class="fa-sharp fa-solid fa-share-nodes"></i></span>
                </div>



                <span class="sale_present">%${percent_disc}</span>

                <div class="img_product">
                    <img src="${product.img}">
                    <img class="img_hover" src="${product.img_hover}">
                    
                </div>
                <h3 class="name_product"><a href="#">${product.name}</a></h3>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                    <p class="old_price">$${product.old_price}</p>
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                
            </div>`;
      }'5000'
    });

    data.forEach((product) => {
      other_product_swiper.innerHTML += `  <div class="product swiper-slide">
                <div class="icons">
                    <span><i onclick="addtocart(${product.id},this)" class="fa-sharp fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-sharp fa-solid fa-heart"></i></span>
                    <span><i class="fa-sharp fa-solid fa-share-nodes"></i></span>
                </div>




                <div class="img_product">
                    <img src="${product.img}">
                    <img class="img_hover" src="${product.img_hover}">
                    
                </div>
                <h3 class="name_product"><a href="#">${product.name}</a></h3>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                
            </div>`;
    });

    data.forEach((product) => {
      other_product_swiper2.innerHTML += `  <div class="product swiper-slide">
                <div class="icons">
                    <span><i onclick="addtocart(${product.id},this)" class="fa-sharp fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-sharp fa-solid fa-heart"></i></span>
                    <span><i class="fa-sharp fa-solid fa-share-nodes"></i></span>
                </div>




                <div class="img_product">
                    <img src="${product.img}">
                    <img class="img_hover" src="${product.img_hover}">
                    
                </div>
                <h3 class="name_product"><a href="#">${product.name}</a></h3>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                
            </div>`;
    });
  });
