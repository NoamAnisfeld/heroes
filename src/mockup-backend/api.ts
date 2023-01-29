import { fetchDatabase, saveDatabase, UserWithPassword } from "./database";
import { hash, compare } from "bcrypt";

const HASH_SALT_ROUNDS = 2;

export async function addUser(username: string, password: string) {
    const database = await fetchDatabase(),
        { users } = database,
        existingIndex = users.findIndex(user => user.username === username);

    if (existingIndex !== -1) {
        throw Error('username already exists');
    } else {
        const hashedPassword = await hash(password, HASH_SALT_ROUNDS);

        const newUser: UserWithPassword = {
            username,
            hashedPassword,
            heroes: [],
        }

        return await saveDatabase({
            ...database,
            users: [...users, newUser],
        })
    }
}

export async function validateCredentials(username: string, password: string) {
    const database = await fetchDatabase(),
        { users } = database,
        user = users.find(user => user.username === username);
    
    if (user && await compare(password, user.hashedPassword)) {
        return true;
    }
    return false;
}