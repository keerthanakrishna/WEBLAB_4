document.querySelector('#sub').addEventListener('click', () => {
    let cgpa, cgpa1;
    let first_gpa = document.querySelector('#first').value;
    let first_res = parseFloat(first_gpa);


    let second_gpa = document.querySelector('#second').value;
    let second_res = parseFloat(second_gpa);


    let third_gpa = document.querySelector('#third').value;
    let third_res = parseFloat(third_gpa);

    let fourth_gpa = document.querySelector('#fourth').value;
    let fourth_res = parseFloat(fourth_gpa);

    let fifth_gpa = document.querySelector('#fifth').value;
    let fifth_res = parseFloat(fifth_gpa);

    let sixth_gpa = document.querySelector('#sixth').value;
    let sixth_res = parseFloat(sixth_gpa);

    let seventh_gpa = document.querySelector('#seventh').value;
    let seventh_res = parseFloat(seventh_gpa);

    let eighth_gpa = document.querySelector('#eighth').value;
    let eighth_res = parseFloat(eighth_gpa);


    if (isNaN(first_res)) {
        cgpa1 = "Please fill atleast two sem GPA";
    } else if (isNaN(second_res)) {
        cgpa = first_res;
        cgpa1 = cgpa.toPrecision(3);
    } else if (isNaN(third_res)) {
        cgpa = parseFloat(first_res + second_res) / 2;
        cgpa1 = cgpa.toPrecision(3);
    }
    else if (isNaN(fourth_res)) {
        cgpa = parseFloat(first_res + second_res + third_res) / 3;
        cgpa1 = cgpa.toPrecision(3);
    }
    else if (isNaN(fifth_res)) {
        cgpa = parseFloat(first_res + second_res + third_res + fourth_res) / 4;
        cgpa1 = cgpa.toPrecision(3);
    } else if (isNaN(sixth_res)) {
        cgpa = parseFloat(first_res + second_res + third_res + fourth_res + fifth_res) / 5;
        cgpa1 = cgpa.toPrecision(3);
    }
    else if (isNaN(seventh_res)) {
        cgpa = parseFloat(first_res + second_res + third_res + fourth_res + fifth_res + sixth_res) / 6;
        cgpa1 = cgpa.toPrecision(3);
    } else if (isNaN(eighth_res)) {
        cgpa = parseFloat(first_res + second_res + third_res + fourth_res + fifth_res + sixth_res + seventh_res) / 7;
        cgpa1 = cgpa.toPrecision(3);
    } else {
        cgpa = parseFloat(first_res + second_res + third_res + fourth_res + fifth_res + sixth_res + seventh_res + eighth_res) / 8;
        cgpa1 = cgpa.toPrecision(3);
    }

    document.querySelector('.cgpacalc_output h3').innerHTML = ` CGPA : ${cgpa1}`;
})

document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.cgpacalc_output h3').innerHTML = `CGPA : `;
    document.querySelector('#first').value = '';
    document.querySelector('#second').value = "";
    document.querySelector('#third').value = "";
    document.querySelector('#fourth').value = "";
    document.querySelector('#fifth').value = "";
    document.querySelector('#sixth').value = "";
    document.querySelector('#seventh').value = "";
    document.querySelector('#eighth').value = "";

})