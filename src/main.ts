export interface IHelloProps {
  readonly word: string;
}
export class Hello {
  readonly word: string;
  constructor(props: IHelloProps) {
    this.word = props.word;
  }
  public sayword() :string {
    return this.word;
  }
}