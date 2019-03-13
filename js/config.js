function interface() {
    //set flag themes and others
    var original = document.getElementById("original").checked;
    var amanhecer = document.getElementById("amanhecer").checked;
    var theme = document.getElementsByClassName("navbar");
    var backtheme = document.getElementsByTagName("body");
    var aux;

    //original theme
    if (document.getElementById("original").checked == true) {
        for (aux = 0; aux < theme.length; aux++) {
            theme[aux].style.backgroundColor = "#39517f";
            theme[aux].style.color = "#ffffff";
            theme[aux].style.borderBottom = "0px";
        }

        for (aux = 0; aux < backtheme.length; aux++) {
            backtheme[aux].style.backgroundColor = "#061229";
        }
    }

    //amanhecer theme
    if (document.getElementById("amanhecer").checked == true) {
        for (aux = 0; aux < theme.length; aux++) {
            theme[aux].style.backgroundColor = "#ffffff";
            theme[aux].style.color = "#ff530d";
            theme[aux].style.borderBottom = "2px solid #00fff4";
        }

        for (aux = 0; aux < backtheme.length; aux++) {
            backtheme[aux].style.backgroundColor = "#ffffff";
        }
    }
}