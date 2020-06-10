export interface IProvider<T> {
  insert(record: T): Promise<void>;
  update(record: T): Promise<void>;
  remove(id: number): Promise<void>;
  get(id: number): Promise<void | T>;
  getAll(id: number): Promise<void | Array<T>>;
  map(dbRecord: any): T;
}
