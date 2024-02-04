const pokemonGen = [
    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
    "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
    "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
    "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
    "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina",
    "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable",
    "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat",
    "oddish", "gloom", "vileplume", "paras", "parasect", "venonat",
    "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck",
    "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
    "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop",
    "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool",
    "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash",
    "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo",
    "dodrio", "seel", "dewgong", "grimer", "muk", "shellder",
    "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
    "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute",
    "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung",
    "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela",
    "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu",
    "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar",
    "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto",
    "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte",
    "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno",
    "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo",
    "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion",
    "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot",
    "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat",
    "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi",
    "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos",
    "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip",
    "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma",
    "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking",
    "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress",
    "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish",
    "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring",
    "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid",
    "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom",
    "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle",
    "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank",
    "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar",
    "tyranitar", "lugia", "ho-oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken",
    "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon",
    "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox",
    "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry",
    "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia",
    "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth",
    "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur",
    "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass",
    "skitty", "delcatty", "sableye", "mawile", "aron", "lairon",
    "aggron", "meditite", "medicham", "electrike", "manectric", "plusle",
    "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot",
    "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt",
    "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava",
    "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose",
    "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish",
    "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith",
    "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet",
    "banette", "duskull", "dusclops", "tropius", "chimecho", "absol",
    "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein",
    "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon",
    "shelgon", "salamence", "beldum", "metang", "metagross", "regirock",
    "regice", "registeel", "latias", "latios", "kyogre", "groudon",
    "rayquaza", "jirachi", "deoxys-normal"
];

const pokemonTypes = [
    'grass', 'fire', 'water', 'bug', 'normal', 'poison', 'electric', 'ground',
    'fighting', 'psychic', 'rock', 'ice', 'ghost', 'dragon', 'fairy', 'dark', 'steel'
];

const initialLoadCount = 50;
let currentGeneration = pokemonGen;
let currentLoadedCount = 0;
let isLoading = false;
let isPokemonInfoOpen = false;
let isSearching = false;
let userSearchPokemonInput = [];

function init() {
    getSmallPokemonCards(initialLoadCount, '')
}

//loads the currentPokemon JSON -> saved to a variable | loads the pokemon 'about' tab with first infos
async function loadPokemon(pkmnNumber) {
    savePageState();
    isPokemonInfoOpen = true;
    document.getElementById('pokemonInfoSection').classList.remove('d-none');
    document.getElementById('pokedexHead').classList.add('d-none');
    document.getElementById('smallCards').classList.add('d-none');
    document.getElementById('smallCards').classList.remove('pokemonSmallCards');
    document.getElementById('pokemonHead').innerHTML = '';
    setNextPokemon(pkmnNumber);
    let url = 'https://pokeapi.co/api/v2/pokemon/' + currentGeneration[pkmnNumber];
    let response = await fetch(url);
    currentPokemon = await response.json();
    renderPokemonInfo(currentPokemon);
    renderCurrentPokemonStats(currentPokemon);
}
// shows next pokemon by id
function nextPokemon(nextPokemon) {
    removeAllBgColorTypes()
    if (nextPokemon >= currentGeneration.length) {
        loadPokemon(nextPokemon - 1);
    }else{
        loadPokemon(nextPokemon);
    }
}
// shows previous pokemon by id
function previousPokemon(previousPokemon) {
    removeAllBgColorTypes();
    if (previousPokemon < (pokemonGen.length - pokemonGen.length)) {
        loadPokemon(previousPokemon + 1);
    }else{
        loadPokemon(previousPokemon)
    }
}
// sets the right next or previous pokemonID
function setNextPokemon(pkmnNumber) {
    let nextNumber = pkmnNumber + 1;
    let previousNumber = pkmnNumber - 1;
    document.getElementById('pokemonHead').innerHTML += /*html */`
    <div>
        <span class="material-symbols-outlined pointer" onclick="closeCard()" >cancel</span>
    </div>
    <div class="symbols-align">
        <span class="material-symbols-outlined pointer" onclick="previousPokemon(${previousNumber})" >arrow_back_ios</span>
        <span class="material-symbols-outlined pointer" onclick="nextPokemon(${nextNumber})">arrow_forward_ios</span>
    </div>`
}
function checkIfNumberZero(pkmnNumber) {
    if (pkmnNumber === 0) {
        return pkmnNumber;
    } else {
        return pkmnNumber - 1;
    }
}
// saves the pokemon , the user is searching for into an array and calls the display function for the pokemon
function handleKeyPress() {
    userSearchPokemonInput = [];
    isSearching = true;
    let search = document.getElementById('searchPokemon').value;
    search = search.toLowerCase();
    for (let i = 0; i < pokemonGen.length; i++) {
        const namePokemon = pokemonGen[i];
        if (namePokemon.toLowerCase().includes(search)) {
            userSearchPokemonInput.push(namePokemon.toLowerCase());
        }
    }
    getSmallPokemonCards('', userSearchPokemonInput)
}


