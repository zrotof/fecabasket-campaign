import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-long',
  templateUrl: './program-long.component.html',
  styleUrls: ['./program-long.component.scss']
})
export class ProgramLongComponent implements OnInit {

  menus!: any[] ;
  thematiqueDatas! : any[];
  thematiqueImage! : string;

  constructor() { }

  ngOnInit(): void {
    this.menus = this.initMenus();
    this.thematiqueDatas = this.menus[0].data;
   this.thematiqueImage = this.menus[0].image;
  }

  initMenus(){
    return [
      {
        label: "Gouvernance",
        opened: true,
        index: 0,
        image: "../../../assets/img/program/program-long/gouvernance.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "Le basketball au Cameroun ne saurait être limité à sa dimension de simple divertissement."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Mettre en place un modèle efficace de gestion qui promeut nos valeurs : le respect, la transparence, l’équité et la passion et l’éthique."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Restructurer l’administration fédérale, améliorer les conditions d’accueil et de travail. Également réorganiser les schémas financiers ainsi que la DTN"},
              {text: "Mettre en œuvre un nouvel organigramme"},
              {text: "Concevoir un schéma directeur informatique (installation d’un réseau intranet et un système de gestion électronique de nos données)"},
              {text: "Etablir et aménager d’un siège fédéral"},
              {text: "Réorganiser la Direction Technique Nationale"}
            ]
          }
        ]
      },
      {
        label: "Communication",
        opened: false,
        index: 1,
        image: "../../../assets/img/program/program-long/communication.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "Des prises de décisions non concertées et opaques, et une communication aiguisée qui n’a de cible que les membres de l’exécutif sortant."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Faire de l’information un bien commun."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Etablir de nouvelles règles pour garantir des projets partagés et l’indépendance des parties prenantes"},
              {text: "Garantir la circulation à l’information"},
              {text: "Construire des plaquettes d’information"},
              {text: "Créer une newsletter"},
              {text: "Refonte complète du site internet"},
              {text: "Concevoir une charte graphique, création d’un slogan pour la fédération"}
            ]
          }
        ]
      },
      {
        label: "Championnats",
        opened: false,
        index: 2,
        image: "../../../assets/img/program/program-long/championnats.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "Une forte hétérogénéité dans la pratique et des territoires complètement délaissés."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Augmenter la masse en relançant la pratique dans toutes les régions."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Mettre un accent particulier sur la basket-ball jeune et le mini-basket"},
              {text: "Concevoir un label « Ecole Camerounaise de basket-ball » ; dynamiser l’élite"},
              {text: "Optimiser le 5x5, le 3x3 et relancer les compétitions spécifiques"},
              {text: "Définir une charte des ligues, structurer l’élite"},
              {text: "Soutenir les ligues régionales par des subventions annuelles"}
            ]
          }
        ]
      },
      {
        label: "Direction Technique Nationale",
        opened: false,
        index: 3,
        image: "../../../assets/img/program/program-long/dtn.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "La DTN mérite d’être structurée ; elle occupe un rôle central dans notre projet."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Décliner la DTN dans les régions, les départements et y intégrer le corps arbitral. Tout mettre en œuvre pour participer à tous les championnats d’Afrique U16 et U18 à court terme."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Harmoniser les processus de formation"},
              {text: "Créer un centre fédéral pour les U16 et U18"},
              {text: "Créer de pôles régionaux pour les U13 et U15"},
              {text: "Stratifier les entraineurs, accentuer la détection"},
              {text: "Accompagner les régions pour redynamiser les compétitions"}
            ]
          }
        ]
      },
      {
        label: "Ressources",
        opened: false,
        index: 4,
        image: "../../../assets/img/program/program-long/ressources.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "L’état actuel de nos ressources permet difficilement de dérouler un cahier des charges pour le développement du basket-ball au Cameroun."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "La Fecabasket n’a pas uniquement vocation à former des athlètes de haut niveau, elle est également un instrument sociétal, qui dans ses diverses actions place l’Homme au centre de ses préoccupations."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Nous voulons créer une communauté de valeurs incitant à l’engagement, en relevant la quantité et la qualité de nos ressources humaines"},
              {text: "Nous voulons innover dans le soutien apporté aux ligues régionales et départementales et contribuer à l’influenceur de l’Etat pour la réhabilitation et la création des infrastructures."},
              {text: "Créer un parcours d’incitation à l’engagement et construire des outils d’animation"},
              {text: "Diversifier les apports financiers, exploiter les différents modes de financements"},
              {text: "Organiser la remise en état des terrains et créer de nouveaux terrains"},
              {text: "Accompagner les régions pour redynamiser les compétitions"}
            ]
          }
        ]
      },
      {
        label: "Commisions et Missions",
        opened: false,
        index: 5,
        image: "../../../assets/img/program/program-long/commissions_missions.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "Le basketball au Cameroun ne saurait être limité à sa dimension de simple divertissement."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Mettre en place un modèle efficace de gestion qui promeut nos valeurs : le respect, la transparence, l’équité et la passion et l’éthique."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Restructurer l’administration fédérale, améliorer les conditions d’accueil et de travail. Également réorganiser les schémas financiers ainsi que la DTN"},
              {text: "Mettre en œuvre un nouvel organigramme"},
              {text: "Concevoir un schéma directeur informatique (installation d’un réseau intranet et un système de gestion électronique de nos données)"},
              {text: "Etablir et aménager d’un siège fédéral"},
              {text: "Réorganiser la Direction Technique Nationale"}
            ]
          }
        ]
      },
      {
        label: "Marketing",
        opened: false,
        index: 6,
        image: "../../../assets/img/program/program-long/marketing.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "Le basket-ball, constitue en effet, un formidable vecteur de communication, il est devenu un business comme un autre, dans lequel les sponsors et les chaînes de télévision s’affrontent autant que les sportifs. Ce qu’on ne peut pas affirmer à la Fecabasket de nos jours."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Nous envisageons faire de la Fecabasket une « marque » qui s’engage à plus de visibilité pour accroitre sa notoriété, à redorer notre image par nos valeurs, à nous faire vivre de nos retombées commerciales et internes, à étendre notre portefeuille, à nous entourer de futurs collaborateurs dynamiques."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Nous proposons d’exploiter le marketing expérimental et d’accroitre le nombre de nos partenaires et d’avoir des relations privilégiées avec nos clients, nos prospects ou des fournisseurs"},
              {text: "Améliorer la promotion des évènements par le décor Fecabasket"},
              {text: "Accentuer la visibilité sur les réseaux sociaux et les médias web"},
              {text: "Procéder à la refonte du site internet"},
              {text: "Diversifier les opérations marketing"}
            ]
          }
        ]
      },
      {
        label: "Collaboration Internationale",
        opened: false,
        index: 7,
        image: "../../../assets/img/program/program-long/collaboration_internationale.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "Force est de constater que l’athlète basketteur camerounais, est présent partout dans le monde et dans les plus grands championnats mondiaux. Ainsi la Fecabasket doit en permanence collaborer avec toutes les parties prenantes des organisations de basket-ball."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Nous voulons développer des échanges avec des partenaires privilégiés dans différents domaines qui vont nous permettre de grandir."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Nous pensons qu’entretenir des relations saines et bilatérales avec nos collaborateurs contribuera fortement à augmenter notre réseaux partenaires et rester connecté aux évolutions du basket-ball"},
              {text: "Améliorer la formation de nos cadres et entraineurs"},
              {text: "Etoffer les dossiers de préparation aux stages préparatoires aux compétitions"},
              {text: "Multiplier les appels au soutien en matériel, conseils, etc ..."}
            ]
          }
        ]
      },
      {
        label: "Formation",
        opened: false,
        index: 8,
        image: "../../../assets/img/program/program-long/formation.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "Il y’a tellement de briques pour reconstruire cette maison du basket qui n’a pas de siège, qui ne dispose donc pas d’une bibliothèque de formation."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Nous envisageons de mettre en place des formations nationales ; celles FIBA se raréfient. Mais nous voulons également former les dirigeants de ligues et ceux du bureau fédéral."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Nous avons comme objectif a moyen termes, d’être champion d’Afrique, mais la priorité est de redonner ses lettres de noblesses aux championnats Elite 1, et ça passe par la formation"},
              {text: "Stratifier les entraineurs existants et organiser leur formation"},
              {text: "Mettre en place une charte de labellisation et les procédures associées"},
              {text: "Créer des centres régionaux et le centre fédéral"},
              {text: "Mettre ne place la philosophie de jeu pour les catégories U13, U15, U16 et U18"}
            ]
          }
        ]
      },
      {
        label: "Infrastructures",
        opened: false,
        index: 9,
        image: "../../../assets/img/program/program-long/infrastructures.png",
        data: [
          {
            label: "Constat",
            paragraphs: [
              {text: "C’est l’un des piliers majeurs du développement du basket-ball au Cameroun."},
              {text: "L’Etat a un rôle primordial, mais nous pensons qu’avec me potentiel du basket-ball, nous avons la possibilité de contribuer à l’amélioration des infrastructures."}
            ]
          },
          {
            label: "Nos Projets",
            paragraphs: [
              {text: "Moderniser nos espaces de pratique, et en faire pousser de nouveaux."}
            ]
          },
          {
            label: "Nos propositions",
            paragraphs: [
              {text: "Réhabiliter des terrains existants et création de 2 terrains par an"},
              {text: "Remettre les terrains aux normes FIBA"},
              {text: "Remplacer ou renforcer les armatures et les panneaux"},
              {text: "Identifier les zones pertinentes pour la création de nouveaux terrains"}
            ]
          }
        ]
      }
    ]
  }

  onActivateMenu(index: number){
    this.menus.map(menu =>{
      menu.opened = false
    })
    this.menus[index].opened = true;
    this.thematiqueDatas = this.menus[index].data;
    this.thematiqueImage = this.menus[index].image;
  }

}
