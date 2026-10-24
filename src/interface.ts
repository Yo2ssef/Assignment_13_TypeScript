import type { Note, NoteBook, User } from "./main.js";

export interface IUserData {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    age: number;
}
export interface IUser extends IUserData {
    displayInfo(): IUserData
    addNoteBook(noteBook: NoteBook): void
}
export interface IAdmin extends IUser {
    manageNotes(): void
}
export interface INote {
    id: number;
    title: string;
    content: string;
    user: User;
    preview(): string;
}
export interface INoteBook {
    id: number;
    addNote(title: string, content: string, user: User): void;
    removeNote(idNote: number): void;
    getNotes(): Note[];
}