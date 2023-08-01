const mongoose = require('mongoose');
const Car = require('./models/car.js');

mongoose
    .connect("mongodb+srv://nmemarcoding:dmr@cluster0.phege8d.mongodb.net/")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
})

const cars = [
    { make: 'Toyota', model: 'Camry', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'White', price: 50, image: 'image_url1' },
    { make: 'Toyota', model: 'Corolla', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Silver', price: 48, image: 'image_url26' },
    { make: 'Toyota', model: 'RAV4', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Blue', price: 55, image: 'image_url27' },
    { make: 'Toyota', model: 'Highlander', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Gray', price: 68, image: 'image_url36' },
    { make: 'Toyota', model: 'Sienna', type: 'Minivan', fuelType: 'Gas', seat: 7, year: 2022, color: 'Red', price: 60, image: 'image_url37' },
  
    { make: 'Honda', model: 'Civic', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Black', price: 55, image: 'image_url2' },
    { make: 'Honda', model: 'Accord', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 58, image: 'image_url28' },
    { make: 'Honda', model: 'CR-V', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'White', price: 63, image: 'image_url29' },
    { make: 'Honda', model: 'Pilot', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'Blue', price: 75, image: 'image_url38' },
    { make: 'Honda', model: 'Odyssey', type: 'Minivan', fuelType: 'Gas', seat: 7, year: 2022, color: 'Silver', price: 65, image: 'image_url39' },
  
    { make: 'Ford', model: 'Focus', type: 'Hatchback', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 45, image: 'image_url3' },
    { make: 'Ford', model: 'Mustang', type: 'Coupe', fuelType: 'Gas', seat: 4, year: 2023, color: 'Yellow', price: 65, image: 'image_url30' },
    { make: 'Ford', model: 'Escape', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 57, image: 'image_url31' },
    { make: 'Ford', model: 'Explorer', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Red', price: 68, image: 'image_url40' },
    { make: 'Ford', model: 'Expedition', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2022, color: 'White', price: 80, image: 'image_url41' },
  
    { make: 'BMW', model: 'X3', type: 'SUV', fuelType: 'Diesel', seat: 5, year: 2022, color: 'Silver', price: 70, image: 'image_url4' },
    { make: 'BMW', model: '3 Series', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'White', price: 75, image: 'image_url32' },
    { make: 'BMW', model: 'X5', type: 'SUV', fuelType: 'Diesel', seat: 7, year: 2023, color: 'Gray', price: 90, image: 'image_url33' },
    { make: 'BMW', model: '5 Series', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 85, image: 'image_url42' },
    { make: 'BMW', model: 'i8', type: 'Coupe', fuelType: 'Hybrid', seat: 2, year: 2022, color: 'Blue', price: 130, image: 'image_url43' },
  
    { make: 'Audi', model: 'A6', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Red', price: 65, image: 'image_url5' },
    { make: 'Audi', model: 'Q5', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 68, image: 'image_url34' },
    { make: 'Audi', model: 'A4', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Blue', price: 62, image: 'image_url35' },
    { make: 'Audi', model: 'Q7', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2022, color: 'Silver', price: 75, image: 'image_url44' },
    { make: 'Audi', model: 'e-tron', type: 'SUV', fuelType: 'Electric', seat: 5, year: 2023, color: 'Gray', price: 90, image: 'image_url45' },
  
    { make: 'Chevrolet', model: 'Malibu', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 52, image: 'image_url46' },
  { make: 'Chevrolet', model: 'Equinox', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 59, image: 'image_url47' },
  { make: 'Chevrolet', model: 'Tahoe', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'White', price: 72, image: 'image_url48' },
  { make: 'Chevrolet', model: 'Suburban', type: 'SUV', fuelType: 'Gas', seat: 9, year: 2023, color: 'Black', price: 80, image: 'image_url49' },

  { make: 'Hyundai', model: 'Elantra', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Silver', price: 47, image: 'image_url50' },
  { make: 'Hyundai', model: 'Tucson', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 53, image: 'image_url8' },
  { make: 'Hyundai', model: 'Santa Fe', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Blue', price: 58, image: 'image_url51' },
  { make: 'Hyundai', model: 'Palisade', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 68, image: 'image_url52' },

  { make: 'Kia', model: 'Forte', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'White', price: 49, image: 'image_url53' },
  { make: 'Kia', model: 'Sportage', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 55, image: 'image_url54' },
  { make: 'Kia', model: 'Sorento', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Silver', price: 60, image: 'image_url55' },
  { make: 'Kia', model: 'Telluride', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'Gray', price: 65, image: 'image_url56' },

  { make: 'Nissan', model: 'Sentra', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 48, image: 'image_url57' },
  { make: 'Nissan', model: 'Rogue', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Silver', price: 54, image: 'image_url58' },
  { make: 'Nissan', model: 'Pathfinder', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Red', price: 63, image: 'image_url59' },
  { make: 'Nissan', model: 'Armada', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'White', price: 75, image: 'image_url60' },
 
    // Enterprise Rent-A-Car
    { make: 'Chevrolet', model: 'Impala', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Black', price: 54, image: 'image_url61' },
    { make: 'Ford', model: 'F-150', type: 'Truck', fuelType: 'Gas', seat: 5, year: 2023, color: 'Silver', price: 75, image: 'image_url62' },
    
    // Hertz
    { make: 'Toyota', model: 'Corolla', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Gray', price: 53, image: 'image_url63' },
    { make: 'Jeep', model: 'Grand Cherokee', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 80, image: 'image_url64' },
  
    // Avis
    { make: 'Nissan', model: 'Maxima', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 57, image: 'image_url65' },
    { make: 'Mercedes-Benz', model: 'GLE', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'White', price: 95, image: 'image_url66' },
  
    // Budget Car Rental
    { make: 'Honda', model: 'Accord', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Silver', price: 58, image: 'image_url67' },
    { make: 'Toyota', model: 'Highlander', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'Black', price: 85, image: 'image_url68' },
  
    // National Car Rental
    { make: 'Ford', model: 'Escape', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'White', price: 62, image: 'image_url69' },
    { make: 'Chrysler', model: 'Pacificia', type: 'Minivan', fuelType: 'Gas', seat: 7, year: 2023, color: 'Red', price: 70, image: 'image_url70' },
  
    // Alamo Rent A Car
    { make: 'Toyota', model: 'Camry', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Silver', price: 50, image: 'image_url1' },
    { make: 'Jeep', model: 'Wrangler', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2022, color: 'Black', price: 78, image: 'image_url13' },
  
    // Thrifty Car Rental
    { make: 'Kia', model: 'Rio', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 46, image: 'image_url71' },
    { make: 'Chevrolet', model: 'Traverse', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'Silver', price: 79, image: 'image_url72' },
  
    // Dollar Car Rental
    { make: 'Hyundai', model: 'Accent', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Red', price: 45, image: 'image_url73' },
    { make: 'Jeep', model: 'Compass', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Gray', price: 65, image: 'image_url74' },
  
    // Sixt Rent A Car
    { make: 'Volkswagen', model: 'Passat', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 60, image: 'image_url75' },
    { make: 'Tesla', model: 'Model Y', type: 'SUV', fuelType: 'Electric', seat: 5, year: 2023, color: 'Blue', price: 110, image: 'image_url76' },

    // Fox Rent A Car
    { make: 'Mazda', model: 'CX-5', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 60, image: 'image_url77' },
    { make: 'Mitsubishi', model: 'Outlander', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 70, image: 'image_url78' },

    // Payless Car Rental
    { make: 'Kia', model: 'Soul', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Silver', price: 50, image: 'image_url79' },
    { make: 'Ford', model: 'Explorer', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Black', price: 80, image: 'image_url80' },

   
  ];
  
  const insertCarsWithSearchField = async () => {
  try {
    for (const carData of cars) {
      // Create a new Car instance
      const car = new Car(carData);
      // Save the car, which will trigger the 'pre('save')' hook and generate the 'search' field
      await car.save();
    }
    console.log('Seeding successful');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Call the function to insert cars with the 'search' field
insertCarsWithSearchField();