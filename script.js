// Use this function to get an image source out of the the image upload box.
function getImageFromUpload() {
  let image = document.querySelector("#imageUpload").files[0];
  return URL.createObjectURL(image);
}

// Update the username field with the username that was input
function updateUsername() {
  // Get the username that was typed
  let username = document.getElementById("username").value;
  // Put the username in the preview
  document.getElementById("previewUsername").innerText = username;
}

function updatePostText() {
  // Get the post's preview text
  let postText = document.getElementById("postText").value;
  // If empty, show the default text
  if (postText === "") {
    document.getElementById("previewText").innerText =
      "Your post will show here...";
  } else {
    document.getElementById("previewText").innerText = postText;
  }
}

function updateImage() {
  // Get the image source using the getImageFromUpload function
  let imageSource = getImageFromUpload();
  // Update the preview image
  document.getElementById("previewImage").setAttribute("src", imageSource);
}

function updateImageStyle() {
  // Get the selected style
  let style = document.getElementById("imageStyle").value;
  // Keep post-image and add the selected style
  document
    .getElementById("previewImage")
    .setAttribute("class", "post-image " + style);
}
