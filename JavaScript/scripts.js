


var mainContainer = document.createElement("div");
mainContainer.className = "container cardContainer";
let arr = [];

// setting all to wait
for(var i=1;i<=30;i++)
  arr[i] = "waitpage.html"

let path = "posts.html#"
arr[1] =  path + "p1";
arr[2] =  path + "p2";
arr[3] =  path + "p3";

var cnt = 0;
for(var i = 1 ; i<=10 ; i++){
  var rowBlock = document.createElement("div");
  rowBlock.className = "row ml-auto";

  for(j=1; j<=3;j++){
        cnt++;
        var colBlock = document.createElement("div");
        colBlock.className = "cols col-lg-3 col-md-12";
        var cardBlock = document.createElement("div");
        cardBlock.className = "card";
        var headingBlock = document.createElement("h5");
        headingBlock.className = "cardTitle";

        var textElement = document.createTextNode("April "+ cnt.toString());
        headingBlock.appendChild(textElement);

        var buttonBlock = document.createElement("a");
        buttonBlock.className = "btn btn-dark btn-sm";
        buttonBlock.name =  "foot";
        buttonBlock.href = arr[cnt];

        var butText = document.createTextNode("Read");
        buttonBlock.appendChild(butText);

        cardBlock.appendChild(headingBlock);
        cardBlock.appendChild(buttonBlock);
        colBlock.appendChild(cardBlock);
        rowBlock.appendChild(colBlock);

  }
mainContainer.appendChild(rowBlock);
}
var element = document.getElementById("cardLayout");
element.appendChild(mainContainer);
