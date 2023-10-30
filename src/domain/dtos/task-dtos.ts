export type createTaskDTO = {
    description: string
}

export type removeTaskDTO = {
    id: number
}

export type updateTaskDTO = {
    id: number,
    new_description: string
}