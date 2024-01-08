document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle eye icon classes
        if (type === 'password') {
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglecPassword');
    const cpasswordInput = document.getElementById('confirm-password');

    togglePassword.addEventListener('click', function () {
        const type = cpasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        cpasswordInput.setAttribute('type', type);

        // Toggle eye icon classes
        if (type === 'password') {
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});
function checkPass() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var failMessage = document.getElementById('password-match');
  
    if (password === confirmPassword && confirmPassword.length > 0) {
      failMessage.classList.remove('text-red-500' ,'font-bold');
      failMessage.classList.add('text-green-500');
      failMessage.classList.add('text-green-500','font-bold');
      failMessage.textContent = 'Password Matched';
      failMessage.classList.remove('hidden');
    } else {
      failMessage.classList.remove('text-green-500', 'font-bold');
      failMessage.classList.add('text-red-500','font-bold');
      failMessage.textContent = 'Passwords do not match';
      failMessage.classList.remove('hidden');
    }
  }
  
  
  
  
  
  
  

