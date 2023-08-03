const mongoose = require('mongoose');
const Car = require('./models/car.js');

mongoose
    .connect("mongodb+srv://nmemarcoding:dmr@cluster0.phege8d.mongodb.net/")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
})

const cars = [
  { make: 'Toyota', model: 'Camry', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'White', price: 50, image: 'image_url1', licensePlateNumber: "K7J3DK7" },
  { make: 'Toyota', model: 'Corolla', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Silver', price: 48, image: 'image_url26', licensePlateNumber: "LVH87SF" },
  { make: 'Toyota', model: 'RAV4', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Blue', price: 55, image: 'image_url27', licensePlateNumber: "K9B4D8J" },
  { make: 'Toyota', model: 'Highlander', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Gray', price: 68, image: 'image_url36', licensePlateNumber: "N6GFD57" },
  { make: 'Toyota', model: 'Sienna', type: 'Minivan', fuelType: 'Gas', seat: 7, year: 2022, color: 'Red', price: 60, image: 'image_url37', licensePlateNumber: "MKJ78D4" },

  { make: 'Honda', model: 'Civic', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Black', price: 55, image: 'image_url2', licensePlateNumber: "K8765FG" },
  { make: 'Honda', model: 'Accord', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 58, image: 'image_url28', licensePlateNumber: "VKJ6HG9" },
  { make: 'Honda', model: 'CR-V', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'White', price: 63, image: 'image_url29', licensePlateNumber: "PSD86MA" },
  { make: 'Honda', model: 'Pilot', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'Blue', price: 75, image: 'image_url38', licensePlateNumber: "UJB4R7E" },
  { make: 'Honda', model: 'Odyssey', type: 'Minivan', fuelType: 'Gas', seat: 7, year: 2022, color: 'Silver', price: 65, image: 'image_url39', licensePlateNumber: "DMK9X2H" },

  { make: 'Ford', model: 'Focus', type: 'Hatchback', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 45, image: 'image_url3', licensePlateNumber: "GHT56TY" },
  { make: 'Ford', model: 'Mustang', type: 'Coupe', fuelType: 'Gas', seat: 4, year: 2023, color: 'Yellow', price: 65, image: 'image_url30', licensePlateNumber: "YUJ78HG" },
  { make: 'Ford', model: 'Escape', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 57, image: 'image_url31', licensePlateNumber: "OPI34KL" },
  { make: 'Ford', model: 'Explorer', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Red', price: 68, image: 'image_url40', licensePlateNumber: "EWS21BX" },
  { make: 'Ford', model: 'Expedition', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2022, color: 'White', price: 80, image: 'image_url41', licensePlateNumber: "POI98NM" },

  // Enterprise Rent-A-Car
  { make: 'Chevrolet', model: 'Impala', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Black', price: 54, image: 'image_url61', licensePlateNumber: "QWE1234" },
  { make: 'Ford', model: 'F-150', type: 'Truck', fuelType: 'Gas', seat: 5, year: 2023, color: 'Silver', price: 75, image: 'image_url62', licensePlateNumber: "TYU5678" },

  // Hertz
  { make: 'Toyota', model: 'Corolla', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Gray', price: 53, image: 'image_url63', licensePlateNumber: "JKL7890" },
  { make: 'Jeep', model: 'Grand Cherokee', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 80, image: 'image_url64', licensePlateNumber: "PLK4321" },

  // Avis
  { make: 'Nissan', model: 'Maxima', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 57, image: 'image_url65', licensePlateNumber: "MNB7654" },
  { make: 'Mercedes-Benz', model: 'GLE', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'White', price: 95, image: 'image_url66', licensePlateNumber: "QWE7890" },

  // Budget Car Rental
  { make: 'Honda', model: 'Accord', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Silver', price: 58, image: 'image_url67', licensePlateNumber: "IKJ1234" },
  { make: 'Toyota', model: 'Highlander', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'Black', price: 85, image: 'image_url68', licensePlateNumber: "ZXK5678" },

  // National Car Rental
  { make: 'Ford', model: 'Escape', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'White', price: 62, image: 'image_url69', licensePlateNumber: "POI3456" },
  { make: 'Chrysler', model: 'Pacificia', type: 'Minivan', fuelType: 'Gas', seat: 7, year: 2023, color: 'Red', price: 70, image: 'image_url70', licensePlateNumber: "BVC8901" },

  // Alamo Rent A Car
  { make: 'Toyota', model: 'Camry', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Silver', price: 50, image: 'image_url1', licensePlateNumber: "TYU4567" },
  { make: 'Jeep', model: 'Wrangler', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2022, color: 'Black', price: 78, image: 'image_url13', licensePlateNumber: "KJH1234" },

  // Thrifty Car Rental
  { make: 'Kia', model: 'Rio', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Blue', price: 46, image: 'image_url71', licensePlateNumber: "POI5678" },
  { make: 'Chevrolet', model: 'Traverse', type: 'SUV', fuelType: 'Gas', seat: 8, year: 2023, color: 'Silver', price: 79, image: 'image_url72', licensePlateNumber: "PLK7890" },

  // Dollar Car Rental
  { make: 'Hyundai', model: 'Accent', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2022, color: 'Red', price: 45, image: 'image_url73', licensePlateNumber: "QWE3456" },
  { make: 'Jeep', model: 'Compass', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Gray', price: 65, image: 'image_url74', licensePlateNumber: "BVC5678" },

  // Sixt Rent A Car
  { make: 'Volkswagen', model: 'Passat', type: 'Sedan', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 60, image: 'image_url75', licensePlateNumber: "TYU6789" },
  { make: 'Tesla', model: 'Model Y', type: 'SUV', fuelType: 'Electric', seat: 5, year: 2023, color: 'Blue', price: 110, image: 'image_url76', licensePlateNumber: "IOP4567" },

  // Fox Rent A Car
  { make: 'Mazda', model: 'CX-5', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Red', price: 60, image: 'image_url77', licensePlateNumber: "GHJ7890" },
  { make: 'Mitsubishi', model: 'Outlander', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 70, image: 'image_url78', licensePlateNumber: "UIO1234" },

  // Payless Car Rental
  { make: 'Kia', model: 'Soul', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Silver', price: 50, image: 'image_url79', licensePlateNumber: "PLK9012" },
  { make: 'Ford', model: 'Explorer', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'Black', price: 80, image: 'image_url80', licensePlateNumber: "ASD5678" },
  // BMW
  { make: 'BMW', model: 'X5', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 100, image: 'image_url81', licensePlateNumber: "GHJ9012" },
  { make: 'BMW', model: 'X7', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 120, image: 'image_url82', licensePlateNumber: "UIO3456" },
  // Audi
  { make: 'Audi', model: 'Q5', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url83', licensePlateNumber: "PLK9012" },
  { make: 'Audi', model: 'Q7', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url84', licensePlateNumber: "ASD5678" },
  // Mercedes-Benz
  { make: 'Mercedes-Benz', model: 'GLC', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url85', licensePlateNumber: "GHJ9012" },
  { make: 'Mercedes-Benz', model: 'GLE', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url86', licensePlateNumber: "UIO3456" },
  // Land Rover
  { make: 'Land Rover', model: 'Range Rover Sport', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 100, image: 'image_url87', licensePlateNumber: "PLK9012" },
  { make: 'Land Rover', model: 'Range Rover', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 120, image: 'image_url88', licensePlateNumber: "ASD5678" },
  // Lexus
  { make: 'Lexus', model: 'RX', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url89', licensePlateNumber: "GHJ9012" },
  { make: 'Lexus', model: 'LX', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url90', licensePlateNumber: "UIO3456" },
  // Infiniti
  { make: 'Infiniti', model: 'QX50', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url91', licensePlateNumber: "PLK9012" },
  { make: 'Infiniti', model: 'QX80', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url92', licensePlateNumber: "ASD5678" },
  // Volvo
  { make: 'Volvo', model: 'XC60', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url93', licensePlateNumber: "GHJ9012" },
  { make: 'Volvo', model: 'XC90', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url94', licensePlateNumber: "UIO3456" },
  // Porsche
  { make: 'Porsche', model: 'Macan', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url95', licensePlateNumber: "PLK9012" },
  { make: 'Porsche', model: 'Cayenne', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url96', licensePlateNumber: "ASD5678" },
  // Jaguar
  { make: 'Jaguar', model: 'F-Pace', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url97', licensePlateNumber: "GHJ9012" },
  { make: 'Jaguar', model: 'I-Pace', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url98', licensePlateNumber: "UIO3456" },
  // Acura
  { make: 'Acura', model: 'RDX', type: 'SUV', fuelType: 'Gas', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url99', licensePlateNumber: "PLK9012" },
  { make: 'Acura', model: 'MDX', type: 'SUV', fuelType: 'Gas', seat: 7, year: 2023, color: 'White', price: 110, image: 'image_url100', licensePlateNumber: "ASD5678" },
  
  // hybrid
  {make: 'Toyota', model: 'Prius', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'Black', price: 50, image: 'image_url101', licensePlateNumber: "GHJ9012" },
  {make: 'Toyota', model: 'Prius Prime', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'White', price: 60, image: 'image_url102', licensePlateNumber: "UIO3456" },
  {make: 'Toyota', model: 'Prius V', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'Black', price: 70, image: 'image_url103', licensePlateNumber: "PLK9012" },
  {make: 'Toyota', model: 'Prius C', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'White', price: 80, image: 'image_url104', licensePlateNumber: "ASD5678" },
  {make: 'Toyota', model: 'Camry Hybrid', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url105', licensePlateNumber: "GHJ9012" },
  {make: 'Toyota', model: 'Avalon Hybrid', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'White', price: 100, image: 'image_url106', licensePlateNumber: "UIO3456" },
  {make: 'Toyota', model: 'Highlander Hybrid', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'Black', price: 110, image: 'image_url107', licensePlateNumber: "PLK9012" },
  {make: 'Toyota', model: 'RAV4 Hybrid', type: 'Hybrid', fuelType: 'Hybrid', seat: 5, year: 2023, color: 'White', price: 120, image: 'image_url108', licensePlateNumber: "ASD5678" },
  // plugin hybrid
  {make: 'Toyota', model: 'Prius Prime', type: 'Plugin Hybrid', fuelType: 'Plugin Hybrid', seat: 5, year: 2023, color: 'Black', price: 50, image: 'image_url109', licensePlateNumber: "GHJ9012" },
  {make: 'bmw', model: '330e', type: 'Plugin Hybrid', fuelType: 'Plugin Hybrid', seat: 5, year: 2023, color: 'White', price: 60, image: 'image_url110', licensePlateNumber: "UIO3456" },
  {make: 'bmw', model: '530e', type: 'Plugin Hybrid', fuelType: 'Plugin Hybrid', seat: 5, year: 2023, color: 'Black', price: 70, image: 'image_url111', licensePlateNumber: "PLK9012" },
  {make: 'bmw', model: '745e', type: 'Plugin Hybrid', fuelType: 'Plugin Hybrid', seat: 5, year: 2023, color: 'White', price: 80, image: 'image_url112', licensePlateNumber: "ASD5678" },

  // electric
  {make: 'Tesla', model: 'Model 3', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'Black', price: 50, image: 'image_url113', licensePlateNumber: "GHJ9012" },
  {make: 'Tesla', model: 'Model S', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'White', price: 60, image: 'image_url114', licensePlateNumber: "UIO3456" },
  {make: 'Tesla', model: 'Model X', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'Black', price: 70, image: 'image_url115', licensePlateNumber: "PLK9012" },
  {make: 'Tesla', model: 'Model Y', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'White', price: 80, image: 'image_url116', licensePlateNumber: "ASD5678" },
  {make: 'kia', model: 'Niro EV', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'Black', price: 90, image: 'image_url117', licensePlateNumber: "GHJ9012" },
  {make: 'kia', model: 'Soul EV', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'White', price: 100, image: 'image_url118', licensePlateNumber: "UIO3456" },
  {make: 'kia', model: 'Kona Electric', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'Black', price: 110, image: 'image_url119', licensePlateNumber: "PLK9012" },
  {make: 'kia', model: 'Niro Plug-in Hybrid', type: 'Electric', fuelType: 'Electric', seat: 5, year: 2023, color: 'White', price: 120, image: 'image_url120', licensePlateNumber: "ASD5678" },
  

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