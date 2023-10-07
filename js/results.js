"use strict";

const parentDiv = document.querySelector('.products-container');

fetch("../products.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'product-container';

            let imageDiv = document.createElement('div');
            imageDiv.className = 'image-div';

            let img = document.createElement('img');
            img.setAttribute('src', data[i].image);
            img.className = 'image';

            let likeIcon = document.createElement('img');
            likeIcon.setAttribute('src', '../images/icon/Vector.svg');
            likeIcon.className = 'like-icon';

            let productName = document.createElement('p');
            productName.className = 'product-name';
            if(data[i].title.length >= 20) {
                productName.innerText = data[i].title.substring(0,20) + "…";
            } else {
                productName.innerText = data[i].title;
            }

            let priceDiv = document.createElement('div');
            priceDiv.className = 'price-div';

            let productPrice = document.createElement('p');
            productPrice.className = 'product-price';
            productPrice.innerText = data[i].price + '  руб.';

            imageDiv.appendChild(img);
            imageDiv.appendChild(likeIcon);
            newDiv.appendChild(imageDiv);
            newDiv.appendChild(productName);
            newDiv.appendChild(priceDiv);

            if(data[i].oldPrice !== null) {
                let productOldPrice = document.createElement('del');
                productOldPrice.className = 'product-old-price';
                productOldPrice.innerText = data[i].oldPrice;
                priceDiv.appendChild(productOldPrice);
            }

            priceDiv.appendChild(productPrice);
            parentDiv.appendChild(newDiv);
        }
    })