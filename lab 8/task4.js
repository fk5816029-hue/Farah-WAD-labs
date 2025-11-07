let marks = [100, 45, 99, 35, 97];
let passStudents = marks.filter(function(mark) {
  return mark > 50;
});
console.log("Marks greater than 50 are:", passStudents);
