document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let commentText = document.getElementById("comment").value;
    
    let newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerHTML = "<p>" + name + ": " + commentText + "</p>";
    
    document.getElementById("commentSection").appendChild(newComment);
    
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});
