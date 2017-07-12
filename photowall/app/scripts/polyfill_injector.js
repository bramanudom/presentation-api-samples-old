if(!navigator.presentation.receiver){
        console.log("we are in the if statement");
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.async = true;
        console.log(document.currentScript.parentNode);
        head.insertBefore(script,head.firstChild);

        //document.currentScript.parentNode.insertBefore(script,document.currentScript);
        script.src = "scripts/presentation_polyfill.js";

      }
