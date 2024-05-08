<script>
$(document).ready(function () {
    function updateCarouselItems() {
        var windowWidth = $(window).width();
        var itemsPerSlide = 5;

        if (windowWidth < 768) {
            itemsPerSlide = 1;
        } else if (windowWidth < 992) {
            itemsPerSlide = 2;
        }

        var $carouselInner = $('#carouselExampleControls-3 .carousel-inner');
        $carouselInner.empty();

        // Your card data (15 cards)
        var cardData = [];

        // Adding dummy data for illustration
        for (var i = 1; i <= 15; i++) {
            cardData.push({
                imgSrc: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`,
                title: `User ${i}`,
                description: `$${i}`,
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Item ${i}.`
            });
        }

        var totalCards = cardData.length;
        var totalItems = Math.ceil(totalCards / itemsPerSlide);

        for (var i = 0; i < totalItems; i++) {
            var $carouselItem = $('<div class="carousel-item"></div>');
            var $row = $('<div class="row g-4"></div>');

            for (var j = 0; j < itemsPerSlide; j++) {
                var cardIndex = i * itemsPerSlide + j;
                if (cardIndex < totalCards) {
                    var card = cardData[cardIndex];
                    var cardContent = `
                        <div class="col-md-6 col-lg-2 card-width">
                            <div class="card-wrapper">
                                <div class="card bg-light text-center">
                                    <div class="card-body text-center">
                                        <div class="image">
                                            <img src="${card.imgSrc}" class="rounded-circle mb-3" alt="">
                                        </div>
                                        <h3 class="card-title">${card.title}</h3>
                                        <p class="card-description">${card.description}</p>
                                        <p class="card-text">${card.text}</p>
                                        <div>
                                            <button class="bg-success card_btn">
                                                <span class="span-img "><i class="fa-solid fa-cart-shopping"></i></span>
                                                <span>Add to cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    $row.append(cardContent);
                }
            }

            $carouselItem.append($row);
            $carouselInner.append($carouselItem);
        }

        // Set the first item as active
        $carouselInner.children().first().addClass('active');
    }

    // Call the function on document ready and window resize
  updateCarouselItems();
    $(window).resize(updateCarouselItems);

    // Manually initialize the carousel
    $('#carouselExampleControls-3').carousel();
});
</script>