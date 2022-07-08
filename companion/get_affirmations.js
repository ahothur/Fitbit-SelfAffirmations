async function main() {
  
  let quotes_url = "https://type.fit/api/quotes";

  let quotes = await getJSON(quotes_url);
  if(quotes) {
    console.log('Fetch Successful!');
  }
  return quotes;  
}

// https://www.affirmations.dev/

async function getJSON(url) {
    return fetch('https://type.fit/api/quotes')
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}