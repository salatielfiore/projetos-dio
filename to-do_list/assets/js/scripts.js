var textTask = document.getElementById("tast-text");
var task = document.getElementById("task");

function adicionar() {

    if(textTask.value !== "") {
        var div = document.createElement("div");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        div.appendChild(checkbox);
    
        var span = document.createElement("span");
        span.innerHTML = textTask.value;
        div.appendChild(span);
    
        task.appendChild(div);

        textTask.value = "";
    }

}