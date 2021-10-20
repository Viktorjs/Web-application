var resourceName = {
      HalmstadGK: ["Rangematta 1", "Rangematta 2", "Rangematta 3"],
      VarbergsGK: ["Rangematta 4", "Rangematta 5", "Rangematta 6"],
      HaverdalsGK: ["Rangematta 7", "Rangematta 8", "Rangematta 9"]
    };

    var main = document.getElementById("dropdown");
    var sub = document.getElementById("subDropdown");

    main.addEventListener("change", function () {
      var selected_option = resourceName[this.value];

      while (sub.options.length > 0) {
        sub.options.remove(0);
      }

      Array.from(selected_option).forEach(function (el) {
        let option = new Option(el, el);

        sub.appendChild(option);
      });
    });

    const darkLight = document.querySelector(
      '.darkmode input[type="checkbox"]'
    );

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }

    darkLight.addEventListener("change", switchTheme, false);

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("mode", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("mode", "light");
      }
    }

    const chosenTheme = localStorage.getItem("mode") ?
      localStorage.getItem("mode") :
      null;

    if (chosenTheme) {
      document.documentElement.setAttribute("data-theme", chosenTheme);

      if (chosenTheme === "dark") {
        darkLight.checked = true;
      }
    }
