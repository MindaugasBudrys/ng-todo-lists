import { Todo } from './Todo';

export class TodoList {
    public static create(title: string): TodoList {
      return new TodoList(title, [], new Date());
    }
  
    protected constructor(
      public readonly title: string,
      public readonly todos: Todo[],
      public readonly created: Date
    ) {}

  }
  