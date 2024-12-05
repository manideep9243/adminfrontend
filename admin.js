
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     document.getElementById("uploadButton").click();
//   }
// });

// document.getElementById("uploadButton").addEventListener("click", async () => {
//   const fileInput = document.getElementById("fileInput");
//   const formData = new FormData();

  
//   // Check if a file is selected
//   if (!fileInput.files[0]) {
//     document.getElementById("uploadStatus").innerText = "Please select a file before uploading.";
//     document.getElementById("uploadStatus").style.color = "red";
//     return;
//   }

//   formData.append("file", fileInput.files[0]);

//   try {
//     const response = await fetch("https://adminbackend-axxb.onrender.com/admin/upload", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     document.getElementById("uploadStatus").innerText = result.message;
//     document.getElementById("uploadStatus").style.color = "green";
//     console.log("Upload successful");
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     document.getElementById("uploadStatus").innerText = "Failed to upload file.";
//     document.getElementById("uploadStatus").style.color = "red";
//   }
// });
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     document.getElementById("uploadButton").click();
//   }
// });


document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("uploadButton").click();
  }
});

document.getElementById("uploadButton").addEventListener("click", async () => {
  const fileInput = document.getElementById("fileInput");
  const formData = new FormData();
  const allowedExtensions = [".csv", ".xlsx", ".xls"];

  // Check if a file is selected
  if (!fileInput.files[0]) {
    document.getElementById("uploadStatus").innerText = "Please select a file before uploading.";
    document.getElementById("uploadStatus").style.color = "red";
    return;
  }

  const file = fileInput.files[0];
  const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

  // Validate file type
  if (!allowedExtensions.includes(fileExtension)) {
    document.getElementById("uploadStatus").innerText = "Invalid file type. Please upload a CSV or Excel file.";
    document.getElementById("uploadStatus").style.color = "red";
    return;
  }

  formData.append("file", file);

  try {
    const response = await fetch("https://adminbackend-axxb.onrender.com/admin/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    document.getElementById("uploadStatus").innerText = result.message;
    document.getElementById("uploadStatus").style.color = "green";
    console.log("Upload successful");
  } catch (error) {
    console.error("Error uploading file:", error);
    document.getElementById("uploadStatus").innerText = "Failed to upload file.";
    document.getElementById("uploadStatus").style.color = "red";
  }
});
