function createResume():void {
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const userProfession = (document.getElementById("profession") as HTMLInputElement).value;
    const userSkills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const userEduction =(document.getElementById("education") as HTMLTextAreaElement).value;
    const  userLanguage = (document.getElementById("languages")as HTMLTextAreaElement).value;
    const userInterests = (document.getElementById("interests") as HTMLTextAreaElement).value;
    const userContact = (document.getElementById("contact")as HTMLTextAreaElement).value;

    const resumeHtml=`
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
 document.getElementById('resume')!.innerHTML=resumeHtml
}

//add event;

const eventCall = document.getElementById("resumeOutput")?.addEventListener('click',(e)=>{
    // e.preventDefault();
    createResume()
})