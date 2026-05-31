const form = document.querySelector("form");
const coursesContainer = document.getElementById("courses-container");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const courseName = document.querySelector('input[placeholder="Digital marketing skills"]').value;
    const duration = document.querySelector('input[placeholder="3 weeks"]').value;
    const institution = document.querySelector('input[placeholder="Ad Expect"]').value;

    if(courseName === "" || duration === "" || institution === ""){
        alert("Please fill in all fields");
        return;
    }

    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    courseCard.innerHTML = `
        <h4>${courseName}</h4>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Status:</strong> Pending</p>
        <button class="complete-btn">Mark Complete</button>
    `;

    const completeBtn = courseCard.querySelector(".complete-btn");

    completeBtn.addEventListener("click", function(){

        courseCard.querySelector("p:last-of-type").innerHTML =
        "<strong>Status:</strong> Completed";

        completeBtn.remove();
    });

    coursesContainer.appendChild(courseCard);

    form.reset();
});