class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
/* TechnicalBook class which extends Book class while adding
   the edition variable.
   */
class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  };

  /* Getter method for edition */
  getEdition() {
    return `The current version of this book is ${this.edition}`;
  };
}

const WorldPolitics = new TechnicalBook("World Politics: Interests, Interactions, Institutions",
  "Jeffry A. Frieden,  David A. Lake, Kenneth A. Schultz", "978-0393872231", 10, 5
);

console.log(WorldPolitics.availability);
console.log(WorldPolitics.getEdition());