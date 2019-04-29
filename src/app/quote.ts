export class Quote {
    public showDescription:boolean;
    constructor(
        public id:number,
        public name:string,
        public author:string,
        public upvotes:number,
        public downvotes:number,
        public date:Date){
            this.showDescription=false;
        }
}
