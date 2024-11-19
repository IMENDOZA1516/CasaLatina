const formInputs = {
    "nombre": null,
    "email": null,
    "telefono": null,
    "fecha": null,
    "hora": null,
    "mensaje": null,

}; //Object JSON Javascript Object Notation /// Javascript Object



document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});

function initPageLoad(){
    formInputs.nombre = document.getElementById("nombre");
    formInputs.email = document.getElementById("email");
    formInputs.telefono = document.getElementById("telefono");
    formInputs.fecha = document.getElementById("fecha");
    formInputs.hora = document.getElementById("hora");
    formInputs.mensaje = document.getElementById("mensaje");
    console.log("Formulario Cargado", formInputs);
    document.getElementById("formulario").addEventListener("submit", (e)=>{
        const [errors, isValid] = validateForm();
        if(!isValid) {
            alert("Formulario no Valido");
            console.log("Form Errors", errors);
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

function validateForm(){
    let errors = [];
    //Validar que el nombre no este vacio
    if(isEmpty(formInputs.nombre.value)){
        errors.push("El campo nombre no puede estar vacio");
    }
    if(!isEmail(formInputs.email.value)){
        errors.push("El campo email no es valido");
    }
    if(!isPhone(formInputs.telefono.value)){
        errors.push("El campo telefono no es valido");
    }
    if(!dateIsNotBeforeToday(formInputs.fecha.value)){
        errors.push("El campo fecha no puede ser anterior a hoy");
    }
    if(isEmpty(formInputs.mensaje.value)){
        errors.push("El campo Mensaje no puede estar vacio");
    }

    console.log("Date Input value", formInputs.fecha.value);
    return [ errors, errors.length == 0];
}
// Validadores
function isEmpty(value){
    return /^\s*$/.test(value);
}

function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}

function isPhone(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}

function dateIsNotBeforeToday(value){
    const date = inputValueToDate(value);
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    console.log("Date", date, today);
    return date >= today;
}

function dateToInputValue(date) {
    const year = new String(date.getFullYear());
    const month = new String(date.getMonth() + 1).padStart(2, "0");
    const day = new String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}


function inputValueToDate(value) {
    const [year, month, day] = value.split("-");
    let d = new Date();
    d.setFullYear(Number(year));
    d.setMonth(Number(month) - 1);
    d.setDate(Number(day));
    d = toStartOfDate(d);
    return d;
}

function dateToTimestamp(date) {
    return date.getTime();
}

function inputValueToTime(value) {
    const [hours, minutes] = value.split(":");
    let d = new Date();
    d = toStartOfDate(d);
    return d;
}

function dateToTimeInputValue(date) {
    const hours = new String(date.getHours()).padStart(2, "0");
    const minutes = new String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
}
function toEndOfDate(date) {
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);
    return date;
}

function toStartOfDate(date){
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}