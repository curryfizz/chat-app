import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      message: "Hello there!",
      name: "Hola"
    },
    {
      id: 1,
      message: "Hi",
      name: "Mio"
    },
  ];
  return <div className="pb-44 pt-20 containerWrap">
    {messages.map(message=> (
      <Message key={message.id} message={message}/>
    ))}
  </div>;
};

export default ChatBox;
