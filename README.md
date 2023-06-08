React-webbapplikation
Detta projekt innehåller en webbapplikation byggd med React för att beställa hamburgare.

Innehållsförteckning
Installation
Användning
Rutter
Installation
För att köra applikationen lokalt, följ dessa steg:

Klona detta repository till din lokala dator.
Navigera till projektmappen.
Installera beroendena genom att köra kommandot: npm install.
Kör sedan: json-server --watch db.json --port 7000
Starta utvecklingsservern med: npm start.

Användning
När du öppnar applikationen möts du av startsidan som visar ett välkomstmeddelande. Du kan navigera till meny-sidan för att se tillgängliga hamburgare och lägga till dem i din varukorg. Varukorgssidan visar de varor du har lagt till, det totala priset och alternativ för att tömma varukorgen eller fortsätta till köpformuläret. Fyll i nödvändig information i formuläret och skicka det för att slutföra ditt köp.

/: Renderar startsidan.
/menu: Visar meny-sidan med tillgängliga hamburgare.
/cart: Visar varukorgssidan med varor och alternativ för att genomföra köpet.
/form: Renderar formuläret för användarinformation.
/confirmation: Visar en bekräftelsesida med beställningsdetaljer.
