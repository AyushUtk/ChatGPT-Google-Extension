console.log('Hello World')
  
const prompt = "I want to write a novel";
const apiKey = "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"
const apiUrl =  "https://api.openai.com/v1/completions";

const url = new URL(window.location.href)
const search = url.search;
const searchParam = new URLSearchParams(search);
const q = searchParam.get('q')

fetch(apiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": q,
        "max_tokens": 100,
        "temperature": 0,
    }),
})
.then(response => response.json())
.then(data => {
    const ans = data.choices[0].text;

    var html = "<div id='GPTCHAT' style='background:#fff;position:relative;-webkit-box-sizing:border-box;padding:50px;border-radius:10px;border: 1px solid #35d332;margin-top: 30px;margin-bottom: 30px;color: #205540;margin-left: var(--center-abs-margin); width: 800px;'>Generating ChatGPT Response</div>";
	document.getElementById("appbar").insertAdjacentHTML('afterend', html);

    document.getElementById("GPTCHAT").innerHTML = ans;
})
.catch(error => console.error(error));