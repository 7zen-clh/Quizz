/* --- CONFIGURATION & DONNÉES --- */

// Colle ici la liste complète de tes questions
const DB = [
    // --- ACCÈS AUX SOINS & SANTÉ ---
    {c:"SANTÉ", q:"Quelle loi de 1893 instaure l'Assistance Médicale Gratuite ?", o:["15 juillet 1893", "14 juillet 1905", "4 octobre 1945"], a:0, e:"L'AMG est l'ancêtre de l'aide médicale, financée par l'État/Départements pour les indigents."},
    {c:"SANTÉ", q:"L'ordonnance fondatrice de la Sécurité Sociale date du :", o:["4 octobre 1945", "19 octobre 1945", "22 mai 1946"], a:0, e:"Elle crée le régime général pour protéger les travailleurs et leur famille."},
    {c:"SANTÉ", q:"La CMU (loi 1999) a été remplacée en 2016 par :", o:["La PUMA", "Le RSA", "L'AME"], a:0, e:"Protection Universelle Maladie : droit aux soins basé sur la résidence stable, plus sur l'activité pro."},
    {c:"SANTÉ", q:"La Complémentaire Santé Solidaire (CSS) remplace :", o:["CMU-C et ACS", "AME et PUMA", "ALD et Ticket modérateur"], a:0, e:"Depuis nov. 2019, c'est une mutuelle gratuite ou à moins de 1€/jour selon ressources."},
    {c:"SANTÉ", q:"L'AME est destinée aux :", o:["Étrangers en situation irrégulière", "Demandeurs d'asile", "Réfugiés"], a:0, e:"Condition : résider en France depuis +3 mois sans titre de séjour."},
    {c:"SANTÉ", q:"Le PASS dans les hôpitaux signifie :", o:["Permanence d'Accès aux Soins de Santé", "Programme d'Aide Sociale", "Pôle d'Accueil Sans Souci"], a:0, e:"Pour les publics précaires sans couverture sociale."},
    {c:"SANTÉ", q:"Le 'Reste à Charge Zéro' concerne :", o:["Optique, Dentaire, Audio", "Hospitalisation", "Médicaments vignettes bleues"], a:0, e:"Réforme '100% Santé' effective progressivement depuis 2019."},
    {c:"SANTÉ", q:"Loi HPST (2009) signifie :", o:["Hôpital, Patients, Santé, Territoires", "Handicap, Prévention, Soins, Travail", "Hébergement, Personnes, Social, Terre"], a:0, e:"Elle crée les ARS et modernise l'hôpital."},
    {c:"SANTÉ", q:"Qui pilote la politique de santé en région ?", o:["L'ARS", "Le Conseil Régional", "La Préfecture"], a:0, e:"Agence Régionale de Santé."},
    {c:"SANTÉ", q:"Qu'est-ce que le Ticket Modérateur ?", o:["La part restant à charge après remboursement Sécu", "Le prix de la consultation", "Une amende"], a:0, e:"Il est souvent couvert par la mutuelle (ou la CSS)."},
    {c:"SANTÉ", q:"Les LHSS accueillent :", o:["SDF malades (pathologie bénigne)", "Personnes âgées", "Toxicomanes en sevrage"], a:0, e:"Lits Halte Soins Santé."},
    {c:"SANTÉ", q:"Les LAM (Lits d'Accueil Médicalisé) sont pour :", o:["SDF avec pathologie lourde/chronique", "Urgences vitales", "Psychiatrie"], a:0, e:"Pour des soins plus lourds que les LHSS."},
    {c:"SANTÉ", q:"L'AME couvre-t-elle 100% des soins ?", o:["Oui, dans la limite des tarifs sécu", "Non, 70%", "Seulement les urgences"], a:0, e:"Panier de soins standard, hors cures thermales ou PMA."},
    {c:"SANTÉ", q:"Loi Kouchner (4 mars 2002) porte sur :", o:["Droits des malades et qualité du système de santé", "L'IVG", "La fin de vie"], a:0, e:"Accès direct au dossier médical, consentement éclairé."},
    {c:"SANTÉ", q:"Quel est le délai de résidence pour la PUMA ?", o:["3 mois", "6 mois", "1 an"], a:0, e:"Résidence stable et régulière depuis 3 mois."},
    
    // --- HANDICAP ---
    {c:"HANDICAP", q:"Loi fondatrice de 1975 :", o:["30 juin 1975", "11 février 1975", "18 décembre 1975"], a:0, e:"Loi d'orientation en faveur des personnes handicapées (création CDES/COTOREP)."},
    {c:"HANDICAP", q:"Loi du 11 février 2005 instaure :", o:["Droit à la compensation", "Droit à l'indemnisation", "Droit au travail"], a:0, e:"Loi pour l'égalité des droits et des chances."},
    {c:"HANDICAP", q:"Le taux d'emploi obligatoire (OETH) est de :", o:["6%", "5%", "10%"], a:0, e:"Pour les entreprises de 20 salariés et plus."},
    {c:"HANDICAP", q:"Quelle structure remplace la COTOREP ?", o:["MDPH (via CDAPH)", "CAF", "ARS"], a:0, e:"Maison Départementale des Personnes Handicapées."},
    {c:"HANDICAP", q:"L'AAH est financée par :", o:["L'État", "Département", "Sécu"], a:0, e:"Versée par la CAF, financée par l'État."},
    {c:"HANDICAP", q:"Taux incapacité min pour AAH sans restriction emploi :", o:["80%", "50%", "100%"], a:0, e:"Si entre 50-79%, il faut une restriction substantielle d'accès à l'emploi."},
    {c:"HANDICAP", q:"PCH signifie :", o:["Prestation de Compensation du Handicap", "Plan de Charge Handicap", "Projet Citoyen Handicap"], a:0, e:"Aide financière pour couvrir les surcoûts (humains, techniques)."},
    {c:"HANDICAP", q:"L'AEEH est pour :", o:["Les enfants handicapés (-20 ans)", "Les adultes", "Les étudiants"], a:0, e:"Allocation d'Éducation de l'Enfant Handicapé."},
    {c:"HANDICAP", q:"En ESAT, le travailleur a un statut :", o:["D'usager du médico-social", "De salarié (Code du travail)", "De fonctionnaire"], a:0, e:"Il ne signe pas de contrat de travail mais un contrat de soutien."},
    {c:"HANDICAP", q:"En Entreprise Adaptée (EA), le statut est :", o:["Salarié", "Usager", "Stagiaire"], a:0, e:"C'est une entreprise du milieu ordinaire avec majorité de travailleurs handicapés."},
    {c:"HANDICAP", q:"L'Agefiph gère :", o:["Fonds pour l'insertion pro (Secteur Privé)", "Fonds public", "Retraites"], a:0, e:"Collecte les contributions des entreprises n'atteignant pas les 6%."},
    {c:"HANDICAP", q:"Le FIPHFP concerne :", o:["Fonction Publique", "Privé", "Agricole"], a:0, e:"Équivalent de l'Agefiph pour le public."},
    {c:"HANDICAP", q:"Qu'est-ce que la RQTH ?", o:["Reconnaissance de la Qualité de Travailleur Handicapé", "Retraite Qualifiée", "Régime Quotidien"], a:0, e:"Permet l'accès aux dispositifs d'aide à l'emploi."},
    {c:"HANDICAP", q:"SAMETH aide pour :", o:["Maintien dans l'emploi", "Logement", "Transport"], a:0, e:"Service d'Appui au Maintien dans l'Emploi des Travailleurs Handicapés."},
    {c:"HANDICAP", q:"Loi 1987 oblige l'emploi handicapé pour entreprises de :", o:["+20 salariés", "+10 salariés", "+50 salariés"], a:0, e:"Seuil de l'OETH."},

    // --- RSA / PAUVRETÉ ---
    {c:"RSA", q:"Loi RMI :", o:["1988", "1998", "1981"], a:0, e:"Créé sous Mitterrand/Rocard."},
    {c:"RSA", q:"Loi RSA :", o:["1er déc 2008 (Généralisé 2009)", "2005", "2012"], a:0, e:"Remplace RMI et API."},
    {c:"RSA", q:"Financement RSA :", o:["Département", "Région", "État"], a:0, e:"Conseil Départemental."},
    {c:"RSA", q:"RSA 'Jeune' accessible si :", o:["2 ans d'activité sur les 3 dernières années", "Jamais travaillé", "Étudiant boursier"], a:0, e:"Dérogation pour les -25 ans actifs."},
    {c:"RSA", q:"Organisme payeur RSA :", o:["CAF / MSA", "Pôle Emploi", "Trésor Public"], a:0, e:"Sur décision du Président du Conseil Départemental."},
    {c:"RSA", q:"Prime d'activité (2016) fusionne :", o:["RSA Activité + PPE", "RMI + API", "ASS + AAH"], a:0, e:"Pour soutenir le pouvoir d'achat des travailleurs modestes."},
    {c:"RSA", q:"Le CER est :", o:["Contrat d'Engagement Réciproque", "Compte Épargne Retraite", "Centre d'Emploi Rapide"], a:0, e:"Contrat d'insertion obligatoire pour les bénéficiaires."},
    {c:"RSA", q:"Montant forfaitaire RSA (personne seule) approx :", o:["~635€", "~450€", "~800€"], a:0, e:"Chiffre 2024/25, revalorisé régulièrement."},
    {c:"RSA", q:"Loi lutte contre les exclusions :", o:["1998", "2002", "1990"], a:0, e:"Loi Aubry, accès aux droits fondamentaux."},
    {c:"RSA", q:"France Travail remplace Pôle Emploi depuis :", o:["1er janv 2024 (Loi 2023)", "2022", "2025"], a:0, e:"Loi pour le Plein Emploi."},
    {c:"RSA", q:"Le RSA est une allocation :", o:["Différentielle", "Fixe", "Proportionnelle"], a:0, e:"Il complète les ressources jusqu'au plafond."},
    {c:"RSA", q:"CCAS signifie :", o:["Centre Communal d'Action Sociale", "Comité", "Caisse"], a:0, e:"Établissement public communal."},
    {c:"RSA", q:"Domiciliation administrative permet :", o:["D'avoir une adresse pour les droits", "D'être logé", "De voter"], a:0, e:"Obligatoire pour les SDF pour accéder au RSA/CPAM."},
    {c:"RSA", q:"Loi DALO (2007) :", o:["Droit Au Logement Opposable", "Droit À L'Oubli", "Défense Associative"], a:0, e:"L'État est garant du droit au logement."},
    {c:"RSA", q:"SIAE :", o:["Structure d'Insertion par l'Activité Éco", "Service Inter", "Système Info"], a:0, e:"Regroupe Ateliers chantiers d'insertion, ETTI, etc."},

    // --- ENFANCE ---
    {c:"ENFANCE", q:"Loi 5 mars 2007 :", o:["Réforme protection enfance (Prévention)", "Création ASE", "Majorité à 18 ans"], a:0, e:"Clarifie le signalement et l'IP."},
    {c:"ENFANCE", q:"Loi 14 mars 2016 :", o:["Meilleur intérêt de l'enfant", "Adoption", "Divorce"], a:0, e:"Instaure le Projet Pour l'Enfant (PPE)."},
    {c:"ENFANCE", q:"Loi Taquet (2022) :", o:["Interdiction placement hôtel", "Majorité à 21 ans", "Fin de l'ASE"], a:0, e:"Et fin des sorties sèches à 18 ans (Contrat Jeune Majeur)."},
    {c:"ENFANCE", q:"ASE dépend de :", o:["Département", "État", "Commune"], a:0, e:"Aide Sociale à l'Enfance."},
    {c:"ENFANCE", q:"PMI créée en :", o:["1945", "1958", "1975"], a:0, e:"Ordonnance du 2 nov 1945."},
    {c:"ENFANCE", q:"Rôle PMI :", o:["Prévention 0-6 ans + femmes enceintes", "Soins curatifs adultes", "Placement"], a:0, e:"Consultations, bilans de santé, agrément ass. mat."},
    {c:"ENFANCE", q:"IP (Info Préoccupante) transmise à :", o:["CRIP (Département)", "Juge", "Police"], a:0, e:"Cellule de Recueil des IP."},
    {c:"ENFANCE", q:"Signalement transmis à :", o:["Procureur", "Maire", "Directeur école"], a:0, e:"En cas de danger grave/immédiat."},
    {c:"ENFANCE", q:"Numéro urgence :", o:["119", "115", "15"], a:0, e:"Enfance en Danger."},
    {c:"ENFANCE", q:"AEMO :", o:["Action Éducative en Milieu Ouvert", "Aide Mère", "Accueil Mineur"], a:0, e:"Mesure judiciaire (Juge des Enfants)."},
    {c:"ENFANCE", q:"AED :", o:["Action Éducative à Domicile", "Aide Enfant", "Allocation"], a:0, e:"Mesure administrative (Accord parents/ASE)."},
    {c:"ENFANCE", q:"OPP :", o:["Ordonnance de Placement Provisoire", "Ordre Public", "Organisation"], a:0, e:"Mesure d'urgence du Juge."},
    {c:"ENFANCE", q:"PPE :", o:["Projet Pour l'Enfant", "Plan Prévention", "Programme"], a:0, e:"Document unique de suivi (Loi 2016)."},
    {c:"ENFANCE", q:"MNA :", o:["Mineur Non Accompagné", "Mineur Nanti", "Mesure Nouvelle"], a:0, e:"Ex-Mineurs Isolés Étrangers."},
    {c:"ENFANCE", q:"Observatoire National Protection Enfance :", o:["ONPE", "ODPE", "ASE"], a:0, e:"Créé par la loi de 2007 (intégré au GIP)."},

    // --- PERSONNES ÂGÉES ---
    {c:"SÉNIORS", q:"Rapport Laroque :", o:["1962", "1945", "1975"], a:0, e:"Politique vieillesse moderne."},
    {c:"SÉNIORS", q:"APA (Alloc Personnalisée Autonomie) :", o:["2001 (Loi 20 juillet)", "1997", "2005"], a:0, e:"Remplace la PSD."},
    {c:"SÉNIORS", q:"Loi ASV (2015) :", o:["Adaptation Société Vieillissement", "Aide Sénior", "Alloc Simple"], a:0, e:"Priorité domicile, droits des aidants."},
    {c:"SÉNIORS", q:"Grille AGGIR :", o:["GIR 1 à 6", "1 à 10", "A à F"], a:0, e:"1 = très dépendant, 6 = autonome."},
    {c:"SÉNIORS", q:"APA couvre GIR :", o:["1 à 4", "1 à 6", "5 et 6"], a:0, e:"Les GIR 5-6 relèvent des caisses de retraite."},
    {c:"SÉNIORS", q:"Financement APA :", o:["Département (+CNSA)", "État", "Commune"], a:0, e:"Gestion départementale."},
    {c:"SÉNIORS", q:"Obligation alimentaire (Code Civil) :", o:["Enfants vers parents (et vice versa)", "État vers citoyens", "Voisins"], a:0, e:"Pour payer l'EHPAD si besoin."},
    {c:"SÉNIORS", q:"ASPA (Min Vieillesse) récupérable sur succession ?", o:["Oui, si actif > 100k€", "Non, jamais", "Oui dès le 1er euro"], a:0, e:"C'est une avance récupérable (seuil variable selon année)."},
    {c:"SÉNIORS", q:"EHPAD :", o:["Étab Hébergement Personnes Âgées Dépendantes", "Hôpital", "Foyer"], a:0, e:"Structure médicalisée."},
    {c:"SÉNIORS", q:"CLIC :", o:["Centre Local d'Info et Coord", "Comité", "Club"], a:0, e:"Guichet d'accueil niveau 3."},
    {c:"SÉNIORS", q:"Loi 2004 (Canicule) crée :", o:["CNSA + Journée solidarité", "ARS", "APA"], a:0, e:"Caisse Nationale de Solidarité pour l'Autonomie."},
    {c:"SÉNIORS", q:"MAIA :", o:["Méthode d'Action pour l'Intégration d'accueil", "Maison", "Mutuelle"], a:0, e:"Dispositif intégré pour parcours complexes (maintenant DAC)."},

    // --- VIOLENCES ---
    {c:"VIOLENCES", q:"Loi 9 juillet 2010 :", o:["Ordonnance Protection + Délit harcèlement couple", "Viol", "Divorce"], a:0, e:"Avancée majeure protection victimes."},
    {c:"VIOLENCES", q:"Validité Ordonnance Protection :", o:["6 mois", "1 mois", "1 an"], a:0, e:"Délivrée par JAF."},
    {c:"VIOLENCES", q:"3919 :", o:["Numéro écoute femmes victimes", "Urgence police", "Samu"], a:0, e:"Anonyme et gratuit."},
    {c:"VIOLENCES", q:"TGD :", o:["Téléphone Grave Danger", "Très Grand Danger", "Tribunal"], a:0, e:"Attribué par Procureur."},
    {c:"VIOLENCES", q:"Loi 2016 Prostitution :", o:["Pénalisation client + Parcours sortie", "Pénalisation prostituée", "Maisons closes"], a:0, e:"Changement de paradigme."},
    {c:"VIOLENCES", q:"IST :", o:["Intervenant Social en Gendarmerie/Police", "Info Sociale", "Interne"], a:0, e:"Interface social/judiciaire."},
    {c:"VIOLENCES", q:"Loi 2020 (30 juillet) :", o:["Suspension autorité parentale si crime", "Bracelet", "Médiation"], a:0, e:"Visant à protéger les enfants témoins/victimes."},
    
    // --- PSY & ADDICTIONS ---
    {c:"PSY", q:"Loi 1838 :", o:["Loi des aliénés", "Loi santé", "Loi asile"], a:0, e:"Texte historique enfermement."},
    {c:"PSY", q:"Sectorisation (1960) :", o:["Continuité soins + Proximité", "Enfermement", "Privatisation"], a:0, e:"Le soin hors les murs."},
    {c:"PSY", q:"Loi 5 juillet 2011 :", o:["Soins Sans Consentement (SSC)", "HO / HDT", "Liberté totale"], a:0, e:"Remplace la loi de 1990."},
    {c:"PSY", q:"JLD (Juge Libertés Détention) contrôle à :", o:["12 jours max", "15 jours", "30 jours"], a:0, e:"Pour tout soin sans consentement complet."},
    {c:"PSY", q:"Période observation max :", o:["72h", "24h", "48h"], a:0, e:"Avant décision maintien soins."},
    {c:"PSY", q:"Loi 1970 Drogues :", o:["Pénalisation usage + Soin", "Légalisation", "Dépénalisation"], a:0, e:"Cadre répressif français."},
    {c:"PSY", q:"Décret 1987 (Barzach) :", o:["Vente libre seringues", "Méthadone", "Salles de shoot"], a:0, e:"Début Réduction des Risques (VIH)."},
    {c:"PSY", q:"CSAPA :", o:["Centre Soins Accompagnement Prévention Addicto", "Comité", "Centre Sevrage"], a:0, e:"Fusionne CSST et CCAA."},
    {c:"PSY", q:"CAARUD :", o:["Centre Accueil RdR Usagers Drogues", "Centre Alcool", "Comité"], a:0, e:"Accueil inconditionnel (même si conso active)."},
    {c:"PSY", q:"CJC :", o:["Consultations Jeunes Consommateurs", "Centre Jeune", "Comité"], a:0, e:"Prévention précoce (Cannabis, écrans...)."}
];

