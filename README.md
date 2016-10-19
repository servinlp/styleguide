# Styleguide

## Het idee
Een online platform waar jij samen met je collega's een styleguide kan maken en deze delen met je opdrachtgever.

## Leerdoelen
- Meteor.js (nog geen kennis van)
- React (nog geen kennis van)
- MongoDB (basis kennis van)

## Technologiën die we hier voor gebruikt hebben
- Node.js
- Meteor.js
- React
- MongoDB
- Sass (scss)
- Bourbon.io

## Packages die we gebruikt hebben
- `bcrypt`
- `npm-bcrypt`
- `react`
- `react-dom`
- `meteor-base`
- `mongo`
- `accounts-password`
- `meteorhacks:kadira`
- `kadira:flow-router`

## Over het werken met de Leerdoelen

### Meteor.js
#### Inloggen
Een van de eerste dingen die waar ik aan ging werken was het inlog systeem. Hierbij was dan ook mijn eerste impressie

> Ow dit is echt best makkelijk.

Ik ben hierbij ook begonnen met het gebruiken van de package `accounts-ui`. Dit was ook de reden dat het zo makkelijk was. Ik wou alleen zelf meer controlle over de layout en hoe het werkte dus ben toen begonnen zelf een registratie/inlog formulier te maken. Dit maakte het al iets lastiger maar nog wel goed te doen.
#### Gebruikers naam
Hierna zijn we begonnen met de dashboard. Hierbij wou ik de naam van de huidig ingelogte gebruiker tonen. Voor iets wat simple zou moeten zijn was dit zeer ingewikkeld (of ik weet gewoon niet de juiste methode wat ook zeer goed zou kunnen).
Na veel klooien kwam ik er achter dat de gebruikers naam in eerste instantie nog niet ingeladen was. Mijn eerste oplossing hiervoor was om met `setTimeout` na 400 milliseconden pas naar de gebruikers naam te vragen. Dit werkte 80% van de tijd maar dit was dus geen goede oplossing.
Mijn tweede (en huidige) oplossing is beter maar alsnog niet optimaal. Deze doet zodra het document geladen is een call maken naar een methode die me de gebruikers naam terug geeft. Dit zorgt er voor dat deze altijd word laten zien maar wel met enige delay.
#### Routing
Qua routing is de site heel basic. We hebben de homepage die of het inlog scherm laat zien als je niet bent ingelogt of het dashboard laat zien. En dan hebben we de pagina met de echte styleguide. Hier bestaat de link uit `/owner-name/guide-id/`.
#### Methods
Alle calls naar de database zijn worden door middel van methods en calls vanaf de server geregeld en niet de client. Dit voor veiligheids redenen dat je niet wilt dat iemand vanuit de client je database kan aanpassen.

### React
#### Components
Zoals ik dit nu zie zijn de components die je maakt vergelijkbaar met functies die je maakt met `javascript`. je kan deze components net als functies `parameters` mee geven die de content of het gedrag van de component veranderen. Dit is in mijn ogen een heel mooi onderdeel aangezien je je website in allerlei kleinen stukjes kan snijden die je makkelijk kan hergebruiken. (vergelijkbaar met hoe je in `php` je header en footer vaak inlcude maar dan op grotere schaal)
#### Makkelijk update
React komt uit de doos met een aantal handige functies. Natuurlijk de render functie maar ook de `componentDidMount` functie en `states`. `componentDidMount` is zeer handig als je iets wilt inladen/activeren als de component geladen is. Dit is een goede alternatief op `onLoad` aangezien dit nog wel eens voor infinite loops kan veroorzaken (geloof me, is meer dan 1 keer gebeurt). `states` zijn goed te gebruiken als je weet dat de inhoud hiervan kan veranderen. Door de functie `setState` word de informatie die in de state staat automatisch geupdate.
#### Moeilijk elementen vinden
Wat me wel opviel was dat het vinden van elementen in React soms nog wel lastig kan zijn. Nu kan je hier makkelijk `refs` voor gebruiken maar hier ben ik tot nu toe nog niet helemaal fan van. Dit doet me erg denken hoe je vroeger alles een `ID` moest geven om met javascript er iets mee te doen.

### MongoDB
Voor dit project maak ik gebruik van twee collections. Eentje voor mijn gebruikers (die automatisch gegenereerd is) en een voor de styleguides. De structuur van de styleguides ziet er als volgt uit.

Styleguides
```
{
  "_id": "ID",
  "name": "Your new Style Guide",
  "owner": "servinlp",
  "ownerId": "ID",
  "createdAt": ISODate("2016-10-18T17:38:44.367Z"),
  "item": [
    {
      "sectionId": ObjectId("ID"),
      "name": "color pallet",
      "type": "color",
      "colors": [
        {
          "name": "color name",
          "hex": "#ffffff",
        }
      ]
    }
  ]
}
```
