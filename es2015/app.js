
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


     /* PROMISES, SET, MAP, ARROW FUNCTION */


     class TripService {

        constructor() {
            
            let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg')
            let trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
            let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

            let trips = new Set(); // création du set
            trips.add(trip1);
            trips.add(trip2);

            console.log(trips.size); // 2
            console.log(trips.has(trip1)); // true

            trips.add(trip3);
            console.log(trips.size); // 3

            trips.delete(trip1);
            console.log(trips.size); // 2  
             
        }


        findByName(tripName) {
    
             return new Promise((resolve, reject) => {
    
                 setTimeout( () => {
                     // ici l'exécution du code est asynchrone
    
                     // TODO utiliser resolve et reject en fonction du résultat de la recherche
    
                    



                 }, 2000)
            });
        }
    }


    class PriceService {
    
        constructor() {

            let prices = new Map(); // création d'un map
            prices.set('paris', 100);
            prices.set('rio-de-janeiro', 800); 

        }
    
        findPriceByTripId(tripId) {
    
           return new Promise((resolve, reject) => {
    
                        setTimeout( () => {
                            // ici l'exécution du code est asynchrone
    
                            // TODO utiliser resolve et reject en fonction du résultat de la recherche
    
                        }, 2000)
                   });
        }
    }