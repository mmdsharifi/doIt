import { addTodo, findById, toggleTodo, updateTodo } from './todoHelpers'

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

test('addTodo should not mutate the existing todo array', () => {
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

test('FindById should return the expected item from an array ', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: false },
        { id: 3, name: 'to3!', isComplete: false }
    ]

    const expected = { id: 2, name: 'to2', isComplete: false }
    const result = findById(2, startTodos)
    expect(result).toEqual(expected);
})

test('toggleTodo should toggle the isComplete prop of todo', () => {
    const startTodo = { id: 2, name: 'to2', isComplete: false }
    const expected = { id: 2, name: 'to2', isComplete: true }
    const result = toggleTodo(startTodo)
    expect(result).toEqual(expected);
})

test('toggleTodo should not mutate the orginal todo', () => {
    const startTodo = { id: 2, name: 'to2', isComplete: false }
    const result = toggleTodo(startTodo)
    expect(result).not.toBe(startTodo);
})

test('updateTodo should update an item by id ', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: false },
        { id: 3, name: 'to3!', isComplete: false }
    ]
    const updatedTodo = { id: 2, name: 'to2', isComplete: true }
    const expectedTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: true },
        { id: 3, name: 'to3!', isComplete: false }
    ]

    const result = updateTodo(startTodos, updatedTodo)

    expect(result).toEqual(expectedTodos)

})

test('updateTodo should not mutate the orginal array', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'to2', isComplete: false },
        { id: 3, name: 'to3!', isComplete: false }
    ]
    const updatedTodo = { id: 2, name: 'to2', isComplete: true }

    const result = updateTodo(startTodos, updatedTodo)

    expect(result).not.toBe(startTodos)

})
