function show(sectionid) {
    var sections = document.querySelectorAll('.content-box');
    sections.forEach(function(section) {
        if (section.id === sectionid) {
            section.style.display = 'flex'; 
            updateProgress(section)
        } else {
            section.style.display = 'none'; // Hide other sections
        }
    });
}


function updateProgress(section) {
    var todoItems = section.querySelectorAll('.projects input[type="checkbox"]');
    var checkedCount = 0;
    todoItems.forEach(function(item) {
        if (item.checked) {
            checkedCount++;
        }
        item.addEventListener('change', function() {
            updateProgress(section);
        });
    });
    var progress = (checkedCount / todoItems.length) * 100;
    var progressBar = section.querySelector('.progress-bar .progress');
    progressBar.style.width = progress + '%';
    var progressLabel = section.querySelector('.progress-label');
    progressLabel.textContent = Math.round(progress) + '%';
    var messages = document.querySelectorAll('.msg')
    messages.forEach(function(message){
    if(progress>=0 && progress<=30)
    {
        message.innerText="keep going.❤️"
    } 
    else if(progress>30 && progress<=70)
    {
        message.innerText="Amazing! almost there.🫠"
    }
    else if(progress>70 && progress<=99)
    {
        message.innerText="Slight more effort.💪"
    }
    else{
        message.innerText="Hurray! Hop on another level.💖"
    }
})
}

















// Add event listener to all checkboxes
// document.querySelectorAll('.projects input[type="checkbox"]').forEach(function(item) {
//     item.addEventListener('change', function() {
//         // Get the section containing the changed checkbox
//         var section = this.closest('.projects');
//         // Update progress for that section
//         updateProgress(section.closest('#content-box'));
//     });
// });
