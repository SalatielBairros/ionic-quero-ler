export interface IProvider<T> {
  insert(record: T): Promise<void>;
  update(record: T): Promise<void>;
  remove(id: number): Promise<void>;
  get(id: number): Promise<T>;
  getAll(id: number): Promise<Array<T>>;
}
