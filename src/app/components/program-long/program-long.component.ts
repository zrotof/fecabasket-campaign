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
        label: "Direction Technique Nationale",
        opened: false,
        index: 3,
        image: "../../../assets/img/program/program-long/dtn.png",
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
        label: "Ressources",
        opened: false,
        index: 4,
        image: "../../../assets/img/program/program-long/ressources.png",
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
        label: "Collaboration Internationale",
        opened: false,
        index: 7,
        image: "../../../assets/img/program/program-long/collaboration_internationale.png",
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
        label: "Formation",
        opened: false,
        index: 8,
        image: "../../../assets/img/program/program-long/formation.png",
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
        label: "Infrastructures",
        opened: false,
        index: 9,
        image: "../../../assets/img/program/program-long/infrastructures.png",
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
