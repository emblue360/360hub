---
title: "Buenas prácticas de HTML para mails"
metaTitle: "Buenas prácticas de HTML para mails"
metaDescription: "Guía con las prácticas más importantes a tener en cuenta a la hora de comenzar a maquetar nuestra comunicación de email marketing."
---

**¡Hola!**

Hemos creado esta guía con las prácticas más importantes a tener en cuenta a la hora de comenzar a maquetar nuestra comunicación de email marketing.

**¡Esperamos que te sea de ayuda!**


## Optimiza tu diseño

La utilización de las buenas prácticas tiene un objetivo: **lograr que el usuario receptor del email pueda acceder a la mayor cantidad de información posible haciendo el mínimo esfuerzo**. Es por esto que el newsletter debe ser lo más navegable y simple posible, estructurando el contenido de manera sencilla y eficaz.

Debemos asegurarnos de que el lector pueda distinguir títulos, banners, contenidos, etc. sin dificultad. Por esto es tan importante el armado de la estructura de la comunicación.

Aquí va un punteo con la información más importante:

---

##  Estructura

### Ancho:

El ancho máximo que recomendamos utilizar para que el newsletter sea correctamente visible para todos los receptores es entre 600px y 700px, recomendamos como medida estándar un ancho de **650px** .

Esto es porque algunos clientes de correo no mostrarán el contenido entero. Por ejemplo, quienes abran el email en Hotmail, deberán scrollear horizontalmente para ver completa la comunicación.

### Peso:

Si bien en emBlue hay un límite de peso para subir un html en tu mensaje (200kb), lo recomendado es que no supere los 102 kb ya que, en el caso de Gmail, solo se desplegará los primeros 102 kb del correo y el restante del mensaje quedará en un link de “Ver mensaje entero”

### Tablas:

El contenido debe ser estructurado en tablas html utilizando los siguientes tags: 

    <table> <tr> <td>

Se debe evitar el uso de **divs**, ya que los mismos no serán leídos por Outlook.

En caso de querer utilizarlos para un diseño responsive, deben agregarse condicionales de ancho fijo que estructurarán el contenido según nuestra necesidad.

Por ejemplo:

    <!--[if mso]>
    <table width="300" align="center" cellpadding="0" cellspacing="0" border="0">
    	<tr>
    		 <td>
    <![endif]-->
    
    	<div style="width: 50%; max-width: 300px"> 
    		Soy un div y me muestro en Outlook
    	 </div>
    	 
    <!--[if mso]>
    		</td>
    	</tr>
    </table>
    <![endif]-->

### Navegabilidad y links:

Los links al sitio web o blog deben estar visibles para incentivar el click y generar más tráfico. Una buena forma de visibilizar los links es colocar un menú horizontal con distintas categorías en las que el destinatario puede clickear y redireccionar a la página web.

