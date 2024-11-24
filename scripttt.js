async function fetchCryptoData() {
    const cryptoInput = document.getElementById('crypto-input').value.trim().toLowerCase();
    const cryptoInfo = document.getElementById('crypto-info');

    if (!cryptoInput) {
        cryptoInfo.innerHTML = '<p>Please enter a cryptocurrency name.</p>';
        return;
    }

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoInput}&vs_currencies=usd`);
        const data = await response.json();

        if (data[cryptoInput]) {
            cryptoInfo.innerHTML = `
                <h2>${cryptoInput.toUpperCase()}</h2>
                <p>Price: $${data[cryptoInput].usd}</p>
            `;
        } else {
            cryptoInfo.innerHTML = '<p>Cryptocurrency not found. Please try again.</p>';
        }
    } catch (error) {
        cryptoInfo.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        console.error('Error:', error);
    }
}
