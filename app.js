// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);

    const mainElement = document.querySelector('#main');
    this.mainElement = mainElement;

    const resultElement = document.querySelector('#results');
    this.results = new ResultsScreen(resultElement);

    this._onSelectMenuCSS = this._onSelectMenuCSS.bind(this);
    this._onSelectMenuBasic = this._onSelectMenuBasic.bind(this);
    this._onSelectFood = this._onSelectFood.bind(this);
    
    this._onAllCardsFinish = this._onAllCardsFinish.bind(this);

    document.addEventListener('css-menu-selected', this._onSelectMenuCSS);
    document.addEventListener('basic-menu-selected', this._onSelectMenuBasic);
    document.addEventListener('food-menu-selected', this._onSelectFood);

    document.addEventListener('all-cards-finish', this._onAllCardsFinish);

  }

  _onSelectMenuCSS(){
    this.flashcards = new FlashcardScreen(this.mainElement, 0);
    this.flashcards.show();
  }

  _onSelectMenuBasic(){
    this.flashcards = new FlashcardScreen(this.mainElement, 1);
    this.flashcards.show();
  }

  _onSelectFood(){
    this.flashcards = new FlashcardScreen(this.mainElement, 2);
    this.flashcards.show();
  }

  _onAllCardsFinish(){
    this.menu.hide();
    this.flashcards.hide();
    this.results.show(this.flashcards.numRight, this.flashcards.numWrong);
  }


}
