class Card {
  place = 'todo';
  id = Date.now();
  createdAt = new Date().toLocaleString();
  constructor(title, description, performer) {
    this.title = title.trim();
    this.description = description.trim();
    this.performer = performer;
  }
}

export { Card };
