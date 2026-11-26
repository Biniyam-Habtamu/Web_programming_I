let site = "global";

function show() {
    let msg = "local";
    console.log(site); //ok
}

console.log(msg); //error!