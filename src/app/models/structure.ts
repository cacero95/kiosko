export interface Clase {
    titulo:string;
    preguntas?:string[];
    concursantes?:Concursantes[];
}

export interface Concursantes {
    name:string;
    overall:number;
}