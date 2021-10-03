document.querySelector('#sub').addEventListener('click', () => {
    let charge, total, i, c, j, charge1, charge3, charge2, cat;
    let v;
    v = document.querySelector('#select1').value;
    //console.log(v.options[v.selectedIndex].value);

    console.log(v);
    v = parseInt(v);
    console.log(v);

    if (v == 1) {
        cat = "domestic";
    } else {
        cat = "commercial";
    }
    console.log(cat);
    let unit = document.querySelector('#unit').value;
    let unit_res = parseInt(unit);


    let kw = document.querySelector('#kw').value;
    let kw_res = parseInt(kw);

    if (cat == "commercial") {
        if (unit >= 0 && unit <= 100) {
            charge = 5 * unit;
            i = 0
        } else {
            i = 5 * 100;
            c = (unit - 100);
            charge = c * 8.05;
        }
        total = 140 * kw + charge + (i);
    } else if (cat == "domestic") {
        if (unit >= 0 && unit <= 100) {
            total = 0;
        } else if (unit >= 101 && unit <= 200) {
            i = unit - 100;
            charge = 1.50 * i;
            total = charge + 20;
        } else if (unit >= 201 && unit <= 500) {
            //i = unit - 100;
            charge1 = 2 * 100;
            j = unit - 200;
            charge2 = 3 * j;
            total = charge1 + charge2 + 30;
        } else {
            charge1 = 3.5 * 100;
            charge2 = 4.6 * 300;
            charge3 = (unit - 500) * 6.6;
            total = charge1 + charge2 + charge3 + 50;
        }

    }

    console.log(total);
    //total = parseFloat.total;


    document.querySelector('.cgpacalc_output h3').innerHTML = `TOTAL AMOUNT : ${total}`;
})

document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.cgpacalc_output h3').innerHTML = `TOTAL AMOUNT: `;
    document.querySelector('#unit').value = '';
    document.querySelector('#kw').value = "";
    document.querySelector('#third').value = "";


})
document.querySelector('#sub').addEventListener('click', () => {
    let charge, total, i, c, j, charge1, charge3, charge2, cat;
    let v;
    v = document.querySelector('#select1').value;
    //console.log(v.options[v.selectedIndex].value);

    console.log(v);
    v = parseInt(v);
    console.log(v);

    if (v == 1) {
        cat = "domestic";
    } else {
        cat = "commercial";
    }
    console.log(cat);
    let unit = document.querySelector('#unit').value;
    let unit_res = parseInt(unit);


    let kw = document.querySelector('#kw').value;
    let kw_res = parseInt(kw);

    if (cat == "commercial") {
        if (unit >= 0 && unit <= 100) {
            charge = 5 * unit;
            i = 0
        } else {
            i = 5 * 100;
            c = (unit - 100);
            charge = c * 8.05;
        }
        total = 140 * kw + charge + (i);
    } else if (cat == "domestic") {
        if (unit >= 0 && unit <= 100) {
            total = 0;
        } else if (unit >= 101 && unit <= 200) {
            i = unit - 100;
            charge = 1.50 * i;
            total = charge + 20;
        } else if (unit >= 201 && unit <= 500) {
            //i = unit - 100;
            charge1 = 2 * 100;
            j = unit - 200;
            charge2 = 3 * j;
            total = charge1 + charge2 + 30;
        } else {
            charge1 = 3.5 * 100;
            charge2 = 4.6 * 300;
            charge3 = (unit - 500) * 6.6;
            total = charge1 + charge2 + charge3 + 50;
        }

    }

    console.log(total);
    //total = parseFloat.total;


    document.querySelector('.cgpacalc_output h3').innerHTML = `TOTAL EB  AMOUNT : ${total}`;
})

document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.cgpacalc_output h3').innerHTML = `TOTAL EB AMOUNT: `;
    document.querySelector('#unit').value = '';
    document.querySelector('#kw').value = "";
    document.querySelector('#third').value = "";


})