declare let html2pdf: any;

document.addEventListener("DOMContentLoaded", () => {
    // Function to create and update the resume preview
    function createResume() {
        const userName = (document.getElementById("name") as HTMLInputElement).value || "No Name Provided";
        const userProfession = (document.getElementById("profession") as HTMLInputElement).value || "No Profession Provided";

        // Helper function to format text areas into list items
        const formatList = (input: string) =>
            input ? input.split('\n').map(item => `<li>${item.trim()}</li>`).join('') : "<li>No Data Provided</li>";

        const userSkills = formatList((document.getElementById("skills") as HTMLTextAreaElement).value);
        const userEducation = formatList((document.getElementById("education") as HTMLTextAreaElement).value);
        const userLanguage = formatList((document.getElementById("languages") as HTMLTextAreaElement).value);
        const userInterests = formatList((document.getElementById("interests") as HTMLTextAreaElement).value);
        const userContact = formatList((document.getElementById("contact") as HTMLTextAreaElement).value);

        const resumeHtml = `
            <div id="resumeContent" contenteditable="true" style="font-family: Arial, sans-serif; color: #333; background-color: #e5f7e5; padding: 20px; border-radius: 8px;">
                <h1 style="color: #2e3a23;">${userName}</h1>
                <h2 style="color: #2e3a23;">${userProfession}</h2>
                <h3>Skills</h3>
                <ul>${userSkills}</ul>
                <h3>Education</h3>
                <ul>${userEducation}</ul>
                <h3>Languages</h3>
                <ul>${userLanguage}</ul>
                <h3>Interests</h3>
                <ul>${userInterests}</ul>
                <h3>Contact Information</h3>
                <ul>${userContact}</ul>
            </div>
        `;

        // Insert the generated resume into the preview section
        document.getElementById('resume')!.innerHTML = resumeHtml;
    }

    // Trigger the createResume function to update preview
    document.getElementById("resumeOutput")?.addEventListener('click', createResume);

    document.getElementById("btn2")?.addEventListener("click", () => {
        const resumeElement = document.getElementById("resumeContent");
        if (resumeElement) {
            html2pdf().set(
                {
                    margin: 1,
                    filename: "resume.pdf",
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas:{scale:2},
                    jsPDF : {unit :'in', format : 'letter' , orientation :"portrait"}
                }
            ).from(resumeElement).save()
        }
    })
    // // Download PDF when Download Resume button is clicked
    // document.getElementById("btn2")?.addEventListener("click", () => {
    //     const resumeElement = document.getElementById('resumeContent');
    //     if (resumeElement) {
    //         html2pdf().set({
    //             margin: 1,
    //             filename: 'resume.pdf',
    //             image: { type: 'jpeg', quality: 0.98 },
    //             html2canvas: { scale: 2 },
    //             jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //         }).from(resumeElement).save();
    //     }
    // });
});
