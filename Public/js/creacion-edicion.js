window.addEventListener("load", function(){

    let form = document.querySelector("form")

    let name = document.querySelector("[name=name]")

    let description = document.querySelector("[name=description]")

    let img = document.querySelector("[name=img]")

    
    form.addEventListener("submit", function(e){

        let errores =[];

        let form = document.querySelector("form")
        let name = document.querySelector("[name=name]")
        let description = document.querySelector("[name=description]")
        let img = document.querySelector("[name=img]")

   
        if (name.value === ""){
            errores.push("El campo nombre no puede estar vacio")
        } else if(nameField.value.length <= 5){
            errores.push("El campo nombre debe tener al menos cinco caracteres")
        }

        if (description.value === ""){
            errores.push("El campo descripcion no puede estar vacio")
        } else if(nameField.value.length <= 20){
            errores.push("El campo descripcion debe tener al menos veinte caracteres")
        }

        avatarField.addEventListener("change", (e) => {
            const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
            const allowedExt = ["jpg", "jpeg", "png", "gif"];
            if (!allowedExt.includes(fileExt)) {
            errores.push("El campo avatar debe solo contener imagenes en los formatos jpg, jpeg, png y git");
            }

            let ulErrores = document.querySelector("#errores")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }

    })

})
})