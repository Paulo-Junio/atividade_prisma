import client from "../config/database.js";

async function getCars() {
  const data = await client.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await client.cars.findUnique({
    where: {
      id: id
    }
  });
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await client.cars.findUnique({
    where: {
      "licensePlate": licensePlate
    }
  });
  return data;
}

async function createOrUpdateCar(model: string, licensePlate: string, year: number, color: string) {
  await client.cars.create({
    data: {
      model: model,
      "licensePlate": licensePlate,
      year: year, 
      color: color
    }
  })
}

async function deleteCar(id: number) {
  await client.cars.delete({
    where: {
      id: id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createOrUpdateCar,
  deleteCar
}

export default carRepository;