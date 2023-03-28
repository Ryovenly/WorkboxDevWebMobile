import { useState, useEffect } from "react";
import ScreenMobile from './ScreenMobile.jpg';
import ScreenPc from './ScreenPc.PNG';

const AccessPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
    
    useEffect(() => {
        const handler = e => {
          e.preventDefault();
          setSupportsPWA(true);
          setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);
    
        return () => window.removeEventListener("transitionend", handler);
      }, []);
    
      const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
          return;
        }
        promptInstall.prompt();
      };

      return (
        <div className="AccessPwa-container">
            <h2>Installer l'appli en PWA !</h2>
            <p>De nos jours on peut installer l'application Web directement sur nos mobiles ou ordinateur! 
                Dans un premier temps, vérifier si votre navigateur est compatible. Dans les options, il vous
                proposera d'installer l'application comme les images ci-dessous. Faites le test !
            </p>
            <img src={ScreenMobile} alt="ScreenMobile"/> 
            <img src={ScreenPc} alt="ScreenPc"/> 
            <p>Voici les différentes spécificités nécessaire pour le PWA :</p>
            <ul>
                <li>
                    Les navigateurs nécessaires pour la PWA sont Google Chrome ou Opera
                </li>
                <li>
                    Les téléphones compatibles sont android et Iphone. Cependant certaines fonctionnalité
                    au niveau de Iphone pourrait ne pas fonctionner. Et selon si la version est trop vieille,
                    des fonctionnalités pourraient ne pas fonctionner. <a href="https://pwafire.org/developer/tools/browser-test/">Cliquez ici pour voir les fonctionnalités
                    de votre appareil</a>
                </li>
                <li>
                    Une PWA ne demande généralement pas trop de ressources.
                </li>
            </ul>
            <p>Appuyez sur le bouton pour installer l'application en PWA</p>
            <button onClick={onClick} id="installPWA">Installer en PWA</button>
        </div>
      );

}

  export default AccessPWA;