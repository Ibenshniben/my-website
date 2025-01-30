document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 800);
    });

    gsap.ticker.lagSmoothing(0);
});

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector
('.off-screen-menu');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

const url = 'CVib.pdf';

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(pdf => {
    const container = document.getElementById('pdf-viewer');

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        pdf.getPage(pageNumber).then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);

            const pageDiv = document.createElement('div');
            pageDiv.className = 'pdf-page';
            pageDiv.appendChild(canvas);
            container.appendChild(pageDiv);
        });
    }
});

const customText = `
Ib Julian Trollnes Strømsvåg

Adresse: Elgstien 78B, 4637 Kristiansand
Telefon: +47 483 81 121
E-post: ibjulian9@gmail.com
LinkedIn: linkedin.com/in/ib-stromsvag
Nettside: ibstromsvag.com

Nøkkelkompetanse:
• Kreativ problemløsning og innovasjon
• Programmering: HTML, CSS, Python, JavaScript, SQL, PHP
• Sterk teknisk forståelse og ferdigheter
• Erfaring med designverktøy og multimedieproduksjon
• Gode kommunikasjons- og samarbeidsevner

Arbeidserfaring:
Vaktmesterassistent (midlertidig arbeid)
Avigo
13. juni 2024 – 9. august 2024
• Ansvarlig for å flytte møbler, som skap og kontorinventar, fra det gamle til det nye fylkeshuset.
• Bidro til en effektiv flytteprosess med fokus på organisering og fysisk arbeid.
• Samarbeidet med kollegaer for å sikre en smidig overføring av eiendeler.

Utdanning:
Informasjonsteknologi og medieproduksjon (VG1)
2023 – 2024
Informasjonsteknologi (VG2)
2024 – 2025
Grunnskole
Avsluttet 2023

Sertifikater og Kurs:
• Ingen oppgitt foreløpig (kan legges til ved behov).

Språkkunnskaper:
• Norsk: Morsmål (snakker og skriver flytende)
• Engelsk: Svært godt muntlig og skriftlig

IT- og Programvarekunnskaper:
• Programmering: HTML, CSS, Python, JavaScript, SQL, PHP
• Verktøy og programvare:
  o Visual Studio Code
  o Adobe Illustrator
  o Figma
  o MySQL Workbench
  o Microsoft Word og PowerPoint
  o Adobe Premiere Pro
  o Adobe XD

Referanser:
Oppgis ved forespørsel.
`;

document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(customText).then(() => {
        alert('CV-innholdet er kopiert til utklippstavlen!');
    });
});