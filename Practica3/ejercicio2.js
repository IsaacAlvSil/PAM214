function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
    if (usuario == "admin") {
        resolve("acceso concedido");
    } else {
        reject("acceso denegado");
    }

});
}

verificarUsuario("admin")
 .then(res => console.log(res))
 .catch(err => console.error(err));

 verificarUsuario("isaac")
  .then(res => console.log(res))
  .catch(err => console.error(err));