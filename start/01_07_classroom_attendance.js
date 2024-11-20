// Write your code here
function getStudents(classroom) {
  const { hasTeachingAssistant, classList } = classroom;

  let tacher, teachingAssistant, students;
  if (!hasTeachingAssistant) {
    [teacher, ...students] = classList;
  }
  else {
    [teacher, teachingAssistant, ...students] = classList;
  }

  return students;
}

console.log(getStudents({
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
}));