/* --- INITIALISATION AU CHARGEMENT --- */
window.onload = function() {
    // 1. Mise à jour du compteur de questions
    document.getElementById('total-questions').innerText = DB.length;

    // 2. Gestion du Loader (Faux temps de chargement pour l'effet "App")
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            showScreen('home-screen');
        }, 500);
    }, 1500); // Durée du chargement : 1.5 secondes
};

/* --- VARIABLES --- */
let currentMode = 'classic';
let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

/* --- NAVIGATION --- */
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('show');
    } else {
        menu.classList.add('open');
        overlay.classList.add('show');
    }
}

function goToHome() {
    // Fermer le menu si ouvert
    const menu = document.getElementById('side-menu');
    if (menu.classList.contains('open')) toggleMenu();
    
    showScreen('home-screen');
}

/* --- LOGIQUE JEU --- */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame(mode) {
    currentMode = mode;
    score = 0;
    currentIndex = 0;
    
    // Mélange des questions
    questions = shuffle([...DB]); 
    
    document.getElementById('mode-badge').innerText = getModeName(mode);
    document.getElementById('timer-bar').style.width = '0%';
    
    showScreen('quiz-screen');
    loadQuestion();
}

function getModeName(mode) {
    if(mode === 'classic') return 'Classique';
    if(mode === 'sudden-death') return 'Mort Subite';
    if(mode === 'time-attack') return 'Contre-la-Montre';
    return '';
}

