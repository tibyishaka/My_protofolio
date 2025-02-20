document.addEventListener('DOMContentLoaded', function(){
  const commentForm = document.getElementById('commentForm');
  const userMessage = document.getElementById('userMessage');
  const charCount = document.getElementById('charCount');
  const maxChars = 300;

  // Update character count as the user types
  userMessage.addEventListener('input', function(){
    const currentLength = userMessage.value.length;
    charCount.textContent = `${currentLength} / ${maxChars}`;
    charCount.style.color = currentLength > maxChars ? 'red' : '#666';
  });

  // Handle form submission
  commentForm.addEventListener('submit', function(e){
    e.preventDefault();
    if (userMessage.value.length > maxChars) {
      alert('Your message exceeds the maximum allowed characters.');
      return;
    }
    // Simulate a submission action (e.g., send data via AJAX)
    alert('Thank you for your comment!');
    commentForm.reset();
    charCount.textContent = `0 / ${maxChars}`;
  });
});