import { describe, it, expect } from 'vitest'
// import Task from '../../src/models/Task' // We will uncomment this line in the implementation step.

describe('Task Model', () => {
  it('should have correct properties', () => {
    // We'll simulate the creation of the task here, knowing the expected properties.
    // In the implementation step, we will replace this with actual Task object creation.

    const task = {
      title: 'My Task',
      description: 'Task description',
      completed: false
    };

    expect(task).toHaveProperty('title')
    expect(task.title).toBe('My Task')
    expect(task).toHaveProperty('description')
    expect(task.description).toBe('Task description')
    expect(task).toHaveProperty('completed')
    expect(task.completed).toBe(false)
  })
    it('should have completed property default to false if not provided', () => {

    const task = {
      title: 'My Task',
      description: 'Task description',
    };

    expect(task).toHaveProperty('completed')
    expect(task.completed).toBe(false) // Expect default to be false
  })
})
