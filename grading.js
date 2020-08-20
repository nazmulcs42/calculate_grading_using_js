
while (true) {
    var mark = parseInt(prompt("Enter your mark: "));
    if (mark < 0 || mark > 100) {
        alert("Invalid input.");
    } else if (mark >= 80 && mark <= 100) {
        alert("Your Grade is: A+.");
    }
    else if (mark >= 70 && mark < 80) {
        alert("Your Grade is: A.");
    }
    else if (mark >= 60 && mark < 70) {
        alert("Your Grade is: A-.");
    }
    else if (mark >= 50 && mark < 60) {
        alert("Your Grade is: B.");
    }
    else if (mark >= 40 && mark < 50) {
        alert("Your Grade is: C.");
    }
    else if (mark >= 33 && mark < 40) {
        alert("Your Grade is: D.");
    }
    else {
        alert("Fail.");
    }
}