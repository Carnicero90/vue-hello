var app = new Vue({
  el: '#root',
  data: {
    message: 'Bienvenue chez Vue!',
    logo: 'https://vuejs.org/images/logo.png',
    product: 'Socks',
    selectedVariant: 0,
    cart: 0,
    details: ["80% cotton", '20% crap', 'gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        image: 'img/green.png',
        inStock: true
      },
      {
        variantId: 2235,
        variantColor: "blue",
        image: 'img/blue.png',
        inStock: false
      },
    ]
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
    }
  }
})