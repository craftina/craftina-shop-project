const url = 'https://dinkumdriving.backendless.app/api/data';

export function getCategories(){
    return fetch(`${url}/categories`)
    .then(res => res.json())
    .then(result => {
         return result;
        })
}

export function getMugs(){
    return fetch(`${url}/mugs`)
    .then(res => res.json())
    .then(result => {
         return result;
        })
}

export function getMugDetails(id){
    return fetch(`${url}/mugs/${id}`)
    .then(res => res.json())
    .then(result => {
         return result;
        })
}

// export function getCart(ownerId){
//     return fetch(`${url}/cart?sortBy=%60${ownerId}%60%20desc`)
//     .then(res => res.json())
//     .then(result => {
//         console.log(result);
//          return result;
//         })
// }

