import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficeMemberService {

   officeMembers : any[] =   [
    {
      id: 1,
      name:"Marie-Chantal Zeh",
      role: {
        label: "Candidate au poste de : ",
        value: "1 ère Vice-Présidente"
      },
      image: "../../assets/img/home/candidates/marie_zeh.jpg",
      project: [
        { paragraph: "Je répond à l’appel des pratiquantes et pratiquants de la balle orange pour prendre des responsabilités à la FECABASKET."},
        { paragraph: "Je suis très enthousiaste de mettre mon expérience au service du basket-ball et de contribuer à son développement."},
        { paragraph: "Je souhaite bien entendu apporter mon toute mon expertise afin de structurer et développer des solutions pour  grossir notre réseau de partenaires."}
      ],
      expectation: [
        { paragraph: "J’aimerais observer une mobilisation totale de la famille basket camerounaise, aussi bien des acteurs locaux que ceux de la diaspora. Notre équipe doit couvrir le terrain et aller à la rencontre des électeurs, dans les régions."},
      ],
      pathway: [
        { paragraph: "Depuis plus de 30 ans, j’ai successivement occupé les postes gestionnaires des ventes chez 3M, de directrice adjointe des ventes dans l’hôtellerie et aujourd’hui Manager en charge des grandes entreprises au Cameroun."}
      ],
      skills: [
        
        {
            label: "Dirigeante de plusieurs structures de basket-ball notamment YUC basket-ball",
            list: [
              { paragraph: "Organisation de plusieurs évènements liés au basket-ball notamment pour la promotion de la pratique féminine"},
              { paragraph: "Ancienne capitaine de l’équipe de YUC basket-ball à la faculté des sciences de Yaoundé"},
              { paragraph: "Quintuple vainqueur de la coupe du Cameroun et du championnat national avec YUC Basket-Ball"},
              { paragraph: "Ancienne Présidente de l’Association des Vétérans de Libermann à Douala"}
            ]
        }

      ],
      inProgress: false
    },
    {
      id: 2,
      name:"Serge Bangda",
      role: {
        label: "Candidat au poste de :",
        value: "Secrétaire Général"
      },
      image: "../../assets/img/home/candidates/serge.png",
      project: [
        { paragraph: "Prendre la Présidence de Fédération Camerounaise de Basket-Ball ."},
        { paragraph: "A ce titre, intégrer l’exécutif pour impacter le développement du Basket-Ball au Cameroun."},
        { paragraph: "Une forte sensibilité pour l’ amélioration de la pratique dans les zones septentrionales et dans la région de l’Est."}

      ],
      expectation: [
        { paragraph: "Je suis très enthousiaste de l’opportunité de contribuer au redémarrage du basket-ball dans les régions."},
        { paragraph: "Ces élections vont nous permettre de proposer aux électeurs en priorité, et à l’ensemble des pratiquants, notre Vision ambitieuse pour l’essor de la balle orange dans notre pays."}
      ],
      pathway: [
        { paragraph: "25 ans d'expérience sportive et professionnelle (notamment comme ancien joueur de très bon niveau)."},
        { paragraph: "Passionné de basket-ball ; j’ai toujours œuvré pour que nos talents puissent s’exprimer à travers les valeurs que véhiculent le basket-ball."},
        { paragraph: "Aujourd’hui Chef d’agence dans le l’industrie de l’équipement et du transport, je souhaite continuer à rechercher les meilleurs solutions pour apporter ma contribution au développement du basket-ball dans nos territoires."}
      ],
      skills: [
        
        {
          label: "Président de clubs (Ngaoundéré Basket, NUBA)",
      },
      {
        label: "Président de la Ligue Provinciale de l’Adamaoua",
      },
      {
        label: "1er Vice-Président de Ligue Régionale du Sud (mandat en cours)",
        list: [
          { paragraph: "Responsable de la section jeunes et séniors"},
          { paragraph: "Organisation des compétitions nationales à Ngaoundéré ; participation au championnat national messieurs"},
          { paragraph: "Organisation du championnat provincial à Ngaoundéré"},
          { paragraph: "Participation au championnat national et vainqueur de la coupe du Cameroun"},
          { paragraph: "Recrutement, entraineur et formateur de joueurs"},
        ]
      }

      ],
      inProgress: false
    },
    {
      id: 4,
      name:"Maurice Bell",
      role: {
        label: "Candidat au poste de :",
        value: "Directeur Marketing / Communication / Évènementiel"
      },
      image: "../../assets/img/home/candidates/bell-maurice.png",
      project: [
        { paragraph: "Évoluer vers des postes de direction au sein fédérations sportives."},
        { paragraph: "Créer une structure d’accompagnement aux fédérations sportives pour la formation et le développement (notamment en Afrique sub-saharienne)."},
      ],
      expectation: [
        { paragraph: "Acquérir les compétences nécessaires à l’organisation et à la gestion stratégique d’une entreprise et d’une structure sportive à dimension internationale."},
        { paragraph: "Perfectionner et étendre la maîtrise le management d’équipe, le leadership, la négociation, la gestion de projets, et acquérir des connaissances marketing et commerciales."},
      ],
      pathway: [
        { paragraph: "20 ans d'expérience professionnelle (notamment comme consultant dans l’industrie aéronautique), et comme fondateur et Président de plusieurs associations sportives et communautaires."},
        { paragraph: "Passionnée de basket-ball ; Plusieurs clubs de bon niveau en France ; équipe nationale du Cameroun."},
        { paragraph: "Création de plusieurs associations (sportives et communautaires)."},
      ],
      skills: [
        {
          label: "Directeur marketing ASVEL Douala Basket-Ball (10 ans)",
        },
        {
          label: "Président de Dibang Basket-Ball Club",
          list: [
              { paragraph: "Responsable de la communication, chargé de définir la stratégie de développement du club"},
              { paragraph: "Gestion de projets sportifs, gestion administrative des dossiers"},
              { paragraph: "Collaboration avec le service Marketing (recherches sponsors et de partenariats)"},
              { paragraph: "Mise en œuvre du projet « Pole Diaspora »"},
              { paragraph: "Relations avec les partenaires institutionnels"},
              { paragraph: "Participation au recrutement et à la formation de cadres dirigeants"}
            ]
        }

      ],
      inProgress: false
    },
    {
      id: 3,
      name:"Daniel Ndoumbe",
      role: {
        label: "Candidat au poste de :",
        value: "Chef du Département des Finances"
      },
      image: "../../assets/img/home/candidates/daniel.png",
      project: [
        { paragraph: "Pour les 2 prochaines années: Mettre sur pied un manuel de procédures financières au sein de la FECABASKET afin de garantir la bonne gouvernance au sein de cette organisation sportive olympique en collaboration avec les exécutifs régionaux. Également je souhaite mettre en place le coachinf des CDF des bureaux de ligues régionales et départementales sur le suivi budgétaire et la tenue de comptes ainsi que l'harmonisation des rapports financiers mensuels à adresser aux parties prenantes (Sponsors, Conseil d'administration, etc"},
      ],
      expectation: [
        { paragraph: "Le basketball Camerounais est un vaste chantier, je souhaite obtenir les suffrages des délégués pour suivre la construction de ce bel édifice comme acteur principal dans l'implémentation des meilleures pratiques en matière de gestion financière."},
      ],
      pathway: [
        { paragraph: "Dès mes débuts au collège Alfred Saker, j'ai très vite été en formation auprès du célèbre arbitre Dipita Tongo. Puis à l'université, j'ai été encadré par l'expert Alexis Siewe, alors formateur de la première d'étudiants arbitres. J'ai par la suite eu une belle carrière d'arbitre qui ma permise de diriger de nombreuses finales de compétitions les plus prestigieuses entre 2003 et 2013 sur le territoire Camerounais."},
        { paragraph: "Parallèlement  ces prouesses sur l'aire de jeu, j'ai eu la grâce d'être recruté comme cadre à la direction financière de AES SONEL où j'ai occupé tour à tour des postes d'analyste comptable au siège, hef de département Comptable et Financier pour les régions Centre, Sud et Est. J'ai également été OHADA Reporting Team Leader au siège"}
      ],
      skills: [
        {
          label: "Arbitre international de basket-ball, Promotion Rabat 2011",
        },
        {
        label: "Président de l'Association Camerounaise des Officiels de Basketball - ACOB",
        },
        {
            label: "Msc Finance à l'EM Lyon en France",
            list: [
              { paragraph: "En responsabilité pour plusiurs finales de compétitions nationales (coupes du Cameroun de Basketball, Jeux Universitaires ..."},
              { paragraph: "8 ans d'expérience en management au sein de l'ACOB"},
              { paragraph: "6e promotion du cours avancé en management du sport au Comité National Olympique et Sportif du Cameroun"},
              { paragraph: "Forte expérience au sein de la Direction Financière de ENEO Cameroun S.A"}
            ]
        }

      ],
      inProgress: false
    },
    {
      id: 4,
      name:"Louis Tsoungui",
      role: {
        label: "",
        value: "Ancien International Français"
      },
      image: "../../assets/img/home/candidates/louis.jpg",
      project: [
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."},
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."}
      ],
      expectation: [
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."},
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."}
      ],
      pathway: [
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."},
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."}
      ],
      skills: [
        {
            label: "Lorem",
            list: [
              { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil"},
              { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessi"}
            ]
        }

      ],
      inProgress: true
    },
    {
      id: 5,
      name:"Luc Mbah A Moute",
      role: {
        label: "",
        value: "Ancien Joueur NBA"
      },
      image: "../../assets/img/home/candidates/moute.jpeg",
      project: [
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."},
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."}
      ],
      expectation: [
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."},
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."}
      ],
      pathway: [
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."},
        { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus dicta cum ut odit fuga, harum dolor."}
      ],
      skills: [
        {
            label: "Lorem",
            list: [
              { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil"},
              { paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessi"}
            ]
        }

      ],
      inProgress: true
    }
  ]
  constructor() { }

  getOfficeMemberDataList(): any[]{
    return this.officeMembers.map( res =>{
      return{
        id: res.id,
        name: res.name,
        role: res.role,
        image: res.image
      }
    })
  }

  getOfficeMemberData(param: number): any{
    return this.officeMembers.filter(res => res.id == param)[0]
  }
}
