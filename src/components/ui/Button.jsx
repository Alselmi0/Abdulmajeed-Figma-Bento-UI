function Button({ text, className = "" , functionSend }) {
    return (
      <button onClick={functionSend} className={`${className}`} >
        {text}
      </button>
    );
  }
  
  export default Button;
  