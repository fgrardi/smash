let smashed = document.querySelectorAll("#smashed");
console.log(smashed);

smashed.forEach(function (smash) {
  smash.addEventListener("click", function (e) {
    let smashedPost = smash.dataset.postid;

    //post naar database AJAX
    let formData = new FormData();
    formData.append("postid", smashedPost);

    fetch("ajax/smash_project.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.smashed === 1) {
          smash.text = "Smashed 💥";
          smash.classList.add("active");
        } else {
          smash.text = "Smash";
          smash.classList.remove("active");
        }
        console.log("Success:", result);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    e.preventDefault();
  });
});
