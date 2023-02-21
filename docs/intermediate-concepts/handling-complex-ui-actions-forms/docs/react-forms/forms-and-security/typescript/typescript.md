TypeScript, is an open-source library created by Anders Hejlsberg for Microsoft. It is a superset of JavaScript that allows static typing. It is what C++ is to C. Browsers do not compile TypeScript, so it requires a transpiler (compiler) to convert back into JavaScript. Based on the .net system and is closely related to object oriented programming languages.

Problems that TypeScript solves - as it is statically typed it reduces errors (bugs) as types are checked automatically preventing the accidental assignment of invalid values. It is easier to maintain in the long-term as it:-

## Scaffolding:

1. cd client `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
2. Check `ts.config` file added - or add manually `npx tsc --init`
3. Change `App.js` to `App.tsx`

## How to add types to a functional component

1. Create a functional component with the file extension `.tsx`
2. import the React types `import { FC, ReactElement } from 'react';`
3. Add the types for the Functional Component and destructure props

```
export const FormInput: FC<FormInputProps> = ({ id, className, type, placeholder, name, value }): ReactElement => {return (<div>{children with props}</div>);
};

```

4. Explicitly define props in the types folder and import into the component

## How to add types to a page and import a reusable component

```
export const SignIn: FC = ({ children }): ReactElement => {
    return (
        <div>
            {child components}
        </div>
    );
};

```

**Gotchas**
Note that the props that the input takes is defined by the HTML element
eg: Label is not part of an HTML input element [https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement] it will throw a type error. For label use a label JSX element and then pass it into the input field as a prop.

## References

My TS GitHub repo: [https://github.com/SumiSastri/typescript-with-react]
Cheatsheet by Salty Crane: [https://www.saltycrane.com/cheat-sheets/typescript/react/latest/]
Level-up Typescript & Hooks: [https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c]

Documentation links:
Basic Types [https://www.typescriptlang.org/docs/handbook/basic-types.html]
Advanced Types [https://www.typescriptlang.org/docs/handbook/advanced-types.html]
Functions and Types: [https://www.typescriptlang.org/docs/handbook/functions.html]
Libraries and type definitions [https://www.npmjs.com/~types] eg. @types/react for react or the Microsoft search [https://microsoft.github.io/TypeSearch/]
