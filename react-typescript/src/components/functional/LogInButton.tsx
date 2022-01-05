// import type of React component
import { FunctionComponent } from "react";

// declare the prop types
type ImageBoxProps = {
    onClick: () => void
};

// annotate the type of component and props
const LogInButton: FunctionComponent<ImageBoxProps> = ({ onClick }) =>
// export default function LogInButton(props) {
//   console.log(props);
// refactor to remove props declaration 
(
    <div>
        <button onClick={onClick}>Log-in</button>
    </div>
);

export default LogInButton;