// Write your code here
class Book {
  constructor(Title, Author, ISBN, numCopies) {
    this.Title = Title;
    this.Author = Author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  /* Checks availability of book.
  If it is 0, returns out of stock.
  If it is less than 10, returns low stock.
  Anything else, and it returns in stock.
  */
  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (!this.numCopies) {
      return "out of stock";
    }
    else if (this.numCopies < 10) {
      return "low stock";
    }
    else {
      return "in stock";
    }
  }

  /* Takes in an amount of books to remove from inventory
  (defaults to 1) */
  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  /* Takes in an amount of books to add to inventory
  (defaults to 5) */
  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);

HungerGames.restock(12);
console.log(HungerGames.availability);

HungerGames.sell(17);
console.log(HungerGames.availability);