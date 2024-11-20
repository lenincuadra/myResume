##### ⚠️ WARNING ⚠️

- I decided to write this in the language I felt like it at that time.
- In the future, I'll update this to make it consistent, for now, you'll find this in **Spanglish**.
- date_Nov-15-Fri-2024 Mi primera vez usando una libreria de JS y por supuesto, fracasando en el uso, ni ChatGPT me salva.
- date_Nov-16-Sat-2024 Youtube, ChatGPT, Google ni la justicia divina me pudo ayudar a poder usar la libreria, termine exportando si, pero siempre existio un problema para que renderizara tal-cual como queria, incluso estuve cerca de lograr hacerlo visualmente igual, pero no era Searcheable con CRTL+F, y para mi eso ES CLAVE porque los Recruiters tienen a hacerlo. Ademas de que pesaba muchisimo. Termine descubriendo que con un par de trucos aca y alla (Adjunto imagen) se puede Imprimir / Elegir PDF / Y en opciones Avanzadas se pueden hacer los ajustes necesarios para lograr exportar como quise, tuve ligeros inconvenientes porque parece que 'span' no era Searcheable, asi que los reemplace por DIV, todavia me falta ajustarlo visualmente, pero prefiero hacer ese refactor que seguir luchando con el exportar. Mucho fracaso pero mucho aprendizaje el dia de hoy.

---

# 📝 My learnings on this file

### From 11 to 13/10/24

1. 11/10/24 - Instalar Git fue mi objetivo desde el principio, todo un completo desafio, me tomo un dia feriado entero, desde las 8am hasta las 12pm (con cosas de mi vida en el medio) pero lo logre, se siente bien hacer las cosas que parecen impossible, por muy simple que sean para los demas.
2. 12/10/24 - HTML y CSS son bastante sencillos, pero no para cualquiera, para alquien como yo que tiene 4 anos de experiencia en la industria tech, es mucho mas facil, si alguien me preguntara ahora como empezar le diria un par de cosas:
   - 12/10/24 - Tengo un plan para el futuro de crear alguna clase para agregar en los Divs que luzca como una seleccion en Figma, Es demsiado complejo manipular rectangulos invisibles cuando son tan relevantes para el maquetado en la web (esto es solo una teoria)
   - 12/10/24 - Mientras tanto, usar el DevMode de Chrome reemplaza esta funcion, pero no entiendo como funciona en paralelo con el codigo en VScode.
3. 13/10/24 - Git luce muy simple despues de pasar 1 dia de utilizarlo, no creo que sea as siempre, pero logre hacer commits de forma simple esta vez.

   - Por fin logro entender que signifca "local". Si entras tu "network" local, signiica que es a la red Wifi a la que estas conectado, como funcionan las LAN, es decir, puedes verlo desde tu telefono, suena practico para hacer QA desde un cel.
   - el 5500, significa que es el servidor, concepto medio-confuso porque como es que tu propia compu es tu propio servidor?
     - Local: http://localhost:5500
     - Network: http://132.158.100.124:5500

4. 14/10/24 - Los colores en la UI de vsCode ayudan a comprender el orden de la sintaxis si esta bien o no, no hay que forzarse para comprenderlos, la logica de relacion con esos colores va viniendo de a poco.

- Mantente Commit-eando. Es tan evidente desde ahora que los commits son parte del dia a dia, pero al mismo tiempo, lo complejo que es en comparacion a darle ctrl+S y guardar tus cambios, tiene esa misma importancia, pero no esta ni cerca de tener la misma dinamica, la diferencia de dificultad es increible: 1 es dibujar una linea en una hoja blanca y el otro es dibujar un mural entero CADA VEZ que quieras guardar tus cambios. Mantenerte commiteando no porque te importe mucho guardar, sino porque es algo que debe ser parte de tu flujo de trabajo y no deberia ser un bloqueante guardar tu data -Obvio estoy commiteando esto ahora desde GitHub-

5. date_Oct-15-Tue-2024 - Instalar un plugin aunque parezca tonto gastar 1hora, puede ser bastante necesario en el futuro, instale Prettier para mantener el codigo consistente y algo como Googlear y leer por 2 minutos puede resolverlo.

- Yes! Mi codigo a partir de ahora luce Prettier, jaja.

6. date_Oct-17-Thu-2024 - Aprendiendo JS: utilizando la consola del navegador para actualizar un objeto.
7. date_Oct-18-Fri-2024 – Practicando crear un Object en js.
8. date_Oct-20-Sun-2024 - Commitear ya se ha vuelto natural para mi, lo entiendo perfectamente y hasta ahora, no ha habido ningun problema, me siento comodo y sale fluido.

