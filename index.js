const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) { console.log(driver.name)})
}

const logDriversByHometown = function (drivers, location) {
  logDriverNames(drivers.filter(driver => driver.hometown == location))
}

const driversByRevenue = function (drivers) {
  const newDrivers = Object.assign([], ...drivers)
  return drivers.sort(function(){})
}