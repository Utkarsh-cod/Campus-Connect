const notices = [
    "Semester exams start from May 10",
    "Coding Club meeting at 4 PM today",
    "Submit lab files by Friday"
  ];
  
  function loadNotices() {
    const board = document.getElementById("noticeBoard");
    notices.forEach(n => {
      const li = document.createElement("li");
      li.textContent = n;
      board.appendChild(li);
    });
  }
  
  function submitFeedback() {
    alert("Thank you for your feedback!");
  }
  
  loadNotices();
  