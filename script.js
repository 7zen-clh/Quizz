// --- Gestion de la Navigation et Sections ---
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

function showSection(sectionId) {
    contentSections.forEach(section => {
        section.classList.toggle('active-section', section.id === sectionId);
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
    });
    if(sectionId === 'qcm' && !qcmContainerElement.querySelector('#question-text')) { // Start QCM only if not already started or finished
       startQCM();
    } else if (sectionId === 'qcm') {
        // If navigating back to QCM section after finishing, show results or initial state
        if (resultsContainerElement.style.display === 'block') {
             qcmContainerElement.style.display = 'none';
        } else {
             qcmContainerElement.style.display = 'block';
             resultsContainerElement.style.display = 'none';
             // Check if QCM needs restart or just display
             if (currentQuestionIndex >= shuffledQuestions.length) {
                 restartQCM(); // Or maybe just show results again? Let's restart.
             }
        }
    }

    if (nav.classList.contains('nav-active')) {
       toggleNav();
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        showSection(sectionId);
    });
});

const toggleNav = () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        link.style.animation = link.style.animation
            ? ''
            : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
    burger.classList.toggle('toggle');
}

burger.addEventListener('click', toggleNav);

// --- Logique du QCM ---

// Base de questions (beaucoup plus fournie)
const questions = [
    // Introduction & Définitions
    { question: "Quelle est la racine latine du terme 'finance' évoquant l'idée de paiement ?", answers: ["Fiscus", "Filis", "Finis", "Fortuna"], correctAnswer: 1 },
    { question: "Selon la définition de 1862, le budget de l'État est un acte de prévision et...", answers: ["de contrôle.", "d'autorisation.", "de liquidation.", "de constatation."], correctAnswer: 1 },
    { question: "Quelle est la principale différence d'objectif entre les finances publiques et les finances privées ?", answers: ["Le volume des sommes engagées", "La recherche de rentabilité vs l'intérêt général", "L'utilisation d'outils comptables", "La durée de l'exercice budgétaire"], correctAnswer: 1 },
    { question: "Quand le terme 'Loi de finance' est-il apparu historiquement en France ?", answers: ["Avec la Révolution française", "Sous Napoléon", "Avec l'État interventionniste (post 1GM / IVème République)", "Avec la création de l'Euro"], correctAnswer: 2 },
    { question: "Quel économiste est célèbre pour avoir prôné la relance par la dépense publique lors de la crise de 1929 ?", answers: ["Adam Smith", "Jean Bodin", "Adolph Wagner", "John Maynard Keynes"], correctAnswer: 3 },
    { question: "Quel pourcentage approximatif du PIB représentaient les dépenses publiques en France avant la Première Guerre Mondiale ?", answers: ["Environ 5%", "Environ 12%", "Environ 25%", "Environ 40%"], correctAnswer: 1 },
     { question: "Quel pourcentage approximatif du PIB représentent les dépenses publiques en France aujourd'hui ?", answers: ["Environ 20%", "Environ 40%", "Environ 60%", "Environ 80%"], correctAnswer: 2 },
    { question: "Qu'appelle-t-on l'écart entre les recettes et les dépenses de l'État lorsque les dépenses sont supérieures ?", answers: ["L'excédent", "La dette", "Le déficit", "L'équilibre"], correctAnswer: 2 },
    { question: "Selon Jean Bodin (1576), les finances publiques sont le...", answers: ["coeur de la démocratie.", "reflet de l'économie.", "nerf de l'État.", "fardeau du peuple."], correctAnswer: 2 },

    // Sources du droit
    { question: "Quel article de la DDHC de 1789 proclame la nécessité de la contribution publique (impôt) et sa répartition équitable ?", answers: ["Article 13", "Article 14", "Article 15", "Article 1"], correctAnswer: 0 },
    { question: "Quel article de la DDHC de 1789 affirme que le consentement à l'impôt doit être donné par les citoyens ou leurs représentants ?", answers: ["Article 13", "Article 14", "Article 15", "Article 6"], correctAnswer: 1 },
    { question: "Quel article de la Constitution de 1958 définit le domaine de la loi, incluant les lois de finances et la détermination de l'assiette et du taux des impôts ?", answers: ["Article 20", "Article 34", "Article 40", "Article 47"], correctAnswer: 1 },
    { question: "Quel article de la Constitution de 1958 limite le pouvoir d'amendement financier des parlementaires (irrecevabilités financières) ?", answers: ["Article 34", "Article 39", "Article 40", "Article 49"], correctAnswer: 2 },
    { question: "La LOLF (Loi Organique relative aux Lois de Finances) de 2001 a remplacé quel texte antérieur ?", answers: ["La Constitution de 1958", "L'ordonnance organique de 1959", "Le Code Général des Impôts", "Le Pacte de Stabilité et de Croissance"], correctAnswer: 1 },
    { question: "Quelle institution indépendante a été créée par la loi organique issue du Traité TSCG (2012) ?", answers: ["La Cour des comptes", "Le Conseil d'État", "Le Haut Conseil des Finances Publiques (HCFP)", "La Direction du Budget"], correctAnswer: 2 },
    { question: "Le Pacte de Stabilité et de Croissance (PSC) de 1997 visait principalement à...", answers: ["créer l'Euro.", "harmoniser les impôts en Europe.", "faire respecter les critères de déficit et de dette par les États membres.", "financer la politique agricole commune."], correctAnswer: 2 },
    { question: "Comment appelle-t-on une disposition législative insérée dans une loi de finances mais n'ayant aucun rapport avec son objet ?", answers: ["Un amendement irrecevable", "Une niche fiscale", "Un cavalier budgétaire", "Une dépense fiscale"], correctAnswer: 2 },
    { question: "Les Lois de Programmation des Finances Publiques (LPFP) ont principalement un objectif...", answers: ["annuel et contraignant.", "pluriannuel et indicatif.", "mensuel et comptable.", "européen et fiscal."], correctAnswer: 1 },

    // Fonction du budget
    { question: "Quel événement historique est souvent cité comme l'origine du principe du consentement à l'impôt en Angleterre ?", answers: ["La Guerre de Cent Ans", "La signature de la Magna Carta (1215)", "La Révolution Glorieuse (1688)", "L' règne d'Henri VIII"], correctAnswer: 1 },
    { question: "Le vote annuel du budget par le Parlement a été instauré en Angleterre par quel texte ?", answers: ["Magna Carta (1215)", "Petition of Rights (1628)", "Bill of Rights (1689)", "Act of Settlement (1701)"], correctAnswer: 2 },
    { question: "L'expression 'chambre d'enregistrement' appliquée au Parlement sous la Vème République signifie que...", answers: ["le Parlement enregistre les lois au Journal Officiel.", "le Parlement a un rôle central dans l'adoption du budget.", "le pouvoir budgétaire réel du Parlement est limité, il approuve surtout les choix de l'exécutif.", "le Parlement enregistre les débats budgétaires."], correctAnswer: 2 },
    { question: "La LOLF de 2001 visait notamment à renforcer le rôle du Parlement, principalement dans sa fonction de...", answers: ["légiférer sur tous les sujets.", "contrôle de l'exécution budgétaire.", "représentation des collectivités territoriales.", "nomination du Gouvernement."], correctAnswer: 1 },
    { question: "Dans l'analyse politique du budget, quelle type de dépense est généralement considérée comme moins marquée politiquement (gauche/droite) ?", answers: ["Dépenses de personnel", "Dépenses de transfert social", "Dépenses de fonctionnement", "Dépenses d'investissement"], correctAnswer: 3 },
    { question: "Le caractère 'prévisionnel' du budget implique que les chiffres inscrits sont...", answers: ["exacts et définitifs.", "des estimations basées sur des hypothèses.", "des objectifs maximum à ne jamais dépasser.", "des résultats comptables de l'année précédente."], correctAnswer: 1 },
    { question: "Le caractère 'limitatif' des crédits budgétaires signifie que les gestionnaires...", answers: ["peuvent dépenser sans compter.", "doivent dépenser exactement le montant voté.", "ne peuvent pas dépenser plus que le montant autorisé par le Parlement.", "peuvent reporter les crédits non utilisés sur l'année suivante."], correctAnswer: 2 },
    { question: "Durant la période 'classique' des finances publiques (avant 1GM), quel était le principe dominant concernant l'équilibre budgétaire ?", answers: ["Le déficit était encouragé pour stimuler l'économie.", "L'équilibre réel (recettes = dépenses) était la norme.", "L'excédent était recherché pour rembourser la dette.", "L'équilibre n'était pas une préoccupation majeure."], correctAnswer: 1 },
    { question: "Quel changement majeur caractérise les finances publiques 'modernes' (après 1GM) par rapport à la période classique ?", answers: ["La neutralité du budget", "La diminution du volume des dépenses", "L'interventionnisme de l'État et l'acceptation du déséquilibre", "La prédominance du Parlement"], correctAnswer: 2 },
     { question: "La LOLF introduit une logique de performance en associant aux 'Programmes'...", answers: ["uniquement des indicateurs financiers.", "des objectifs et indicateurs de performance (efficacité, efficience, qualité).", "des sanctions directes en cas de non-atteinte des résultats.", "un vote spécifique par action."], correctAnswer: 1 },

    // Documents budgétaires et comptables
    { question: "Quelle loi fixe chaque année le montant initial des recettes et des dépenses de l'État ?", answers: ["LFR", "LFI", "LFG", "LRGACA"], correctAnswer: 1 },
    { question: "Quelle loi permet d'ajuster les crédits en fin d'année sans introduire de nouvelle mesure fiscale ?", answers: ["LFR", "LFI", "LFG", "LRGACA"], correctAnswer: 2 },
    { question: "Comment s'appelle la loi qui constate les résultats définitifs de l'exécution du budget de l'année N-1 ?", answers: ["LFI pour N", "LFR pour N-1", "LFG pour N-1", "LRGACA pour N-1"], correctAnswer: 3 },
    { question: "Quel document budgétaire local est voté en début d'année et fixe les enveloppes de crédits ?", answers: ["Budget Supplémentaire", "Compte Administratif", "Budget Primitif", "Compte de Gestion"], correctAnswer: 2 },
    { question: "Quel document comptable local est établi par l'ordonnateur ?", answers: ["Budget Primitif", "Compte de Gestion", "Compte Administratif", "Compte Financier Unique"], correctAnswer: 2 },
     { question: "Quel document comptable local est établi par le comptable public ?", answers: ["Budget Primitif", "Compte de Gestion", "Compte Administratif", "Compte Financier Unique"], correctAnswer: 1 },
     { question: "Quel futur document unique remplacera le Compte Administratif et le Compte de Gestion pour les collectivités locales ?", answers: ["Le Budget Primitif Unifié", "Le Rapport Annuel de Performance Local", "Le Compte Financier Unique (CFU)", "La Loi d'Approbation des Comptes Locaux"], correctAnswer: 2 },
     { question: "Qu'est-ce que l'ONDAM, fixé en LFSS ?", answers: ["Un impôt sur les dépenses médicales", "L'Objectif National de Dépenses d'Assurance Maladie", "L'Office National Des Affaires Médicales", "L'Organisme National de la Dette d'Assurance Maladie"], correctAnswer: 1 },
     { question: "La procédure de 'décharge budgétaire' concerne le contrôle de l'exécution du budget de...", answers: ["l'État français.", "la Sécurité Sociale française.", "des collectivités locales françaises.", "l'Union Européenne."], correctAnswer: 3 },

    // Architecture budgétaire
    { question: "En combien de parties principales la Loi de Finances de l'État est-elle structurée ?", answers: ["Une seule partie", "Deux parties", "Trois parties", "Quatre parties"], correctAnswer: 1 },
    { question: "Dans quelle partie de la LFI trouve-t-on l'autorisation de percevoir les impôts et les grandes lignes de l'équilibre ?", answers: ["La première partie", "La seconde partie", "Les annexes", "Le rapport économique, social et financier"], correctAnswer: 0 },
    { question: "Selon la LOLF, l'unité de vote et de spécialisation des crédits est...", answers: ["la Mission.", "le Programme.", "l'Action.", "le Titre."], correctAnswer: 1 },
    { question: "Les crédits du Titre 2 ('Dépenses de personnel') dans le budget de l'État sont...", answers: ["indicatifs et librement redéployables.", "limitatifs et non fongibles vers d'autres titres.", "limitatifs mais peuvent financer d'autres titres (fongibilité asymétrique).", "votés globalement pour l'ensemble des ministères."], correctAnswer: 2 },
    { question: "Dans un budget local, la section de fonctionnement retrace...", answers: ["uniquement les investissements nouveaux.", "les dépenses et recettes liées à la gestion courante.", "uniquement le remboursement de la dette.", "les opérations financières exceptionnelles."], correctAnswer: 1 },
    { question: "L'autofinancement dégagé par la section de fonctionnement d'un budget local sert prioritairement à...", answers: ["payer les intérêts de la dette.", "financer de nouvelles dépenses de personnel.", "financer les dépenses d'investissement.", "augmenter les réserves de trésorerie."], correctAnswer: 2 },

    // Principes budgétaires
    { question: "Le principe d'annualité budgétaire implique que l'autorisation parlementaire est donnée pour...", answers: ["une durée indéterminée.", "une période de 5 ans.", "une année civile.", "la durée de la législature."], correctAnswer: 2 },
    { question: "La règle de 'non-affectation' des recettes fait partie de quel principe budgétaire ?", answers: ["Unité", "Universalité", "Annualité", "Spécialité"], correctAnswer: 1 },
    { question: "Quel principe budgétaire exige que toutes les recettes et dépenses figurent dans un seul document ?", answers: ["Unité", "Universalité", "Annualité", "Spécialité"], correctAnswer: 0 },
    { question: "Le principe de spécialité des crédits, depuis la LOLF, est principalement défini au niveau...", answers: ["du ministère.", "de la mission.", "du programme.", "de l'action."], correctAnswer: 2 },
    { question: "Le principe de sincérité budgétaire exige que les prévisions soient...", answers: ["optimistes pour rassurer les marchés.", "exactement égales aux réalisations futures.", "cohérentes avec les informations disponibles, sans intention de fausser l'équilibre.", "validées par la Commission Européenne."], correctAnswer: 2 },
    { question: "L'équilibre 'réel' est une obligation pour quel type de budget en France ?", answers: ["Budget de l'État", "Budget de la Sécurité Sociale", "Budgets des collectivités locales", "Budget de l'Union Européenne"], correctAnswer: 2 },

    // Élaboration du budget
    { question: "Qui prépare principalement le Projet de Loi de Finances (PLF) en France ?", answers: ["Le Parlement", "La Cour des comptes", "Le Gouvernement (sous l'autorité du PM et du Ministre des finances)", "Le Conseil Constitutionnel"], correctAnswer: 2 },
    { question: "Comment s'appelle le débat parlementaire (sans vote) qui a lieu au printemps sur les orientations du futur budget ?", answers: ["Le débat d'investiture", "Le débat sur l'état de l'Union", "Le Débat d'Orientation Budgétaire (DOB)", "Le débat sur la loi de règlement"], correctAnswer: 2 },
    { question: "Quel organisme indépendant donne un avis sur la cohérence des hypothèses macroéconomiques du PLF ?", answers: ["L'INSEE", "Le Conseil d'État", "Le Haut Conseil des Finances Publiques (HCFP)", "La Banque de France"], correctAnswer: 2 },
    { question: "Les 'budgets participatifs' sont une forme de participation citoyenne à l'élaboration du budget au niveau...", answers: ["européen.", "national.", "local.", "régional uniquement."], correctAnswer: 2 },

    // Adoption du budget
    { question: "Quel est le délai total maximal fixé par la Constitution pour l'examen du PLF par le Parlement ?", answers: ["50 jours", "60 jours", "70 jours", "90 jours"], correctAnswer: 2 },
    { question: "Si le Sénat et l'Assemblée Nationale ne sont pas d'accord sur le texte du PLF après la première lecture, quelle instance est généralement réunie ?", answers: ["Le Conseil Constitutionnel", "Une commission d'enquête", "Une Commission Mixte Paritaire (CMP)", "Le Conseil Économique, Social et Environnemental"], correctAnswer: 2 },
    { question: "L'article 40 de la Constitution interdit aux parlementaires de déposer des amendements qui...", answers: ["augmentent les impôts.", "diminuent les ressources ou augmentent les charges publiques.", "critiquent l'action du gouvernement.", "modifient la structure par mission."], correctAnswer: 1 },
    { question: "Comment appelle-t-on la technique permettant à un parlementaire de proposer une baisse d'impôt en suggérant une hausse compensatoire d'une autre taxe (souvent tabac) ?", answers: ["Un cavalier budgétaire", "Un gage", "Une fongibilité", "Un service voté"], correctAnswer: 1 },
     { question: "Quel article de la Constitution permet au Gouvernement de faire adopter un texte financier sans vote, sauf motion de censure ?", answers: ["Article 40", "Article 44 al. 3", "Article 47", "Article 49 al. 3"], correctAnswer: 3 },

    // Exécution et Contrôle
    { question: "Le principe de séparation des ordonnateurs et des comptables signifie que...", answers: ["l'ordonnateur contrôle le comptable.", "celui qui décide la dépense ne manipule pas les fonds.", "le comptable décide des dépenses à effectuer.", "chaque ministère a son propre comptable."], correctAnswer: 1 },
    { question: "Comment appelle-t-on la situation où une personne non habilitée (ex: un ordonnateur) manie des fonds publics ?", answers: ["Une régie d'avance", "Une gestion déléguée", "Une gestion de fait", "Un ordonnancement direct"], correctAnswer: 2 },
    { question: "Quel type de décret permet au Gouvernement d'ouvrir des crédits supplémentaires en cours d'année en cas d'urgence imprévue ?", answers: ["Décret de virement", "Décret de transfert", "Décret d'annulation", "Décret d'avance"], correctAnswer: 3 },
    { question: "La réforme de 2023 a unifié la responsabilité des gestionnaires publics devant quel juge ?", answers: ["Le Tribunal Administratif", "La Cour de Discipline Budgétaire et Financière (CDBF)", "La Cour des comptes", "Le Conseil d'État"], correctAnswer: 2 },
    { question: "Quel est l'un des rôles non juridictionnels principaux de la Cour des comptes ?", answers: ["Voter le budget de l'État", "Certifier les comptes de l'État et évaluer les politiques publiques", "Fixer le taux des impôts", "Nommer les comptables publics"], correctAnswer: 1 },
    { question: "Comment s'appelle la période au printemps où le Parlement examine les résultats de l'exécution budgétaire N-1 ?", answers: ["Le semestre européen", "La session extraordinaire", "Le Printemps de l'évaluation", "Le Débat d'Orientation Budgétaire"], correctAnswer: 2 },
    { question: "Le 'chaînage vertueux' instauré par la LOLF vise à lier...", answers: ["le budget de l'État et celui des collectivités.", "les dépenses et les recettes.", "l'exécution du budget N-1 (LRGACA/RAP) et le vote du budget N+1 (PLF/PAP).", "le contrôle a priori et le contrôle a posteriori."], correctAnswer: 2 }
];


