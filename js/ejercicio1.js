/*Gestión de una Biblioteca

Estás a cargo de desarrollar un pequeño sistema de gestión para una biblioteca utilizando JavaScript. Este sistema debe permitir administrar libros y autores, y realizar algunas operaciones básicas sobre ellos.

Para ello, debes crear un objeto Libro con las propiedades titulo (string), autor (string), añoPublicacion (número) y genero (string). Además, este objeto debe tener un método info que devuelva un string con la información del libro.


Luego, crea un arreglo llamado biblioteca que contenga al menos tres objetos Libro con diferentes datos.

A continuación, implementa una función buscarLibrosPorAutor que reciba como parámetro el nombre de un autor (string) y devuelva un arreglo con los libros escritos por ese autor.

Finalmente, implementa una función añadirLibro que reciba como parámetros los datos de un nuevo libro (titulo, autor, añoPublicacion, genero) y lo añada al arreglo biblioteca.

Tareas a realizar:

    Define el objeto Libro con las propiedades y métodos mencionados.
    Crea el arreglo biblioteca con al menos tres libros.
    Implementa la función buscarLibrosPorAutor.
    Implementa la función añadirLibro.
    Prueba tu código añadiendo un nuevo libro a la biblioteca y luego buscando libros por un autor específico. */


    class Libro {
        constructor(titulo, autor, añoPublicacion, genero) {
            this.titulo = titulo;
            this.autor = autor;
            this.añoPublicacion = añoPublicacion;
            this.genero = genero;
        }
    
        info() {
            return `${this.titulo} - ${this.autor} (${this.añoPublicacion}), género: ${this.genero}`;
        }
    }
    
 
// Arreglo que contiene los libros (biblioteca)
let biblioteca = [
    new Libro("El nombre del viento", "Patrick Rothfuss", 2007, "Fantasía"),
    new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico"),
    new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997, "Fantasía"),
    new Libro("Las puertas de piedra", "Patrick Rothfuss", 2021, "Fantasía")

];


// Función para buscar libros por autor
function buscarLibrosPorAutor(nombreAutor) {
    let librosAutor = [];

    // Iteramos sobre cada libro en la biblioteca
    for (let libro of biblioteca) {
        if (libro.autor === nombreAutor) {
            librosAutor.push(libro);
        }
    }

    return librosAutor;
}


function añadirLibro(titulo, autor, añoPublicacion, genero) {
    // Crear un objeto para el nuevo libro
    let nuevoLibro = {
        titulo: titulo,
        autor: autor,
        añoPublicacion: añoPublicacion,
        genero: genero
    };
    
    biblioteca.push(nuevoLibro);
    console.log(`Libro añadido a la biblioteca: ${titulo}`);
}
