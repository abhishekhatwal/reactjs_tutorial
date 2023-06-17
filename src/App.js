let fname="abhi";
let lname="react js";


function name(){
    let name="react peactice";
    return name;
}

function code(){
    let calc="add num";
    return calc;
}

// tou can use default export for only one entity for rest of the entity you can use normal export and can simultaneously export one or more item/entity using {}
export default fname;

export {lname, name,code};