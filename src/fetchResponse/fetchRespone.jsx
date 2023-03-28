export const fetchResponse = async (prompt,setResponse,setLoading) => {
    setLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{role: "user", content: prompt}],
        max_tokens: 120,
        top_p: 1,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );
      const json = await response.json();
    // console.log(json)
      setResponse(json.choices[0].message.content);
      // console.log(responses)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
}