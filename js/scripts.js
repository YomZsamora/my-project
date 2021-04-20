$(document).ready(function () {
    $("div.alert").hide(); 
    $(".register-form").submit(function (e) {
        // Getting the user input
        let name = $("#fullName").val(); 
        let track = $('input[name="track"]:checked').val(); 
        let reason = $("#outcome").val();
        let languages = new Array(); 
        $('input[name="languages"]:checked').each(function () {
            languages.push(this.value); 
        });
        // Displaying the alert with details.
        $("#student").text(name); 
        $("#track").text(track); 
        $("#reason").text(reason); 
        $("#myLanguages").text(languages.join(", ")); 
        $("div.alert").show(); 
        e.preventDefault(); 
    })
})