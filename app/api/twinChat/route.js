import axios from "axios";

export const sendMessage = async (message) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/chat", {
      message: message,
    });
    const answer = response.data;
    // Process the answer here
    console.log(answer);
    return answer; // Return the message from the response
  } catch (error) {
    console.error(error);
  }
};
