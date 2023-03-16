# Déplacer un rectangle

> A JS exercise use at HEPL for MMI.

* * *

**move-my-rectangle** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](https://hepl.be) from Liège, Belgium, is a French-speaking school. From this point, the instruction will be in French. Sorry.

* * *

## Énoncé

1. Commencer par mettre à jour les dimensions du canvas afin qu'il occupe toute la largeur et la hauteur de la fenêtre. Pensez à mettre à jour ces valeurs dès lors qu'on redimensionne la page.
2. Dessiner aléatoirement quelques rectangles avec une taille, une position, une couleur, une opacité et une vitesse en x et y aléatoire. ( Cf. point suivant) 
3. Essayer d'animer la position des rectangles de sorte qu'ils se déplacent dans le canvas, sans jamais sortir de l’écran. Pour le déplacement, vous pouvez travailler avec une quantité de pixels que vous ajoutez en x et en y au rectangle. Appelons ça, la vitesse. Considérer que chaque rectangle dispose d'une vitesse en x et en y. Ainsi, à chaque fois, que la fenêtre du navigateur est rafraichie vous mettez à jours les coordonnés du rectangle. En ajoutant à sa position sa vitesse. Dès lors qu'un rectangle entre en collision avec un des bords, vous inversez sa vitesse. Et donc si sa vitesse était positivée, elle devient négative. Ce qui aura pour effet de déplacer le rectangle dans la direction opposée puisque vous ajoutez maintenant une vitesse négative à la position du rectangle jusqu’à la prochaine collision. Pensez à nettoyer le canvas avant de mettre à jour les coordonnées des rectangles.
4. Maintenant, essayer de dessiner un seul rectangle, par exemple au centre. Voyez comment le faire pointe vers la souris. Pour cela, vous aurez besoin de calculer l'angle de l'hypoténuse à partir des axes adjacents à celle-ci, formé par les coordonnées du rectangle et de la souris. Pour obtenir cet angle, il faut calculer l’arc tangent. Je vous encourage à regarder cette vidéo pour comprendre les concepts que j'aborde.
5. Maintenant faite en sorte que ce rectangle se déplace vers la souris.

Vous pouvez voir une version [ici](https://tecg-mmi.github.io/move-my-rectangle).

## Bonus 👏



1. Quand on clique, un nouveau rectangle supplémentaire apparait.
2. Quand le rectangle ne se déplace plus vers la souris, faites-le se déplacer aléatoirement.



## Ressources 🎁



* [Géométrie et mouvement pour les nuls](https://www.youtube.com/watch?v=5jDoijVEItE)
* [Math.atan2()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)
* [Window.requestAnimationFrame()](https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame)
* [clearRect()](https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/clearRect)