//saves the current scrollheight
function savePageState() {
    if (isPokemonInfoOpen === false) {
        localStorage.setItem("scrollPosition", window.scrollY);
    }
}
// displays the small pokemon as a card or the pokemon the user is searching for
async function getSmallPokemonCards(count, userSearchPokemonInput) {
    isLoading = true;
    const startIndex = currentLoadedCount;
    const endIndex = Math.min(startIndex + count, currentGeneration.length);
    let cards = document.getElementById('smallCards');
    if (count) {
        await fetchPokemonAndRenderThem(startIndex, endIndex, cards);
    } else if (userSearchPokemonInput) {
        cards.innerHTML = '';
        getSmallPokemonCardsFromSearch(userSearchPokemonInput, cards);
    }
    userSearchPokemonInput = [];
    currentLoadedCount = endIndex;
    isLoading = false;
}
// fetches the pokemon from api and displays the pokemon the user is searching for
async function getSmallPokemonCardsFromSearch(userSearchPokemonInput, cards) {
    for (let i = 0; i < userSearchPokemonInput.length; i++) {
        const pokemon = userSearchPokemonInput[i];
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        let response = await fetch(url);
        let currentPokemon = await response.json();
        let pkmnNumber = currentPokemon['id'] - 1;
        renderSmallPokemonCards(currentPokemon, cards, pkmnNumber)
    }
}
// fetches the pokemon from api and gives them to an function which displays them
async function fetchPokemonAndRenderThem(startIndex, endIndex, cards) {
    for (let i = startIndex; i < endIndex; i++) {
        const pokemon = currentGeneration[i];
        let pkmnNumber = i;
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        let response = await fetch(url);
        let currentPokemon = await response.json();
        renderSmallPokemonCards(currentPokemon, cards, pkmnNumber)
    }
}
// renders the small cards from the pokemon
function renderSmallPokemonCards(currentPokemon, cards, pkmnNumber) {
    let pkmn = currentPokemon;
    let index = pkmnNumber + 1;
    let typeClass = 'smallCardType'
    smallCardsTemplate(cards, pkmnNumber, currentPokemon, index)
    displayPokemonID('smallCardID', pkmn, index);
    displayPokemonTypes('smallCardType', pkmn, index, typeClass);
    changeBgColorToType('smallCard', pkmnNumber, currentPokemon)
}
// eventlistener which should prevent multiple loading at the same time from pokemon and loads the next 10 pokemon if user scrolls to the end of the last card
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && isLoading === false && isPokemonInfoOpen === false && isSearching === false) {
        isLoading = true;
        getSmallPokemonCards(10, '');
    }
})

// renders the pkmn info (name, img etc.)
function renderPokemonInfo(currentPokemon) {
    let pkmn = currentPokemon;
    let typeClass = 'type'
    document.getElementById('pokemonName').innerHTML = capitalizeFirstLetter(currentPokemon['name']);
    document.getElementById('pkmnImg').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    displayPokemonID('currentPokemonID', pkmn, '');
    displayPokemonTypes('types', pkmn, '', typeClass);
    changeBgColorToType('pokemonHeader', '', currentPokemon);
}
// function for rendering the PokemonID with # and the 0's
function displayPokemonID(id, pkmn, index) {
    let content = document.getElementById(`${id}${index}`);
    if (pkmn['id'] < 10) {
        return content.innerHTML = `#00${pkmn['id']}`
    } else if (pkmn['id'] >= 10 && pkmn['id'] < 100) {
        return content.innerHTML = `#0${pkmn['id']}`
    } else if (pkmn['id'] >= 100) {
        return content.innerHTML = `#${pkmn['id']}`
    };
}
// fetches the types of an pokemon and displays them
function displayPokemonTypes(type, pkmn, index, typeClass) {
    let content = document.getElementById(`${type}${index}`);
    content.innerHTML = '';
    for (let i = 0; i < pkmn['types'].length; i++) {
        const type = pkmn['types'][i];
        content.innerHTML +=/*html*/`    
        <div class="${typeClass}">${capitalizeFirstLetter(type['type']['name'])}</div>`
    }
}

