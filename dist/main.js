export class User {
    name;
    email;
    _password;
    phone;
    age;
    id = Date.now();
    notebooks = [];
    constructor(name, email, _password, phone, age) {
        this.name = name;
        this.email = email;
        this._password = _password;
        this.phone = phone;
        this.age = age;
        if (age < 18 || age > 60)
            throw new Error("Age must be between 18 and 60");
        this.age = age;
    }
    set password(value) {
        this._password = value;
    }
    get password() {
        return `#####${this._password}`;
    }
    displayInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
            age: this.age,
        };
    }
    addNoteBook(noteBook) {
        this.notebooks.push(noteBook);
    }
}
const user = new User("yy", "yy@gmail.com", "sssss", "122323", 24);
user.displayInfo;
class Admin extends User {
    constructor(name, email, password, phone, age) {
        super(name, email, password, phone, age);
    }
    manageNotes() {
        "Admin is managing notes";
    }
}
const admin = new Admin("yy", "yy@gmail.com", "sssss", "122323", 24);
admin.manageNotes;
export class Note {
    title;
    content;
    user;
    id = Date.now();
    constructor(title, content, user) {
        this.title = title;
        this.content = content;
        this.user = user;
    }
    preview() {
        if (this.content.length <= 20)
            return this.content;
        return `${this.content.substring(0, 20)}...`;
    }
}
const note = new Note("Note", "Note", user);
note.preview;
export class NoteBook {
    notes = [];
    id = Date.now();
    addNote(title, content, user) {
        this.notes.push(new Note(title, content, user));
    }
    removeNote(idNote) {
        this.notes = this.notes.filter(note => note.id !== idNote);
    }
    getNotes() {
        return [...this.notes];
    }
}
const noteBook = new NoteBook();
noteBook.addNote("Book", "book", user);
class Storage {
    storage = [];
    constructor() { }
    addItem(value) {
        this.storage.push(value);
    }
    removeItem(value) {
        const item = this.storage.indexOf(value);
        if (item !== -1)
            this.storage.splice(item, 1);
    }
    getAllItems() {
        return [...this.storage];
    }
}
const storage = new Storage();
storage.addItem(1);
storage.addItem(2);
