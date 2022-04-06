//import casual

const casual = require("casual");

const sent1 = casual.sentence;

// console.log("sent1===", sent1);

//funkcijos generateAdress() pagalba sugeneruoti random adresa is casual
// funkcija turetu grazinti objekta kuris turi country, city, state, street, address

const generateAdress = () => {
  return {
    country: casual.country,
    city: casual.city,
    state: casual.state,
    street: casual.street,
    address: casual.address,
  };
};
const c1 = generateAdress();
console.log("c1===", c1);

const d1 = casual.date("DD-MMM-YYYY");
console.log("d1===", d1);

//casual.js sukuriam funkcija kuri generuoja useri su 3 savybem

//exportuojam ta funkcija ir panaudojam ja index.js

const generateUser = () => {
  return {
    firstName: casual.first_name,
    lastName: casual.last_name,
    phone: casual.phone,
  };
};
const u = generateUser();
console.log("u===", u);

// module.exports = {
//   generateUser,
// };

module.exports = {
  generateAdress,
};