let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false;
let shuffledQuestions = []; // Tableau pour les questions mélangées de la session actuelle

const questionTextElement = document.getElementById('question-text');
const answersContainerElement = document.getElementById('answers-container');
const nextButtonElement = document.getElementById('next-button');
const resultsContainerElement = document.getElementById('results-container');
const qcmContainerElement = document.getElementById('qcm-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const feedbackElement = document.getElementById('feedback');

// Fonction pour mélanger un tableau (algorithme Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
    return array;
}


function startQCM() {
    currentQuestionIndex = 0;
    score = 0;
    answerSelected = false;
    // Crée une copie mélangée des questions pour cette session
    shuffledQuestions = shuffleArray([...questions]); // Utilise l'opérateur spread pour copier

    qcmContainerElement.style.display = 'block';
    resultsContainerElement.style.display = 'none';
    nextButtonElement.style.display = 'none';
    feedbackElement.textContent = '';
    totalQuestionsElement.textContent = shuffledQuestions.length; // Utilise la longueur du tableau mélangé
    loadQuestion();
}

function loadQuestion() {
    answerSelected = false;
    feedbackElement.textContent = '';
    feedbackElement.className = ''; // Réinitialiser la classe de feedback
    nextButtonElement.style.display = 'none';

    // Utilise le tableau mélangé
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionTextElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    answersContainerElement.innerHTML = '';

    // Mélanger aussi l'ordre des réponses pour cette question
    const answersWithOriginalIndex = currentQuestion.answers.map((answer, index) => ({ answer, originalIndex: index }));
    const shuffledAnswers = shuffleArray(answersWithOriginalIndex);


    shuffledAnswers.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.answer;
        // Important : onclick passe l'index ORIGINAL de la réponse
        button.onclick = () => selectAnswer(item.originalIndex, button);
        answersContainerElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex, selectedButton) {
    if (answerSelected) return;
    answerSelected = true;

    // Utilise le tableau mélangé pour obtenir la question actuelle
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswer;
    const correctAnswerText = currentQuestion.answers[correctAnswerIndex];
    const buttons = answersContainerElement.querySelectorAll('button');

    buttons.forEach(button => {
        button.disabled = true;
        // Trouver le bouton correspondant à la bonne réponse (par son texte) pour le mettre en vert
        if (button.textContent === correctAnswerText) {
            button.classList.add('correct');
        }
    });

    // Vérifier si le bouton cliqué est le bon
    if (selectedIndex === correctAnswerIndex) {
        score++;
        // La classe 'correct' a déjà été ajoutée ci-dessus
        feedbackElement.textContent = "Bonne réponse !";
        feedbackElement.className = 'correct';
    } else {
        selectedButton.classList.add('incorrect'); // Marque la sélection incorrecte en rouge
        feedbackElement.textContent = `Mauvaise réponse. La bonne réponse était : ${correctAnswerText}`;
        feedbackElement.className = 'incorrect';
    }

    nextButtonElement.style.display = 'block';
    // Vérifier par rapport à la longueur du tableau mélangé
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        nextButtonElement.textContent = "Voir les résultats";
    } else {
        nextButtonElement.textContent = "Question Suivante";
    }
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    qcmContainerElement.style.display = 'none';
    resultsContainerElement.style.display = 'block';
    scoreElement.textContent = score;
}

