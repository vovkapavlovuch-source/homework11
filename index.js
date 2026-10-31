// 1.Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: `Volodia`,
    accountNumber: 1,
    balance: 1000,

    deposit(money) {
        this.balance += money;
    },

    withdraw(money) {
        if (this.balance > money) {
            this.balance -= money;
        }
        else {
            alert(`На рахунку недостатньо коштів`);
        }
    },
}
const res = confirm(`Ви дійсно хочете поповнити рахунок?`)
if (res) {
    const dep = Number(prompt(`Введіть сумму поповнення`));
    bankAccount.deposit(dep);
    alert(`На вашому рахунку ${bankAccount.balance}`)
}
else {
    const dep = Number(prompt(`Введіть сумму зняття`));
    bankAccount.withdraw(dep);
    alert(`На вашому рахунку ${bankAccount.balance}`)
}

// 2.Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

let prompts = Number(prompt("Введіть температуру"));
const weather = {
    temperature: prompts,
    humidity: `34%`,
    windSpeed: `15km`,

    Celsius() {
        if (this.temperature < 0) {
            return true;
        }
        else {
            return false;
        }
    }

}
if (weather.Celsius()) {
    alert(`Температура меньше 0 градусів цельсія`);
}
else {
    alert(`Температура більше або дорівнює 0 градусів цельсія`);
}

// 3.Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 

const logins = prompt("Введіть пароль");
const emails = prompt("Введіть email");
const user = {
    name: "Volodia",
    email: "example@gmail.com",
    password: "qwerty",

    login() {
        if (this.password === logins && this.email === emails) {
            return true;
        }
        else {
            return false
        }
    }
}
if (user.login() && user.login()) {
    alert(`Привіт ${user.name}`);
}
else {
    alert(`Не правильний пароль або пошта`);
}

// 4.Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 

const movie = {
    title: `Fast & Furious`,
    director: `Fast & Furious`,
    year: `2001`,
    rating: `7.7`,

    watchMovie() {
        if (this.rating > 8) {
            return true;
        }
        else {
            return false;
        }
    }
}
if(movie.watchMovie()){
    alert(`Рейтинг більше 8`);
}
else{
    alert(`Рейтинг нижче або 8`);
}