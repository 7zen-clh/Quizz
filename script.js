/* --- CONFIGURATION & DONNÉES --- */
/* Base de données de 120 questions avec 4 options de réponse */
/* Note : Dans cette DB, la réponse 'a' est l'index de la bonne réponse dans la liste 'o'. */
/* Ici, j'ai mis la bonne réponse en premier (index 0) pour faciliter la lecture, */
/* MAIS le script mélange automatiquement les options lors de l'affichage. */

const DB = [
    // --- 1. HÉBERGEMENT & LOGEMENT ---
    {c:"LOGEMENT", q:"La Loi SRU (2000) impose aux communes un quota de logements sociaux de :", o:["20% à 25%", "10%", "50%", "33%"], a:0, e:"Solidarité Renouvellement Urbain. Vise la mixité sociale."},
    {c:"LOGEMENT", q:"Que signifie DALO (Loi 2007) ?", o:["Droit Au Logement Opposable", "Droit À L'Occupation", "Demande Allocation Logement", "Droit Au Logement Organisé"], a:0, e:"L'État est garant du logement. Recours possible si l'État ne propose rien."},
    {c:"LOGEMENT", q:"Le 115 est le numéro pour :", o:["L'urgence sociale / SAMU Social", "Les pompiers (18)", "Les violences conjugales (3919)", "La police (17)"], a:0, e:"Gère l'hébergement d'urgence (créé en 1997)."},
    {c:"LOGEMENT", q:"La Loi ALUR (2014) concerne :", o:["L'accès au logement et l'urbanisme rénové", "L'allocation universelle de retraite", "L'aide au loyer urbain et rural", "L'aménagement du littoral et urbain"], a:0, e:"Encadrement des loyers, trêve hivernale prolongée, lutte contre l'habitat indigne."},
    {c:"LOGEMENT", q:"Le SIAO est le :", o:["Service Intégré d'Accueil et d'Orientation", "Service Interne d'Action Ouverte", "Système Info d'Allocations", "Service Inter-Associatif d'Organisation"], a:0, e:"Il centralise toutes les demandes d'hébergement d'un département."},
    {c:"LOGEMENT", q:"La Loi Besson (1990) affirme que :", o:["Le logement est un devoir de solidarité nationale", "Le logement est gratuit pour tous", "L'expulsion est interdite en tout temps", "Le logement est une compétence communale"], a:0, e:"Elle crée aussi les FSL (Fonds de Solidarité Logement)."},
    {c:"LOGEMENT", q:"La trêve hivernale empêche :", o:["Les expulsions locatives (1er nov - 31 mars)", "Le paiement du loyer", "Les coupures d'eau", "La résiliation du bail"], a:0, e:"Période pendant laquelle on ne peut pas mettre un locataire à la rue."},
    {c:"LOGEMENT", q:"Un CHRS est un :", o:["Centre d'Hébergement et de Réinsertion Sociale", "Centre Hospitalier Régional de Santé", "Comité d'Habitat et de Rénovation Sociale", "Centre d'Hébergement pour Réfugiés et Sans-abri"], a:0, e:"Structure d'accueil pour personnes en grande difficulté."},
    {c:"LOGEMENT", q:"Loi du 1er sept 1948 :", o:["Loi sur les loyers (après-guerre)", "Loi HLM", "Loi Abbé Pierre", "Loi DALO"], a:0, e:"Certains locataires bénéficient encore de ce statut protecteur ancien."},
    {c:"LOGEMENT", q:"L'Abbé Pierre a lancé son appel en :", o:["Hiver 1954", "Hiver 1945", "Hiver 1980", "Hiver 1968"], a:0, e:"Déclencheur de la politique du logement social d'urgence."},

    // --- 2. JUSTICE & PRISON ---
    {c:"JUSTICE", q:"Le SPIP signifie :", o:["Service Pénitentiaire d'Insertion et de Probation", "Service Police et Intervention Pénale", "Suivi Prison et Insertion Publique", "Service Pénal d'Information et de Prévention"], a:0, e:"Service chargé du suivi des personnes condamnées."},
    {c:"JUSTICE", q:"La loi du 15 août 2014 crée :", o:["La Contrainte Pénale", "La peine de mort", "Le bracelet électronique", "La perpétuité réelle"], a:0, e:"Peine en milieu ouvert pour éviter la prison (surveillance renforcée)."},
    {c:"JUSTICE", q:"La Loi Pénitentiaire de 2009 impose théoriquement :", o:["L'encellulement individuel", "Le travail forcé", "La fin des sorties", "L'uniforme obligatoire"], a:0, e:"Elle affirme aussi le maintien des liens familiaux."},
    {c:"JUSTICE", q:"Depuis 2022, le travail en prison est régi par :", o:["Le Contrat d'Emploi Pénitentiaire", "Le Code du Travail classique", "Le bénévolat", "L'absence de contrat"], a:0, e:"Rapprochement avec le droit commun, fin du régime de concession pure."},
    {c:"JUSTICE", q:"Le JAP est le :", o:["Juge de l'Application des Peines", "Juge Administratif de Police", "Juriste aux Affaires Pénales", "Juge des Affaires Publiques"], a:0, e:"Il décide des aménagements de peine (bracelet, semi-liberté...)."},
    {c:"JUSTICE", q:"Loi du 23 mars 2019 de réforme pour la justice :", o:["Interdit les peines de prison ferme < 1 mois", "Supprime les juges d'instruction", "Rétablit la peine de mort", "Supprime les réductions de peine"], a:0, e:"Elle favorise aussi le bracelet électronique pour les peines < 6 mois."},
    {c:"JUSTICE", q:"TIG signifie :", o:["Travail d'Intérêt Général", "Tribunal d'Instance Générale", "Temps Interne de Gestion", "Taxe d'Intérêt Global"], a:0, e:"Peine alternative : travail gratuit au profit d'une collectivité."},
    {c:"JUSTICE", q:"La mission principale du SPIP est :", o:["Prévenir la récidive et favoriser la réinsertion", "Punir sévèrement", "Juger les coupables", "Gérer les bâtiments"], a:0, e:"Accompagnement socio-éducatif des personnes sous main de justice."},
    {c:"JUSTICE", q:"Le 'Milieu Ouvert' concerne :", o:["Les condamnés libres (sursis, bracelet...)", "Les détenus en promenade", "Les prisons sans murs", "Les mineurs uniquement"], a:0, e:"Opposé au 'Milieu Fermé' (l'incarcération)."},
    {c:"JUSTICE", q:"Un aménagement de peine est possible si le reste à faire est :", o:["Inférieur à 2 ans (ou 1 an selon cas)", "Inférieur à 10 ans", "Supérieur à 5 ans", "Impossible"], a:0, e:"Pour favoriser la réinsertion progressive plutôt que la sortie sèche."},

    // --- 3. DROIT DES ÉTRANGERS ---
    {c:"ÉTRANGERS", q:"L'OFPRA est :", o:["Office Français de Protection des Réfugiés et Apatrides", "Office des Frontières et des Rapatriements", "Organisation Française pour le Retour et l'Asile", "Office Fédéral de Police et Renseignement"], a:0, e:"Organisme indépendant qui décide d'accorder ou non l'asile."},
    {c:"ÉTRANGERS", q:"La CNDA est :", o:["Cour Nationale du Droit d'Asile", "Centre National des Demandeurs d'Asile", "Commission Nationale des Droits de l'Homme", "Conseil National D'Administration"], a:0, e:"Juridiction d'appel si l'OFPRA refuse l'asile."},
    {c:"ÉTRANGERS", q:"L'OFII gère :", o:["L'accueil, l'intégration (CIR) et le médical", "La demande d'asile", "Les centres de rétention", "La justice des mineurs"], a:0, e:"Office Français de l'Immigration et de l'Intégration."},
    {c:"ÉTRANGERS", q:"La Protection Subsidiaire est accordée pour :", o:["4 ans (danger de mort/torture mais pas réfugié)", "10 ans", "1 an", "A vie"], a:0, e:"Pour ceux qui ne remplissent pas tous les critères de la Convention de Genève mais sont en danger."},
    {c:"ÉTRANGERS", q:"La Procédure Dublin stipule que :", o:["La demande d'asile dépend du 1er pays d'entrée en UE", "L'asile est automatique en France", "On peut choisir son pays d'asile", "L'asile est interdit en Europe"], a:0, e:"La France peut renvoyer le demandeur vers le pays responsable (ex: Italie, Espagne)."},
    {c:"ÉTRANGERS", q:"Le CESEDA est le :", o:["Code de l'Entrée et du Séjour des Étrangers et du Droit d'Asile", "Centre d'Étude Sociale des Étrangers", "Code Européen de Sécurité et Défense", "Contrat d'Emploi Solidaire"], a:0, e:"Le livre de loi qui regroupe tout le droit des étrangers."},
    {c:"ÉTRANGERS", q:"Un CADA est un :", o:["Centre d'Accueil pour Demandeurs d'Asile", "Centre Administratif des Douanes", "Comité d'Aide au Droit d'Asile", "Centre d'Action D'Accompagnement"], a:0, e:"Hébergement et accompagnement pendant l'instruction de la demande."},
    {c:"ÉTRANGERS", q:"Loi Immigration 2024 (Janvier) :", o:["Durcit l'accès aux droits et au séjour", "Facilise la naturalisation", "Supprime l'OFPRA", "Accorde le droit de vote"], a:0, e:"Texte controversé sur la régularisation et les prestations sociales."},
    {c:"ÉTRANGERS", q:"Un OQTF est une :", o:["Obligation de Quitter le Territoire Français", "Ordonnance de Qualité de Traitement", "Organisation de Quartier Territoriale", "Opposition Quotidienne au Travail Forcé"], a:0, e:"Décision du Préfet demandant à l'étranger de partir."},
    {c:"ÉTRANGERS", q:"Le CIR (Contrat d'Intégration Républicaine) inclut :", o:["Cours de français et formation civique", "Un emploi garanti", "Un logement HLM direct", "Le droit de vote"], a:0, e:"Obligatoire pour les primo-arrivants qui veulent s'installer durablement."},

    // --- 4. PAUVRETÉ & PACTE SOLIDARITÉS ---
    {c:"PAUVRETÉ", q:"Le Pacte des Solidarités (2023) remplace :", o:["La stratégie pauvreté de 2018", "Le RSA", "La Sécurité Sociale", "L'Assurance Chômage"], a:0, e:"Il comporte 4 axes (Enfance, Emploi, Transition éco, Accès aux droits)."},
    {c:"PAUVRETÉ", q:"Loi 1998 contre les exclusions (Aubry) vise :", o:["L'accès aux droits fondamentaux pour tous", "La création du RMI", "La suppression des aides sociales", "L'expulsion des squatteurs"], a:0, e:"Droit au logement, à la santé, à la culture, à la citoyenneté."},
    {c:"PAUVRETÉ", q:"Définition de la Précarité (Wresinski) :", o:["Absence de sécurités compromettant l'avenir", "Manque d'argent ponctuel", "Être au chômage longue durée", "Vivre dans la rue"], a:0, e:"La précarité devient pauvreté quand elle devient persistante."},
    {c:"PAUVRETÉ", q:"La 'Disqualification Sociale' est un concept de :", o:["Serge Paugam", "Robert Castel", "Pierre Bourdieu", "Émile Durkheim"], a:0, e:"Processus de fragilisation, dépendance et rupture des liens."},
    {c:"PAUVRETÉ", q:"L'accès aux droits (Axe 3 Pacte Solidarités) lutte contre :", o:["Le non-recours aux droits", "La fraude sociale", "L'administration numérique", "L'immigration"], a:0, e:"Beaucoup de personnes éligibles ne demandent pas leurs aides (complexité, honte)."},
    {c:"PAUVRETÉ", q:"L'Axe 1 du Pacte des Solidarités cible :", o:["La prévention de la pauvreté dès l'enfance", "Les seniors isolés", "Les travailleurs handicapés", "La construction de logements"], a:0, e:"Mesures : Cantine à 1€, petits déjeuners, soutien parentalité."},

    // --- 5. SANTÉ / ACCÈS AUX SOINS ---
    {c:"SANTÉ", q:"Loi 1893 (AMG) marque le début de :", o:["L'État Acteur (Assistance aux indigents)", "La Sécurité Sociale", "L'Hôpital Public", "La médecine libérale"], a:0, e:"Financée par l'impôt, c'est l'ancêtre de l'aide sociale."},
    {c:"SANTÉ", q:"L'Ordonnance de 1945 crée :", o:["La Sécurité Sociale", "Les Hôpitaux", "L'Ordre des Médecins", "Le Ministère de la Santé"], a:0, e:"Assurance maladie obligatoire fondée sur le travail."},
    {c:"SANTÉ", q:"La PUMA (2016) remplace la CMU de base et se fonde sur :", o:["Le critère de résidence stable (>3 mois)", "Le statut professionnel", "La nationalité française", "L'âge du patient"], a:0, e:"Droit aux soins pour toute personne résidant en France de façon stable et régulière."},
    {c:"SANTÉ", q:"La CSS (Complémentaire Santé Solidaire) 2019 :", o:["Fusionne CMU-C et ACS", "Remplace l'AME", "Est une mutuelle privée obligatoire", "Supprime le ticket modérateur"], a:0, e:"Mutuelle gratuite ou à coût réduit (< 1€/j) pour les faibles revenus."},
    {c:"SANTÉ", q:"L'AME (Aide Médicale État) est pour :", o:["Étrangers en situation irrégulière (>3 mois)", "Demandeurs d'asile", "Étudiants étrangers", "Tous les précaires"], a:0, e:"Financée par l'État pour raisons de santé publique et humanitaire."},
    {c:"SANTÉ", q:"Les PASS (Permanence Accès Soins Santé) se trouvent :", o:["À l'hôpital public", "En mairie", "Dans les pharmacies", "Au commissariat"], a:0, e:"Pour l'accès aux soins des publics précaires sans couverture sociale."},
    {c:"SANTÉ", q:"Les LHSS (Lits Halte Soins Santé) accueillent :", o:["SDF malades ne nécessitant pas l'hôpital", "Urgences vitales", "Psychiatrie lourde", "Personnes âgées dépendantes"], a:0, e:"Soin et repos pour les sans-abri."},
    {c:"SANTÉ", q:"La Loi HPST (2009) a créé :", o:["Les ARS (Agences Régionales de Santé)", "La Sécu", "Le SAMU", "Les EHPAD"], a:0, e:"Hôpital, Patients, Santé, Territoires. Régionalisation de la santé."},
    {c:"SANTÉ", q:"Le 'Reste à Charge Zéro' (100% Santé) concerne :", o:["Optique, Dentaire, Audiologie", "Chirurgie esthétique", "Médicaments de confort", "Ostéopathie"], a:0, e:"Remboursement intégral des équipements essentiels."},
    {c:"SANTÉ", q:"La Loi Kouchner (2002) porte sur :", o:["Les droits des malades (Dossier médical)", "La fin de vie", "L'IVG", "La vaccination"], a:0, e:"Place l'usager au centre (consentement éclairé, accès direct au dossier)."},
    {c:"SANTÉ", q:"Le Ticket Modérateur est :", o:["La part non remboursée par la Sécu", "Le prix de la consultation", "Une taxe sur les médicaments", "Une amende pour retard"], a:0, e:"C'est ce qui reste à payer (souvent couvert par la mutuelle/CSS)."},
    {c:"SANTÉ", q:"Les LAM (Lits d'Accueil Médicalisé) sont pour :", o:["SDF avec pathologie lourde/chronique", "Maladies bénignes", "Enfants malades", "Femmes enceintes"], a:0, e:"Structure plus médicalisée que les LHSS."},

    // --- 6. HANDICAP ---
    {c:"HANDICAP", q:"La Loi de 1975 est la première grande loi qui :", o:["Crée l'AAH et la COTOREP", "Crée la MDPH", "Oblige à l'emploi (6%)", "Définit le handicap psychique"], a:0, e:"Loi d'orientation en faveur des personnes handicapées."},
    {c:"HANDICAP", q:"La Loi du 11 février 2005 introduit :", o:["Le droit à la compensation (PCH) et l'accessibilité", "L'allocation adulte handicapé", "Les ESAT", "La sécurité sociale"], a:0, e:"Loi pour l'égalité des droits et des chances, la participation et la citoyenneté."},
    {c:"HANDICAP", q:"La Loi de 1987 impose aux entreprises de +20 salariés un quota de :", o:["6% de travailleurs handicapés", "10%", "2%", "50%"], a:0, e:"Sous peine de payer une contribution à l'AGEFIPH."},
    {c:"HANDICAP", q:"L'AAH (Alloc Adulte Handicapé) est un :", o:["Minima social versé par la CAF", "Salaire à vie", "Droit retraite", "Remboursement de soin"], a:0, e:"Sous condition de ressources et taux d'incapacité."},
    {c:"HANDICAP", q:"La PCH (Prestation Compensation Handicap) finance :", o:["Les aides humaines, techniques, aménagement", "Le loyer", "La nourriture", "Les vacances"], a:0, e:"Liée au projet de vie, sans condition de ressource pour l'accès."},
    {c:"HANDICAP", q:"La MDPH (Maison Départementale) est :", o:["Le guichet unique d'accueil et d'évaluation", "Un centre de soins", "Une école spécialisée", "Un hôpital de jour"], a:0, e:"Créée en 2005, elle remplace la COTOREP."},
    {c:"HANDICAP", q:"La CDAPH est la commission qui :", o:["Décide de l'attribution des droits (AAH, PCH...)", "Soigne les gens", "Finance les projets", "Construit les logements"], a:0, e:"Commission des Droits et de l'Autonomie des Personnes Handicapées."},
    {c:"HANDICAP", q:"Un ESAT (Établissement et Service d'Aide par le Travail) est en :", o:["Milieu Protégé (statut usager)", "Milieu Ordinaire", "Milieu Carcéral", "Milieu Scolaire"], a:0, e:"Le travailleur n'a pas de contrat de travail mais un contrat de soutien."},
    {c:"HANDICAP", q:"Une Entreprise Adaptée (EA) est :", o:["Une entreprise du milieu ordinaire (statut salarié)", "Un ESAT", "Une association bénévole", "Un hôpital"], a:0, e:"Elle emploie majoritairement des travailleurs handicapés mais avec le Code du Travail."},
    {c:"HANDICAP", q:"L'AEEH est destinée aux :", o:["Familles avec enfant handicapé (-20 ans)", "Adultes handicapés", "Personnes âgées", "Étudiants"], a:0, e:"Allocation d'Éducation de l'Enfant Handicapé."},
    {c:"HANDICAP", q:"La RQTH (Reconnaissance Qualité Travailleur Handicapé) sert à :", o:["Accéder aux aides à l'emploi (cap emploi, agefiph)", "Avoir une place de parking", "Ne pas payer d'impôts", "Avoir la retraite à 50 ans"], a:0, e:"Reconnue par la CDAPH pour 1 à 5 ans ou à vie."},
    {c:"HANDICAP", q:"L'AGEFIPH gère les fonds pour l'insertion dans le secteur :", o:["Privé", "Public", "Agricole", "Hospitalier"], a:0, e:"Le FIPHFP s'occupe du secteur public."},

    // --- 7. RSA & PAUVRETÉ ---
    {c:"RSA", q:"La Loi RMI (1988) a été portée par :", o:["Michel Rocard", "Simone Veil", "Jacques Chirac", "François Mitterrand"], a:0, e:"Revenu Minimum d'Insertion. Droit à une ressource + Droit à l'insertion."},
    {c:"RSA", q:"Le RSA (2008) remplace :", o:["Le RMI et l'API (Alloc Parent Isolé)", "L'ASS", "Le Chômage", "Les Allocations Familiales"], a:0, e:"Revenu de Solidarité Active. Objectif : inciter à l'activité."},
    {c:"RSA", q:"Le financement du RSA est assuré par :", o:["Le Conseil Départemental", "L'État", "La Commune", "La Région"], a:0, e:"Le Président du CD décide de l'attribution, la CAF effectue le versement."},
    {c:"RSA", q:"La Prime d'Activité (2016) fusionne :", o:["RSA Activité et Prime pour l'Emploi", "RSA Socle et RMI", "AAH et ASS", "APL et ALS"], a:0, e:"Complément de revenu pour les travailleurs modestes, versé par la CAF."},
    {c:"RSA", q:"Le RSA 'Jeune' est accessible aux -25 ans si :", o:["Ils ont travaillé 2 ans sur les 3 dernières années", "Ils sont étudiants", "Ils vivent chez leurs parents", "Ils sont au chômage"], a:0, e:"Condition d'activité antérieure stricte."},
    {c:"RSA", q:"Le CER (Contrat d'Engagement Réciproque) est signé entre :", o:["Le bénéficiaire et le Département (ou référent)", "Le bénéficiaire et l'employeur", "Le Maire et le Préfet", "La CAF et la Sécu"], a:0, e:"Il définit les obligations d'insertion du bénéficiaire."},
    {c:"RSA", q:"La réforme France Travail (2024) conditionne le RSA à :", o:["15h d'activité par semaine (expérimentation)", "35h de travail", "Aucune condition", "Du bénévolat forcé"], a:0, e:"Inscription automatique de tous les bénéficiaires à France Travail."},
    {c:"RSA", q:"Le CCAS (Centre Communal d'Action Sociale) assure :", o:["La domiciliation et l'analyse des besoins sociaux", "Le versement du RSA", "La gestion des hôpitaux", "La sécurité publique"], a:0, e:"Outil principal de l'action sociale de la mairie."},
    {c:"RSA", q:"La domiciliation administrative permet aux SDF :", o:["D'avoir une adresse pour valider leurs droits", "D'avoir un logement HLM", "De ne pas payer d'impôts", "De voyager gratuitement"], a:0, e:"Indispensable pour la Carte Vitale, le RSA, etc."},
    {c:"RSA", q:"Le RSA est une allocation 'différentielle', cela signifie :", o:["Elle complète les ressources jusqu'à un plafond", "Le montant est fixe pour tous", "Elle dépend de l'âge uniquement", "Elle varie selon la région"], a:0, e:"Montant versé = Montant Forfaitaire - Ressources du foyer."},

    // --- 8. ENFANCE ---
    {c:"ENFANCE", q:"La Loi de 2007 sur la protection de l'enfance met l'accent sur :", o:["La prévention et la distinction IP/Signalement", "Le tout judiciaire", "La fermeture des foyers", "La punition des parents"], a:0, e:"Le Président du Département devient le chef de file."},
    {c:"ENFANCE", q:"La Loi de 2016 introduit la notion de :", o:["Meilleur intérêt de l'enfant et PPE", "Droit de correction", "Majorité à 16 ans", "Service militaire obligatoire"], a:0, e:"Le Projet Pour l'Enfant (PPE) garantit la cohérence du parcours."},
    {c:"ENFANCE", q:"La Loi Taquet (2022) interdit :", o:["Le placement des mineurs à l'hôtel", "L'adoption par les célibataires", "Le placement en famille d'accueil", "L'école à la maison"], a:0, e:"Elle impose aussi la non-séparation des fratries."},
    {c:"ENFANCE", q:"La PMI (Protection Maternelle et Infantile) a été créée en :", o:["1945 (Ordonnance)", "1989", "2007", "1958"], a:0, e:"Mission de prévention santé pour mère et enfant 0-6 ans."},
    {c:"ENFANCE", q:"L'ASE (Aide Sociale à l'Enfance) relève du :", o:["Département", "Ministère de la Justice", "Ministère de la Santé", "CCAS"], a:0, e:"Service chargé de l'accueil et du suivi des mineurs en danger."},
    {c:"ENFANCE", q:"Une IP (Information Préoccupante) est traitée par :", o:["La CRIP (Cellule départementale)", "Le Juge", "La Police", "L'école"], a:0, e:"Évaluation administrative. Si danger grave -> Signalement."},
    {c:"ENFANCE", q:"Un Signalement est transmis directement au :", o:["Procureur de la République", "Maire", "Directeur d'école", "Médecin"], a:0, e:"En cas de danger grave et immédiat."},
    {c:"ENFANCE", q:"L'AEMO (Action Éducative en Milieu Ouvert) est une mesure :", o:["Judiciaire (ordonnée par le Juge)", "Administrative (accord parents)", "Financière", "Scolaire"], a:0, e:"L'enfant reste chez lui mais un éducateur intervient."},
    {c:"ENFANCE", q:"L'AED (Action Éducative à Domicile) est une mesure :", o:["Administrative (Contractuelle avec les parents)", "Judiciaire (Imposée)", "Pénale", "Médicale"], a:0, e:"Soutien éducatif proposé par l'ASE avec accord des parents."},
    {c:"ENFANCE", q:"Le 119 est le numéro pour :", o:["L'Enfance en Danger (SNATED)", "Les urgences médicales", "Les femmes battues", "La police"], a:0, e:"Appel gratuit, confidentiel, 24h/24."},
    {c:"ENFANCE", q:"Un MNA est un :", o:["Mineur Non Accompagné (ex mineur isolé étranger)", "Mineur Non Assisté", "Mineur Nanti Autonome", "Mesure Nouvelle d'Accueil"], a:0, e:"Relève de la protection de l'enfance (ASE) jusqu'à majorité."},
    {c:"ENFANCE", q:"Le PPE (Projet Pour l'Enfant) est :", o:["Un document unique coordonnant les actions", "Un placement provisoire", "Une punition", "Une aide financière"], a:0, e:"Obligatoire pour tout enfant pris en charge par l'ASE."},

    // --- 9. SÉNIORS ---
    {c:"SÉNIORS", q:"La Loi ASV (2015) signifie :", o:["Adaptation de la Société au Vieillissement", "Aide Sociale Vieillesse", "Action Senior Ville", "Allocation de Soutien Vital"], a:0, e:"Priorité au maintien à domicile et reconnaissance des proches aidants."},
    {c:"SÉNIORS", q:"L'APA (2001) remplace la PSD et signifie :", o:["Allocation Personnalisée d'Autonomie", "Aide Personnelle aux Âgés", "Assurance Perte d'Autonomie", "Action Pour l'Autonomie"], a:0, e:"Gérée par le Département. Pour les GIR 1 à 4."},
    {c:"SÉNIORS", q:"La Grille AGGIR sert à :", o:["Évaluer le degré de dépendance (GIR 1 à 6)", "Calculer la retraite", "Définir le régime alimentaire", "Fixer le prix de l'EHPAD"], a:0, e:"GIR 1 = dépendance totale, GIR 6 = autonome."},
    {c:"SÉNIORS", q:"L'Obligation Alimentaire (Code Civil) impose :", o:["L'aide des enfants/gendres pour les parents dans le besoin", "De nourrir ses voisins", "L'aide de l'État systématique", "La gratuité de l'EHPAD"], a:0, e:"Souvent sollicitée pour payer l'hébergement en maison de retraite."},
    {c:"SÉNIORS", q:"L'ASPA (ex-Minimum Vieillesse) est :", o:["Récupérable sur la succession (si > 39k€ ou 100k€)", "Une aide non remboursable", "Une retraite complémentaire", "Un impôt"], a:0, e:"Allocation de Solidarité aux Personnes Âgées."},
    {c:"SÉNIORS", q:"Le CLIC est un :", o:["Centre Local d'Information et de Coordination", "Comité de Lutte Isaloment", "Centre de Loisirs Inter-Communal", "Club Local d'Initiative Citoyenne"], a:0, e:"Guichet d'accueil de proximité pour les personnes âgées."},
    {c:"SÉNIORS", q:"Le Rapport Laroque (1962) est célèbre pour :", o:["Fonder la politique vieillesse moderne (maintien domicile)", "Créer la retraite à 60 ans", "Créer la Sécu", "Inventer l'EHPAD"], a:0, e:"Fin de la logique de l'hospice."},
    {c:"SÉNIORS", q:"La CNSA (Caisse Nationale de Solidarité pour l'Autonomie) est financée par :", o:["La Journée de Solidarité (Lundi Pentecôte)", "La TVA", "Les amendes", "Le Loto"], a:0, e:"Elle répartit les fonds pour l'APA et la PCH."},
    {c:"SÉNIORS", q:"Les MAIA (Maison pour l'Autonomie et l'Intégration des malades Alzheimer) sont devenues :", o:["Les DAC (Dispositifs d'Appui à la Coordination)", "Les EHPAD", "Les CLIC", "Les ARS"], a:0, e:"Pour les parcours de santé complexes."},

    // --- 10. FEMMES / VIOLENCES ---
    {c:"FEMMES", q:"La Loi du 9 juillet 2010 crée :", o:["L'Ordonnance de Protection et le délit de harcèlement conjugal", "Le divorce par consentement mutuel", "La parité en politique", "Le congé paternité"], a:0, e:"Avancée majeure permettant au JAF de protéger la victime en urgence."},
    {c:"FEMMES", q:"Le 3919 est le numéro pour :", o:["Violences Femmes Info", "Enfance en danger", "Urgences médicales", "Police secours"], a:0, e:"Écoute, information et orientation (Anonyme/Gratuit)."},
    {c:"FEMMES", q:"L'Ordonnance de Protection est délivrée par :", o:["Le Juge aux Affaires Familiales (JAF)", "La Police", "Le Maire", "L'Assistant Social"], a:0, e:"En urgence (délai théorique 6 jours). Valable 6 mois."},
    {c:"FEMMES", q:"La Loi de 2016 sur la prostitution :", o:["Pénalise le client et abroge le délit de racolage", "Pénalise la prostituée", "Rouvre les maisons closes", "Légalise le proxénétisme"], a:0, e:"Changement de paradigme : la prostituée est vue comme victime."},
    {c:"FEMMES", q:"Le TGD est un :", o:["Téléphone Grave Danger", "Tribunal de Grande Décision", "Traitement Général des Données", "Test Grossesse Domicile"], a:0, e:"Téléphone avec bouton d'alerte relié aux forces de l'ordre."},
    {c:"FEMMES", q:"Le harcèlement sexuel a été redéfini par la loi de :", o:["Août 2012", "2000", "1990", "2020"], a:0, e:"Suite à l'abrogation de l'ancien article par le Conseil Constitutionnel."},
    {c:"FEMMES", q:"La Convention d'Istanbul est :", o:["Un traité européen contre les violences faites aux femmes", "Une loi française", "Un accord commercial", "Un texte de l'ONU"], a:0, e:"Ratifiée par la France, elle pose le cadre de la prévention et protection."},
    {c:"FEMMES", q:"La Loi du 30 juillet 2020 permet de :", o:["Suspendre l'autorité parentale en cas de crime conjugal", "Divorcer sans juge", "Payer moins d'impôts", "Porter une arme"], a:0, e:"Protection des enfants témoins/victimes."},

    // --- 11. PSYCHIATRIE & ADDICTIONS ---
    {c:"PSY", q:"La Loi de 1838 est la loi fondatrice sur :", o:["Les Aliénés (Enfermement)", "Les Hôpitaux généraux", "La Pharmacie", "Les Prisons"], a:0, e:"Instaure le placement d'office et le placement volontaire."},
    {c:"PSY", q:"La Sectorisation (Circulaire 1960) vise à :", o:["Soigner hors les murs, à proximité du domicile", "Enfermer tous les malades", "Privatiser la psychiatrie", "Supprimer les médicaments"], a:0, e:"Continuité des soins (CMP, Hôpital de jour...)."},
    {c:"PSY", q:"La Loi du 5 juillet 2011 réforme :", o:["Les Soins Sans Consentement (Contrôle du JLD)", "Le remboursement des psychologues", "Les études de médecine", "Le statut des infirmiers"], a:0, e:"Le Juge des Libertés et de la Détention contrôle l'hospitalisation à 12 jours."},
    {c:"PSY", q:"SPDT signifie :", o:["Soins Psychiatriques à la Demande d'un Tiers", "Soins Prioritaires De Territoire", "Service Public De Traitement", "Suivi Psychologique De Transition"], a:0, e:"Hospitalisation demandée par la famille ou un proche."},
    {c:"PSY", q:"SPDRE signifie :", o:["Soins Psy sur Décision du Représentant de l'État", "Soins Pour Détenus Récalcitrants Évadés", "Service Psy De Rééducation", "Suivi Post-Détention Réinsertion"], a:0, e:"Ordonné par le Préfet en cas de danger pour l'ordre public."},
    {c:"PSY", q:"Le CMP (Centre Médico-Psychologique) est :", o:["Le pivot des soins ambulatoires de secteur", "Un hôpital fermé", "Une clinique privée", "Un centre de désintoxication"], a:0, e:"Lieu de consultation gratuit proche du domicile."},
    {c:"PSY", q:"La Loi de 1970 sur les drogues instaure :", o:["La pénalisation de l'usage et l'injonction thérapeutique", "La légalisation du cannabis", "La vente libre en pharmacie", "L'absence de sanction"], a:0, e:"Cadre répressif toujours en vigueur."},
    {c:"PSY", q:"La Réduction des Risques (RdR) a émergé face à :", o:["L'épidémie de SIDA (VIH) dans les années 80", "L'alcoolisme", "Le tabagisme", "La crise économique"], a:0, e:"Décret Barzach 1987 (seringues libres)."},
    {c:"PSY", q:"Un CSAPA est un centre de :", o:["Soins, Accompagnement, Prévention en Addictologie", "Sevrage Alcoolique Pur", "Sport Adapté", "Surveillance Policière"], a:0, e:"Accompagnement global (médical, social, psy)."},
    {c:"PSY", q:"Un CAARUD accueille :", o:["Les usagers actifs (Réduction des risques)", "Uniquement les abstinents", "Les familles seulement", "Les dealers"], a:0, e:"Accueil inconditionnel, distribution de matériel stérile."},
    
    // --- 12. DIVERS / CULTURE SOCIALE ---
    {c:"DIVERS", q:"Le secret professionnel s'impose :", o:["Aux travailleurs sociaux (Assistants Service Social...)", "À personne", "Aux bénévoles seulement", "Aux journalistes"], a:0, e:"La violation est un délit. Partage possible sous conditions (secret partagé)."},
    {c:"DIVERS", q:"La Loi 2002-2 rénove :", o:["L'action sociale et médico-sociale (Droits des usagers)", "Le Code Pénal", "Le Code de la Route", "L'Éducation Nationale"], a:0, e:"Instaure le livret d'accueil, le projet personnalisé, le conseil de la vie sociale."},
    {c:"DIVERS", q:"Qui est le chef de file de l'action sociale ?", o:["Le Conseil Départemental", "La Région", "L'État", "L'Europe"], a:0, e:"Depuis les lois de décentralisation."},
    {c:"DIVERS", q:"Le Défenseur des Droits est une autorité :", o:["Indépendante (Lutte contre discriminations)", "Judiciaire", "Politique", "Religieuse"], a:0, e:"Défend les droits des usagers face aux services publics."},
    {c:"DIVERS", q:"Une Mission Locale accompagne :", o:["Les jeunes 16-25 ans sortis du système scolaire", "Les personnes âgées", "Les cadres au chômage", "Les enfants"], a:0, e:"Insertion sociale et professionnelle."},
    {c:"DIVERS", q:"L'Alsace-Moselle a un régime de Sécu :", o:["Local (Régime Local)", "Général", "Agricole", "Privé"], a:0, e:"Héritage historique, remboursements plus élevés."},
    {c:"DIVERS", q:"La PJJ (Protection Judiciaire de la Jeunesse) dépend du :", o:["Ministère de la Justice", "Département", "Ministère de la Santé", "Ministère de l'Intérieur"], a:0, e:"S'occupe des mineurs sous main de justice (délinquants)."}
];