function loadQuestion() {
    if (currentIndex >= questions.length) {
        endGame(true);
        return;
    }

    const q = questions[currentIndex];
    
    document.getElementById('category-tag').innerText = q.c;
    document.getElementById('question-text').innerText = `${currentIndex + 1}. ${q.q}`;
    document.getElementById('explanation-box').style.display = 'none';
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    // Mélange des options
    let indices = q.o.map((_, i) => i);
    shuffle(indices);
    
    indices.forEach(idx => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = q.o[idx];
        btn.onclick = () => checkAnswer(btn, idx, q.a);
        container.appendChild(btn);
    });

    document.getElementById('score-display').innerText = `Score: ${score}`;

    if (currentMode === 'time-attack') {
        startTimer();
    }
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    const bar = document.getElementById('timer-bar');
    bar.style.width = '100%';
    bar.style.transition = 'none'; 
    
    setTimeout(() => {
        bar.style.transition = 'width 15s linear';
        bar.style.width = '0%';
    }, 50);

    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeOut();
        }
    }, 1000);
}

function timeOut() {
    const btns = document.querySelectorAll('.opt-btn');
    btns.forEach(b => b.classList.add('disabled'));
    
    const q = questions[currentIndex];
    btns.forEach(b => {
        if(b.innerText === q.o[q.a]) b.classList.add('correct');
    });

    showExplanation();
}

