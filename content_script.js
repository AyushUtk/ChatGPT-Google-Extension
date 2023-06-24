console.log('Hello World')

var html = "<div id='GPTCHAT' style='background:#fff;position:relative;-webkit-box-sizing:border-box;padding:50px;border-radius:10px;border: 1px solid #35d332;margin-top: 30px;margin-bottom: 30px;color: #205540;margin-left: var(--center-abs-margin); width: 800px;'>Generating ChatGPT Response</div>";
document.getElementById("appbar").insertAdjacentHTML('afterend', html);
  
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
        "prompt": q + "under 100 words",
        "max_tokens": 200,
        "temperature": 0,
    }),
})
.then(response => response.json())
.then(data => {
    const ans = data.choices[0].text;
    document.getElementById("GPTCHAT").innerHTML = ans;
})
.catch(error => console.error(error));