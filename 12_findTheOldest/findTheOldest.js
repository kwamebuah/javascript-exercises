const findTheOldest = function (people) {
    const oldest = people.sort((person1, person2) => {
        if (!person1.yearOfDeath) {
            person1.yearOfDeath = (new Date()).getFullYear();
        }
        if (!person2.yearOfDeath) {
            person2.yearOfDeath = (new Date()).getFullYear();
        }
        return (person2.yearOfDeath - person2.yearOfBirth) - (person1.yearOfDeath - person1.yearOfBirth);
    })[0];

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
