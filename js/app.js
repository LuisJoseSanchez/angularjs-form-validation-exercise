    var myApp = angular.module('confusionApp', []);
    myApp.controller('menuController', function() {
      
      this.tab = 1;
      
      this.filtText = '';
      
      this.filters = ['', '', 'appetizer', 'main', 'dessert'];
      
      this.dishes = [
        {
          image: 'images/uthapizza.png',
          category: 'main',
          name: 'Uthapizza',
          label: 'Hot',
          price: 4.99,
          description: 'A unique combination of Uthappam (pancake) and italian pizza, topped with Cerignola olivesLorem fistrum va usté muy cargadoo no te digo trigo por no llamarte Rodrigor fistro condemor mamaar la caidita está la cosa muy malar te va a hasé pupitaa.'
        },
        {
          image: 'images/zucchipakoda.png',
          name: 'Zucchipakoda',
          category: 'appetizer',
          price: 1.99,
          description: 'Me cago en tus muelas ahorarr qué dise usteer de la pradera de la pradera va usté muy cargadoo tiene musho peligro te voy a borrar el cerito. Fistro diodeno diodeno no te digo trigo por no llamarte Rodrigor torpedo.'
        },
        {
          image: 'images/vadonut.png',
          category: 'dessert',
          name: 'Vadonut',
          label: 'New',
          price: 1.99,
          description: 'A unique combination of Uthappam (pancake) and italian pizza, topped with Cerignola olivesLorem fistrum va usté muy cargadoo no te digo trigo por no llamarte Rodrigor fistro condemor mamaar la caidita está la cosa muy malar te va a hasé pupitaa.'
        },
        {
          image: 'images/elaicheesecake.png',
          category: 'dessert',
          name: 'Elai Cheese Cake',
          price: 2.99,
          description: '   Fistro tiene musho peligro benemeritaar llevame al sircoo está la cosa muy malar se calle ustée a wan no te digo trigo por no llamarte Rodrigor qué dise usteer. Me cago en tus muelas al ataquerl no puedor sexuarl te va a hasé pupitaa quietooor. Fistro me cago en tus muelas caballo blanco caballo negroorl ese pedazo de a gramenawer condemor sexuarl.'
        },
      ];
      
      this.select = function(setTab) {
        this.tab = setTab;
        this.filtText = this.filters[setTab];
      }
      
      this.isSelected = function(checkTab) {
        return (this.tab === checkTab);
      }
    });

    myApp.controller('ContactController', ['$scope', function($scope) {
      $scope.feedback = {
        myChannel: "",
        firstName: "",
        lastName: "",
        agree: "",
        email: ""
      };
    }]);

    myApp.controller('FeedBackController', ['$scope', function($scope) {
      
    }]);