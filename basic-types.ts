export const isACat = (animal: string):boolean => animal === "cat";

export function addNumbers(a: number, b:number):number {
  return a + b;
}



export const introduction = (name :string):string => `Hello ${name}`;



export const introducePerson = (name:string):void => console.log(introduction(name));

export const dumpObject = (type:string, obj:unknown):string => `${type}:${JSON.stringify(obj)}`;

export const dumpStringOrNumber = (info :string | number): string => `value ${info}`;