function checkAnswer(btn, selectedIdx, correctIdx) {
    clearInterval(timer);
    document.getElementById('timer-bar').style.width = '0%';
    
    const btns = document.querySelectorAll('.opt-btn');
    btns.forEach(b => b.classList.add('disabled'));

    const isCorrect = (selectedIdx === correctIdx);

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        const q = questions[currentIndex];
        btns.forEach(b => {
            if(b.innerText === q.o[q.a]) b.classList.add('correct');
        });

        if (currentMode === 'sudden-death') {
            setTimeout(() => endGame(false), 1500);
            return;
        }
    }

    showExplanation();
}

function showExplanation() {
    const q = questions[currentIndex];
    document.getElementById('explanation-text').innerText = q.e;
    const explBox = document.getElementById('explanation-box');
    explBox.style.display = 'block';
    
    // Auto-scroll doux vers le bas pour voir l'explication sur mobile
    setTimeout(() => {
        explBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function nextQuestion() {
    currentIndex++;
    loadQuestion();
    document.querySelector('.app-container').scrollTo(0, 0);
}

function endGame(completed) {
    showScreen('result-screen');
    
    const title = document.getElementById('result-title');
    const msg = document.getElementById('result-msg');
    const emoji = document.getElementById('result-emoji');
    const finalScore = document.getElementById('final-score');

    finalScore.innerText = `${score} / ${completed ? questions.length : currentIndex + 1}`;

    if (currentMode === 'sudden-death' && !completed) {
        emoji.innerText = "💀";
        title.innerText = "Mort Subite !";
        msg.innerText = "Dommage, une erreur fatale.";
    } else {
        const ratio = score / (completed ? questions.length : currentIndex + 1);
        if (ratio > 0.8) {
            emoji.innerText = "🏆";
            title.innerText = "Excellent !";
            msg.innerText = "Tu es prêt(e) pour l'examen.";
        } else if (ratio > 0.5) {
            emoji.innerText = "👍";
            title.innerText = "Bien joué";
            msg.innerText = "Continue tes efforts.";
        } else {
            emoji.innerText = "📚";
            title.innerText = "Courage";
            msg.innerText = "Relis les fiches et recommence.";
        }
    }
}