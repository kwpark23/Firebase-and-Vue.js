 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDv-ECZXgsrwavHBMTsmM2VD00txWXMwaI",
    authDomain: "fir-webapp-f7fe9.firebaseapp.com",
    databaseURL: "https://fir-webapp-f7fe9.firebaseio.com",
    projectId: "fir-webapp-f7fe9",
    storageBucket: "fir-webapp-f7fe9.appspot.com",
    messagingSenderId: "810915332946",
    appId: "1:810915332946:web:b3a58f21422f7172ec308b",
    measurementId: "G-9XRLJSJ69P"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;
  
  $("#btn-login").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val(); 

    if(email != "" && password != "")
    {
      var result = firebase.auth().signInWithEmailAndPassword(email, password);

      result.catch(function(error)
      {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message : " + errorMessage);
      });

    }
    else{
      window.alert("Please fill out all fields");
    }
  });

//Logout functionality
  $("#btn-logout").click(function()
  {
    firebase.auth().signOut().then(function(){
      window.location.href = "signin.html";
    }).catch(function(error){
      window.alert("Log out failed");
    });
  });




Vue.component('products', {
  props: {
    premium:{
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product" style="display: flex; flex-flow: wrap; padding: 1rem">
    <div class="product-image" style="margin-top: 10px; width: 50%">
        <img v-bind:src="image" style="  border: 1px solid #d8d8d8;
        width: 70%; margin: 40px; box-shadow: 0px .5px 1px #d8d8d8">
    </div>

    <div class="product-info" style="margin-top: 10px; width: 50%">
        <h1>{{ brand }} {{ product }}</h1>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <=10 && inventory > 0">Almost Sold Out!</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }} </p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" v-bind:key="variant.variantId"
        class="color-box" style= "width: 40px; height: 40px; margin-top: 5px"
        :style="{ backgroundColor: variant.variantColor }">
            <p @mouseover="updateProduct(index)">{{ variant.variantColor }}</p>
        </div>
        <div>
        <button style="margin-top: 30px; border: none;
        background-color: #1E95EA; color: white;
        height: 40px; width: 100px; font-size: 14px" v-on:click="addToCart">
        Add to Cart</button>
            </div>
            <div>
        <button style="margin-top: 20px; border: none;
        background-color: rgb(234, 30, 139); color: white;
        height: 40px; width: 100px; font-size: 12px" v-on:click="removeFromCart">
          Remove From Cart</button>
        </div>
        <div class="cart" style="margin-right: 25px; float: right;
        border: 1px solid #d8d8d8; padding: 5px 20px;">
            <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      selectedVariant: 0,
      inventory: 8,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants:[
      {
        variantId:2234,
        variantColor:"green",
        variantImage:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage:"https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"
      }],
      cart:0,
      brand: 'Vue Mastery'
     }
   },

  methods:{
    addToCart(){
      this.cart += 1
    },
    updateProduct(index){
      this.selectedVariant = index
    },
    removeFromCart(){
      if(this.cart >0){
        this.cart -=1
      }
    }
  },

  computed: {
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
})

Vue.component('products2', {
  props: {
    premium:{
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product" style="display: flex; flex-flow: wrap; padding: 1rem">
    <div class="product-image" style="margin-top: 10px; width: 50%">
        <img v-bind:src="image" style="  border: 1px solid #d8d8d8;
        width: 70%; margin: 40px; box-shadow: 0px .5px 1px #d8d8d8">
    </div>

    <div class="product-info" style="margin-top: 10px; width: 50%">
        <h1>{{ brand }} {{ product }}</h1>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <=10 && inventory > 0">Almost Sold Out!</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }} </p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" v-bind:key="variant.variantId"
        class="color-box" style= "width: 40px; height: 40px; margin-top: 5px"
        :style="{ backgroundColor: variant.variantColor }">
            <p @mouseover="updateProduct(index)">{{ variant.variantColor }}</p>
        </div>
        <div>
        <button style="margin-top: 30px; border: none;
        background-color: #1E95EA; color: white;
        height: 40px; width: 100px; font-size: 14px" v-on:click="addToCart">
        Add to Cart</button>
            </div>
            <div>
        <button style="margin-top: 20px; border: none;
        background-color: rgb(234, 30, 139); color: white;
        height: 40px; width: 100px; font-size: 12px" v-on:click="removeFromCart">
          Remove From Cart</button>
        </div>
        <div class="cart" style="margin-right: 25px; float: right;
        border: 1px solid #d8d8d8; padding: 5px 20px;">
            <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      selectedVariant: 0,
      inventory: 8,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants:[
      {
        variantId:2234,
        variantColor:"red",
        variantImage:"https://i5.walmartimages.com/asr/39757ad6-8b19-4ab8-8f5a-eba0ee708866_1.15a5fdd3d8497248e1c11942e2cdda83.jpeg"
      },
      {
        variantId: 2235,
        variantColor: "white",
        variantImage:"https://cdn11.bigcommerce.com/s-ppsyskcavg/images/stencil/1280x1280/products/18711/60184/SX7664-100-PHCFH001__97745.1546613476.jpg?c=2&imbypass=on"
      }],
      cart:0,
      brand: 'Vue Mastery'
     }
   },

  methods:{
    addToCart(){
      this.cart += 1
    },
    updateProduct(index){
      this.selectedVariant = index
    },
    removeFromCart(){
      if(this.cart >0){
        this.cart -=1
      }
    }
  },

  computed: {
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
})

Vue.component('products3', {
  props: {
    premium:{
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product" style="display: flex; flex-flow: wrap; padding: 1rem">
    <div class="product-image" style="margin-top: 10px; width: 50%">
        <img v-bind:src="image" style="  border: 1px solid #d8d8d8;
        width: 70%; margin: 40px; box-shadow: 0px .5px 1px #d8d8d8">
    </div>

    <div class="product-info" style="margin-top: 10px; width: 50%">
        <h1>{{ brand }} {{ product }}</h1>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <=10 && inventory > 0">Almost Sold Out!</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }} </p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" v-bind:key="variant.variantId"
        class="color-box" style= "width: 40px; height: 40px; margin-top: 5px"
        :style="{ backgroundColor: variant.variantColor }">
            <p @mouseover="updateProduct(index)">{{ variant.variantColor }}</p>
        </div>
        <div>
        <button style="margin-top: 30px; border: none;
        background-color: #1E95EA; color: white;
        height: 40px; width: 100px; font-size: 14px" v-on:click="addToCart">
        Add to Cart</button>
            </div>
            <div>
        <button style="margin-top: 20px; border: none;
        background-color: rgb(234, 30, 139); color: white;
        height: 40px; width: 100px; font-size: 12px" v-on:click="removeFromCart">
          Remove From Cart</button>
        </div>
        <div class="cart" style="margin-right: 25px; float: right;
        border: 1px solid #d8d8d8; padding: 5px 20px;">
            <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      selectedVariant: 0,
      inventory: 8,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants:[
      {
        variantId:2234,
        variantColor:"purple",
        variantImage:"https://bagginsshoes.com/pub/media/catalog/product/cache/9745ba348ad50a872c087290fd191d51/m/3/m311d14ico_pur.jpg"
      },
      {
        variantId: 2235,
        variantColor: "pink",
        variantImage:"https://images-na.ssl-images-amazon.com/images/I/61fJPExJjRL._UL1233_.jpg"
      }],
      cart:0,
      brand: 'Vue Mastery'
     }
   },

  methods:{
    addToCart(){
      this.cart += 1
    },
    updateProduct(index){
      this.selectedVariant = index
    },
    removeFromCart(){
      if(this.cart >0){
        this.cart -=1
      }
    }
  },

  computed: {
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
})



var app = new Vue({
  el: '#app',
  data:{
    premium: false
  }

})