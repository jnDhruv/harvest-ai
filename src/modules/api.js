function APIHandler() {
  async function getData(input) {
    const url = "https://harvest-ai-backend.onrender.com/predict"
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInput: input }),
    });

    const data = await response.json();
    return data.response;
  }

  return {
    getData,
  };
}

export default APIHandler();
