document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate-btn');
    const sourceText = document.getElementById('source-text');
    const targetLanguage = document.getElementById('target-language');
    const translationResult = document.getElementById('translation-result');

    translateBtn.addEventListener('click', function() {
        const text = sourceText.value;
        const language = targetLanguage.value;

        
        fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${language}`)
            .then(response => response.json())
            .then(data => {
                
                const translatedText = data.responseData.translatedText;
                
                translationResult.textContent = translatedText;
            })
            .catch(error => {
                console.error('Error:', error);
                translationResult.textContent = 'An error occurred while translating.';
            });
    });
});
