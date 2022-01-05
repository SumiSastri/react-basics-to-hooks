// import type of React component
import { FunctionComponent } from "react";

// REFACTOR: best practice declare the prop types
type LoginButtonProps = {
    onClick: () => void;
};

// annotate the type of component and props
const LoginButton: FunctionComponent<LoginButtonProps> = ({ onClick }) => (
    // export default function LogInButton(props) {
    //   console.log(props);
    // refactor to remove props declaration
    <div>
        <button onClick={onClick}>Loggedin</button>
    </div>
);

export default LoginButton;
