const search = document.getElementById('search-postcode');
const users = document.querySelector('.user-cards');

// Search postcodes.json and filter it
const searchState = async searchText => {
    const res = await fetch('postcode.json');
    const states = await res.json();

    let matches = states.filter(state => {
        const regex = new RegExp(`^$(searchText)`, 'gi');
        return state.name.match(regex) || state.address.match(regex);
    });

    if(searchText === 0){
        matches = [];
        users.innerHTML = '';
    }

    outputHtml(matches);
};

//Show results
const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
            <div class="card card-body">
                <h4>${match.name}</h4>
            </div>
        `)
        .join('');

        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchState(search.value));