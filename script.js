document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    
    hamMenu.addEventListener('click', function() {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.off-screen-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
        });
    });
});

// PDF Viewer Configuration
document.addEventListener('DOMContentLoaded', function() {
    const url = 'CVib.pdf';
    const loadingTask = pdfjsLib.getDocument(url);
    
    loadingTask.promise.then(function(pdf) {
        // Get the first page
        pdf.getPage(1).then(function(page) {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            // Prepare canvas using PDF page dimensions
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext).promise.then(function() {
                const container = document.getElementById('pdf-viewer');
                if (container) {
                    container.appendChild(canvas);
                }
            });
        });
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
    });
});
const customText = `
Ib Julian Trollnes Strømsvåg
Adresse: Elgstien 78B, 4637 Kristiansand
Telefon: +47 483 81 121
E-post: ibjulian9@gmail.com
LinkedIn: linkedin.com/in/ib-strømsvåg
Nettside: ibstromsvag.com
Nøkkelkompetanse
• Kreativ problemløsning og innovasjon
• Programmering: HTML, CSS, Python, JavaScript, SQL, PHP
• Sterk teknisk forståelse og ferdigheter
• Erfaring med designverktøy og multimedieproduksjon
• Gode kommunikasjons- og samarbeidsevner
Arbeidserfaring
Vaktmesterassistent (midlertidig arbeid)
Avigo
13. juni 2024 – 9. august 2024
• Ansvarlig for å flytte møbler, som skap og kontorinventar, fra det gamle til det nye fylkeshuset.
• Bidro til en effektiv flytteprosess med fokus på organisering og fysisk arbeid.
• Samarbeidet med kollegaer for å sikre en smidig overføring av eiendeler.

Frivillig stallarbeid (nåværende)
Arendal og Grimstad Rideklubb
Nåværende, 2025
• Hjelper med å fôre og stelle 200 hester hver torsdag og en helg i måneden. 
• Bidrar til dyrevelferd og daglig drift av stallen. 
• Arbeider selvstendig og i team.
Utdanning
Informasjonsteknologi og medieproduksjon (VG1)
2023 – 2024
Informasjonsteknologi (VG2)
2024 – 2025
Grunnskole
Avsluttet 2023
Sertifikater og Kurs
• Ingen oppgitt foreløpig (kan legges til ved behov).
Språkkunnskaper
• Norsk: Morsmål (snakker og skriver flytende)
• Engelsk: Svært godt muntlig og skriftlig
IT- og Programvarekunnskaper
• Programmering: HTML, CSS, Python, JavaScript, SQL, PHP
• Verktøy og programvare:
o Visual Studio Code
o Adobe Illustrator
o Figma
o MySQL Workbench
o Microsoft Word og PowerPoint
o Adobe Premiere Pro
o Adobe XD
Referanser
Oppgis ved forespørsel.

`;

document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(customText).then(() => {
        alert('CV-innholdet er kopiert til utklippstavlen!');
    });
});