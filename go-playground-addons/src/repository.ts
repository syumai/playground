export class CodeRepository {
  private el: HTMLInputElement | null;
  constructor() {
    this.el = null;
  }
  private initCodeArea() {
    if (this.el === null) {
      this.el = document.getElementById('code') as HTMLInputElement;
    }
  }
  load(): string {
    this.initCodeArea();
    if (this.el !== null) {
      return this.el.value;
    }
    return '';
  }
  save(value: string) {
    this.initCodeArea();
    if (this.el !== null) {
      this.el.value = value;
    }
  }
}

export default new CodeRepository();
