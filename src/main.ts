import type { IAdmin, INote, INoteBook, IUser, UserData } from "./interface.js";
/***********************************************************************************************/

export class User implements IUser {
    public readonly id: number = Date.now();
    private notebooks: NoteBook[] = [];
    constructor(
        public name: string,
        public email: string,
        private _password: string,
        public phone: string,
        public age: number,
    ) {
        if (age < 18 || age > 60) throw new Error("Age must be between 18 and 60");
        this.age = age
    }
    public set password(value: string) {
        this._password = value;
    }
    public get password(): string {
        return `#####${this._password}`
    }
    displayInfo(): UserData {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
            age: this.age,
        }
    }
    addNoteBook(noteBook: NoteBook): void {
        this.notebooks.push(noteBook)
    }
}
const user = new User("yy", "yy@gmail.com", "sssss", "122323", 24)
user.displayInfo

/***********************************************************************************************/

class Admin extends User implements IAdmin {
    constructor(
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number,
    ) {
        super(name, email, password, phone, age)
    }
    manageNotes(): void {
        "Admin is managing notes"
    }
}
const admin = new Admin("yy", "yy@gmail.com", "sssss", "122323", 24)
admin.manageNotes

/***********************************************************************************************/

export class Note implements INote {
    public readonly id: number = Date.now();
    constructor(
        public title: string,
        public content: string,
        public readonly user: User
    ) { }
    preview(): string {
        if (this.content.length <= 20) return this.content
        return `${this.content.substring(0, 20)}...`;
    }
}
const note = new Note("Note", "Note", user)
note.preview

/***********************************************************************************************/

export class NoteBook implements INoteBook {
    private notes: Note[] = [];
    public readonly id: number = Date.now();
    addNote(title: string, content: string, user: User): void {
        this.notes.push(new Note(title, content, user))
    }
    removeNote(idNote: number): void {
        this.notes = this.notes.filter(note => note.id !== idNote);
    }
    getNotes(): Note[] {
        return [...this.notes]
    }
}
const noteBook = new NoteBook()
noteBook.addNote("Book", "book", user)

/***********************************************************************************************/

class Storage<T> {
    private readonly storage: T[] = [];
    constructor() { }
    addItem(value: T) {
        this.storage.push(value)
    }
    removeItem(value: T) {
        const item = this.storage.indexOf(value)
        if (item !== -1) this.storage.splice(item, 1);
    }
    getAllItems(): T[] {
        return [...this.storage]
    }
}
const storage = new Storage<number>();
storage.addItem(1);
storage.addItem(2);

/***********************************************************************************************/