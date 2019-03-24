// api link: IvMgFRbKK9s3I4vlIXK1WdYsG8kQkadAcx7NhspEIDWW5ZEWT5

//query form 
const form = document.getElementById('query-form');

//text input field 
const query = document.getElementById('query');

const list = document.getElementById('list-data');

//set onsubmit
form.onsubmit = function (event){
    event.preventDefault();

    //get value in Input field 
    const queryTerm = query.value;
    console.log(queryTerm);

    getTaggedPhotos(queryTerm);

}

function getTaggedPhotos(tagName){

fetch('https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=E5uynaPAoPrFrIeEvcRe7NMH2Jy3dPK3WUHh9Y8l67LPMyL5yh')
.then(function(response){
    return response.json();
})
.then(function(result){

    //clear list 
    list.innerHTML = '';

    const items = result.response;

    for(let i = 0; i < items.length; i ++){
        const item = items[i];

        if(item.photos != undefined){
            const altSizes = item.photos[0].alt_sizes
        const imgSrc = altSizes[altSizes.length - 3].url;

        const img = document.createElement('img');
        img.src = imgSrc;

        const li = document.createElement('li');

        li.appendChild(img);
        //li.innerHTML = imgSrc;

        list.appendChild(li);
    }
    }
})
}

/*
getTaggedPhotos('dogs')

setTimeout(function(){
    getTaggedPhotos('food')

}, 5000)
*/

