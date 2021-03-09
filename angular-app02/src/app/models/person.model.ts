// interface to create objects of type person
export interface IPerson {
    firstName: string,
    lastName: string,
    age: number,
    friends?: IPerson[] // ? significa opcional
}