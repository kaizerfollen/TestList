import { users } from './users.js'

// Переключи в true, чтобы проверить обработку ошибки
const SIMULATE_ERROR = false

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SIMULATE_ERROR) {
        reject(new Error('Failed to load users'))
      } else {
        resolve([...users])
      }
    }, 750)
  })
}
