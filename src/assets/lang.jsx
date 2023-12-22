import React from "react"
import photo1 from './images/photo1.jpg'


const homeDe = 
    <>  
        <div className="card">
            <img className="avatar" src={photo1} alt="miraHolleCaption"></img>
            <h2 className="name">Mira Hollé</h2>
            <h4 className="job">-JOB DESC-</h4>
        </div>
        
        <div className="page-content">
            <p>In Zalaegerszeg, Ungarn geboren und zweisprachig in aufgewachsen</p>

            <p>Matura am Kölcsey Ferenc Gymnasium in Zalaegerszeg mit den Schwerpunkten Mathematik, Deutsch und Englisch</p>

            <p>Universitätsabschluss Bachelor-Studium 2014 am Institut für Germanistik der Eötvös Loránd Universität in Budapest</p>

            <p>Universitätsabschluss Master-Studium 2019 am Institut für Theoretische und Angewandte Translationswissenschaft der Karl-Franzens-Universität in Graz</p>

            <p>Selbständige Sprachdienstleisterin im Bereich Dolmetschen und Übersetzen</p>

            <p>Seit 2023 allgemein beeidete und gerichtlich zertifizierte Dolmetscherin für die ungarische Sprache</p>

            <p>Mitglied des Österreichischen Verbands der allgemein beeideten und gerichtlich zertifizierten Dolmetscher
            <br/>Link: <a href="https://www.gerichtsdolmetscher.at/interpreters/Ungarisch">https://www.gerichtsdolmetscher.at/interpreters/Ungarisch</a></p>

            <p>Eingetragen in der Gerichtsdolmetscherliste des österreichischen Justizministeriums
            <br/>Link: <a href="https://justizonline.gv.at/jop/web/exl-suche/do">https://justizonline.gv.at/jop/web/exl-suche/do</a></p>
        </div>
    </>




export default {
    de: {
        home: homeDe

        ,
        prices: 
            <h1>Preise DE</h1>
        ,
        impressum: 
            <h1>Impressum DE</h1>
        ,
        contact: 
            <h1>Kontakt DE</h1>
        ,
        privacy: 
            <h1> Datenschutzerklärung DE</h1>
        
    },
    en: {
        home: 
            <h1>Home EN</h1>
        ,
        prices: 
            <h1>Prices EN</h1>
        ,
        impressum: 
            <h1>Impressum EN</h1>
        ,
        contact: 
            <h1>Contact EN</h1>
        ,
        privacy: 
            <h1> Privacy Policy EN</h1>
        
    },
    hu: {
        home: 
            <h1>Home HU</h1>
        ,
        prices: 
            <h1>Prices HU</h1>
        ,
        impressum: 
            <h1>Impressum HU</h1>
        ,
        contact: 
            <h1>Contact HU</h1>
        ,
        privacy: 
            <h1> Privacy Policy HU</h1>
        
    }
}

