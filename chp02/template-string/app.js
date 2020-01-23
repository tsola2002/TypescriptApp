var container = document.getElementById('container');
var todo = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true
};
// this is a template string which helps you construct a string using the values of the variables
// its also called a string literal value which is denoted by a backtick sysmbol(`)
// we use ${} to inject a value
var displayName = "Todo #" + todo.id;
// the fact that the syntax uses the backtick symbol mean that youre free to use single & double quotes
container.innerHTML = "\n<div todo='[[Todo ID]]' class=\"list-group-item}\">\n    <i class=\"" + (todo.completed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">[[Name]]</span>\n</div>\n";