//renders stats of the current pokemon
function renderCurrentPokemonStats(currentPokemon) {
    pokemonAboutSectionTemplate()
    pokemonStatsTemplate();
    document.getElementById('type').innerHTML = /*html*/`
    <div class="stat-row width40">Type: </div> <div class="stat-row width60">${capitalizeFirstLetter(currentPokemon['types'][0]['type']['name'])}</div>`
    displayPokemonHeight();
    displayPokemonWeight();
    displayPokemonAbilities();
}
// function for converting height
function displayPokemonHeight() {
    let height = currentPokemon['height'] * 10;
    height = height / 100;
    document.getElementById('height').innerHTML = /*html */`
    <div class="stat-row width40">Height:</div><div class="stat-row width60">${height} m</div>
    `
}
// function for converting weight
function displayPokemonWeight() {
    let weight = currentPokemon['weight'] * 100;
    weight = weight / 1000;
    document.getElementById('weight').innerHTML = /*html */`
     <div class="stat-row width40">Weight:</div><div class="stat-row width60">${weight} kg</div>
    `
};
// renders abilities 
function displayPokemonAbilities() {
    let content = document.getElementById('abilities');
    content.innerHTML = /*html*/`<div class="stat-row width40">Abilities</div><div id="displayAbility" class="stat-row width60"></div>`
    let ability = document.getElementById('displayAbility');
    for (let i = 0; i < currentPokemon['abilities'].length; i++) {
        const pkmnAbility = currentPokemon['abilities'][i];
        if (currentPokemon['abilities'].length - 1 == i || currentPokemon['abilities'].length <= 1) {
            ability.innerHTML += /*html*/`${capitalizeFirstLetter(pkmnAbility['ability']['name'])} `
        } else if (currentPokemon['abilities'].length > 1) {
            ability.innerHTML += /*html*/`${capitalizeFirstLetter(pkmnAbility['ability']['name'])}, `
        }

    }
}
//renders moves + stats from power and accuracy from the current move
async function renderPokemonMoves() {
    let tableContent = document.getElementById('movesTable');
    for (let i = 0; i < currentPokemon['moves'].length; i++) {
        const move = currentPokemon['moves'][i];
        const moveStat = await getMoveUrl(move);
        let power = checkingIfPowerNull(moveStat['power']);
        let accuracy = checkingIfAccuracyNull(moveStat['accuracy']);
        tableContent.innerHTML += /*html */`
        <tr>
            <td>${capitalizeFirstLetter(move['move']['name'])}</td>
            <td>${power}</td>
            <td>${accuracy}</td>
        </tr>
        `
    }
}

// renders overall (at 'about' tab) stats from current pokemon
function renderStats() {
    renderCurrentPokemonStats(currentPokemon);
    clearActiveInactiveStats();
    document.getElementById('about').classList.add('active-stat');
    document.getElementById('baseStats').classList.add('inactive-stat');
    document.getElementById('moves').classList.add('inactive-stat');
}
// renders basestats tab ('basestat' tab) from current pokemon
function renderBaseStats() {
    pokemonAboutSectionTemplate();
    clearActiveInactiveStats();
    document.getElementById('about').classList.add('inactive-stat');
    document.getElementById('baseStats').classList.add('active-stat');
    document.getElementById('moves').classList.add('inactive-stat');
    pokemonBaseStatsTemplate();
    createStatsChart(pushStatsIntoArray());
}
// renders the moves tab ('moves' tab) from current pokemon
function renderMoves() {
    pokemonAboutSectionTemplate();
    clearActiveInactiveStats();
    document.getElementById('about').classList.add('inactive-stat');
    document.getElementById('baseStats').classList.add('inactive-stat');
    document.getElementById('moves').classList.add('active-stat');
    pokemonMovesTemplate();
    renderPokemonMoves();
}

function closeCard() {
    document.getElementById('pokemonInfoSection').classList.add('d-none');
    document.getElementById('pokedexHead').classList.remove('d-none');
    document.getElementById('smallCards').classList.remove('d-none');
    document.getElementById('smallCards').classList.add('pokemonSmallCards');
    removeAllBgColorTypes();
    restoreScrollPosition();
    isPokemonInfoOpen = false;
}
// restores the scroll position the user was at opening pokemoncard
function restoreScrollPosition() {
    let storedScrollPosition = parseInt(localStorage.getItem('scrollPosition'))
    window.scrollTo(0, storedScrollPosition);
    localStorage.clear();
}

// help-functions

function removeAllBgColorTypes() {
    let element = document.getElementById('pokemonHeader');
    let classes = element.classList;
    if (classes.length > 0) {
        element.classList.remove(classes[1]);
    }
}

