var username = "";


function showpage(invariabel) {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";



    }
    if (pages[i] = "login") {
        console.log("login detected");
        //document.getElementById("myCanvas").style.display = "none";
    }



    document.getElementById(invariabel).style.display = "block";
    console.log(invariabel);
}




var kolla = false;



function validera() {

    var textinput = document.getElementById("fornamn");
    var textinput2 = document.getElementById("efternamn");
    var textinput3 = document.getElementById("pnr");
    var textinput4 = document.getElementById("tfn");
    var checkbox = document.getElementById("input1");
    var textinput7 = document.getElementById("epost");
    var textinput8 = document.getElementById("adress");
    var fn = textinput.value;
    var ln = textinput2.value;
    var pn = textinput3.value;
    var tn = textinput4.value;
    var mail = textinput7.value;
    var adress = textinput8.value;



    if (fn.match(/^[a-Ã¶A-Ã–]+$/) != null) {
        textinput.style.backgroundColor = "#91dd93";
        kolla = true;
    } else {
        textinput.style.backgroundColor = "#fac3c3";
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        kolla = false;
    }


    if (ln.match(/^[a-Ã¶A-Ã–]+$/) != null) {
        textinput2.style.backgroundColor = "#91dd93";
        kolla = true;
    } else {
        textinput2.style.backgroundColor = "#fac3c3";
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        kolla = false;
    }

    if (adress.match(/^[a-Ã¶A-Ã– ]+[0-9]$/) != null) {
        textinput8.style.backgroundColor = "#91dd93";
        kolla = true;
    } else {
        textinput8.style.backgroundColor = "#fac3c3";
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        kolla = false;
    }


    if (pn.match(/^\d+$/) != null) {
        textinput3.style.backgroundColor = "#91dd93";
        kolla = true;
    } else {
        textinput3.style.backgroundColor = "#fac3c3";
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        kolla = false;
    }
    // Match is null if there is no match


    if (tn.match(/^\d+$/) != null) {
        textinput4.style.backgroundColor = "#91dd93";
        kolla = true;
    } else {
        textinput4.style.backgroundColor = "#fac3c3";
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        kolla = false;
    }


    if (checkbox.checked == true) {} else {
        alert("Du mÃ¥ste godkÃ¤nna anvÃ¤ndarvillkoren");
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        kolla = false

    }

    if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) != null) {
        textinput7.style.backgroundColor = "#91dd93";
        return true;
    } else {
        textinput7.style.backgroundColor = "#fac3c3";
        return false;
    }



}


function checkregister() {
    if (kolla == true) {
        makeCustomer();
    } else {
        alert("Du mÃ¥ste fylla i alla fÃ¤lt");
    }
}

function fixChars(returnedData) {
    var resultset = returnedData.childNodes[0];

    x = returnedData.getElementsByTagName('*');
    for (i = 0; i < x.length; i++) {
        for (j = 0; j < x[i].attributes.length; j++) {
            x[i].attributes[j].nodeValue = x[i].attributes[j].nodeValue.replace(/%/g, "&");
        }
    }
}

var templog = "";
var customerID2 = "";
var apptype = "a18viksa";
var range = "";
var user;
var rememberMe = "";


function makeCustomer() {

    var customerID = document.getElementById("pnr").value;
    var firstname = document.getElementById("fornamn").value;
    var lastname = document.getElementById("efternamn").value;
    var address = document.getElementById("adress").value;
    var email = document.getElementById("epost").value;
    customerID2 = document.getElementById("pnr").value;


    $.ajax({
        type: 'POST',
        url: 'WebbprogrammeringAPI/booking/makecustomer_XML.php',
        data: {
            ID: escape(customerID),
            firstname: escape(firstname),
            lastname: escape(lastname),
            address: escape(address),
            email: escape(email),
        },
        success: ResultCustomern,
        error: errormsg
    });
}

var customerID;

function login() {
    customerID = document.getElementById("pnr2").value;
    rememberMe = customerID;

    $.ajax({
        type: 'POST',
        url: 'WebbprogrammeringAPI/booking/getcustomer_XML.php',
        data: {
            customerID: escape(customerID),
        },
        success: ResultCustomers,
        error: errorLogin
    });

}


function errorLogin(jqXHR, _textStatus, errorThrown) {
    alert("Du mÃ¥ste fylla i ett registrerat personnummer");
}


