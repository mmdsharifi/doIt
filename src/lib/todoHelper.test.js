import { addTodo } from './todoHelpers'

test('add Todo should passed to the list', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: false }
    ]
    const newTodo = { id: 2, name: 'to3!', isComplete: false }

    const expected = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: false },
        { id: 2, name: 'to3!', isComplete: false }
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).toEqual(expected)
})

test('add Todo should passed to the list', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: false }
    ]
    const newTodo = { id: 3, name: 'to3!', isComplete: false }
    const expected = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: false },
        { id: 3, name: 'to3!', isComplete: false }
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(expected)
})