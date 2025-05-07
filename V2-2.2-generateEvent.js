document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect data from all hidden inputs
    const feeling = document.getElementById('feeling').value;
    const preferences = document.getElementById('preferences').value;
    const time = document.getElementById('time').value;
    const where = document.getElementById('where').value;
    const people = document.getElementById('people').value;

    // Optional: display the collected data on this page
    const output = `
        <h2>Your Hangout Preferences</h2>
        <p><strong>Feeling:</strong> ${feeling}</p>
        <p><strong>Preference:</strong> ${preferences}</p>
        <p><strong>Time Available:</strong> ${time}</p>
        <p><strong>Location:</strong> ${where}</p>
        <p><strong>Company:</strong> ${people}</p>
    `;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = output;
    outputDiv.style.display = 'block';

    // Optional: save data to localStorage if needed on 3-card.html
    localStorage.setItem('feeling', feeling);
    localStorage.setItem('preferences', preferences);
    localStorage.setItem('time', time);
    localStorage.setItem('where', where);
    localStorage.setItem('people', people);

    // Hide the form after submission
    document.getElementById('questionnaireForm').style.display = 'none';

    // ✅ Redirect to 3-card.html
    window.location.href = 'V2-2.1-createSurvey.html';
});


// Handle navigation between pages
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = button.closest('.page');
        const nextPageId = button.getAttribute('data-next');
        const nextPage = document.getElementById(nextPageId);

        // Hide the current page and show the next page
        currentPage.style.display = 'none';
        nextPage.style.display = 'block';
    });
});

document.querySelectorAll('.prev-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = button.closest('.page');
        const prevPageId = button.getAttribute('data-prev');
        const prevPage = document.getElementById(prevPageId);

        // Hide the current page and show the previous page
        currentPage.style.display = 'none';
        prevPage.style.display = 'block';
    });
});

// Handle form submission
document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect data from all hidden inputs
    const feeling = document.getElementById('feeling').value;
    const preferences = document.getElementById('preferences').value;
    const time = document.getElementById('time').value;
    const where = document.getElementById('where').value;
    const people = document.getElementById('people').value;

    // Display the collected data
    const output = `
        <h2>Your Hangout Preferences</h2>
        <p><strong>Feeling:</strong> ${feeling}</p>
        <p><strong>Preference:</strong> ${preferences}</p>
        <p><strong>Time Available:</strong> ${time}</p>
        <p><strong>Location:</strong> ${where}</p>
        <p><strong>Company:</strong> ${people}</p>
    `;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = output;
    outputDiv.style.display = 'block';

    // Hide the form after submission
    document.getElementById('questionnaireForm').style.display = 'none';
});

// Handle choice button selection
document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Deselect all buttons in the group
        const choices = button.parentElement.querySelectorAll('.choice-btn');
        choices.forEach(choice => choice.classList.remove('selected'));

        // Select the clicked button
        button.classList.add('selected');

        // Set the hidden input value
        const hiddenInputId = button.parentElement.nextElementSibling.id;
        const hiddenInput = document.getElementById(hiddenInputId);
        hiddenInput.value = button.getAttribute('data-value');
    });
});

// Total number of pages
const totalPages = document.querySelectorAll('.page').length;

// Update progress bar
function updateProgressBar(currentPageIndex) {
    const progressBar = document.getElementById('progressBar');
    const progress = ((currentPageIndex + 1) / totalPages) * 100; // Calculate percentage
    progressBar.style.width = `${progress}%`; // Update width
}



// Initialize progress bar on page load
updateProgressBar(0);

// Handle navigation between pages
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = button.closest('.page');
        const nextPageId = button.getAttribute('data-next');
        const nextPage = document.getElementById(nextPageId);

        // Hide the current page and show the next page
        currentPage.style.display = 'none';
        nextPage.style.display = 'block';

        // Update progress bar
        const currentPageIndex = Array.from(document.querySelectorAll('.page')).indexOf(nextPage);
        updateProgressBar(currentPageIndex);
    });
});

document.querySelectorAll('.prev-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = button.closest('.page');
        const prevPageId = button.getAttribute('data-prev');
        const prevPage = document.getElementById(prevPageId);

        // Hide the current page and show the previous page
        currentPage.style.display = 'none';
        prevPage.style.display = 'block';

        // Update progress bar
        const currentPageIndex = Array.from(document.querySelectorAll('.page')).indexOf(prevPage);
        updateProgressBar(currentPageIndex);
    });
});