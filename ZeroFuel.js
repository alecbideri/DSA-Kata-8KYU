function fuelAvailable(distance , mpg , fuelLeft){
    const distanceTraveled = mpg * fuelLeft;

    return distanceTraveled >= distance ;
}

console.log(fuelAvailable(50 , 25 , 3));