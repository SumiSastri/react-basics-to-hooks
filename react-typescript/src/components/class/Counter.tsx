import { Component } from "react";

import CalculateTax from "../functional/CalculateTax";

// TYPE DECLARATION
// keep type of state and props within component not in separate file - this is a type generic cast to the React Component
// children is a built in prop/ optional prop in this component - ReactNode (for virtual DOM)
// see Error Boundary example for how to return children
type Props = {
    children?: React.ReactNode;
}

type State = {
    count: number;
}

// TYPE ANNOTATION 
// class is a constructor (function) that creates a component with props and state (params)
export class Counter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementBy1() {
        this.setState((previousState) => ({
            count: previousState.count + 1,
        }));
        console.log(`Logs async value: ${this.state.count}`);
    }
    decrementBy1() {
        this.setState((previousState) => ({
            count: previousState.count - 1,
        }));
        console.log(`Logs async value: ${this.state.count}`);
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>Class Component (Counter)</h2>
                <h3>Number of products in basket: {count}</h3>
                <button onClick={() => this.incrementBy1()}>+1</button>
                <button onClick={() => this.decrementBy1()}>-1</button>
                <h4>Functional Component in a Class Component </h4>
                <CalculateTax baseAmount={count} taxPercentCharged={0.5} />
            </div>
        );

    }
}

export default Counter;