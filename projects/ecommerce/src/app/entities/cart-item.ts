export class CartItem {
   
    constructor(
        public id: number=0,
        public name?: string,
        public imageUrl?: string,
        public unitPrice: number=0,
        public quantity: number = 1) {

}
}
