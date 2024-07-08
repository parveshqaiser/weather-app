

let dayNames = ["Sunday", "Monday", "Tuesday" ,"Wednesday" ,"Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February" ,"March", "April", "May", "June", "July", "August", "Spet", "October", "Nov", "Dec"]
let day = new Date().getDay();

let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

export const dateTime = `${dayNames[day]} , ${date} ${monthNames[month]} ${year}`;