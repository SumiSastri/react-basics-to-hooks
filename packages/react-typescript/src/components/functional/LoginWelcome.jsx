export default function LoginWelcome(props) {
  // (props = {title: title, name: name, welcome:welcome, example: example, children: children})
  const { title, name,  welcome, children } = props;
  return(
    <div>
      <p>Hello {title} {name}</p>
      {children}
      <div>
        <p>
          {welcome} 
        </p>
        {children}
      </div>
    </div>
  );
  }
  