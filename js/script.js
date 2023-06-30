const app = new Vue({
  el: '#app',
  data() {
    return {
      title: 'Who\'s that Pokémon?!',
      subtitle: 'HOW TO PLAY',
      directions: 'Guess the Pokémon from their silhouettes. Once you are ready, hover over the image to reveal the Pokémon!',
      footer: '2023 | Saige Krisanda | Sample Vue App',
      pokemons: [
        { name: 'pikachu', imageSilhouette: './images/pikachus.png', imageRevealed: './images/pikachu.png', isRevealed: false },
        { name: 'articuno', imageSilhouette: './images/articunos.png', imageRevealed: './images/articuno.png', isRevealed: false },
        { name: 'poliwhirl', imageSilhouette: './images/poliwhirls.png', imageRevealed: './images/poliwhirl.png', isRevealed: false },
        { name: 'pidgeot', imageSilhouette: './images/pidgeots.png', imageRevealed: './images/pidgeot.png', isRevealed: false },
        { name: 'eevee', imageSilhouette: './images/eevees.png', imageRevealed: './images/eevee.png', isRevealed: false },
        { name: 'voltorb', imageSilhouette: './images/voltorbs.png', imageRevealed: './images/voltorb.png', isRevealed: false },
      ],
      buttonClicked: false
    };
  },
  methods: {
    revealPokemon(index) {
      if (this.buttonClicked) {
        this.pokemons[index].isRevealed = true;
      }
    },
    revealImages() {
      this.buttonClicked = true;
    },
    resetGame() {
      this.buttonClicked = false;
      this.pokemons.forEach(pokemon => {
        pokemon.isRevealed = false;
      });
    }
  }
});
