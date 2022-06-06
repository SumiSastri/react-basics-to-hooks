import { FunctionComponent } from "react";

type LogOutGoodbyeProps = {
    title?: string;
    name?: string;
    goodbye?: string;
    children?: React.ReactNode;
};

const LogOutGoodbye: FunctionComponent<LogOutGoodbyeProps> = ({
    title,
    name,
    goodbye,
    children,
}) => {
    return (
        <div>
            <p>
                {" "}
                Goodbye {title} {name}
            </p>
            {children}
            <div>
                <p>{goodbye}</p>
                {children}
            </div>
        </div>
    );
};
export default LogOutGoodbye;
