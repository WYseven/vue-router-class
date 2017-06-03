export default {
  async fetch (STORAGE_KEY) {
    let value = await JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return value
  },
  save (STORAGE_KEY, todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
