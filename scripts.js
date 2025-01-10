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

// 论文过滤功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const pubItems = document.querySelectorAll('.pub-item');
            
            pubItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'flex';
                } else {
                    if (item.classList.contains(filterValue)) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // 浏览器支持懒加载
        images.forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    } else {
        // 浏览器不支持懒加载，加载懒加载polyfill
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
}); 