// makes the first letter of a string in caps
function capitalizeFirstLetter(string) {
    let capsString = string[0].toUpperCase() + string.slice(1);
    return capsString
}
//template for the basestats
function pokemonBaseStatsTemplate() {
    let content = document.getElementById('pokemonStats');
    content.innerHTML += /*html */`
    <div class="stat-chart">
        <div class="my-stat-chart">
            <canvas id="myChart"></canvas>
        </div>
    </div>
    `
}
// cahnges the colors from pokemon types
function changeTypeColors(typeClass) {
    let typesElement = document.getElementById('types');
    let childrens = typesElement.getElementsByTagName('div');
    for (let i = 0; i < childrens.length; i++) {
        const child = childrens[i];
        child.classList.add(typeClass);
    }
}
// changes the background color from each pokemon
function changeBgColorToType(id, numb, currentPokemon) {
    let pkmnType = currentPokemon['types'][0]['type']['name'];
    let typeClass = document.getElementById(`${id}${numb}`);
    let rightType;
    for (let i = 0; i < pokemonTypes.length; i++) {
        const pokemonType = pokemonTypes[i];
        if (pkmnType === pokemonType) {
            rightType = pokemonType;
        }
    }
    typeClass.classList.add(`${rightType}-color`);
    changeTypeColors(`${rightType}-type-color`);
}

// renders the chart at the basestat-tab
function createStatsChart(stats) {
    const ctx = document.getElementById('myChart');
    const stringStats = ['Hp', 'Attack', 'Defense', 'Sp.-Attack', 'Sp.-Defense', 'Speed']
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: stringStats,
            datasets: [{
                label: 'Amount',
                data: stats,
                borderWidth: 1
            }]
        },
        options: {
            borderWidth: 150,
        }
    });
}
// template for about-tab
function pokemonAboutSectionTemplate() {
    let pkmnStats = document.getElementById('pokemonStats');
    pkmnStats.innerHTML = '';
    pkmnStats.innerHTML = /*html*/`
    <div class="about-section">
        <div onclick="renderStats()" id="about" class="active-stat">About</div>
        <div onclick="renderBaseStats()" id="baseStats" class="inactive-stat">Base Stats</div>
        <div onclick="renderMoves()" id="moves" class="inactive-stat">Moves</div>
    </div>`
}
//template for stats-tab
function pokemonStatsTemplate() {
    let pkmnStats = document.getElementById('pokemonStats');
    pkmnStats.innerHTML += /*html*/`
    <div id="renderedActiveSection" class="rendered-active-section">
        <div id="type" class="rendered-stats"></div>
        <div id="height" class="rendered-stats"></div>
        <div id="weight" class="rendered-stats"></div>
        <div id="abilities" class="rendered-stats"></div>
    </div>
    `
}
//template for moves-tab
function pokemonMovesTemplate() {
    let movesContent = document.getElementById('pokemonStats');
    movesContent.innerHTML += /*html*/`
    <div class="table-container">
        <table id="movesTable">
            <tr>
                <th>Attack</th>
                <th>Power</th>
                <th>Accurancy</th>
            </tr>
        </table>
    </div>
    `
}
// template for smallCards at entering website
function smallCardsTemplate(cards, pkmnNumber, currentPokemon, index) {
    return cards.innerHTML += /*html*/`
    <div id="smallCard${pkmnNumber}" class="smallCard" onclick="loadPokemon(${pkmnNumber})">
        <div class="smallCardHeading">${capitalizeFirstLetter(currentPokemon['name'])}</div>
        <div class="smallCardsRow">
            <div class="smallCardID" id="smallCardID${index}"></div>
            <div id="smallCardType${index}"></div>
        </div>
        <div class="smallCardImg"><img src="${currentPokemon['sprites']['other']['dream_world']['front_default']}"></div>
    </div>
    `
}

// gets the url for the power and accuracy of an current move at the moves tab
async function getMoveUrl(move) {
    let url = move['move']['url'];
    let response = await fetch(url);
    let currentMove = await response.json();
    return currentMove
}
// clears the border-bottom from about, basestat and moves tab
function clearActiveInactiveStats() {
    document.getElementById('about').classList.remove('active-stat');
    document.getElementById('baseStats').classList.remove('active-stat');
    document.getElementById('moves').classList.remove('active-stat');
    document.getElementById('about').classList.remove('inactive-stat');
    document.getElementById('baseStats').classList.remove('inactive-stat');
    document.getElementById('moves').classList.remove('inactive-stat');
}
// checks if the power from an attack is null and displays an / instead of it
function checkingIfPowerNull(power) {
    if (power == null) {
        return power = '/'
    } else {
        return power = power
    }
}
// checks if accuracy from an attack is null and displays an / instead of it
function checkingIfAccuracyNull(accuracy) {
    if (accuracy == null) {
        return accuracy = '/'
    } else {
        return accuracy = accuracy
    }
}
//pushs stats into an array
function pushStatsIntoArray() {
    let stats = [];
    for (let i = 0; i < currentPokemon['stats'].length; i++) {
        const element = currentPokemon['stats'][i];
        stats.push(element['base_stat']);
    }
    return stats
}