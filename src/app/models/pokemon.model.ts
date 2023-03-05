export class Pokemon {
  id?:number;
  name!: string;
  url!: string;
  addedToTrainerCollection: boolean = false;
  abilities!: [{
    ability: {
      name: string;
    }
  }
  ];
  moves!: [{
    move: {
      name: string;
    }
  }
  ];

  stats!: [{
    base_stat: number,
    stat: {
      name: string;
    }
  }
  ];

  types!: [{
    type: {
      name: string;
    }
  }
  ];
}
