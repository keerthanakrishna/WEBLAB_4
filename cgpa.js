var o = window.onload = function () {
    document.getElementById("s1").style.display = "none";
    document.getElementById("s11").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s22").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("s33").style.display = "none";
    document.getElementById("s4").style.display = "none";
    document.getElementById("s44").style.display = "none";
    document.getElementById("s5").style.display = "none";
    document.getElementById("s55").style.display = "none";
    document.getElementById("s6").style.display = "none";
    document.getElementById("s66").style.display = "none";
    document.getElementById("s7").style.display = "none";
    document.getElementById("s77").style.display = "none";
    document.getElementById("s8").style.display = "none";
    document.getElementById("s88").style.display = "none";

}
function sem() {
    o();
    var t = document.getElementById("course").selectedIndex;
    if (t == 1) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
    }
    else if (t == 2) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
    }
    else if (t == 3) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
        document.getElementById("s3").style.display = "inline";
        document.getElementById("s33").style.display = "inline";
    }
    else if (t == 4) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
        document.getElementById("s3").style.display = "inline";
        document.getElementById("s33").style.display = "inline";
        document.getElementById("s4").style.display = "inline";
        document.getElementById("s44").style.display = "inline";
    }
    else if (t == 5) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
        document.getElementById("s3").style.display = "inline";
        document.getElementById("s33").style.display = "inline";
        document.getElementById("s4").style.display = "inline";
        document.getElementById("s44").style.display = "inline";
        document.getElementById("s5").style.display = "inline";
        document.getElementById("s55").style.display = "inline";

    }
    else if (t == 6) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
        document.getElementById("s3").style.display = "inline";
        document.getElementById("s33").style.display = "inline";
        document.getElementById("s4").style.display = "inline";
        document.getElementById("s44").style.display = "inline";
        document.getElementById("s5").style.display = "inline";
        document.getElementById("s55").style.display = "inline";
        document.getElementById("s6").style.display = "inline";
        document.getElementById("s66").style.display = "inline";

    }
    else if (t == 7) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
        document.getElementById("s3").style.display = "inline";
        document.getElementById("s33").style.display = "inline";
        document.getElementById("s4").style.display = "inline";
        document.getElementById("s44").style.display = "inline";
        document.getElementById("s5").style.display = "inline";
        document.getElementById("s55").style.display = "inline";
        document.getElementById("s6").style.display = "inline";
        document.getElementById("s66").style.display = "inline";
        document.getElementById("s7").style.display = "inline";
        document.getElementById("s77").style.display = "inline";
    }
    else if (t == 8) {
        document.getElementById("s1").style.display = "inline";
        document.getElementById("s11").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
        document.getElementById("s2").style.display = "inline";
        document.getElementById("s22").style.display = "inline";
        document.getElementById("s3").style.display = "inline";
        document.getElementById("s33").style.display = "inline";
        document.getElementById("s4").style.display = "inline";
        document.getElementById("s44").style.display = "inline";
        document.getElementById("s5").style.display = "inline";
        document.getElementById("s55").style.display = "inline";
        document.getElementById("s6").style.display = "inline";
        document.getElementById("s66").style.display = "inline";
        document.getElementById("s7").style.display = "inline";
        document.getElementById("s77").style.display = "inline";
        document.getElementById("s8").style.display = "inline";
        document.getElementById("s88").style.display = "inline";
    }

}
function calc() {
    document.getElementById("ans").value = 0;
    var t = document.getElementById("course").selectedIndex;
    var c = 0;
    var a = 0;
    var y1 = parseInt(document.getElementById("s111").value);
    var y2 = parseInt(document.getElementById("s222").value);
    var y3 = parseInt(document.getElementById("s333").value);
    var y4 = parseInt(document.getElementById("s444").value);
    var y5 = parseInt(document.getElementById("s555").value);
    var y6 = parseInt(document.getElementById("s666").value);
    var y7 = parseInt(document.getElementById("s777").value);
    var y8 = parseInt(document.getElementById("s888").value);

    if (c < t) {
        c = c + 1;
        if ((y1 != 0) && (c < t)) {
            c = c + 1;
            if ((y2 != 0) && (c < t)) {
                c = c + 1;
                if ((y3 != 0) && (c < t)) {
                    c = c + 1;
                    if ((y4 != 0) && (c < t)) {
                        c = c + 1;
                        if ((y5 != 0) && (c < t)) {
                            c = c + 1;
                            if ((y6 != 0) && (c < t)) {
                                c = c + 1;
                                if ((y7 != 0) && (c < t)) {
                                    c = c + 1;
                                    if ((y8 != 0) && (c < t)) {
                                    }
                                    else if ((y8 != 0) && (c == t)) {
                                        document.getElementById("ans").value = (y1 + y2 + y3 + y4 + y5 + y6 + y7 + y8) / 8;
                                    }
                                    else {
                                        window.alert("8th Semester not entered");
                                    }

                                }
                                else if ((y7 != 0) && (c == t)) {

                                    document.getElementById("ans").value = (y1 + y2 + y3 + y4 + y5 + y6 + y7) / 7;
                                }
                                else {
                                    window.alert("7th Semester not entered");
                                }
                            }
                            else if ((y6 != 0) && (c == t)) {
                                document.getElementById("ans").value = (y1 + y2 + y3 + y4 + y5 + y6) / 6;
                            }
                            else {
                                window.alert("6th Semester not entered");
                            }
                        }
                        else if ((y5 != 0) && (c == t)) {
                            document.getElementById("ans").value = (y1 + y2 + y3 + y4 + y5) / 5;
                        }
                        else {
                            window.alert("5th Semester not entered");
                        }
                    }
                    else if ((y4 != 0) && (c == t)) {
                        document.getElementById("ans").value = (y1 + y2 + y3 + y4) / 4;
                    }
                    else {
                        window.alert("4th Semester not entered");
                    }
                }
                else if ((y3 != 0) && (c == t)) {
                    document.getElementById("ans").value = (y1 + y2 + y3) / 3;
                }
                else {
                    window.alert("3rd Semester not entered");
                }
            }
            else if ((y2 != 0) && (c == t)) {
                document.getElementById("ans").value = (y1 + y2) / 2;
            }
            else {
                window.alert("2nd Semester not entered");
            }
        }
        else if ((y1 != 0) && (c == t)) {
            document.getElementById("ans").value = y1;
        }
        else {
            // window.alert("1st Semester not entered");
        }
    }
    else {
        // window.alert("Semester not choosen");
    }
}
