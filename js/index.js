$('#fullpage').fullpage({
        verticalCentered: true,

        afterLoad: function(anchorLink, index) {
            var upbutton = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M2.782 3.782c-1.794 1.794-2.782 4.18-2.782 6.718s0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.717-0.988-4.923-2.782-6.718-4.18-2.782-6.718-2.782-4.923 0.988-6.718 2.782zM18 10.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5z"></path><path d="M15 12c0 0.128-0.049 0.256-0.146 0.354-0.195 0.195-0.512 0.195-0.707 0l-4.646-4.646-4.646 4.646c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l5-5c0.195-0.195 0.512-0.195 0.707 0l5 5c0.098 0.098 0.146 0.226 0.146 0.354z"></path></svg>'
            var downbutton = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M16.218 17.218c1.794-1.794 2.782-4.18 2.782-6.718s-0.988-4.923-2.782-6.717-4.18-2.782-6.718-2.782-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782zM1 10.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5z"></path><path d="M4 9c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l4.646 4.646 4.646-4.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5 5c-0.195 0.195-0.512 0.195-0.707 0l-5-5c-0.098-0.098-0.146-0.226-0.146-0.354z"></path></svg>'
            if (index < 2) {
                if (index != 1) {
                    $("#top").html(upbutton)
                } else {
                    $("#top").html('')
                }
                $("#bottom").html(downbutton)
            } else {
                $("#bottom").html('')
                $("#top").html(upbutton)
            }
        },
    }),

    $("#top").click(function() {
        $.fn.fullpage.moveSectionUp();
    }),
    $("#bottom").click(function() {
        $.fn.fullpage.moveSectionDown();
    });

var modal = document.getElementById('myModal');
var btn = document.getElementById("buy");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}