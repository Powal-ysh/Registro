


import "./registro.css"

export default function Registro() {
  return (
    <div className="register">

      <h1 className="registerTilte">Registro</h1>

      <span className="registerDesc">Completa el siguiente Formulario para tener acceso completo a nuestra pagina</span>

      <form className="registerForm">

        <label>Nombre</label>
        <input className="registerInput" type="text" placeholder="Ingrese su nombre..." required/>

        <label>Apellido</label>
        <input className="registerInput" type="text" placeholder="Ingrese su apellido..." required/>

        <label>Email</label>
        <input className="registerInput" type="email" placeholder="Ingrese su email..." required/>

        <label>Telefono</label>
        <input className="registerInput" type="tel" placeholder="Ingrese su Numero Telefonico..." required/>

        <label>Contraseña</label>
        <input className="registerInput" type="password" placeholder="Ingrese una contraseña..." required/>

        <label>Confirmar Contraseña</label>
        <input className="registerInput" type="password" placeholder="Ingrese la misma contraseña..." required />
        

        <input type="checkbox" className="registerInput checkBox" required/>Acepta los <a href="#" target="_blank">Terminos y Condiciones</a>

        <button className="registerButton">Registrarse</button>

      </form>
      
    </div>
  )
}
