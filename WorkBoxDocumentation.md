# I – Workbox

Workbox est une librairie javascript développée par Google destinée aux développeurs Web.

## 1)	Liste des fonctionnalités offertes

Les WorkBox permettent de gérer le cache quand il n’y a pas de connexion pour les applications PWA. 

## 2)	Méthodes de cache et utilisations possibles

Les méthodes de cache fonctionnent avec un fichier service-worker.js et un fichier offline.html.
L'utilisation est possible quand il n'y a pas de connexion internet et cela redirige dans une autre ressource prévu.


## 3)	Uses cases à intégrer dans le projet doctoliberal

L’intégration des WorkBox peuvent être intéressante dans l’application Cliente pour stocker en cache la liste de docteurs. Pour l’application Professionnel,
garder en cache la liste de rendez-vous avec ses patients est très important si le professionnel de santé se déplace sans internet.


# I - Page d'incitation à l'installation de PWA

## 1 ) Créer un composant (React / Vue / angular / HTML+CSS) pour inciter et surtout guider un utilisateur à installer la PWA
- navigateur nécessaire
- compatibilité du device
- capacités supplémentaires, etc...

CF Fichier AccesPWA.jsx

## 2 ) Expliquer en quoi il serait intéressant de mettre en place une telle page

Il est intéressant pour l’utilisateur de pouvoir vérifier dans un premier temps s’il peut installer l’application PWA. Si l’utilisateur utilise un navigateur qui ne prends pas en charge l’installation PWA tel que Firefox il ne pourra jamais savoir ni téléchargé l’application PWA. De plus, en conseillant l’utilisateur sur les ressources nécessaire tel que la compatibilité du device, au navigateur qui prends en charge le PWA ou les ressources utilisé par l’appli, il sera plus simple pour lui d’installer l’application en PWA. Le PWA permet ainsi à l’utilisateur d’utiliser les fonctionnalités mobile presque comme une application natif.
