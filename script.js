var selectAll = document.getElementById("sel-all");
var completeBtn = document.getElementById("complete-btn");
var pendingBtn = document.getElementById("pending-btn");
var titleArea = document.querySelector(".title");
var listArea = document.getElementById("list");
var listAreaComp = document.getElementById("list-comp");
var listAreaPending = document.getElementById("list-pending");

var spanRef = document.createElement("span");
selectAll.addEventListener("click", () => {
    spanRef .innerHTML = " - All";
    titleArea.appendChild(spanRef);
});
completeBtn.addEventListener("click", () => {
    spanRef .innerHTML = " - Completed";
    titleArea.appendChild(spanRef);
});
pendingBtn.addEventListener("click", () => {
    spanRef .innerHTML = " - Pending";
    titleArea.appendChild(spanRef);
});

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/todos");
fetchPromise.then(function(data) {
    return data.json();
}).then((data) => {

    selectAll.addEventListener("click", function() {
        listAreaComp.innerHTML = "";
        listAreaPending.innerHTML = "";

        for (var i=0;i<10;++i) {
            if (data[i].completed === true) {
                var temp = data[i].title;
                var p = document.createElement("p");
                p.setAttribute("class", "comp");
                p.innerHTML = temp;
                listArea.appendChild(p);
            }
            else {
                var temp = data[i].title;
                var p = document.createElement("p");
                p.setAttribute("class", "pend");
                p.innerHTML = temp;
                listArea.appendChild(p);
            }
        }
    });

    completeBtn.addEventListener("click", function() {
        listArea.innerHTML = "";
        listAreaPending.innerHTML = "";

        for (var i=0;i<10;++i) {
            if (data[i].completed === true) {
                var temp = data[i].title;
                var p = document.createElement("p");
                p.setAttribute("class", "comp");
                p.innerHTML = temp;     
                listAreaComp.appendChild(p);           
            }
        }
    });
    
    pendingBtn.addEventListener("click", function() {
        listArea.innerHTML = "";
        listAreaComp.innerHTML = "";

        for (var i=0;i<10;++i) {
            if (data[i].completed === false) {
                var temp = data[i].title;
                var p = document.createElement("p");
                p.setAttribute("class", "pend");
                p.innerHTML = temp;
                listAreaPending.appendChild(p);
            }
        }
    });
});