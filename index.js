$(document).ready(function() {
    $('#tbl').DataTable({
        responsive: true,
        columnDefs: [
            {
                targets: [0], // Column index to be hidden
                responsivePriority: 1 // Set the priority for hiding the column
            }
        ]
    });
});


console.log('By Obakeng Freddy Diphoko');