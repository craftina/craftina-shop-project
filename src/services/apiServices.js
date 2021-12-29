
const Backendless = require('backendless');
Backendless.serverURL = "https://eu-api.backendless.com"
Backendless.initApp('636B21A4-70D4-D302-FFC2-C24461E91D00',
'9508E315-CF0A-4701-96D7-5EAF69AAA3BE');

const url = 'https://dinkumdriving.backendless.app/api/data';

const onSuccess = (action, user) => {
    console.log(`User has been ${action}: ${user}`);
}

const onError = (error) => {
    console.error(error.message)
    console.error(error.code)
    console.error(error.status)
    throw error.message;
}

export function getCategories(){
    return fetch(`${url}/categories`)
    .then(res => res.json())
    .then(result => {
         return result;
        })
}

export function getProducts(type){
    return fetch(`${url}/${type}`)
    .then(res => res.json())
    .then(result => {
         return result;
        })
}

export function getItemDetails(type, id){
    return fetch(`${url}/${type}/${id}`)
    .then(res => res.json())
    .then(result => {
         return result;
        })
}


export function getCart(ownerId) {
    const whereClause = `ownerId='${ownerId}'`;
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);

    return Backendless.Data.of("Cart").find(queryBuilder)
        .then(function (result) {
            console.log('Success');
            return result;
            // every loaded object from the "Contact" table is now an individual plain JS object
        })
        .catch(onError);
}

export function addToCart(name, price, imgUrl, ownerId) {
    let order = {
        name: name,
        price: price,
        imgUrl: imgUrl,
        ownerId: ownerId
    }

    Backendless.Data.of("cart").save(order)
        .then(function () {
            console.log("new order instance has been saved");
        })
        .catch(function (error) {
            console.log("an error has occurred " + error.message);
        });
}

export function getReviews(itemId){
    const whereClause = `itemId='${itemId}'`;
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);

    Backendless.Data.of("reviews").find(queryBuilder)
        .then(function (result) {
            console.log('Success');
            console.log(result);
            return result;
        })
        .catch(onError);
}


export function addReview(username, rating, text, ownerId, itemId) {
    let review = {
        username: username,
        rating: rating,
        text: text,
        ownerId: ownerId,
        itemId: itemId
    }

    Backendless.Data.of("reviews").save(review)
        .then(function () {
            console.log("you aded review");
        })
        .catch(function (error) {
            console.log("an error has occurred " + error.message);
        });
}

export function editReview(rating, text, objectId) {
    let review = {
        rating: rating,
        text: text,
        objectId: objectId,
    }
    console.log('yes');

    Backendless.Data.of( "reviews" ).save( review )
  .then( function( savedObject ) {
      console.log( "you updated a review" );
    })
  .catch( function( error ) {
      console.log( "an error has occurred " + error.message );
    });
}