- Entender como hacer colecciones es un poco dificil, mi mejor solución fué poder renombrarlas de una forma que yo supiera que es una colección "collectionOfLi" fué el nombre que terminó de definir mi primera aplicación creada.
- _Lenin's Quote: 'a missing "" can break anything, even your confidence in your code'_
- Console.Log es la herramienta perfecta para resolver los problemas en JS.

9. date_Oct-22-Tue-2024 - Saber identificar una clase, de un ID es fundamental al momento de querer manejar el DOM.
10. date_Oct-24-Thu-2024 - Failed to Deliver yesterday, so many appointments
11. date_Oct-24-Thu-2024 - "=" is not the same as "===" I had the ability to spot that and solve the bug by mylself.
12. date_Oct-25-Fri-2024 - Uff! que buen curso para volver a ver cuando hace falta el de GIT, no tenia forma facil de volver y hoy use mi primer: "Git Restore" y funcion como magia.
13. date_Oct-26-Sat-2024 - Incredible Crash Course for CSS, a lot of stuff I don't knew it even stuff that I should knew as a Designer.
14. My first Refactor on CSS, is not being hard but you have to be aware of so many stuffs, Display: Flex is incredible complex and powerful at the same time obviously is a must-have to learn.
15. date_Oct-27-Sun-2024 - Refactor dia - me hace falta comprender como funciona bien la estructura en CSS
16. date_Oct-28-Mon-2024 - Dia de Aprender BEM: Vi un par de videos de BEM, 1 explico todo muy bien y otro demasiado complejo, pero me quedo un 80/20 entre ambos.

- BEM no es un lenguaje, es mas bien una metodologia de escribir codigo. Imaginemos que existe un tipo llamado "Bem". Bem, es muy organizado, sabe escribir codigo de forma que cualquiera lo pueda entender y actualizar y lo hace de una manera simple para el mismo. Lo importante de todo esto, es que si todos escribiemos como "Bem" no solo vamos a tener un codigo mas limpio, sino que tambien va a ser muy escalable ya que cualquiera va a poder entenderlo si esta estandarizado "a lo Bem"
- Otra cosa que aprendi sobre Bem, es que se siente bastante como funciona un componente dentro de un componente en Figma, podria estar equivovado, pero hay algun paralelismo ahi. Tips sobre BEM: no agregues Margin en componentes por si solo, es mejor controlar el padding de componente con el contenedor que lo vaya a rodear.
- El Video de BEM esta bueno para principiantes haciendo una Card que es un elemento bastante comun en Diseno y la vez bastante complejo, voy a hacerlo posiblemente manana.

17. date_Oct-29-Tue-2024 - Muy buenos tips del video para CSS, esta para verlo cada cierto tiempo y recordar de usar esos tips (10 CSS Pro Tips - Code this, NOT that!)

18. Tools Vs Materials: Learn Materials of how the web is built it, when you have a problem, pick and learn the Tool you need for theyou have.

19. Applying BEM to my code from Scratch!

20. MY 1st refactor, BEM Refactor FTW WIP!

21. Going on the BEM Route, understanding the basic of it!

22. date_Oct-26-Thu-2024 Learning flexbox, but it's not the time, I'm back to focus on BEM, I think need to understand how to make css classes in a scalable way, then, I'll be back to structure the UI.

23. date_Oct-27-Thu-2024 Scaling the Design System now, trying to build the first tokens,separating css for the LenK DS and basic, cleaning up a lot of the BEM.

- date_Oct-28-Thu-2024 Adicionalmente, logre alinear items a la derecha, pequenos logros que reflejan el conocimiento de Flex que he aprendido en pocos dias!

24. date_Oct-29-Thu-2024 Learning about how to name tokens properly, this is kinda hard if you do it wrong from the start, i feel is better to invest to learn about it, feel comfy and start building with a good name convention, that's going to be your life easier on the future.

25. date_Oct-30-Thu-2024 No mucho avance, todavia decidiendo como escribir los tokens en color principalemente que es lo que me tiene mas bloqueado ahora, manana simplemente escribire los colores que tengo pre-definidos como tokens al estilo que mas me parezca que tenga sentido para mi, y pagare la deuda tecnica luego si existe haciendo un refactor, progresar es mas importante que ser perfecto.

26. date_Oct-31-Thu-2024 I think I find someone who knows what's he's talking about, not sure who is this Uncle Bob (Robert Cecil Martin), but that guy makes sense a lot, I think I'm in a good path to find a mentor.

