var skillButton = document.getElementById('button-skills');
var skills = document.getElementById('skills');
skillButton.addEventListener('click', function () {
    if (skills.style.display == 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