/* --- LOGIQUE FLASHCARDS --- */
let fcIndex = 0;
let fcList = [];

function startFlashcards() {
    // On mélange la DB pour créer une liste de cartes
    fcList = shuffle([...DB]);
    fcIndex = 0;
    showScreen('flashcard-screen');
    loadFlashcard();
}

function loadFlashcard() {
    if (fcIndex >= fcList.length) {
        alert("Session terminée ! Retour au menu.");
        goToHome();
        return;
    }

    const item = fcList[fcIndex];
    const card = document.querySelector('.flashcard');
    
    // Remettre la carte du bon côté (face)
    card.classList.remove('flipped');

    // Attendre un peu que la carte se retourne avant de changer le texte
    setTimeout(() => {
        document.getElementById('fc-tag').innerText = item.c;
        document.getElementById('fc-question').innerText = item.q;
        
        // Pour la réponse, on combine la bonne option + l'explication
        // item.o[item.a] est le texte de la bonne réponse
        const fullAnswer = `<strong>${item.o[item.a]}</strong><br><br>${item.e}`;
        document.getElementById('fc-answer').innerHTML = fullAnswer;
        
        document.getElementById('fc-count').innerText = `${fcIndex + 1} / ${fcList.length}`;
    }, 200);
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function nextFlashcard() {
    fcIndex++;
    loadFlashcard();
}

/* --- INITIALISATION AU CHARGEMENT --- */
window.onload = function() {
    // 1. Mise à jour du compteur de questions
    document.getElementById('total-questions').innerText = DB.length;

    // 2. Gestion du Loader
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
    // Montrer la bonne réponse
    // Note: q.o[q.a] contient le texte de la bonne réponse
    // On doit trouver le bouton qui contient ce texte
    const correctText = q.o[q.a];
    btns.forEach(b => {
        if(b.innerText === correctText) b.classList.add('correct');
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
        // Montrer la bonne réponse
        const q = questions[currentIndex];
        const correctText = q.o[q.a];
        btns.forEach(b => {
            if(b.innerText === correctText) b.classList.add('correct');
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