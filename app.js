"use strict";
var _a;
function createResume() {
    const userName = document.getElementById("name").value;
    const userProfession = document.getElementById("profession").value;
    const userSkills = document.getElementById("skills").value;
    const userEduction = document.getElementById("education").value;
    const userLanguage = document.getElementById("languages").value;
    const userInterests = document.getElementById("interests").value;
    const userContact = document.getElementById("contact").value;
    const resumeHtml = `
    <div>
    <h1>${userName}</h1>
    <h2>${userProfession}</h2>
    <h3>Skills</h3>
    <p>⚫${userSkills}</p>
    <h3>Education</h3>
    <p>⚫${userEduction}</p>
    <h3>Language</h3>
    <p>⚫${userLanguage}</p>
    <h3>Interest</h3>
    <p>⚫${userInterests}</p>
    <h3>Contact</h3>
    <p>${userContact}</p>
    </div>
    `;
    document.getElementById('resume').innerHTML = resumeHtml;
}
//add event;
const eventCall = (_a = document.getElementById("resumeOutput")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    // e.preventDefault();
    createResume();
});
