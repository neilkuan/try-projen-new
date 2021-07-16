export interface HelloProps {
  word: string;
}
export class Hello {
  word
  constructor(props: HelloProps) {
    this.word = props.word;
  }
  public sayword() :string {
    return this.word;
  }
}