var DD=document.getElementById("day").value;
var YY=document.getElementById("year").value;
var CC=document.getElementById("century").value;
var MM=document.getElementById("month").value;
var gender=document.getElementById("selectgender").value;
parseInt(DD);
parseInt(YY);
parseInt(CC);
parseInt(MM);
let dayOfWeek=(((CC/4)-2*CC-1) +((5*YY/4) )+ ((26*(MM+1)/10)) + DD );
if(gender =="male" || dayOfWeek == 1){
    alert("kwasi");
} else if alert("Akosua");
$("button").click(function){
    alert("dayOfWeek").value());
}
