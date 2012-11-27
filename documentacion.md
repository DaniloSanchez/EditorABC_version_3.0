Formato ABC a Partitura
========
INSTITUTO TECNOLOGICO DE COSTA RICA

INTERFACES GRAFICAS 

PROYECTO NUMERO 1

ABC FORMART TO SCORESHEET

ANDRES RAMIREZ FUENTES 201013880

DANILO SANCHEZ MONGE 201035479

Introduccion
--------
Este proyecto trata sobre la implementacion de la libreria abc de js. Para esto se proporcionara una serie de erramientas para el uso correcto de la aplicación en caso de que lo usuarios no conozcan el formato abc.

Descripción del contenido a desplegar
--------
El programa funcionara con multiples areas.
1. un area de texto principal en la cual se cargaran los archivos musicales.
2. un area de dibujo donde se ira mostrando la partitura conforme se va editando o creando.
3. una seccion de botones que cuentan con la funciones especiales para editar y crear partituras nota por nota.
Definición de estructuras de datos (formato) utilizadas
--------
Para el desarrollo del programa se usa las estructuras implementadas por la libreria ABC. Este cuenta con la facilidad de que se encuentra implementadas estructuras para dibujar.

Forma de compilación, ejecución y utilización de la aplicación
--------

Para el uso correcto de la aplicacion usted debe descargar la carpeta completa de EditorABC_version_2.0

1. Con un doble click sencillo la aplicacion correra en su navegador predeterminado. (se recomienda usar Google Chrome)

para utilizar la aplicacion usted debera:

1. es necerario tener archivos que ya cuenten con formato abc para no emprezar desde cero, por eso se proporcionan dos archivos con canciones.
2. usted primero debe cargar el archivo.
3. usted seguidamente debera mostrar el archivo y esperar a que este se mueste en pantalla.
4. por ultimo debe seleccionar el boton de editar para desplagar todas las opciones para el editaje de la partitura.

Ejemplos de datos a utilizar como pruebas
--------

Para esta aplicion se cuenta con 2 archivo de muestra ubicados en "Bootstrap/Canciones/" se llaman "cancion.txt" la cual tiene una partitura sencilla y por ultimo "mortal.abc" la cual tiene mas de 10 partituras.

**un primer ejemplo:**

> Encabezados

> > X:2

> > T:Old Sir Simon the King

> > C:Trad.

> > S:Offord MSS          % from Offord manuscript

> > N:see also Playford   % notes

> > M:9/8

> > R:SJ                  % slip jig

> > Q:C3=120              % tempo

> > Z:originally in C     % transcription notes

> > K:G

**un segundo ejemplo:**

> Encabezados
> > C, D, E, F,|G, A, B, C|D E F G| A B c d|e f g a|b c' d' e'|f' g' a' b'|]

**un tercer ejemplo:**

> marcadores de ritmo
> > A>A A2>A2 A>>A A2>>>A2|]

**un cuarto ejemplo:**

> Vigas
> > A B c d AB cd|ABcd ABc2|]

**un quinto ejemplo:**

##Implementados al Cargar Archivos##
> Ejmplos

> > Acordes 

> > > [CEGc] [C2G2] [CE][DF]|[D2F2][EG][FA] [A4d4]|]

> > Grace notes

> > > {g}A3 A{g}AA|{gAGAG}A3 {g}A{d}A{e}A|]

> > Accents

> > > ~A ~c .A .c vA vc uA uc|]

> > chords

> > > "A"A "Gm7"D "Bb"F "F#"A|]

> > Ties and Slurs

> > > (AA) (A(A)A) ((AA)A) (A|A) A-A A-A-A A2-|A4|]

> > Tuplets

> > > (2AB (3ABA (4ABAB (5ABABA (6ABABAB (7ABABABA|]


Limitaciones observadas y posibles mejoras (lista TO DO).
--------
La libreria cuenta con varías funciones no implementadas por la finalidad de este proyecto. para versiones futuras se implementara el audio de las partituras pero, es necesario que su browser tenga instalado quicktime para su reproduccion.