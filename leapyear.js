function leapYear(year){

  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
      console.log("leap year");
  }
}
leapYear(2400)