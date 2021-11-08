import { PersonExercise8 } from "../Types";

export class Person{
    protected name: string;
    protected bio: string;

    public getPersonInfo(): PersonExercise8{
        return {name: this.name, bio: this.bio};
    }
}