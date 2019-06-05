export function PostData(type, userData){
    let BaseUrl = 'https://api.thewallscript.com/restful/';
    return new Promise((resolve, reject) => {
        return fetch(BaseUrl+type,{
            method: 'POST',
            body: JSON.stringify(userData)
        })
    .then((response) => response.json())
    .then((responseJson) => {
      resolve(responseJson);
    })
    .catch((error) => {
      reject(error);
    });
    })
}