import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficeMemberService {

   officeMembers : any[] =   [
    {
      id: 1,
      name:"Serge Banda",
      role: "Président de campagne",
      image: "../../assets/img/home/candidates/candidat.jpeg",
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

      ]
    },
    {
      id: 2,
      name:"Serge Banda",
      role: "Président de campagne",
      image: "../../assets/img/home/candidates/images.jpeg",
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

      ]
    },
    {
      id: 3,
      name:"Serge Banda",
      role: "Président de campagne",
      image: "../../assets/img/home/candidates/imag.jpeg",
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

      ]
    },
    {
      id: 4,
      name:"Serge Banda",
      role: "Président de campagne",
      image: "../../assets/img/home/candidates/image.jpeg",
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

      ]
    },
    {
      id: 5,
      name:"Serge Banda",
      role: "Président de campagne",
      image: "../../assets/img/home/candidates/images.jpeg",
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

      ]
    },
    {
      id: 6,
      name:"Serge Banda",
      role: "Président de campagne",
      image: "../../assets/img/home/candidates/imag.jpeg",
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

      ]
    },
    {
      id: 7,
      name:"Serge Banda",
      role: "Président de campagne",
      image: "../../assets/img/home/candidates/image.jpeg",
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

      ]

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
