for (let i = 0; i < document.querySelectorAll(".all>.ele").length; i++) {
    document.querySelectorAll(".all>.ele")[i].addEventListener("click", function () {
        let text = this.innerText;
        console.log(text);
        console.log(this.classList);
        this.classList.add("elehover")
        setTimeout(() => {
            this.classList.remove("elehover")
        }, 300);
        let display = document.querySelector("h3");

        if (text != "=" && text != "AC" && text != "C") {
            if ((display.innerText == 0 || display.innerText == "") && (text != 0)) {
                display.innerText = "";
            }
            else if (display.innerText == Infinity || display.innerText == NaN) {
                display.innerText = "";
            }
            display.innerText = `${display.innerText}${text}`
        }
        else if (text == "=") {
            display.innerText = `${eval(display.innerText)}`
        }
        else if (text == "C") {
            if (display.innerText.length == 1) {
                display.innerText = "0"
            }
            else {
                let substring = display.innerText.slice(0, (display.innerText.length - 1))
                display.innerText = `${substring}`
            }
        }
        else if (text == "AC") {
            display.innerText = "0";
        }
        console.log(display.innerText);
    });
};
