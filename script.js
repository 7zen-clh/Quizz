/* --- CONFIGURATION & DONNÉES --- */

// Colle ici la liste complète de tes questions
const DB = [
    // --- 1. HÉBERGEMENT & LOGEMENT (NOUVEAU) ---
    {c:"LOGEMENT", q:"Loi SRU (2000) impose aux communes un quota de logements sociaux de :", o:["20% à 25%", "10%", "50%"], a:0, e:"Solidarité Renouvellement Urbain. Vise la mixité sociale."},
    {c:"LOGEMENT", q:"Que signifie DALO (Loi 2007) ?", o:["Droit Au Logement Opposable", "Droit À L'Occupation", "Demande Allocation Logement"], a:0, e:"L'État est garant du logement. Si pas de proposition, recours possible devant commission."},
    {c:"LOGEMENT", q:"Le 115 est le numéro pour :", o:["L'urgence sociale / SAMU Social", "Les pompiers", "Les violences conjugales"], a:0, e:"Gère l'hébergement d'urgence (créé en 1997)."},
    {c:"LOGEMENT", q:"La Loi ALUR (2014) concerne :", o:["L'accès au logement et l'urbanisme rénové", "L'allocation logement", "L'aide au loyer"], a:0, e:"Encadrement des loyers, trêve hivernale prolongée, lutte contre l'habitat indignes."},
    {c:"LOGEMENT", q:"Le SIAO est le :", o:["Service Intégré d'Accueil et d'Orientation", "Service Interne", "Système Info"], a:0, e:"Il centralise toutes les demandes d'hébergement et de logement adapté d'un département."},
    {c:"LOGEMENT", q:"Loi Besson (1990) affirme que :", o:["Le logement est un devoir de solidarité nationale", "Le logement est gratuit", "L'expulsion est interdite"], a:0, e:"Création des FSL (Fonds de Solidarité Logement)."},
    {c:"LOGEMENT", q:"La trêve hivernale empêche :", o:["Les expulsions locatives (1er nov - 31 mars)", "Les coupures d'eau", "Le paiement du loyer"], a:0, e:"Renforcée par la loi ALUR."},
    {c:"LOGEMENT", q:"Un CHRS est un :", o:["Centre d'Hébergement et de Réinsertion Sociale", "Centre Hospitalier", "Comité d'Habitat"], a:0, e:"Structure d'accueil pour personnes en grande difficulté (logement + accompagnement social)."},
    {c:"LOGEMENT", q:"Loi du 1er sept 1948 :", o:["Loi sur les loyers (après-guerre)", "Loi HLM", "Loi Abbé Pierre"], a:0, e:"Certains locataires bénéficient encore de ce statut protecteur ancien."},
    {c:"LOGEMENT", q:"L'Abbé Pierre a lancé son appel en :", o:["Hiver 1954", "Hiver 1945", "Hiver 1980"], a:0, e:"Déclencheur de la politique du logement social d'urgence."},

    // --- 2. JUSTICE & PRISON (NOUVEAU) ---
    {c:"JUSTICE", q:"Le SPIP signifie :", o:["Service Pénitentiaire d'Insertion et de Probation", "Service Police", "Suivi Prison"], a:0, e:"Service chargé du suivi des personnes condamnées (milieu ouvert et fermé)."},
    {c:"JUSTICE", q:"La loi du 15 août 2014 crée :", o:["La Contrainte Pénale", "La peine de mort", "Le bracelet électronique"], a:0, e:"Nouvelle peine en milieu ouvert pour éviter la prison (surveillance + obligations)."},
    {c:"JUSTICE", q:"Loi Pénitentiaire de 2009 impose :", o:["L'encellulement individuel (théorique)", "Le travail forcé", "La fin des sorties"], a:0, e:"Elle affirme aussi le maintien des liens familiaux et le droit d'expression des détenus."},
    {c:"JUSTICE", q:"Avant 2022, le travail en prison était :", o:["Un acte sans contrat de travail (concession)", "Un vrai CDI", "Illégal"], a:0, e:"Depuis 2022, création du 'Contrat d'Emploi Pénitentiaire' (rapprochement droit commun)."},
    {c:"JUSTICE", q:"Le JAP est le :", o:["Juge de l'Application des Peines", "Juge Administratif", "Juriste"], a:0, e:"Il décide des aménagements de peine (bracelet, semi-liberté...)."},
    {c:"JUSTICE", q:"Loi du 23 mars 2019 de réforme pour la justice :", o:["Favorise les alternatives à la prison (TIG, DDSE)", "Supprime les juges", "Augmente les peines"], a:0, e:"Interdit les peines de prison ferme < 1 mois, favorise le bracelet pour les < 6 mois."},
    {c:"JUSTICE", q:"TIG signifie :", o:["Travail d'Intérêt Général", "Tribunal Instance", "Temps Interne"], a:0, e:"Peine alternative : travail gratuit au profit d'une collectivité/asso."},
    {c:"JUSTICE", q:"La mission principale du SPIP est :", o:["Prévenir la récidive et favoriser la réinsertion", "Punir", "Juger"], a:0, e:"Accompagnement socio-éducatif."},
    {c:"JUSTICE", q:"Milieu Ouvert vs Milieu Fermé :", o:["Dehors (Suivi, Sursis) vs Dedans (Prison)", "Libre vs Enchaîné", "Ville vs Campagne"], a:0, e:"Le milieu ouvert concerne les personnes condamnées mais libres (sous conditions)."},
    {c:"JUSTICE", q:"Aménagement de peine possible si le reste à faire est :", o:["Inférieur à 2 ans (ou 1 an selon cas)", "Inférieur à 10 ans", "Impossible"], a:0, e:"Pour favoriser la réinsertion progressive."},

    // --- 3. DROIT DES ÉTRANGERS (NOUVEAU) ---
    {c:"ÉTRANGERS", q:"L'OFPRA est :", o:["Office Français de Protection des Réfugiés et Apatrides", "Office des Frontières", "Organisation Politique"], a:0, e:"Organisme qui décide d'accorder ou non l'asile."},
    {c:"ÉTRANGERS", q:"La CNDA est :", o:["Cour Nationale du Droit d'Asile", "Centre National", "Commission"], a:0, e:"Juridiction d'appel si l'OFPRA refuse l'asile."},
    {c:"ÉTRANGERS", q:"L'OFII gère :", o:["L'accueil, l'intégration (CIR) et le médical", "L'asile", "Les expulsions"], a:0, e:"Office Français de l'Immigration et de l'Intégration."},
    {c:"ÉTRANGERS", q:"La Protection Subsidiaire est :", o:["Pour ceux qui ne sont pas réfugiés mais en danger de mort", "Pour les étudiants", "Pour les touristes"], a:0, e:"Accordée pour 4 ans (vs 10 ans pour le statut de réfugié)."},
    {c:"ÉTRANGERS", q:"Procédure Dublin :", o:["La demande d'asile dépend du 1er pays d'entrée en UE", "L'asile est automatique", "C'est un visa touristique"], a:0, e:"La France peut renvoyer le demandeur vers le pays responsable (souvent Italie, Grèce...)."},
    {c:"ÉTRANGERS", q:"CESEDA signifie :", o:["Code de l'Entrée et du Séjour des Étrangers et du Droit d'Asile", "Code Social", "Centre d'Étude"], a:0, e:"Le livre de loi qui regroupe tout le droit des étrangers."},
    {c:"ÉTRANGERS", q:"CADA :", o:["Centre d'Accueil pour Demandeurs d'Asile", "Centre Administratif", "Comité d'Aide"], a:0, e:"Hébergement et accompagnement pendant l'instruction de la demande."},
    {c:"ÉTRANGERS", q:"Loi Immigration 2024 (Janvier) :", o:["Durcit l'accès aux droits et au séjour", "Facilise tout", "Supprime l'OFPRA"], a:0, e:"Controverse sur la 'préférence nationale' (censurée par Conseil Constit.), régularisation métiers en tension."},
    {c:"ÉTRANGERS", q:"Un OQTF est :", o:["Obligation de Quitter le Territoire Français", "Ordre de Quitter", "Organisation"], a:0, e:"Décision préfectorale d'éloignement."},
    {c:"ÉTRANGERS", q:"CIR (Contrat d'Intégration Républicaine) :", o:["Obligatoire pour les primo-arrivants (Cours français, civique)", "Facultatif", "Pour les touristes"], a:0, e:"Géré par l'OFII."},

    // --- 4. PAUVRETÉ & PACTE SOLIDARITÉS (NOUVEAU) ---
    {c:"PAUVRETÉ", q:"Pacte des Solidarités (2023) remplace :", o:["La stratégie pauvreté 2018", "Le RSA", "La Sécu"], a:0, e:"Il comporte 4 axes (Enfance, Emploi, Transition éco, Accès aux droits)."},
    {c:"PAUVRETÉ", q:"Loi 1998 contre les exclusions (Aubry) vise :", o:["L'accès aux droits fondamentaux pour tous", "La création du RMI", "La suppression des aides"], a:0, e:"Droit au logement, à la santé, à la culture, à la citoyenneté."},
    {c:"PAUVRETÉ", q:"Définition Précarité (Wresinski) :", o:["Absence de sécurités (emploi, famille...) compromettant l'avenir", "Manque d'argent ponctuel", "Être au chômage"], a:0, e:"La précarité devient pauvreté quand elle devient persistante."},
    {c:"PAUVRETÉ", q:"La 'Disqualification Sociale' est un concept de :", o:["Serge Paugam", "Robert Castel", "Pierre Bourdieu"], a:0, e:"Processus de fragilisation, dépendance et rupture des liens."},
    {c:"PAUVRETÉ", q:"L'accès aux droits (Axe 3 Pacte Solidarités) lutte contre :", o:["Le non-recours aux droits", "La fraude", "L'administration"], a:0, e:"Beaucoup de personnes éligibles ne demandent pas leurs aides (complexité, honte)."},
    {c:"PAUVRETÉ", q:"Axe 1 du Pacte des Solidarités :", o:["Prévention de la pauvreté dès l'enfance", "Logement", "Santé"], a:0, e:"Cantine à 1€, petits déjeuners, soutien parentalité."},

    // --- 5. SANTÉ / ACCÈS AUX SOINS (RAPPEL & EXTENSION) ---
    {c:"SANTÉ", q:"Loi 1893 (AMG) :", o:["Assistance Médicale Gratuite (Début État Acteur)", "Sécu Sociale", "Hôpital"], a:0, e:"Assistance aux indigents, financée par l'impôt."},
    {c:"SANTÉ", q:"Ordonnance 1945 :", o:["Création Sécurité Sociale", "Création Hôpital", "Création Médecins"], a:0, e:"Assurance maladie obligatoire pour les travailleurs."},
    {c:"SANTÉ", q:"PUMA (2016) :", o:["Protection Universelle Maladie (Critère Résidence)", "Plan Urgence", "Programme Unique"], a:0, e:"Remplace la CMU de base. Droit aux soins si résidence stable > 3 mois."},
    {c:"SANTÉ", q:"CSS (Complémentaire Santé Solidaire) 2019 :", o:["Fusionne CMU-C et ACS", "Remplace l'AME", "Nouvelle mutuelle payante"], a:0, e:"Mutuelle gratuite ou à coût réduit pour les faibles revenus."},
    {c:"SANTÉ", q:"AME (Aide Médicale État) :", o:["Pour étrangers irréguliers > 3 mois", "Pour tous", "Pour étudiants"], a:0, e:"Financée par l'État, panier de soins classique."},
    {c:"SANTÉ", q:"PASS (Hôpital) :", o:["Permanence Accès Soins Santé (Précarité)", "Point Accueil", "Plan Santé"], a:0, e:"Accès aux soins pour ceux qui n'ont pas de couverture."},
    {c:"SANTÉ", q:"Lits Halte Soins Santé (LHSS) :", o:["SDF malades (pathologie bénigne)", "Urgences", "Psychiatrie"], a:0, e:"Soigner des SDF dont l'état ne nécessite pas l'hôpital mais du repos."},
    {c:"SANTÉ", q:"Loi HPST 2009 :", o:["Hôpital Patients Santé Territoires (Création ARS)", "Handicap", "Hébergement"], a:0, e:"Réorganisation territoriale de la santé."},
    {c:"SANTÉ", q:"ARS (Agence Régionale de Santé) :", o:["Pilote la politique de santé en région", "Paye les médecins", "Gère la CAF"], a:0, e:"Chef d'orchestre du sanitaire et médico-social."},
    {c:"SANTÉ", q:"Reste à Charge Zéro (100% Santé) :", o:["Optique, Dentaire, Audio", "Chirurgie", "Médicaments"], a:0, e:"Remboursement intégral des équipements essentiels."},
    {c:"SANTÉ", q:"Droit des malades (Loi Kouchner 2002) :", o:["Accès dossier médical + Consentement", "Droit de mourir", "Gratuité"], a:0, e:"Place l'usager au centre du système."},
    {c:"SANTÉ", q:"Ticket modérateur :", o:["Partie non remboursée par la Sécu", "Prix consultation", "Taxe"], a:0, e:"Souvent pris en charge par la mutuelle/CSS."},

    // --- 6. HANDICAP (EXTENSION) ---
    {c:"HANDICAP", q:"Loi 1975 Handicap :", o:["Loi d'orientation (Création AAH, COTOREP)", "Loi 2005", "Loi 1987"], a:0, e:"Première grande loi cadre."},
    {c:"HANDICAP", q:"Loi 2005 :", o:["Égalité des chances, MDPH, PCH, Accessibilité", "Loi Travail", "Loi Santé"], a:0, e:"Définit le handicap, crée le droit à la compensation."},
    {c:"HANDICAP", q:"Loi 1987 Emploi :", o:["Quota 6% travailleurs handicapés", "Quota 10%", "Interdiction licenciement"], a:0, e:"Pour entreprises de +20 salariés."},
    {c:"HANDICAP", q:"AAH (Alloc Adulte Handicapé) :", o:["Minima social (CAF)", "Salaire", "Retraite"], a:0, e:"Sous condition de ressources et taux d'incapacité."},
    {c:"HANDICAP", q:"PCH (Prestation Compensation Handicap) :", o:["Finance les aides (Humaine, Technique...)", "Revenu", "Loyer"], a:0, e:"Liée au projet de vie, pas de condition de ressource pour l'accès."},
    {c:"HANDICAP", q:"MDPH :", o:["Maison Départementale (Guichet unique)", "Maison de Retraite", "Ministère"], a:0, e:"Lieu d'accueil, info et évaluation."},
    {c:"HANDICAP", q:"CDAPH :", o:["Commission qui décide des droits (au sein MDPH)", "Centre d'Aide", "Conseil"], a:0, e:"Remplace la COTOREP."},
    {c:"HANDICAP", q:"ESAT :", o:["Établissement Service Aide par Travail (Milieu Protégé)", "Entreprise", "École"], a:0, e:"Statut d'usager, pas de salarié."},
    {c:"HANDICAP", q:"Entreprise Adaptée (EA) :", o:["Entreprise milieu ordinaire (80% handicapés)", "ESAT", "Association"], a:0, e:"Statut de salarié de droit commun."},
    {c:"HANDICAP", q:"AEEH :", o:["Allocation Éducation Enfant Handicapé", "Aide Étude", "Alloc Été"], a:0, e:"Pour les familles ayant un enfant en situation de handicap."},
    {c:"HANDICAP", q:"RQTH :", o:["Reconnaissance Qualité Travailleur Handicapé", "Retraite", "Régime"], a:0, e:"Permet l'accès aux aides emploi (Agefiph...)."},
    {c:"HANDICAP", q:"AGEFIPH :", o:["Fonds pour l'insertion (Privé)", "Fonds Public", "Agence"], a:0, e:"Gère les contributions des entreprises."},

    // --- 7. RSA & PAUVRETÉ (EXTENSION) ---
    {c:"RSA", q:"Loi RMI 1988 :", o:["Revenu Minimum Insertion (Droit ressource + insertion)", "Revenu Universel", "Alloc Chômage"], a:0, e:"Créé par Michel Rocard."},
    {c:"RSA", q:"Loi RSA 2008 :", o:["Revenu Solidarité Active (Incitation activité)", "RMI 2", "Revenu Social"], a:0, e:"Remplace le RMI et l'API."},
    {c:"RSA", q:"Gestionnaire RSA :", o:["Conseil Départemental", "Région", "Mairie"], a:0, e:"Le Président du CD décide, la CAF verse."},
    {c:"RSA", q:"Prime d'Activité (2016) :", o:["Complément revenu pour travailleurs modestes", "Prime Noël", "Prime Chômage"], a:0, e:"Fusionne RSA Activité et PPE."},
    {c:"RSA", q:"Condition âge RSA :", o:["25 ans (sauf si enfant ou activité antérieure)", "18 ans", "21 ans"], a:0, e:"Les jeunes n'y ont pas accès automatiquement."},
    {c:"RSA", q:"CER :", o:["Contrat d'Engagement Réciproque", "Compte Épargne", "Centre"], a:0, e:"Obligations du bénéficiaire en échange de l'alloc."},
    {c:"RSA", q:"France Travail (2024) :", o:["Inscription auto des bénéficiaires RSA", "Nouveau Pôle Emploi", "Agence Intérim"], a:0, e:"Vise un accompagnement renforcé (15h activité)."},
    {c:"RSA", q:"CCAS :", o:["Centre Communal d'Action Sociale", "Comité", "Caisse"], a:0, e:"Analyse besoins sociaux de la ville, domiciliation."},
    {c:"RSA", q:"Domiciliation :", o:["Adresse administrative pour les droits", "Logement", "Boîte postale"], a:0, e:"Obligatoire pour avoir RSA/Sécu si SDF."},
    {c:"RSA", q:"SIAE :", o:["Insertion par l'Activité Économique", "Service", "Système"], a:0, e:"Chantiers d'insertion, entreprises d'insertion..."},

    // --- 8. ENFANCE (EXTENSION) ---
    {c:"ENFANCE", q:"Loi 2007 Enfance :", o:["Priorité Prévention, IP vs Signalement", "Tout judiciaire", "Fin ASE"], a:0, e:"Réforme la protection de l'enfance."},
    {c:"ENFANCE", q:"Loi 2016 Enfance :", o:["Intérêt de l'enfant, PPE, stabilité", "Adoption", "Divorce"], a:0, e:"Instaure le Projet Pour l'Enfant."},
    {c:"ENFANCE", q:"Loi Taquet 2022 :", o:["Fin placement hôtel, non-séparation fratries", "Majorité 21 ans", "Fin foyers"], a:0, e:"Interdit l'hébergement à l'hôtel pour les mineurs."},
    {c:"ENFANCE", q:"PMI (1945) :", o:["Protection Maternelle Infantile (0-6 ans)", "Protection Mineurs", "Police"], a:0, e:"Prévention santé mère-enfant (Département)."},
    {c:"ENFANCE", q:"ASE :", o:["Aide Sociale à l'Enfance (Département)", "Association", "Agence"], a:0, e:"Service qui gère les placements et aides éducatives."},
    {c:"ENFANCE", q:"IP (Info Préoccupante) :", o:["Transmise à la CRIP (Département)", "Au Juge", "À la Police"], a:0, e:"Évaluation administrative du danger."},
    {c:"ENFANCE", q:"Signalement :", o:["Transmis au Procureur (Justice)", "Au Maire", "À l'école"], a:0, e:"Si danger grave et immédiat."},
    {c:"ENFANCE", q:"AEMO :", o:["Action Éducative Milieu Ouvert (Judiciaire)", "Aide Mère", "Accueil"], a:0, e:"Mesure ordonnée par le Juge des Enfants."},
    {c:"ENFANCE", q:"AED :", o:["Action Éducative Domicile (Administratif)", "Aide Enfant", "Alloc"], a:0, e:"Mesure contractuelle avec les parents."},
    {c:"ENFANCE", q:"119 :", o:["Numéro Enfance en Danger", "Samu", "Police"], a:0, e:"Appel national gratuit."},
    {c:"ENFANCE", q:"MNA :", o:["Mineur Non Accompagné", "Mineur Nouveau", "Mesure"], a:0, e:"Pris en charge par l'ASE."},
    {c:"ENFANCE", q:"PPE (Projet Pour l'Enfant) :", o:["Document unique de suivi du parcours", "Plan", "Projet Parents"], a:0, e:"Garantit la cohérence des actions."},

    // --- 9. SÉNIORS (EXTENSION) ---
    {c:"SÉNIORS", q:"Loi ASV 2015 :", o:["Adaptation Société Vieillissement", "Aide Sénior", "Alloc"], a:0, e:"Priorité au domicile, reconnaissance des aidants."},
    {c:"SÉNIORS", q:"APA (2001) :", o:["Allocation Personnalisée Autonomie", "Aide Personne", "Assurance"], a:0, e:"Gérée par le Département. Plan d'aide."},
    {c:"SÉNIORS", q:"Grille AGGIR :", o:["Mesure la dépendance (GIR 1 à 6)", "Revenus", "Santé"], a:0, e:"GIR 1 = grabataire, GIR 6 = autonome."},
    {c:"SÉNIORS", q:"EHPAD :", o:["Établissement Hébergement Personnes Âgées Dépendantes", "Hôpital", "Foyer"], a:0, e:"Maison de retraite médicalisée."},
    {c:"SÉNIORS", q:"Obligation alimentaire :", o:["Aide financière des enfants pour les parents", "Repas", "Cantine"], a:0, e:"Code Civil. Sollicitée pour payer l'EHPAD."},
    {c:"SÉNIORS", q:"ASPA :", o:["Allocation Solidarité Personnes Âgées (Min Vieillesse)", "Aide Soin", "Assurance"], a:0, e:"Récupérable sur succession."},
    {c:"SÉNIORS", q:"CLIC :", o:["Centre Local Info Coordination", "Comité", "Club"], a:0, e:"Guichet d'information pour les âgés."},
    {c:"SÉNIORS", q:"Rapport Laroque (1962) :", o:["Fonde la politique vieillesse moderne", "Créé la Sécu", "Créé l'APA"], a:0, e:"Fin de l'hospice, début du maintien à domicile."},
    {c:"SÉNIORS", q:"CNSA (2004) :", o:["Caisse Nationale Solidarité Autonomie", "Centre", "Comité"], a:0, e:"Finance la perte d'autonomie (lundi de pentecôte)."},

    // --- 10. FEMMES / VIOLENCES (EXTENSION) ---
    {c:"FEMMES", q:"Loi 2010 Violences :", o:["Ordonnance de Protection + Délit harcèlement", "Divorce", "Parité"], a:0, e:"Avancée majeure."},
    {c:"FEMMES", q:"3919 :", o:["Violences Femmes Info", "Police", "Urgence"], a:0, e:"Écoute et orientation."},
    {c:"FEMMES", q:"Ordonnance de Protection :", o:["Délivrée par le JAF (Juge Affaires Familiales)", "Par la Police", "Par le Maire"], a:0, e:"En urgence (6 jours max théorique)."},
    {c:"FEMMES", q:"Loi 2016 Prostitution :", o:["Pénalise le client, protège la prostituée", "Réouvre maisons closes", "Pénalise la prostituée"], a:0, e:"Parcours de sortie de prostitution."},
    {c:"FEMMES", q:"TGD :", o:["Téléphone Grave Danger", "Très Grand", "Tribunal"], a:0, e:"Relié directement aux forces de l'ordre."},
    {c:"FEMMES", q:"Harcèlement sexuel (Loi 2012) :", o:["Définition élargie et peines alourdies", "Supprimé", "Légalisé"], a:0, e:"Suite à des vides juridiques."},
    {c:"FEMMES", q:"Convention d'Istanbul :", o:["Texte européen contre violence femmes", "Texte ONU", "Loi Fr"], a:0, e:"Cadre international ratifié par la France."},

    // --- 11. PSYCHIATRIE & ADDICTIONS (EXTENSION) ---
    {c:"PSY", q:"Loi 1838 :", o:["Loi des Aliénés (Enfermement)", "Loi Santé", "Loi Asile"], a:0, e:"Première loi organisant la psychiatrie."},
    {c:"PSY", q:"Sectorisation (1960) :", o:["Soigner hors les murs, proximité", "Enfermer", "Privatiser"], a:0, e:"Découpage géographique pour la continuité des soins."},
    {c:"PSY", q:"Loi 2011/2013 SSC :", o:["Soins Sans Consentement (Contrôle JLD)", "HO", "HDT"], a:0, e:"Introduit le contrôle du juge des libertés."},
    {c:"PSY", q:"SPDT :", o:["Soins Psy Demande Tiers", "Soins Péril", "Service"], a:0, e:"Demande par la famille ou un proche."},
    {c:"PSY", q:"SPDRE :", o:["Soins Psy Décision Représentant État (Préfet)", "Danger", "Revenu"], a:0, e:"Si danger pour l'ordre public."},
    {c:"PSY", q:"CMP :", o:["Centre Médico-Psychologique (Pivot)", "Centre Médical", "Comité"], a:0, e:"Structure de soin ambulatoire de secteur."},
    {c:"PSY", q:"Loi 1970 Drogues :", o:["Pénalisation usage + Soin", "Légalisation", "Dépénalisation"], a:0, e:"Cadre légal de base."},
    {c:"PSY", q:"Réduction des Risques (RdR) :", o:["Limiter dommages (SIDA) sans exiger arrêt", "Sevrage forcé", "Prison"], a:0, e:"Née avec le décret Barzach 1987 (seringues)."},
    {c:"PSY", q:"CSAPA :", o:["Centre Soins Accompagnement Prévention Addicto", "Centre", "Comité"], a:0, e:"Soin et sevrage."},
    {c:"PSY", q:"CAARUD :", o:["Centre Accueil RdR (Accueil inconditionnel)", "Centre Alcool", "Comité"], a:0, e:"Même si consommation active."},

    // --- 12. QUESTIONS BONUS / CULTURE SOCIALE ---
    {c:"DIVERS", q:"Que signifie CCAS ?", o:["Centre Communal d'Action Sociale", "Comité", "Caisse"], a:0, e:"Établissement public communal."},
    {c:"DIVERS", q:"Le secret professionnel :", o:["S'impose aux travailleurs sociaux (sauf exceptions)", "N'existe pas", "Est facultatif"], a:0, e:"Protège la vie privée de l'usager."},
    {c:"DIVERS", q:"Loi 2002-2 :", o:["Droits des usagers (Projet personnalisé, livret accueil)", "Handicap", "Santé"], a:0, e:"Rénovation de l'action sociale et médico-sociale."},
    {c:"DIVERS", q:"Le 115 gère :", o:["L'hébergement d'urgence", "L'enfance", "Les femmes"], a:0, e:"Samu Social."},
    {c:"DIVERS", q:"Un CHRS dépend du secteur :", o:["AHI (Accueil Hébergement Insertion)", "Santé", "Enfance"], a:0, e:"Pour les exclus."},
    {c:"DIVERS", q:"La CMU-C est devenue :", o:["La CSS (Complémentaire Santé Solidaire)", "L'AME", "PUMA"], a:0, e:"Depuis 2019."},
    {c:"DIVERS", q:"Qui est le chef de file de l'action sociale ?", o:["Le Département", "La Région", "L'État"], a:0, e:"Lois de décentralisation."},
    {c:"DIVERS", q:"Loi 2016 J21 :", o:["Justice du 21ème siècle", "Jeunesse", "Journée"], a:0, e:"Favorise les modes alternatifs de règlement des conflits."},
    {c:"DIVERS", q:"Le Défenseur des Droits :", o:["Autorité indépendante (Défend les citoyens)", "Juge", "Ministre"], a:0, e:"Lutte contre les discriminations."},
    {c:"DIVERS", q:"Quel dispositif aide les jeunes en difficulté ?", o:["Mission Locale", "PMI", "EHPAD"], a:0, e:"Insertion pro et sociale 16-25 ans."}
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