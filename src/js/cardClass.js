class Card {
  place = 'todo';
  id = Date.now();
  createdAt = new Date().toLocaleString();
  constructor(title, description, performer) {
    this.title = title;
    this.description = description;
    this.performer = performer;
  }
}

export { Card };
