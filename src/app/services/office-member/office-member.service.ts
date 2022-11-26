import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficeMemberService {

   officeMembers : any[] =   [
    {
      id: 1,
      name:"Marie-Chantal Zeh",
      role: "1 ère Vice-Présidente",
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
        { paragraph: "Depuis plus de 30 ans, j’ai successivement occupé les postes gestionnaires des ventes chez 3M, de directrice adjointe des ventes dans l’hôtellerie et aujourd’hui directrice régionale des ventes chez MTN Cameroun."}
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
      role: "Secrétaire Général",
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
      id: 3,
      name:"Daniel Ndoumbe",
      role: "Chef des Finances",
      image: "../../assets/img/home/candidates/daniel.png",
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
      id: 4,
      name:"Louis Tsoungui",
      role: "Ancien International Camerounais",
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
      role: "Ancien Joueur NBA",
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
