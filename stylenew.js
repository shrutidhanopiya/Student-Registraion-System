let students = JSON.parse(localStorage.getItem("students")) || [];

    const studentForm = document.getElementById("form");
    const recordTable = document.getElementById("recordTable");
 const button=document.getElementById("btn");

    // Array to hold student data

function renderStudents() {
    recordTable.innerHTML = "";
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td >${student.name}</td>
            <td>${student.id}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        row.style.justifyContent="space-evenly";
        // RegistrationList.style.display=flex;
  // RegistrationList.style.padding="25px";
        recordTable.appendChild(row);
    });
}

// Add student function
button.addEventListener("click", function(event){
    event.preventDefault(); 

    const name = document.getElementById("Student-name").value.trim();
    const id = document.getElementById("Student-id").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact-Number").value.trim();

    // Validation
    if (!name || !id || !email || !contact) {
        alert("All fields are required!");
        return;
    }

    // Add student to the array
    students.push({ name, id, email, contact });
    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();
    studentForm.reset();
});

// Edit student function


// Initial render

function editStudent(index) {
    const student = students[index];
    document.getElementById("Student-name").value = student.name;
    document.getElementById("Student-id").value = student.id;
    document.getElementById("email").value = student.email;
    document.getElementById("contact-Number").value = student.contact;

    // students.splice(index, 1); // Remove the student being edited
    alert("Go to your form and Edit your details!!")
    renderStudents();
}

// Delete student function
function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();
}
renderStudents();
