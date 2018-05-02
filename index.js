const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) { console.log(driver.name)})
}

const logDriversByHometown = function (drivers, location) {
  drivers.logDriverNames(drivers.filter(driver => driver.hometown == location))
}