document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 简单验证
    if (username === 'admin' && password === '123456') {
        alert('登录成功！');
        // 这里可以添加重定向到其他页面的代码
    } else {
        alert('用户名或密码错误，请重试。');
    }
});