27. date_Nov-1-Thu-2024 Today I learnt about Design Patterns, resulta que son tan similares al Diseno que nadie lo podria creer. Son patrones pre-definidos que te hacen entrar en el modelo mental correcto cuando quieres comprender la logica de una funcionabilidad, es decir, son utiles para que no vuelvas a crear la rueda.

- date_Nov-2-Thu-2024 Continuo con nuevos colores en los tokens, definiciones basicas y pagando deuda tecnica de cambio de nombres.

- date_Nov-3-Thu-2024 Resulta que UncleBob fue uno de los que creo el primer Agile Manifesto (no se si existe mas de 1) y esta en contra, dice que Agile no era una estrudctura organizacional, sino que 7 devs se juntaran a hacer cosas de forma organizada.

- date_Nov-4-Thu-2024Muchos videos de DevSeniors hablando sobre la industria.
- date_Nov-5-Thu-2024Ya tengo una base definida de tokens para terminar el proyecto, ademas, aplique BEM en Modifiers lo cual es bastante tricky si tienes un elemento como Tag que esta dentro de tu Block (B de BEM) pero te esperas que vaya a estar en otros lugares del diseno, y ademas, tambien va a tener otras versiones dentro del diseno. En el futuro, seguro agregue mas .css para separar este tipo de componentes por archivo.
- date_Nov-6-Thu-2024 El Card esta completo, luce bastante bien, falta duplicarlo y agregar el contenido para concluirlo y pasarme a Grid o a Flexbox, porque la verdad cual es la mejor herramienta para aplicar ahora, pero va a ser responsive eso es seguro.

- date_Nov-7-Thu-2024 Aprendizajes que nadie te dice o te recuerda sobre CSS: Siempre es una cascada, si de casualidad duplicaste una propiedad y editas la primera y no ves resultados, es porque tu segunda propiedad identica esta reemplazando la anterio.
- date_Nov-8-Thu-2024 Los estilos en CSS aparementente son Case Sensitive, no es lo mismo "OnPrimary" que "onPrimary" si escribes mal el nombre no lo toma.. me tomo 15 minutos aprenderlo a las malas.
- date_Nov-9-Thu-2024 BEM es bastante poderoso, comodo y escalable, hay que considerar bien al momento de escribir una clase para un Bloque para tener el menor esfuerzo por el mayor impacto en los desarrollos.

- date_Nov-10-Thu-2024 Finally, the Card it's looking good! I'm learning about Grid CSS, is pretty complex but looks incredible powerful!

- date_Nov-11-Thu-2024 Dude, Grid is harder than it looks, lol! rolling back to my secure-design due to my incapabilities to land the grid system properly.

- date_Nov-12-Thu-2024 Yesterday I saw a video really good video on grids and I feel like I could go ALL HANDS to using it, BUT, that wasn't that easy, today I have to go to a new level and learn Grid with a help of an abstraction of a game, Grids feel something very importart but very hard to master, this looks like the Autolayout for Figma. (Image is attached)

- date_Nov-13-Thu-2024 No Cada dia es productivo, hoy tuve mucho tiempo y no lo aproveche, pero estoy aca cumpliendo y al menos progrese algo y tome decisiones, no se puede ganar todos los dias.

- date_Nov-13-Thu-2024 agregue las fechas, pero estan mal, en el futuro pienso acomodar esas fechas.

- date_Nov-17-Sun-2024 Para simplemente remover el color :visited de un link, solo tienes que borrarlo del historial, parece sencillo, pero primero debes encontrarlo que tampoco es dificil, pero tuve que borrarlo unas 56 veces, tampoco dificil pero bien aburrido, ademas de que despues de eso, usar ChatGPT, StackOverflow, colorear todos los estados posibles y testear cada una de las posibilidades de un link cuando cambia de color, TODAVIA EXISTIA EL COLOR VISITED en mi link. Por casualidad lo borre tambien de la barra de busqueda y mientras testeaba no note que se elimino sino que parecio que el visited cambio a otro link (que habia visitado de tanto probar cosas) luego borre ese nuevo link de todos lados y seguia comportandose como el link anterior que por fin lo habia resuelto (sin saber como) asi que pense que fue lo unico diferente que hice.. .y era eso, la solucion estaba en no solo borrarlo del Historial, sino tambien de la barra de busqueda! No era tan importante para mi esto, habia conseguido un workaround de usar el mismo color paara visited y active y eso fuera bastado para exportar en PDF, pero sabia que a lo largo del tiempo podria ser una problema si quisiera actualizar los links de los colores.
- date_Nov-17-Sun-2024 Grids are super-fun! Mis aplicaciones de Grids siempre estuvieron bien, pero habia saturado la estructura de Divs que no permitian el renderizado deseado de la grilla.
- date_Nov-18-Mon-2024 - Despues de tanto lidear con la exportacion a PDF, por fin lo logre!!!
- date_Nov-19-Tue-2024 Documenting my Roadmap from start to finish of this product. this is just a wireframe, has not the completed data.

