# Questions théoriques

## Qu’est-ce qu’un design system ?

Un design system est un ensemble de règles et bonnes pratiques définies en amont du développement d'une application. Il existe une multitude de design systems différents
sur lesquels une entreprise peut se baser, et l'adapter au besoin. C'est sur lui que l'on se base pour garder une identité cohérente au travers de l'application,
afin d'assurer une homogénéité à travers les fonctionnalités, surtout si plusieurs développeurs travaillent sur le même projet. Au final, c'est un design system
bien ficelé qui permet d'assurer une bonne expérience utilisateur.

## Pourquoi est-il important dans le développement d’applications ?

La force du design system est la simplification des workflows, la cohérence globale du produit et l'amélioration de la collaboration au sein de l'équipe.

Elle est une source d'information unique, évite les redondances et accélère le processus de développement, notamment grâce aux composants graphiques réutilisables.

## Quels sont les principaux éléments d’un design system (5 éléments avec exemple) ?

### 1. Boutons
Bouton primaire

### 2. Typographies
Typographie de titres

### 3. Espacements
Marge par défaut

### 4. Inputs
Input de recherche

### 5. Palettes de couleurs
Palette pour thème sombre

### Sources :
* https://www.figma.com/fr-fr/blog/design-systems-101-what-is-a-design-system
* https://blog.hubspot.fr/website/design-system

# Analyse et amélioration

## Analyse de l'implémentation
Les composants que j'ai créés sont à mon sens assez génériques pour être réutilisés dans n'importe quel contexte. Seul le composant Icon pourrait être amélioré par rapport
à sa taille qui n'est pas très flexible. Cependant, il est possible d'utiliser n'importe quel icône de la librairie Lucide React lorsque ce composant est appelé.

Quant aux propriétés de mes composants, je pense que la nommenclature est pertinente dans l'ensemble. D'autres possibilités auraient pu fonctionner, comme décliner les liens
en "gras" et "italique" au lieu de "foncé" et "défaut". Il aurait peut-être fallu ajouter une propriété de taille pour pallier le problème des icônes mentionné plus haut.
Sinon, aucune des propriétés n'est superflue.

## Amélioration du design system
Etant donné que je n'ai pas suivi de design system en particulier, il n'y avait aucune règle définie à respecter concernant les couleurs, les espacements, etc.
Pour cet exercice, j'ai créé le design de mes composants de manière arbitraire.

Comme dit plus haut, le composant Icon pourrait être plus flexible quant au choix de la taille. De plus, le composant Title pourrait avoir davantage de variantes. En effet,
il est fort probable qu'on ait besoin de plus de 2 niveaux de titres pour notre application.

Concernant l'utilisation de mes composants dans d'autres composants, nous pourrions imaginer utiliser un certain niveau de titre dans une Card avec éventuellement un icône.
Le composant lien pourrait s'imbriquer dans un conteneur de texte dans lequel nous voulons introduire un lien hypertexte.

## Utilisation et collaboration
La documentation montre un aspect visuel des différentes variantes de mes composants. Il y a aussi un menu qui définit leurs propriétés avec les valeurs possibles.
Pour une meilleure visibilité, un fichier de documentation aurait pu être ajouté (comme sur les exemples fournis par Storybook).

Après tests, tous les états disponibles sont fonctionnels (changement de variante de composant, de texte pour les titres et liens, d'icône).

### Utilisation dans le cadre professionnel & scolaire
Lors de la conception de l'interface graphique d'une application, l'utilisation de Storybook peut se montrer très utile. Une fois les maquettes terminées, il est intéressant 
de lister tous les composants nécessaires à l'application, et rien de mieux que de les documenter dès le départ pour assurer une meilleure cohérence lors de l'implémentation.
