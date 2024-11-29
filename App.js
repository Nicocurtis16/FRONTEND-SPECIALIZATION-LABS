document.addEventListener('DOMContentLoaded',
    dictionaryApp);

function dictionaryApp() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultContainer = document.getElementById('resultContainer');
    const fontsSelector = document.getElementById('fontsSelector');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const errorMessage = document.getElementById('errorMessage'); // Add this if it’s an existing element for error messages

    // Function to display error message when no definitions are found
    function displayErrorMessage() {
        resultContainer.innerHTML = `
    <div class="errorContainer">
        <div class="errorEmoji"><img src="./assets/images/emoji.png" alt=""></div>
        <div class="definition">No Definitions Found</div>
        <div class="sorry">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</div>
    </div>
    `;
    }

    // Font Selector
    fontsSelector.addEventListener('change', changeFontStyle);

    function changeFontStyle(e) {
        document.body.style.fontFamily = e.target.value;
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener('change', changeMode);

    function changeMode(e) {
        document.body.classList.toggle('dark-mode', e.target.checked);
    }

    searchButton.addEventListener('click', async () => {
        const word = searchInput.value.trim();

        // Check for empty input and show error message if necessary
        if (!word) {
            if (errorMessage) {
                errorMessage.textContent = "Whoops, can’t be empty…";
                errorMessage.style.display = "block"; // Show error message for empty input
            }
            searchInput.classList.add('invalid'); // Add 'invalid' class to input to change border color
            resultContainer.innerHTML = ''; // Clear previous results
            return; // Stop further processing if input is empty
        } else {
            if (errorMessage) {
                errorMessage.style.display = "none"; // Hide error message when input is provided
            }
            searchInput.classList.remove('invalid'); // Remove 'invalid' class
        }

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

            if (!response.ok) {
                throw new Error('Word not found');
            }

            const wordData = await response.json();
            console.log(wordData);

            // Find the first available audio source
            const audioSource = wordData[0].phonetics.find(phonetic => phonetic.audio)?.audio;

            // Prepare container for all displays
            const displayContainer = document.createElement('div');
            displayContainer.className = 'display-container';

            // Word Header Section
            const headerSection = document.createElement('div');
            headerSection.className = 'header-section';
            headerSection.innerHTML = `
            <div class="word-header">
                <div class="wordHeaderLeft">
                    <h2 class="word">${wordData[0].word}</h2>
                    <p class="phonetic">
                    ${wordData[0].phonetic || 'Not available'}
                     </p>
                </div>
                ${audioSource ? `
                    <button id="pronunciationBtn" class="pronunciation-btn">
                       <img src="./assets/images/icon-play.svg" alt="">
                    </button>
                    <audio id="pronunciationAudio" src="${audioSource}"></audio>
                ` : ''}
            </div>
        `;
            displayContainer.appendChild(headerSection);

            // Definitions Section
            const definitionsSection = document.createElement('div');
            definitionsSection.className = 'definitions-section';

            // Modify the meanings section to include synonyms
            wordData[0].meanings.forEach(meaning => {
                const meaningBlock = document.createElement('div');
                meaningBlock.className = 'meaning-block';

                meaningBlock.innerHTML = `
    <div class="partContainer">
        <h3 class="part-of-speech">${meaning.partOfSpeech}</h3>
        <div class="line"></div>
    </div>
    <p class="meaningTitle">Meaning</p>

    <ul style="width: 714px;">
        ${meaning.definitions.map(def => `
            <li >
                ${def.definition}
                ${def.example ? `<p style="font-size: 18px;font-weight: normal; color: #757575">${def.example}</p>` : ''}
            </li>
        `).join('')}
    </ul>

    ${meaning.synonyms && meaning.synonyms.length > 0 ? `
        <div class="synonyms-section">
            <div class="synonyms-list" style="display: flex">
                 <p class="synonymsTitle" style="padding-right: 20px;font-size: 20px;color: #757575">Synonyms</p>

                ${meaning.synonyms.map(synonym => `
                    <span class="synonym-tag" style="color: #A445ED;font-size: 20px;font-weight: 700">${synonym}</span>
                `).join('')}
            </div>
        </div>
    ` : ''}
`;

                definitionsSection.appendChild(meaningBlock);
            });
            displayContainer.appendChild(definitionsSection);

            // Source Links Section
            if (wordData[0].sourceUrls && wordData[0].sourceUrls.length > 0) {
                const sourceSection = document.createElement('div');
                sourceSection.className = 'source-section';
                sourceSection.innerHTML = `
                <div class="source-section" style="display: flex; height: 37px; border-top: 1px solid #979797;margin-top: 20px;align-items: end">
                <span style="font-size: 14px;color: #757575;text-decoration: underline ">Source Links: </span>
                ${wordData[0].sourceUrls.map(url => `
                         <a style="color: #2D2D2D;text-decoration: underline; font-size: 14px" href="${url}" target="_blank" rel="noopener noreferrer">
                            ${url} <img src="./assets/images/liinkLogo.svg" alt="">
                        </a>
                    `).join('')}
                </div>
            `;
                displayContainer.appendChild(sourceSection);
            }

            // Clear previous content and add new display container
            resultContainer.innerHTML = '';
            resultContainer.appendChild(displayContainer);

            // Add audio playback functionality if audio is available
            if (audioSource) {
                const pronunciationBtn = document.getElementById('pronunciationBtn');
                const pronunciationAudio = document.getElementById('pronunciationAudio');

                pronunciationBtn.addEventListener('click', () => {
                    pronunciationAudio.play();
                });
            }
        } catch (error) {
            displayErrorMessage();
        }
    });
}
