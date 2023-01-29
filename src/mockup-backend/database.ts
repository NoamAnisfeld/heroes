import { SerializableUser } from '../data/UsersData';

interface UserWithPassword extends SerializableUser {
    hashedPassword: string,
}

export interface Database {
    users: UserWithPassword[],
}

const emptyDatabase: Database = {
    users: [],
}

const STORAGE_KEY = 'heroes';

export async function saveDatabase(database: Database) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(database));
}

export async function fetchDatabase(): Promise<Database> {
    const storageItem = localStorage.getItem(STORAGE_KEY);
    if (storageItem === null) {
        return emptyDatabase;
    } else {
        try {
            const parsed = JSON.parse(storageItem);
            return parsed;
        } catch (e) {
            throw Error('error in database');
        }
    }
}