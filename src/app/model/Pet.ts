export interface Pet {
  id: number;
  name: string;
  kind: Kind;
  profileText: string;
  image: string;
}

export enum Kind {
  CAT, DOG, CHICKEN
}