function restartQCM() {
    startQCM(); // Réinitialise et redémarre le QCM
}

// Initialisation: Affiche la section accueil par défaut au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Vérifie si l'URL contient un hash pour afficher la section correspondante
    const hash = window.location.hash.substring(1); // Enlève le '#'
    const validSections = ['accueil', 'droit', 'qcm', 'classement'];
    if (hash && validSections.includes(hash)) {
         showSection(hash);
    } else {
        showSection('accueil'); // Section par défaut
    }

    // Gérer les changements de hash (ex: boutons précédent/suivant du navigateur)
    window.addEventListener('hashchange', () => {
         const newHash = window.location.hash.substring(1);
         if (newHash && validSections.includes(newHash)) {
            showSection(newHash);
         } else {
             showSection('accueil');
         }
    });
});

// Petite correction pour la navigation qui masque qcm quand on clique ailleurs
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        // Met à jour l'URL SANS recharger pour permettre le back/forward et le refresh
        history.pushState(null, '', `#${sectionId}`);
        showSection(sectionId);
    });
});

// Pour gérer le refresh sur une section spécifique
window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1);
    const validSections = ['accueil', 'droit', 'qcm', 'classement'];
     if (hash && validSections.includes(hash)) {
         showSection(hash);
     } else {
         showSection('accueil');
     }
});