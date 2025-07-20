let selected = null;
function selectRole(role) {
  selected = role;
  document.querySelectorAll('.role-card').forEach(card => card.classList.remove('selected'));
  document.getElementById(role + 'Card').classList.add('selected');
}
function goNext() {
  if (!selected) {
    alert("Please select a role.");
    return;
  }
  if (selected === 'customer') {
    window.location.href = 'login-recevier.html';
  } else if (selected === 'provider') {
    window.location.href = 'login-provider.html';
  } else if (selected === 'admin') {
    window.location.href = 'login-admin.html';
  }
}
