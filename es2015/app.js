
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

    
    const [parisId, nycId, ...otherCitiesId] = citiesId;

    console.log(parisId);
    console.log(nycId);
    console.log(otherCitiesId.length);


    /* CLASSES */


    class Trip {
        constructor(id, name, imageUrl) {
            this.id = id;
            this.name = name;
            this.imageUrl = imageUrl;
        }


        toString() {
            return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price +']';
        }


        get price(){
            return this._price;
        }
    
        set price(newPrice) {
            this._price = newPrice;
        }


        static getDefaultTrip() {
            return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
        }
        
    }

    let parisTrip = new Trip('paris','Paris','img/paris.jpg'); // une instance de trip avec des infos spécifiques
    parisTrip.price = 100.
    console.log(parisTrip);
    console.log(parisTrip.name);
    console.log(parisTrip.toString());

    const defaultTrip = Trip.getDefaultTrip();
    console.log(defaultTrip.toString());


     /* HERITAGE */


     class FreeTrip extends Trip {

        constructor(id, name, imageUrl) {
            super(id, name, imageUrl);
            this.price = 0; // pas de this._price car on crée le notre ici. 

        }

        toString() {

            return 'Free'+super.toString(); // avec super, j'appelle la méthode de la classe parente. J'ajoute juste Free avec de la concat.
        }


     }

     let freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
     console.log(freeTrip.toString());


     