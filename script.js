let entries = [];
let editIndex = null;

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const hobbies = document.getElementById('hobbies').value;
    const student = document.getElementById('students').checked ? "Yes" : "No";

  
    const entry = {
        name,
        age,
        hobbies,
        student
    };

    if (editIndex !== null) {
       
        entries[editIndex] = entry;
        editIndex = null;
    } else {
        
        entries.push(entry);
    }

    
    displayEntries();

   
    document.getElementById('infoForm').reset();

  
    document.getElementById('actions').style.display = 'none';
});

function displayEntries() {
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = entries.map((entry, index) => `
        <div>
            <strong>Name:</strong> ${entry.name} <br>
            <strong>Age:</strong> ${entry.age} <br>
            <strong>Hobbies:</strong> ${entry.hobbies} <br>
            <strong>Student:</strong> ${entry.student}
            <button onclick="editEntry(${index})">Edit</button>
            <button onclick="deleteEntry(${index})">Delete</button>
            <hr>
        </div>
    `).join('');
}

function editEntry(index) {
    const entry = entries[index];
    
    document.getElementById('name').value = entry.name;
    document.getElementById('age').value = entry.age;
    document.getElementById('hobbies').value = entry.hobbies;
    document.getElementById('students').checked = (entry.student === "Yes");

 
    document.getElementById('actions').style.display = 'block';

   
    editIndex = index;
}

function deleteEntry(index) {
    entries.splice(index, 1);
    displayEntries();
    document.getElementById('actions').style.display = 'none';
    document.getElementById('infoForm').reset();
}


document.getElementById('editBtn').addEventListener('click', function() {
    if (editIndex !== null) {
       
        editIndex = null;
    }
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    if (editIndex !== null) {
     
        entries.splice(editIndex, 1);
        displayEntries();
        document.getElementById('infoForm').reset();
        document.getElementById('actions').style.display = 'none';
        editIndex = null;
    }
});
