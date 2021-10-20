<script>
    $(document).ready(function () {
      $(".btn").click(function () {
        $("#login").fadeIn(800);
      });
    });

    $(document).ready(function () {
      $(".logbtn").click(function () {
        $("#page1").fadeIn(800);
      });
    });

    $(document).ready(function () {
      $(".regknapp2").click(function () {
        $("#page2").fadeIn(800);
      });
    });

    $(document).ready(function () {
      $(".regknapp").click(function () {
        $("#login").fadeIn(800);
      });
    });

    $(document).ready(function () {
      $(".logbtn2").click(function () {
        $("#login").fadeIn(800);
      });
    });




    $(document).ready(function () {
      $(".regknapp").mouseover(function () {
        $(".regknapp").css("opacity", ".7");
      });
      $(".regknapp").mouseout(function () {
        $(".regknapp").css("opacity", "1");
      });
      $(".regknapp2").mouseover(function () {
        $(".regknapp2").css("opacity", ".7");
      });
      $(".regknapp2").mouseout(function () {
        $(".regknapp2").css("opacity", "1");
      });
      $(".tbknapp").mouseover(function () {
        $(".tbknapp").css("opacity", ".7");
      });
      $(".tbknapp").mouseout(function () {
        $(".tbknapp").css("opacity", "1");
      });
    });

    $(document).ready(function () {
      $("#fornamn").click(function () {
        $("#fornamn").css("background", "#f1f1f1");
      });
    });
  </script>

  <script>
    var ctx2;

    // Array to hold snowflakes
    var snowflakes2 = new Array();

    // Number of flakes
    var numflakes2 = 20;
    var xa = 2;
    var ya = 3;
    var xk = 100;
    var yk = 100;
    var mx, my;


    function Snowflake2(xk, yk, spd, siz) {
      this.xk = xk;
      this.yk = yk;
      this.spd = spd;
      this.siz = siz;
      this.color = randomColor();
      this.rotation = 0;
      this.rotationdir = Math.round(Math.random());
    }



    function startup() {
      for (var i = 0; i < numflakes2; i++) {
        var typ = Math.round(Math.random() * 4);
        snowflakes2[i] = new Snowflake2(
          Math.round(Math.random() * 1920),
          Math.round(Math.random() * 1080),
          0.5 + typ / 2,
          0.1 + typ / 20
        );
      }



      var elem = document.getElementById("myCanvas2");
      if (elem && elem.getContext) {
        ctx2 = elem.getContext("2d");
        drawgraphics();
      }
    }

    function randomColor() {
      var num = Math.floor(Math.random() * 10) + 1;
      if (num < 4) {
        var color = "white";
      } else if (num > 3 && num < 8) {
        var color = "#00b344";
      } else {
        var color = "#ff3700";
      }
      return color;
    }

    function drawSnowflake() {
      ctx2.globalAlpha = 1.0;
      ctx2.beginPath();
      ctx2.moveTo(36, 6);
      ctx2.lineTo(30, 2);
      ctx2.lineTo(20, 7);
      ctx2.lineTo(13, 3);
      ctx2.lineTo(15, 0);
      ctx2.lineTo(13, -4);
      ctx2.lineTo(20, -7);
      ctx2.lineTo(29, -2);
      ctx2.lineTo(36, -6);
      ctx2.lineTo(27, -11);
      ctx2.lineTo(33, -15);
      ctx2.lineTo(29, -21);
      ctx2.lineTo(23, -17);
      ctx2.lineTo(23, -28);
      ctx2.lineTo(16, -25);
      ctx2.lineTo(16, -13);
      ctx2.lineTo(10, -10);
      ctx2.lineTo(8, -13);
      ctx2.lineTo(3, -13);
      ctx2.lineTo(3, -20);
      ctx2.lineTo(13, -26);
      ctx2.lineTo(13, -34);
      ctx2.lineTo(3, -28);
      ctx2.lineTo(3, -34);
      ctx2.lineTo(-4, -34);
      ctx2.lineTo(-4, -29);
      ctx2.lineTo(-13, -34);
      ctx2.lineTo(-13, -26);
      ctx2.lineTo(-4, -21);
      ctx2.lineTo(-4, -13);
      ctx2.lineTo(-7, -13);
      ctx2.lineTo(-9, -9);
      ctx2.lineTo(-16, -13);
      ctx2.lineTo(-16, -25);
      ctx2.lineTo(-23, -28);
      ctx2.lineTo(-23, -17);
      ctx2.lineTo(-30, -21);
      ctx2.lineTo(-33, -15);
      ctx2.lineTo(-27, -11);
      ctx2.lineTo(-36, -6);
      ctx2.lineTo(-30, -2);
      ctx2.lineTo(-20, -7);
      ctx2.lineTo(-13, -3);
      ctx2.lineTo(-15, 0);
      ctx2.lineTo(-13, 3);
      ctx2.lineTo(-20, 7);
      ctx2.lineTo(-29, 2);
      ctx2.lineTo(-36, 6);
      ctx2.lineTo(-27, 11);
      ctx2.lineTo(-33, 15);
      ctx2.lineTo(-29, 21);
      ctx2.lineTo(-23, 17);
      ctx2.lineTo(-23, 28);
      ctx2.lineTo(-16, 25);
      ctx2.lineTo(-16, 13);
      ctx2.lineTo(-9, 9);
      ctx2.lineTo(-7, 13);
      ctx2.lineTo(-3, 13);
      ctx2.lineTo(-3, 21);
      ctx2.lineTo(-13, 26);
      ctx2.lineTo(-13, 34);
      ctx2.lineTo(-3, 29);
      ctx2.lineTo(-3, 34);
      ctx2.lineTo(4, 34);
      ctx2.lineTo(4, 28);
      ctx2.lineTo(13, 34);
      ctx2.lineTo(13, 26);
      ctx2.lineTo(4, 20);
      ctx2.lineTo(4, 13);
      ctx2.lineTo(8, 13);
      ctx2.lineTo(10, 10);
      ctx2.lineTo(16, 13);
      ctx2.lineTo(16, 25);
      ctx2.lineTo(23, 28);
      ctx2.lineTo(23, 17);
      ctx2.lineTo(30, 21);
      ctx2.lineTo(33, 15);
      ctx2.lineTo(27, 11);
      ctx2.lineTo(36, 6);
      ctx2.fill();


    }

    function mouseMove(e, t) {
      var rect = e.target.getBoundingClientRect();
      mx = e.clientX - rect.left; //x position within the element.
      my = e.clientY - rect.top; //y position within the element.
    }

    //This function is called when a mouse button is pressed down on the canvas element
    function mouseDown(event) {
      //Find the position of the canvas element
      for (var i = 0; i < numflakes2; i++) {
        if (
          mx > snowflakes2[i].xk - 10 &&
          mx < snowflakes2[i].xk + 10 &&
          my > snowflakes2[i].yk - 10 &&
          my < snowflakes2[i].yk + 10
        ) {
          snowflakes2[i].xk = 500;
        }
      }
    }

    var ctx;
    var img;

    // Array to hold snowflakes
    var snowflakes = new Array();

    // Number of flakes
    var numflakes = 5;

    // Constructor for snowflakes
    function Snowflake(xk, yk, spd, siz) {
      this.xk = xk;
      this.yk = yk;
      this.spd = spd;
      this.siz = siz;
    }

    function drawgraphics() {
      ctx.clearRect(0, 0, 1920, 1080);

      for (var i = 0; i < numflakes; i++) {
        ctx.save();
        ctx.translate(snowflakes[i].xk + (Math.sin(snowflakes[i].xk + (snowflakes[i].yk * 0.03)) * snowflakes[i]
          .siz *
          14.0), snowflakes[i].yk);
        ctx.scale(snowflakes[i].siz, snowflakes[i].siz);
        ctx.drawImage(img, -18, -18);
        ctx.restore();

        snowflakes[i].yk += snowflakes[i].spd;
        if (snowflakes[i].yk > 1080) snowflakes[i].yk -= 1080;
      }


      ctx2.clearRect(0, 0, 1920, 1080);

      ctx2.beginPath();
      ctx2.moveTo(mx - 10, my - 10);
      ctx2.lineTo(mx + 10, my + 10);
      ctx2.moveTo(mx + 10, my - 10);
      ctx2.lineTo(mx - 10, my + 10);
      ctx2.stroke();


      for (var i = 0; i < numflakes2; i++) {
        ctx2.save();
        ctx2.translate(
          snowflakes2[i].xk +
          Math.sin(snowflakes2[i].xk + snowflakes2[i].yk * 0.03) *
          snowflakes2[i].siz *
          14.0,
          snowflakes2[i].yk
        );
        ctx2.scale(snowflakes2[i].siz, snowflakes2[i].siz);
        //ctx.rotate(Math.atan(ya, xa) + Math.PI * offs);
        ctx2.rotate(snowflakes2[i].rotation);

        if (snowflakes2[i].rotationdir == 0) {
          snowflakes2[i].rotation++;
        } else {
          snowflakes2[i].rotation--;
        }

        ctx2.fillStyle = snowflakes2[i].color;
        drawSnowflake();
        ctx2.restore();

        snowflakes2[i].yk += snowflakes2[i].spd;
        if (snowflakes2[i].yk > 1080) snowflakes2[i].yk -= 1080;
      }

      setTimeout(function () {
        drawgraphics();
      }, 30);

    }

    function startupCanvas() {
      img = document.getElementById("flake");

      for (var i = 0; i < numflakes; i++) {
        var typ = Math.round(Math.random() * 4);
        snowflakes[i] = new Snowflake(Math.round(Math.random() * 1920), Math.round(Math.random() * 1080), 0.5 + (
            typ /
            2),
          0.4 + (typ / 8));

        window.onpopstate = function (event) {
          showpage(event.state);
        };

        updateHistory('startpage');
      }

      var elem = document.getElementById("myCanvas");
      if (elem && elem.getContext) {
        ctx = elem.getContext('2d');
      }
    }
  </script>
