import { FunctionComponent } from "react";

// REFACTOR: best practice declare the prop types
type LoginWelcomeProps = {
    title?: string;
    name?: string;
    welcome?: string;
    children?: React.ReactNode;
};

// annotate the type of component and props/ declare list of deconstructed props
const LoginWelcome: FunctionComponent<LoginWelcomeProps> = ({
    title,
    name,
    welcome,
    children,
}) => {
    // export default function LoginWelcome(props) {
    // (props = {title: title, name: name, welcome:welcome,  children: children})
    // const { title, name, welcome, children } = props;
    return (
        <div>
            <p>
                Hello {title} {name}
            </p>
            {children}
            <div>
                <p>{welcome}</p>
                {children}
            </div>
        </div>
    );
};
// refactor to explicity export module
export default LoginWelcome;
