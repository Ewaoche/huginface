



const axios = require('axios');

const API_URL = "https://api-inference.huggingface.co/models/gpt2";
const API_TOKEN = "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";

const query = async (text) => {
  try {
    const response = await axios.post(
      API_URL,
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    console.log("Response from API:", response.data);
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
};

query("Once upon a time,");
