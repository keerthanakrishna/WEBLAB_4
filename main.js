const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const unitLoad = document.querySelector("#Credits");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#GPA");
const clear = document.querySelector("#Reset");

let gpArry = [];

add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    Credits.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Wrong input,check and try again");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdCredits= document.createElement("td");
    tdCredits.innerHTML = Credits.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdCredits);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    GPA.classList.remove("display-none");
    Reset.classList.remove("display-none");
    gpArry.push({
      Credits :Credits.value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    courseCode.value = "";
    Credits.value = "";
    grade.selectedIndex = "0";
  }
});

GPA.addEventListener("click", () => {
  let Credits = 0,
    productOfCreditsAndGrades = 0,
    sumOfProductOfCreditsAndGrades = 0;

  gpArry.forEach((result) => {
    Credits+= parseInt(result.Credits);
    productOfCreditsAndGrades =
      parseInt(result.Credits) * parseInt(result.grade);
    sumOfProductOfCreditsAndGrades += productOfCreditsAndGrades;
  });
  const tr = document.createElement("tr");

  tdTotalCredits = document.createElement("td");
  tdTotalCredits.innerHTML = `your total Credit is ${Credits}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your GPA is ${(
    sumOfProductOfCreditsAndGrades / Credits
  ).toFixed(2)} `;

  tr.appendChild(tdTotalCredits);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  calcGp.classList.add("display-none");
  clear.classList.add("display-none");
});