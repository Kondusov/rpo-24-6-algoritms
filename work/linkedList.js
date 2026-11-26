// Односвязный список в JavaScript состоит из узлов (value и next),
// связанных от головы (head) к хвосту (tail).

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Добавление в конец: O(1)
  append(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  // Добавление в начало: O(1)
  prepend(value) {
    const node = new ListNode(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  // Удаление первого совпадения: O(n)
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      if (current.next === this.tail) {
        this.tail = current;
      }
      current.next = current.next.next;
    }
  }

  // Поиск узла: O(n)
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Преобразование в массив для удобного просмотра
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// Пример использования
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.delete(10);

console.log(list.toArray()); // [5, 20]
console.log(list.find(20)); // ListNode { value: 20, next: null }
