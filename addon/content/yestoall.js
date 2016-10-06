// ==UserScript==
// @name           yestoall
// @namespace      www.kucjica.org/yes_to_all
// @include        *
// ==/UserScript==

var inputs = document.getElementsByTagName("input");
for (var i=0; i<inputs.length; i++){
    if (inputs[i].name=="lastname"){
    inputs[i].value="to all";
    }
    if (inputs[i].type=="checkbox"){
    inputs[i].checked="true";
    }
    if (inputs[i].type=="radio"){
    inputs[i].checked="true";
    }
    else {inputs[i].value="yes";
    }
}
var options = document.getElementsByTagName("option");
for (var i=0; i<options.length; i++){
    options[i].text="yes";
}