![Navegación](http://cloudstorage.embluemail.com/clientes/Templates/assets/gitbook/navi.png)

### Estilos y CSS:

Para que la comunicación se vea como la diseñamos, se debe evitar el uso de estilos en hojas css externas o en la etiqueta `<head>`, ya que muchos clientes de correo la eliminan.

Los estilos deben ser establecidos en cada etiqueta de manera **INLINE**, utilizando el atributo “style”. Por ejemplo: 

    <td style=”font-size: 12px; color:#000; border:0”> Hola </td>

Para tener en cuenta: muchos clientes de correo no muestran el color de fondo de la comunicación si está establecido en la etiqueta `<body>`. Por esto recomendamos colocar una tabla (`<table>`) al 100% de ancho y colocar el color de fondo en la misma. Esta tabla será la contenedora del newsletter completo.

### JavaScript y Video:

Debemos descartar la idea de incluir javascript, o video dentro de un newsletter HTML. Esto es porque la mayoría de los clientes de correo tienen configuraciones de seguridad predeterminadas que no permiten su visualización.

Para mostrar una animación o video, lo mejor es utilizar un link a páginas externas (como YouTube o Vimeo) en las que coloquemos o estén ya cargados estos contenidos.

En el caso de los videos, una manera de incentivar el click del receptor, es colocar una captura de la pantalla de inicio del video con un icono de play sobre ella. Esta imagen estará direccionada al video que se quiera mostrar.

![enter image description here](http://cloudstorage.embluemail.com/clientes/Templates/assets/gitbook/vid.png)

---
## Contenido

### Imágenes:

Las imágenes son una parte muy importante de las comunicaciones, por eso debemos asegurarnos de que se vean bien y tarden lo menos posible en cargar. Veamos algunos consejos sobre este tema:

#### Nombre de archivo:

Las imágenes que coloquemos en nuestro newsletter **deben estar cargadas en un servidor** (puedes utilizar tanto el de emBlue como uno externo). Es importante que el nombre de las mismas esté correctamente escrito, para evitar que luego las imágenes se rompan. Se debe tener en cuenta que no pueden utilizarse espacios, acentos, caracteres especiales (por ejemplo: ! * % “) o la letra “ñ”. Los espacios siempre podemos reemplazarlos por un guión medio o bajo. Ejemplos de cómo nombrar correctamente las imágenes serían: “diadelnino.jpg”, “banner_20_descuento.png”, “header.gif”.

Las extensiones siempre serán .jpg, .png o .gif

Recordar que no es posible utilizar imágenes de fondo (background-image) ya que varios clientes de correo no las reconocen, lo que hace que el diseño se vea roto para algunos usuarios.

#### Peso:

Siguiendo la idea de optimización, debe evitarse que las imágenes tarden en cargar, pero tampoco queremos que tengan mala resolución. Para esto recomendamos que estén optimizadas para web y que no excedan 1mb de tamaño por imagen.

#### Links:

Las imágenes suelen tener links que llevan a algún sector del sitio web. Estos enlaces deben absolutos, osea que deben incluir todas las partes de la URL (protocolo, servidor y ruta).

Por ejemplo: 

    <a href="http://www.ejemplo.com/pagina-de-ejemplo.html" target="_blank>

### Texto:

El contenido de nuestra comunicación debe equilibrarse entre texto e imagen, ya que un email conformado solamente con imágenes tiene muchas posibilidades de ser filtrado a la bandeja de correo no deseado.

El equilibrio ideal se da con un 70% de texto y un 30% de imagen. Veamos cómo debe ser nuestro texto para que esté optimizado y pueda ser visible para todos los usuarios:

#### Tipografías:
Debemos utilizar tipografías de sistema, osea aquellas que vienen pre-instaladas en los sistemas operativos de cualquier computadora. Aquí una lista de fuentes que funcionan de manera correcta en los navegadores web:

 - Verdana, Geneva, sans-serif.
 - Georgia, Times New Roman, Times, serif.
 - Courier New, Courier, monospace.
- Arial, Helvetica, sans-serif.
- Tahoma, Geneva, sans-serif.
- Trebuchet MS, Arial, Helvetica, sans-serif.
- Arial Black, Gadget, sans-serif.
- Times New Roman, Times, serif.
- Palatino Linotype, Book Antiqua, Palatino, serif.
- Lucida Sans Unicode, Lucida Grande, sans-serif.
- MS Serif, New York, serif.
- Lucida Console, Monaco, monospace.
- Comic Sans MS, cursive.

El texto debe estar siempre sobre un fondo plano que puede ser de cualquier color. No es posible colocar una imagen o un degradado como fondo.

Tampoco debe tener sombras, relieves, brillos, texturas o bordes.

### Call to action - Botones

Teniendo en cuenta que el objetivo es optimizar la comunicación, veamos qué acciones se pueden tomar a la hora de diseñar los botones.

Evitar el uso de frases como "click aquí" ya que el contacto debe saber exactamente dónde irá ese click. Por eso, debemos ser lo más específicos posible e indicar lo que hace el botón: "Comprar ahora", "¡Lo compro!", "Quiero vender"

La posición del botón depende del contenido de la comunicación. La idea es que el destinatario deba scrollear lo menos posible, pero esto no significa que el CTA deba estar siempre lo más arriba posible. Por ejemplo, si el newsletter comunica datos sobre un evento al que el usuario se puede suscribir, recomendamos colocar primero toda la información y luego el botón que permita la suscripción, de manera que con un solo scroll se pueda concretar el objetivo del email.

En cuanto a colores, lo mejor es utilizar aquellos que generen un alto contraste. Es decir que resalten y sean pregnantes. El botón debe ser visible y con información clara. Por esto también recomendamos elegir la variable bold (negrita) de la fuente que se esté utilizando.

Por último, se deben evitar detalles como degradé, sombras, brillos, relieves, etc.

Aquí algunos ejemplos de botones:

![Botones](http://cloudstorage.embluemail.com/clientes/Templates/assets/gitbook/bttn.png)



### GIFs

Los GIFS pueden utilizarse siempre y cuando no superen el peso recomendado de 1mb, ya que de otra manera tardarían mucho en cargar o incluso no llegarían a cargar.

En el caso de incorporar GIFs, se debe tener en cuenta que algunos clientes de correo como Outlook 2007 no van a mostrar la animación, sino que sólo se verá el primer frame (cuadro) de la misma.

![Ejemplo de gif](http://cloudstorage.embluemail.com/clientes/Templates/assets/gitbook/gif.gif)

---
Es importante que realices pruebas a tu casilla de email antes de realizar el envío final de la acción. Esto te permitirá tener una idea clara de cómo verán la comunicación los destinatarios y poder hacer los retoques que sean necesarios.

Presta especial atención a estos elementos:

- Asunto
- Preheader
- Imágenes
- Links
- Ortografía del contenido
- Visualización en tu celular

Envía pruebas a tus diferentes casillas. En lo posible abarca los proveedores más populares como Gmail, Hotmail, Yahoo y Outlook.
