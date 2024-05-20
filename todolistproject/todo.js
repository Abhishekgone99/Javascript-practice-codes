let input = prompt("what would you like to do ?")

const todos = ["collect apples", "collect eggs"]

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("***********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log("***********");
    } else if (input === "new") {
        const newtodo = prompt("ok! what do you like to add to list");
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`);
    } else if (input === "delete") {
        const index = parseInt(prompt("ok! which index do you want to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`ok you deleted  ${deleted[0]}`);
        } else {
            console.log("invalid index");
        }
    }
    input = prompt("what would you like to do ?")
}
console.log("Ok you quit");