

const findTheOldest = function(people) {
    let oldest = null;

    for (let person of people){
        if (!("yearOfDeath" in person))person.yearOfDeath = new Date().getFullYear();
        if (oldest === null) oldest = person;
        else if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) oldest = person;
    }

    return oldest;


};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
