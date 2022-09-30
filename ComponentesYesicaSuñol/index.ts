class Persona{
    protected nombre: string;
    protected apellido: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    obtenerNombre(){
        return this.nombre;
    }

    obtenerApellido(){
        return this.apellido;
    }

    obtenerEdad(){
        return this.edad;
    }

    agregarNombre(nombre: string){
        this.nombre = nombre;
    }

    agregarApellido(apellido: string){
        this.apellido = apellido;
    }

    agregarEdad(edad: number){
        this.edad = edad;
    }
}

class Usuario extends Persona{
    private correo: string;
    private contrasena: string;

    constructor(nombre: string, apellido: string, edad: number, correo: string, contrasena: string){
        super(nombre, apellido, edad);
        this.correo = correo;
        this.contrasena = contrasena;
    }

    obtenerNombre(): string {
        return this.nombre + this.apellido;
    }
}

let persona1: Persona = new Persona("Pablo", "Lago", 15);
console.log(persona1.obtenerNombre(), persona1.obtenerApellido(), persona1.obtenerEdad());


let usuario1: Usuario = new Usuario("Mariano", "Oblitas", 26, "mariano@gmail.com", "asd.123");
console.log(usuario1.obtenerNombre());



let 




let mensaje1: string = 'Hola, ¿qué tal?';
const mensaje2: string  = "Esta semana juega Argentina vs Honduras";
let mensaje3: string = mensaje1 + " " + mensaje2;
let n1: number = 3;
let n2: number = 2.5;
let n3: number = n1 * n2;
let booleanos: boolean = false;
enum opciones {
   Si = 1,
   No = 2 
};

function imprimirMensajes(){
    console.log("Mensaje 1:", mensaje1);
    console.log("Mensaje 2:", mensaje2);
    console.log("Mensaje 3:", mensaje3);
    console.log("Numero 1:", n1);
    console.log("Numero 2:", n2);
    console.log("Numero 3:", n3);
    console.log("Booleano:", booleanos);
    console.log("Enum:", opciones);
}

imprimirMensajes();