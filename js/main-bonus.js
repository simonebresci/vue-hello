
// Idee
// - aggiungere immagini
// - evento click + methods
//



var app = new Vue({
  el: '#root',
  data: {

    // Colore 1
    box1Name : 'BOX 1',
    box1Img: '',
    box1BorderRadius: 10,
    colore1R : 0,
    colore1G : 0,
    colore1B : 0,
    colore1T : 1,
    // Colore 2
    box2Name : 'BOX 2',
    colore2R : 0,
    colore2G : 0,
    colore2B : 0,
    colore2T : 1
  },
  methods:{
    subtract10red: function(){
      this.colore1R -= 10;
    },
    add10red: function(){
      this.colore1R += 10;
    },
    subtract10green: function(){
      this.colore1G -= 10;
    },
    add10green: function(){
      this.colore1G += 10;
    },
    subtract10blue: function(){
      this.colore1B -= 10;
    },
    add10blue: function(){
      this.colore1B += 10;
    },
    subtract10BorderRadius: function(){
      this.box1BorderRadius -= 10;
    },
    add10BorderRadius: function(){
      this.box1BorderRadius += 10;
    },
    subtract1transp: function(){
      this.colore1T -= 0.01;
    },
    add1transp: function(){
      this.colore1T += 0.01;
    },
    selectPinguino: function(){
      this.box1Img = 'pinguino';
    },
    selectLeone: function(){
      this.box1Img = 'leone';
    },
    selectAlpaca: function(){
      this.box1Img = 'alpaca';
    },

  }



});
// Abilita i dev tools
Vue.config.devtools = true;
// BONUS
