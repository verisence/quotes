export class Quote {

    constructor(
        public id:number,
        public name:string,
        public author:string,
        public upvotes:number,
        public downvotes:number,
        public date:Date){}
}
