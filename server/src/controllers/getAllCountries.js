const { conn } = require('../db');
const { Country } = require("../models/Country.js");
const axios = require("axios")


const getCountries= async ()=>{
    try {
        const apiInfo= await axios.get(conn)
        const apiData = arr.map(country =>{
    return {
    id: country.cca3,
    name: country.official,
    flagImage:country.flags[0],
    continent:country.continents[0],
    capital: e.capital ? e.capital[0] : "No capital",
    subregion:country.subregion,
    population:country.population,
    }
})
    await Country.bulkCreate(apiData);
    
    } catch (error) {
        console.log(error)
    }
}



module.exports={getCountries}