import Vue from "vue"

document.addEventListener("DOMContentLoaded", () => {
new Vue({
  el: "#app",
    data: {

    },
    methods: {
      fetchCurrency: function(){
        fetch('https://api.exchangeratesapi.io/latest')
          .then(response => response.json())
          .then(data => this.currencyAPI = data)
          .catch(error => console.error(error));
      }
    }
  })
});

// methods: {
//   fetchDog: function () {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then(response => response.json())
//       .then(data => this.dogImgLink = data.message)
//       .catch(error => console.error(error));
