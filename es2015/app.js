
    /* LET */

    let favoriteCityId = "rome";
    console.log(favoriteCityId);
    favoriteCityId = "paris";
    console.log(favoriteCityId);

    /* CONST */

    const citiesId = new Array("paris","nyc","rome","rio-de-janeiro");
    console.log(citiesId);
    citiesId.push("Tokyo");
    console.log(citiesId);

    /* CREATION OBJET */

    function getWeather(cityId){

        let city = cityId.toUpperCase();
        let temperature = 20;

        return obj = { city, temperature};
    };

    const weather = getWeather(favoriteCityId);
    console.log(weather);

    /* AFFECTATION DESTRUCTUREE */

    const {
        city: city, // je crée deux constantes city et température à partir de weather
        temperature: temperature // je pourrais d'ailleurs laisser uniquement city et température car les noms de variables ont le même nom que mes objets
    } = weather; // histoire de rester simple pour le début, je vais garder cette syntaxe

console.log(city);
console.log(temperature);


    /* REST OPERATOR */
