import { AvatarGenerator } from "random-avatar-generator";

const Message = ({ message }: any) => {
  const generator = new AvatarGenerator();

  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {/* <img src={generator.generateRandomAvatar()} /> */}
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble">{message.message}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;
