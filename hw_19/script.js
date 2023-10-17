let room = {
    height: 3,
    tv: "samsung",
    big: true
  };
  alert(typeof room.big);

  let user = {
    name: "John",
    age: 30
  };
  
  if (Object.keys(user).length > 0 && user.hasOwnProperty('age')) {
    console.log('The object is not empty and contains a key age.');
  } else {
    console.log('The object is empty or does not contain a key age.');
  }
  
  let users = {
    user_1: {
      name: "John",
      age: 30
    },
    user_2: {
      name: "Bob",
      age: 21
    },
    user_3: {
      name: "Anna",
      age: 19
    }
  };
  let foundUser = null;
  for (let key in users) {
    if (users[key].name === "Bob") {
      foundUser = users[key];
      break; 
    }
  }
  console.log(foundUser);

  for (const key in users) {
    if (users[key].name === "Anna") {
      delete users[key];
    }
  }

  const obj = {
    id: 5,
    token: 12343423
  };
  
  const id = obj["id"];
  console.log(id);

  let car = {
    manufacturer: "Volkswagen",
    model: "Beetle",
    year: 2014,
    averageSpeed: 100, 
    fuelTankCapacity: 60, 
    averageFuelConsumption: 5,
    drivers: [],
  
    displayInformation: function() {
      console.log(`Car: ${this.manufacturer} ${this.model}`);
      console.log(`Year of manufacture: ${this.year}`);
      console.log(`Average speed: ${this.averageSpeed} km/h`);
      console.log(`Fuel tank capacity: ${this.fuelTankCapacity} liters`);
      console.log(`Average fuel consumption: ${this.averageFuelConsumption} liters per 100 km`);
      console.log(`Drivers: ${this.drivers.join(', ')}`);
    },
  
    addDriver: function(driverName) {
      this.drivers.push(driverName);
    },
  
    checkDriver: function(driverName) {
      return this.drivers.includes(driverName);
    },
  
    calculateTrip: function(distance) {
      const travelTime = distance / this.averageSpeed;
      const breakCount = Math.floor(travelTime / 4);
      const breakHours = breakCount;
      const requiredFuel = (distance / 100) * this.averageFuelConsumption;
  
      return {
        travelTime,
        breakCount,
        breakHours,
        requiredFuel
      };
    }
  };
  
  car.displayInformation();
  
  car.addDriver("Driver 1");
  car.addDriver("Driver 2");
  
  console.log(car.checkDriver("Driver 1")); 
  console.log(car.checkDriver("Driver 3")); 

  const trip = car.calculateTrip(400);
  console.log(trip);
  