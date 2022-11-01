// დავალება N1

const currentDay = new Date();
const day = currentDay.getDay();

switch (currentDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(currentDay, day);

// დავალება N2

let i = 0;
for (let i = 0; i < 50; i++) {
  console.log(i);
}

// დავალება N3

let i = 0;

while (i < 150) {
  i++;

  console.log(i);
}

// დავალება N4

let i = 0;
while (i < 100 ) ;

do {
    i++ ;
}

console.log(i);