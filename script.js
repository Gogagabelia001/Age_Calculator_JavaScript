const birthdayInput = document.getElementById("birthday");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayInput.value;
  if (birthdayValue === " ") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    result.textContent = `You are ${age} years old.`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

calculateButton.addEventListener("click", calculateAge);