1. Git
2. html
3. css
4. Terminal (VsCode)
5. ChatGPT
6. Prettier
7. ESLint
8. Mimo
9. Grid Garden
10. Stackoverflow

## Roadmap - My Developer Learnings Path

- others (past updates will be shown here)
- HTML (foundations)
- HTML/CSS (foundations)
- HTML/CSS/JS (foundations)
- GIT (foundations)
- HTML / CSS (foundations)
- Box Model
- BEM nomenclature
- Box Model
- Flexbox
- Microservices VS Monolite. Basicamente Atomizar la tecnologia o hacerlo todo en un solo bloque gigante, tengo muuucho buzzyword de estos 2 desde hace anos, pero viendo el concepto ahora, Apuesto que Microservices es mejor, no importa si ambos tienen "sus mejores casos" apuesto por Microservicios.
- Tokens: Spyke (I already known tokens, but they tend to be kinda confusing and is important to made them properly from the start)
- Design Patterns. El "no reinventes la rueda" del desarrollo.
- Grids CSS: son muy trickies! Lo mas divertido es que pase hora y media ayer resolviendo una distribucion en Grids que termino siendo un comentario mal-escrito en CSS que me rompia todo.

## References

- [Markdowns on Github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Git Course - Linkedin](https://www.linkedin.com/learning/git-essential-training-19417064/make-use-of-the-gui-of-visual-studio-code?autoSkip=true&resume=false)
- [How to Host a Website On Github Pages](https://www.youtube.com/watch?v=OltY8JIaP-4&ab_channel=KennyYipCoding)

- [https://lenincuadra.github.io/myResume/](https://lenincuadra.github.io/myResume/)

- [https://mimo.org/](https://mimo.org/)

- [Learn CSS in 20 Minutes](https://www.youtube.com/watch?v=1PnVor36_40&t=25s&ab_channel=WebDevSimplified)

- [Learn CSS Box Model In 8 Minutes](https://www.youtube.com/watch?v=rIO5326FgPE&list=PLZlA0Gpn_vH9D0J0Mtp6lIiD_8046k3si&index=8&ab_channel=WebDevSimplified)

- [Learn Flexbox in 15 Minutes](https://www.youtube.com/watch?v=fYq5PXgSsbE&list=PLZlA0Gpn_vH9D0J0Mtp6lIiD_8046k3si&index=8&ab_channel=WebDevSimplified)

- [Learn CSS BEM (and avoid these common mistakes)](https://www.youtube.com/watch?v=YktyUS1Aeo0)

- [You Probably Need BEM CSS in Your Life (Tutorial)](https://www.youtube.com/watch?v=er1JEDuPbZQ&t)

- [10 CSS Pro Tips - Code this, NOT that!](https://www.youtube.com/watch?v=Qhaz36TZG5Y)

- [Jen Simmons - What if CSS Grid Changes?](https://www.youtube.com/watch?v=nCDWzV9wzW4)

- [BEM 101: How to Make Web Design Organized & Scalable](https://www.youtube.com/watch?v=tha_ynmZRaA)

- [Learn CSS Flexbox in 20 Minutes (Course)](https://www.youtube.com/watch?v=wsTv9y931o8)

- [Learn CSS Displays in 12 Minutes | Grid, Flexbox, Inline Block, Block](https://www.youtube.com/watch?v=21ES7AnqkrA)

- [Token Structure](https://canvas.workday.com/styles/tokens/overview/#token-structure)

- [The problem with frameworks - Uncle Bob](https://www.youtube.com/watch?v=evmZTh7l6UE)

- [Never use Booleans in a Function](https://www.youtube.com/shorts/jTgBaawLvQ0)

- [I Interviewed Uncle Bob](https://www.youtube.com/watch?v=UBXXw2JSloo&t=3565s)

- [Learn CSS Grid - A 13 Minute Deep Dive](https://www.youtube.com/watch?v=EiNiSFIPIQE&t)

- [Grid Garden - Game](https://codepip.com/games/grid-garden/)

- [CSS: Advanced Layouts with Grid Manual grid item placement](https://www.linkedin.com/learning/css-advanced-layouts-with-grid/manual-grid-item-placement?autoSkip=true&resume=false)

- [Disable color change of link when visited](https://stackoverflow.com/questions/7291873/disable-color-change-of-anchor-tag-when-visited)
