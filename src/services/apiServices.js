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

