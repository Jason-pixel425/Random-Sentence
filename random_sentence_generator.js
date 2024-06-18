
function generateSentence() {
    const positive = ['courage', 'creativity', 'confidence', 'curiosity', 'honesty', 'intelligence', 'loyalty', 'respect', 'trust', 'patience', 'kindness'];
    const feeling = ['joy', 'love', 'fear', 'anger', 'sadness', 'surprise', 'excitement', 'happiness', 'peace'];
    const verb = ['act', 'run', 'scream', 'play', 'plan', 'create', 'listen', 'shop', 'leave'];
    const negative = ['angriness', 'clumsiness', 'defeat', 'embarrassment', 'grumpiness', 'jealousy', 'laziness'];
    console.log(`To avoid the burden of ${negative[Math.floor(Math.random() * negative.length)]}, ${verb[Math.floor(Math.random() * verb.length)]} with ${feeling[Math.floor(Math.random() * feeling.length)]} to be overcome with ${positive[Math.floor(Math.random() * positive.length)]}.`);
};
generateSentence();