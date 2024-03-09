/**
 * Author: Nishan Shrestha
 * Date: 2024-03-08
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
// normally we would load a key through the .env file
const PIXABAY_API_KEY = '42719389-74f878a1716b72309d1c965ea';
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=<API_KEY>';
// Constant for image count
const IMAGE_COUNT = 30;


/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = (pictureData) => {
    const blogColumn = $('.blog-column');

    if (pictureData?.length > 0) {
        for (let i = 0; i < pictureData?.length; i++) {
            let id = i;
            let pixabayPicture = pictureData[i];

            let card = $('<div class="card" style="width: 18rem;"></div>')
                .attr("id", "card_" + id)
                .appendTo(blogColumn);

            let cardBody = $('<div class="card-body"></div>')
                .appendTo(card);

            let pic = $('<img>')
                .attr("id", "img-" + i)
                .attr("src", pixabayPicture.webformatURL)
                .attr("alt", pixabayPicture.tags)
                .addClass("card-img-top")
                .appendTo(cardBody);

            let cardParagraph = $('<div class="card-body-paragraph"></div>')
                .text(pixabayPicture.tags)
                .appendTo(cardBody);
        }
    }
};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => {
    const url = `${PIXABAY_URL.replace('<API_KEY>', PIXABAY_API_KEY)}&q=cars&orientation=horizontal&image_type=photo&per_page=${IMAGE_COUNT}`;
    // use fetch to get the pictures from the API
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // data retrieved
            // create post
            if (data?.hits?.length > 0) {
                makePosts(data?.hits);
            }
        })
        // handle error(s) with .catch()
        .catch((err) => {
            //log to console
            console.log(err);
        })
};

getPictures();