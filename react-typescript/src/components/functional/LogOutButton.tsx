import { FunctionComponent } from "react";

type LogOutButtonProps = {
    onClick: () => void;
};

const LogOutButton: FunctionComponent<LogOutButtonProps> = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>LoggedOut</button>
        </div>
    );
};

export default LogOutButton;
