const getPopulation = () => {
  return 100;
};

const getCountry = () => {
  return "United States";
};

const getData = () => {
  return [100, "United States"];
};

const [population, country] = getData();

const getData = () => {
  return {
    population: 100,
    country: "United States"
  };
};

const { population, country } = getData();
