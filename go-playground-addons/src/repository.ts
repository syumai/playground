export class CodeRepository {
  private codeArea: HTMLInputElement | null;
  constructor() {
    this.codeArea = null;
  }
  private initCodeArea() {
    if (this.codeArea === null) {
      this.codeArea = document.getElementById('code') as HTMLInputElement;
    }
  }
  load(): string {
    this.initCodeArea();
    if (this.codeArea != null) {
      return this.codeArea.value;
    }
    return '';
  }
  save(value: string) {
    this.initCodeArea();
    if (this.codeArea != null) {
      this.codeArea.value = value;
    }
  }
}

export default new CodeRepository();
