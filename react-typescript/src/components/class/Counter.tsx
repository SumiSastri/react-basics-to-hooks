import { Component } from "react";

import CalculateTax from "../functional/CalculateTax";

// explicity declare the type of props and state, children is a built in prop/ optional prop in this component
interface Props {
    children?: React.ReactNode;
}

interface State {
    count: number;
}

// class is a constructor that creates a component with props and state 
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
                <h3>Functional Component in a Class Component </h3>
                <CalculateTax baseAmount={count} taxPercentCharged={0.5} />
            </div>
        );
    }
}

export default Counter;