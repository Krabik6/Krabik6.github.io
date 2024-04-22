function logout() {
    // Удаление токена из хранилища
    localStorage.removeItem('auth_token');
    // Переадресация на страницу входа или на главasdfную страницу
    window.location.href = '/login.html';
}
