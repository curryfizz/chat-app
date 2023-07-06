import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid: uid,
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };
  return (
    <div className="bg-violet-800 fixed bottom-0 w-full py-10 shadow-lg">
      <form className="px-2 containerWrap flex" onSubmit={handleSendMessage}>
        <input
          className="input w-full focus:outline-none bg-violet-200 rounded-r-none text-black"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="w-auto btn-accent btn text-white rounded-l-none px-5 text-sm"
          type="submit"
        >
          {" "}
          Send{" "}
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
