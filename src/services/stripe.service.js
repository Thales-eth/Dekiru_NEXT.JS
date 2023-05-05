import InitAxios from "./init.service";

class StripeService extends InitAxios {
    constructor() {
        super("payment")
    }

    createPaymentSession(productId) {
        // AQUÍ YO NECESITARÉ EL PRICE ID CUANDO LO HAGA DE MANERA PROGRAMÁTICA
        return this.api.post("/create-checkout-session", { productId })
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new StripeService()
        }

        return this.instance
    }
}

export default StripeService.getInstance()