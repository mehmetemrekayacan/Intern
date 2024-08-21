let countryCount = 0;

function addCountry() {
    const input = document.getElementById('countryInput').value;
    if (input.trim() === '') {
        alert('Please enter a country name.');
        return;
    }
    countryCount++;
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country ' + (countryCount % 2 === 0 ? 'even' : 'odd');
    countryDiv.textContent = input;
    document.getElementById('countryList').appendChild(countryDiv);
    document.getElementById('countryInput').value = '';
}