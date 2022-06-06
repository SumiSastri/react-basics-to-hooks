export default function LogOutGoodbye(props) {
    // (props = {title: title, name: name, welcome:welcome, example: example, children: children})
    const { title, name,  goodbye, children } = props;
    return(
      <div>
        <p> Goodbye {title} {name}</p>
        {children}
        <div>
          <p>
            {goodbye} 
          </p>
          {children}
        </div>
      </div>
    );
    }