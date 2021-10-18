export class Post {
  constructor(
    public id: string,
    public title: string, 
    public description: string, 
    public created_at: string, 
    public updated_at: string,
    public comments: {id: string, author: string, text: string, created_at: string, updated_at: string}[]
    ) {}
}