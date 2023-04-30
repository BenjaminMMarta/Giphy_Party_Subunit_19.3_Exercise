
// Variables //
const $textInput = $('#textInput');
const $submitButton = $('#submitButton');
const $removeImagesButton = $('#removeImagesButton');
const $gifContainer = $('.gifContainer');

// Function for selecting random gif from search results and appending to gifContainer //
function addGif(result){
    let results = result.data.length;
    if (results) {
        let randomResult = Math.floor(Math.random() * results);
        let $newContainer = $('<div>', {class: 'newContainer'});
        let $newGif = $('<img>', {src: result.data[randomResult].images.original.url,
        class: 'newGif'
        
        });
        $newContainer.append($newGif);
        $gifContainer.append($newContainer);
    }
}


// 'Click' event listener for 'Search Giphy' button which retrieves data from api //
$submitButton.on('click', async function(event) {
    event.preventDefault();
    console.log("I'm clicked");

    let gifSearch = $textInput.val();
    $textInput.val('');

    const getData = await axios.get("https://api.giphy.com/v1/gifs/search", {
       params: {
         q: gifSearch,
         api_key: "COOsEJPsFMR2p3xF9GymGcctf1ohA7zR"
         }
    });
    console.log(getData);
    addGif(getData.data);
});


// 'Click' event listener for 'Remove Images' which removes all gifs from gifContainer //
$removeImagesButton.on('click', function() {
    $gifContainer.empty();
});


