# Website-App mit Angular
Basierend auf Angular CLI (6.2.1) besteht die Website. Über eine HTTP-Request wird auf eine REST-API zugegriffen und Daten angezeigt. Die REST-API wird hierbei von https://jsonplaceholder.typicode.com/ benutzt. Da hier der Fokus auf die Nutzung von Angular 6 liegt, wird nicht viel auf die Gestaltung geachtet. Bootstrap 4 wird aber verwendet.

## Erste Eindrücke
Noch ist die Website nicht vollständig. Eine einfache Navbar, die lediglich aus Icons besteht, wurde eingebaut. Über die UsersComponent wurde erstmals auf die API zugegriffen und mithilfe einem Accordion werden diese angezeigt. 

<img src="https://github.com/BassamxMednini/Angular-Website-App/blob/master/src/images/screenshot_1.png?raw=true" width="300" height="150" /> <img src="https://github.com/BassamxMednini/Angular-Website-App/blob/master/src/images/screenshot_2.png?raw=true" width="300" height="150" />

## Neue Ansicht
Um besser zwischen Startseite ('Home') und UsersComponent ('Users') unterscheiden zu können - zu Beginn wurde die UsersComponent auf der Startseite angezeigt - wurde eine neue Component erstellt (= HomeComponent / Linker Screenshot). Die Navbar wurde optisch nochmals verbessert. Auch der nun eigene path '/Users' bekam optische Veränderungen. Die Daten werden nun mehr über Bootstrap-Cards angezeigt. 

<img src="https://github.com/BassamxMednini/Angular-Website-App/blob/master/src/images/screenshot_4.png?raw=true" width="300" height="150" /> <img src="https://github.com/BassamxMednini/Angular-Website-App/blob/master/src/images/screenshot_3.png?raw=true" width="300" height="150" />

## Großes Update
Sobald man nun genauere Details eines Users sehen möchte, reicht ein Klick unter "Visit Profile". Über eine einfach gehaltene Bootstrap-Card werden alle verfügbaren Informationen des jeweiligen Users angezeigt. Unter dem neuen path '/Posts' werden alle Posts aller User angezeigt. Außerdem färbt sich je nach path das jeweilige Nav-item weiß [(Angular Router)](https://angular.io/guide/router).

<img src="https://github.com/BassamxMednini/Angular-Website-App/blob/master/src/images/screenshot_5.png?raw=true" width="300" height="150" /> <img src="https://github.com/BassamxMednini/Angular-Website-App/blob/master/src/images/screenshot_6.png?raw=true" width="300" height="150" /> <img src="https://github.com/BassamxMednini/Angular-Website-App/blob/master/src/images/animation_nav_gif.gif?raw=true" width="300" height="150" />