export type Serializable = number | string | null | boolean | Serializable[] | {
    [key: string]: Serializable
}

export type SerializableObject = {
    [key: string]: Serializable
}
