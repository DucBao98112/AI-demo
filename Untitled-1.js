
const users = {};  // { email: password }

// Tham chiếu đến form và phần welcome
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const welcomeDiv = document.getElementById('welcome');
const userEmailSpan = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-button');

// Xử lý đăng ký
signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-password').value;
  if (users[email]) {
    return alert('Tài khoản đã tồn tại!');
  }
  users[email] = pass;
  alert('Đăng ký thành công! Giờ bạn có thể đăng nhập.');
  signupForm.reset();
});

// Xử lý đăng nhập
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-password').value;
  if (users[email] === pass) {
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
    userEmailSpan.textContent = email;
    welcomeDiv.classList.remove('hidden');
  } else {
    alert('Đăng nhập thất bại! Email hoặc mật khẩu sai.');
  }
});

// Đăng xuất
logoutBtn.addEventListener('click', () => {
  welcomeDiv.classList.add('hidden');
  loginForm.classList.remove('hidden');
  signupForm.classList.remove('hidden');
  signupForm.reset();
  loginForm.reset();
});
