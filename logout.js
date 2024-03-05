function logout() {
    // Удаление токена из хранилища
    localStorage.removeItem('auth_token');
    // Переадресация на страницу входа или на главную страницу
    window.location.href = '/login.html';
}
