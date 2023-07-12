export class CartItem {
   
    constructor(
        public id?: number,
        public name?: string,
        public imageUrl?: string,
        public unitPrice: number=0,
        public quantity: number = 1) {

}
}
