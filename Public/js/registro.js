window.addEventListener("load", function(){


    let form = document.querySelector("form")

    form.addEventListener("submit", function(e){

        let errores =[];

        let emailField = document.querySelector("[name=email]")
        let nameField = document.querySelector("[name=name]")        
        let avatarField = document.querySelector("[name=avatar]")       
        let passwordField = document.querySelector("[name=password]")
        let confirmField = document.querySelector("[name=confirm]")

        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
        if (emailField.value === ""){
            errores.push("El campo email no puede estar vacio")
        } else if(!reEmail.test(emailField.value)){
            errores.push("El campo email debe tener un mail valido")
        } 

        if (nameField.value === ""){
            errores.push("El campo nombre no puede estar vacio")
        } else if(nameField.value.length <= 1){
            errores.push("El campo nombre debe tener al menos dos caracteres")
        }

        avatarField.addEventListener("change", (e) => {
        const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
        const allowedExt = ["jpg", "jpeg", "png", "gif"];
        if (!allowedExt.includes(fileExt)) {
        errores.push("El campo avatar debe solo contener imagenes en los formatos jpg, jpeg, png y git");
        }

        if (passwordField.value === ""){
            errores.push("El campo contraseña no puede estar vacio")
        } else if(passwordField.value.length <= 8){
            errores.push("El campo nombre debe tener al menos 8 caracteres")
        }

        if (confirmField.value === ""){
            errores.push("El campo confirmar contraseña no puede estar vacio")
        } else if(passwordField.value !== confirmField.value){
            errores.push("El campo contraseña y confirmar contraseña deben ser iguales")
        }

        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("#errores")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
        
    })

})

})