function ResultCustomers(returnedData) {

    fixChars(returnedData);
    var resultset = returnedData.childNodes[0];

    for (i = 0; i < resultset.childNodes.length; i++) {
        if (resultset.childNodes.item(i).nodeName == "customer") {

            var customer = resultset.childNodes.item(i);
            username = customer.attributes['id'].nodeValue;
            var div = document.getElementById('CustomerOutputDiv');
            output = customer.attributes['firstname'].nodeValue;
            output += ' ' + customer.attributes['lastname'].nodeValue;
            div.innerHTML = "<b class='b1'>VÃ¤lkommen</b> " + output;
            document.getElementById("page2").style.display = "block";
            document.getElementById("login").style.display = "none";

        }


    }
    console.log(username);

}




function ResultCustomern(returnedData) {

    var resultset = returnedData.childNodes[0];

    for (i = 0; i < resultset.childNodes.length; i++) {

        if (resultset.childNodes.item(i).nodeName == "customer") {

            templog = document.getElementById("pnr2").value = customerID2;
            document.getElementById("login").style.display = "none";
            document.getElementById("page2").style.display = "block";


        }

    }
}

function searchResources() {
    var e = document.getElementById("dropdown");
    var rescompany = e.options[e.selectedIndex].text;
    /* alert(e.options[0].text);
    alert(e.selectedIndex); */

    $.ajax({
        type: 'POST',
        url: 'WebbprogrammeringAPI/booking/getresources_XML.php',
        data: {
            company: encodeURIComponent(rescompany),
            type: encodeURIComponent(apptype),
        },
        success: showResources,
        error: errormsg
    });
}


function showResources(returnedData) {


    var resultset = returnedData.childNodes[0];
    var output = "<select id='subDropdown'>";


    for (i = 0; i < resultset.childNodes.length; i++) {

        if (resultset.childNodes.item(i).nodeName == "resource") {
            var resource = resultset.childNodes.item(i);

            output += "<option onclick='array(\"" + resource.attributes['id'].nodeValue + "\");'>" + resource.attributes['id'].nodeValue + "</option>";

            range += resource.attributes['name'].nodeValue;

        }
    }
    output += "</select>";
    var div = document.getElementById("OutputDivSearchR");

    div.innerHTML = output;


}

function processinputbox() {
    var returnpbox = document.getElementById("pnr2").value;
    console.log(returnpbox);
    var inlognamn = username;
    $.ajax({
        type: 'POST',
        url: 'WebbprogrammeringAPI/booking/getcustomerbookings_XML.php',
        data: {
            customerID: escape(inlognamn),
            type: apptype
        },
        success: ResultBookingCustomer,
        error: errormsg
    });
}

function ResultBookingCustomer(returnedData) {
    fixChars(returnedData);

    var resultset = returnedData.childNodes[0];

    var output = "<table>";
    output += "<th>Golfbana</th>"
    output += "<th>Resurs</th>"
    output += "<th>FrÃ¥n</th>"
    output += "<th>Till</th>"
    output += "<th>Kostnad</th>"


    for (i = 0; i < resultset.childNodes.length; i++) {

        if (resultset.childNodes.item(i).nodeName == "booking") {

            var booking = resultset.childNodes.item(i);

            output += "<tr>";
            output += "<td>" + booking.attributes['company'].nodeValue + "</td>";
            output += "<td>" + booking.attributes['resourceID'].nodeValue + "</td>";
            output += "<td>" + booking.attributes['date'].nodeValue + "</td>";
            output += "<td>" + booking.attributes['dateto'].nodeValue + "</td>";
            output += "<td>" + booking.attributes['cost'].nodeValue + ' ;-' + "</td>";
            output += "</tr>";


        }
    }

    output += "</table>"
    var div = document.getElementById('OutputDivCart');
    div.innerHTML = output;
}

function makeBooking() {
    var resourceID = document.getElementById("subDropdown").value;
    var date = document.getElementById("booking-date").value;
    var dateto = document.getElementById("tp").value;
    alert(date + " " + dateto);
    var bokdatum = date + ":" + dateto;
    var todate = date + ":" + (dateto + 30);


    $.ajax({

        type: 'POST',
        url: 'WebbprogrammeringAPI/booking/makebooking_XML.php',
        data: {
            resourceID: resourceID,
            date: bokdatum,
            dateto: todate,
            customerID: username,

            type: apptype,
        },
        success: bookingmade,
        error: errormsg
    });

}

function bookingmade(returnedData) {
    alert("Lyckad bokning!");
    console.log(returnedData);
}


function errormsg(jqXHR, _textStatus, errorThrown) {
    console.log(jqXHR);
}



function updateHistory(token)

{

    history.pushState(token, "Titel: " + token, "");


}
