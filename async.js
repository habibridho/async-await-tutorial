var fetch = require("node-fetch")

async function getCountries() {
  let res = await fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true")
  let json = await res.json()
  let code = json[0].alpha2Code
  let res2 = await fetch("http://country.io/phone.json")
  let json2 = await res2.json()
  console.log(json2[code])
}

getCountries()