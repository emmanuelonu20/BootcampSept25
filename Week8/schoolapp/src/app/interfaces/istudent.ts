import { Idepartment } from "./idepartment";

export interface Istudent {
    id: number;
    name: string;
    department: Idepartment;
    age: number;
}
