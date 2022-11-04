// Asking user personal info: date of birth, city, favorite sport
// And checking if user entering something
const userDateOfBirth = Number(prompt("Добрий день, введіть будь ласка свій рік народження (Наприклад: 1990, 2000, 2010)"));
if (!userDateOfBirth) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження")
}
const userCity = prompt('Введіть місто в якому ви живете (Наприклад: Київ, Вашингтон, Лондон)');
if (!userCity) {
    alert("Шкода, що Ви не захотіли ввести своє місто проживання")
}
const userSport = prompt('Введіть ваш улюбленний вид спорту (Наприклад: Футбол, Баскетбол, Теніс)');
if (!userSport) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту")
}

// Calculating user age
const userAgeCalc = () => {
    if (!userDateOfBirth) {
        return "Немає інформації";
    } else {
        return new Date().getFullYear() - userDateOfBirth;
    }
};

// List of country capitals
const capitalsOfContries = {
    Київ: "України",
    Вашингтон: "США",
    Лондон: "Великобританії"
};

// List of sports champions
const championsOfSports = {
    Футбол : "Реал Мадрид", 
    Баскетбол: "Милуоки Бакс", 
    Теніс: "Виктор Аксельсен"
};

// User info list
const userInfo = {
    Age: userAgeCalc(),
    City: userCity,
    Sport: userSport
};

// Creating arrays for checks
const arrayCapital = Object.keys(capitalsOfContries);
const arraySport = Object.keys(championsOfSports);

// Checking if user city is a capital
const userCityCheck = () => {
    if (!userCity) {
        return "Немає інформації";
    } else if(arrayCapital.includes(userInfo.City)) {
        const country = capitalsOfContries[userInfo.City];
        alert(`Ти живеш у столиці ${country}`);
        return userInfo.City;
    } else {
        return userInfo.City;
    }
}

// Checking if user sport has a champion from list
const userSportCheck = () => {
    if (!userSport) {
        return "Немає інформації";
    } else if (arraySport.includes(userInfo.Sport)) {
        if (userInfo.Sport == arraySport[0] || userInfo.Sport == arraySport[1]) {
            const championTeam = championsOfSports[userSport];
            alert(`Круто, хочеш грати у ${championTeam}?`)
            return userInfo.Sport;
        } else {
            const champion = championsOfSports[userSport];
            alert(`Круто, хочеш стати як ${champion}?`)
            return userInfo.Sport;
        }
    } else {
        return userInfo.Sport;
    }
}

// Displaying user the result
alert(`Ваш вік: ${userInfo.Age}\nВаше місто: ${userCityCheck()}\nВаш улюблений спорт: ${userSportCheck()}`)