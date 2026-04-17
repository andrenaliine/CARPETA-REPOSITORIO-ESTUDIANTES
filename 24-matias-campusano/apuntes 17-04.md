# Apuntes Sesión 17-04  
# Transformaciones y condicionales
## Variables dinámicas nuevas ;o  

### Angulos Radiales  

P5 utiliza por defecto los angulos en radiales, esto puede ser complejo de entender y sostener.   
Para facilitar utilizaremos en el setup el **angleMode(DEGREES)** esto nos permitirá trabajar con grados y no palabras.

### Rotation y Traslate

Para hac
-> translate()  
-> rotation()

### Guardar y restaurar  

Funciones que trabajan juntas como un "sistema de memoria temporal" para el estilo y las transformaciones del lienzo.  
-> push();  
-> pop();

* Si yo quiero que un objeto gire o vaya en sentido antihorario, debo colocar un "-"
    * Ejemplo: rotate(-10);

