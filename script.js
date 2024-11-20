function postChatMessage(message) {
  msgContainer.innerHTML += `<div class="msg-me">${chatField.value}</div>`
    chatField.value = '';
}
async function askChatGPT(question) {
  const apiKey = 'DEIN_API_SCHLÜSSEL_HIER';
  const apiURL = 'https://api.openai.com/v1/engines/gpt-4/completions';

  const response = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: question,
      max_tokens: 150
    })
            
    });
  if (!response.ok) {
    throw new Error(`Fehler: ${response.statusText}`);
  }     
    const data = await response.json();
    return data.choices[0].text.trim();

}       