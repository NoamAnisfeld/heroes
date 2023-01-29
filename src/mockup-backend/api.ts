import { fetchDatabase, saveDatabase, UserWithPassword } from "./database";
import hash from "object-hash";

export async function addUser(username: string, password: string) {
    const database = await fetchDatabase(),
        { users } = database,
        existingIndex = users.findIndex(user => user.username === username);

    if (existingIndex !== -1) {
        throw Error('username already exists');
    } else {
        const hashedPassword = hash(password);

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
    
    if (user && hash(password) === user.hashedPassword) {
        return true;
    }
    return false;
}