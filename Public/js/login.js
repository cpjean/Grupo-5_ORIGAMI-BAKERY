window.addEventListener("load", function(){


    let form = document.querySelector("form")

    form.addEventListener("submit", function(e){

        let errores =[];

        let emailField = document.querySelector("[name=email]")
        let passwordField = document.querySelector("[name=password]")

        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
        if (emailField.value === ""){
            errores.push("El campo email no puede estar vacio")
        } else if(!reEmail.test(emailField.value)){
            errores.push("El campo email debe tener un mail valido")
        } 

        if (passwordField.value === ""){
            errores.push("El campo contraseña no puede estar vacio")
        } else if(passwordField.value.length <= 8){
            errores.push("El campo nombre debe tener al menos 8 caracteres")
        }

        let ulErrores = document.querySelector("#errores")
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }

    })

})