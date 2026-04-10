## P5.js ##

### Características fundamentales ###  
Secuencia de instrucciones paso a paso, lógicas, definidas, ordenadas y finitas que permiten solucionar un problema o realizar una tarea específica.

### Funciones maestras ###  
* setup() 
Se ejecuta una vez al principio (para hacer el lienzo)  
Su propósito es configurar el entorno inicial.  
Define tamaño del lienzo (createCanvas), cargas imágenes o sonidos y establece configuración que no cambiará (como el color del fondo inicial).
* draw() 
  Se ejecuta en un bucle finito (normalente 60 veces por segundo), lo que permite crear animaciones.  
  Su propósito es crear movimiento y responder a la interacción en tiempo real.  
  Dibujas formas que cambian de posición, detectas dónde está el ratón o cambias colores gradualmente.

* createCanvas
* background

### Figuras Geométricas ###  
* point (punto, solo un pixel): (x,y)
* line (línea desde un punto inical a otro): (x1,y1,x2,y2)  
* rect (rectángulo): (x,y,ancho,alto)  
* ellipse (elipse, óvalo o círculo): (x,y,ancho,alto)  
* circle (círculo perfecto): (x,y,diametro)  
* square (cuadrado perecto): (x,y,lado)  
* trangle (triangulo dando cordenadas a las tres esquinas): (x1,y1,x2,y2,x3,y3)  
* quad (quadrilátero): (x1,y1,x2,y2,x3,y3,x4,y4)

### tamaños del borde ###  
* strokeWeight(): tamaño del borde de figuras
* noStroke(): para que las figuras no tengan borde

### color ###  
* stroke(): color del borde  
colroes van en RGB  
página HTML Color
