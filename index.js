const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) { console.log(driver.name)})
}

const logDriversByHometown = function (drivers, location) {
  drivers.filter(driver => driver.hometown == location).logDriverNames
}