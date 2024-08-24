console.log(":workign");

// let url = `http://api.exchangeratesapi.io/v1/latest?access_key=e024448bcc60d954746fcd7121151df8&base=${base}`







async function populate(value , currency){
    let mystr =" "
   let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_5Apkegb5pjJvnnPSz3fBO0W8UE3xWAs3RXFBqdA0&base=${currency}`

   let response  = await fetch(url)
   let jResponse = await response.json()
   console.log(jResponse);
   for(let key of Object.keys(jResponse["data"])){
    console.log(key);
    
    mystr +=
    `
    <tr>
                    <td>${key}</td>
                    <td>${jResponse["data"][key]["code"]}</td>
                    <td>${Math.round(jResponse["data"][key]["value"] * value)}</td>
                </tr>
                `
    
   }
   console.log(mystr);
   
   let tablebody = document.querySelector("tbody");
tablebody.innerHTML =mystr


}
populate()

document.querySelector(".submitbtn").addEventListener("click", (e) =>{
    e.preventDefault();
    let value = parseInt(document.querySelector("#quantity").value)
    let currency = document.querySelector("#baseCurrency").value
    // console.log(base);
    
    populate(value, currency)
    document.querySelector(".output").style.display= "block"



})




