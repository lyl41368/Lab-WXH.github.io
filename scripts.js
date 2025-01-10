document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pubItems = document.querySelectorAll('.pub-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前点击的按钮添加active类
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            pubItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    alert('消息已发送！我们会尽快回复。');
    this.reset();
});

// 获取访问统计数据
function updateVisitorStats() {
    // 这里需要调用百度统计的API
    // 实际使用时需要替换为真实的API调用
    fetch('YOUR_API_ENDPOINT')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalVisits').textContent = data.total;
            document.getElementById('todayVisits').textContent = data.today;
        })
        .catch(error => console.error('Error fetching visitor stats:', error));
}

// 页面加载时更新统计数据
document.addEventListener('DOMContentLoaded', updateVisitorStats); 