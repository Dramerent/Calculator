var adminStr = "";
var userStr = "";
var queue = 0;
var numSess = -1;
var stopZnak = false;
var factorial = false;
var factNum = "";
var factror = 1;
factorialFun = () => {
  factorial = false;

  for (i = 1; i <= eval(factNum); i++) {
    factror *= i;
  }
  adminStr += factror;
  console.log(factror);
  console.log("done");
};

document
  .querySelectorAll(".calculator__button.calculator__button_common")
  .forEach((element) => {
    element.addEventListener("click", (el) => {
      var local = "";

      for (i = 0; i <= 9; i++) {
        if (el.currentTarget.innerHTML == i) {
          stopZnak = false;
          if (factorial == true) {
            local = `${el.currentTarget.innerHTML}`;
            factNum += local;
            console.log(factNum, "|", userStr, "eeeeeeeeeeee");
          } else {
            if (queue == 1) {
              local = "(" + el.currentTarget.innerHTML;
              adminStr += local;
              queue = 2;
              numSess = 2;
            } else if (queue == 2 || queue == 0) {
              local = el.currentTarget.innerHTML;
              adminStr += local;
              numSess = 2;
            }
            console.log(":not eee");
          }
        } else if (
          el.currentTarget.innerHTML == "*" ||
          el.currentTarget.innerHTML == "/" ||
          el.currentTarget.innerHTML == "+" ||
          el.currentTarget.innerHTML == "-"
        ) {
          if (factorial == true) {
            factorialFun();
            console.log(factorial);
          }
          numSess = 1;
          if (!stopZnak) {
            if (queue == 2) {
              local = ")";
              queue = 0;
            }
            local += el.currentTarget.innerHTML;
            adminStr += local;
            console.log(local);
            stopZnak = !stopZnak;
          } else {
            continue;
          }
        }
      }
      userStr += local;
      console.log(numSess);
      document
        .querySelector(".calculator__output")
        .querySelector(".primer").innerHTML = userStr;
    });
  });

document
  .querySelector(".calculator__button.calculator__button_rowno")
  .addEventListener("click", (el) => {
    if (queue == 2) {
      local = ")";
      queue = 0;
      adminStr += local;
      userStr += local;
    }
    console.log(adminStr);
    document
      .querySelector(".calculator__output")
      .querySelector(".primer").innerHTML = userStr;
    adminStr = eval(adminStr);
    document.querySelector(".itog").innerHTML = adminStr;
  });

sinus = () => {
  if (!numSess == 0) {
    if (numSess == 1 || numSess == 3 || numSess == -1) {
      userStr += "sin";
      adminStr += "Math.sin";
      queue = 1;
      document
        .querySelector(".calculator__output")
        .querySelector(".primer").innerHTML = userStr;
      numSess = 0;
    }
  }
};

cosinus = () => {
  if (!numSess == 0) {
    if (numSess == 1 || numSess == 3 || numSess == -1) {
      userStr += "cos";
      adminStr += "Math.cos";
      queue = 1;
      document
        .querySelector(".calculator__output")
        .querySelector(".primer").innerHTML = userStr;
      numSess = 0;
    }
  }
};
tangens = () => {
  if (!numSess == 0) {
    if (numSess == 1 || numSess == 3 || numSess == -1) {
      userStr += "tg";
      adminStr += "Math.tan";
      queue = 1;
      document
        .querySelector(".calculator__output")
        .querySelector(".primer").innerHTML = userStr;
      numSess = 0;
    }
  }
};
ctangens = () => {
  if (!numSess == 0) {
    if (numSess == 1 || numSess == 3 || numSess == -1) {
      userStr += "ctg";
      adminStr += " 1/Math.tan";
      queue = 1;
      document
        .querySelector(".calculator__output")
        .querySelector(".primer").innerHTML = userStr;

      numSess = 0;
    }
  }
};

step = () => {
  if (!numSess == 0) {
    if (numSess == 2 || numSess == 3) {
      numSess = 1;
      var local = "";
      if (!stopZnak) {
        if (queue == 2) {
          local = ")";
          queue = 0;
          userStr += ")";
        }
        local += "**";
        adminStr += local;
        console.log(local);
        stopZnak = !stopZnak;
      } else {
        return 0;
      }
      userStr += "^";

      document
        .querySelector(".calculator__output")
        .querySelector(".primer").innerHTML = userStr;
      numSess = 0;
      queue = 0;
    }
  }
};
squirt = () => {
  if (!numSess == 0) {
    if (numSess == 1 || numSess == 3 || numSess == -1) {
      userStr += "sqrt";
      adminStr += "Math.sqrt";
      queue = 1;
      document
        .querySelector(".calculator__output")
        .querySelector(".primer").innerHTML = userStr;
      numSess = 0;
    }
  }
};

system = (num) => {
  userStr = "";
  adminStr = adminStr.toString(num);
  document.querySelector(".itog").innerHTML = adminStr + "|" + num + "сист";

  document
    .querySelector(".calculator__output")
    .querySelector(".primer").innerHTML = userStr;
};
fact = () => {
  factorial = true;
  console.log(factorial);
};
