document.addEventListener('DOMContentLoaded', function () {
    // 桌機選單
    const mainNav = document.querySelector('.main-nav');
    const mainUl = document.createElement('ul');
    const mainNavUl = mainNav.appendChild(mainUl);

    // 創建導覽項目
    const navItems = [
        { 
            href: 'index_en.html', 
            text: 'FindARTs' 
        },
        { 
            href: 'en_service_place.html', 
            text: 'Service Cases' 
        },
        { 
            href: 'en_news.html', 
            text: 'Media Report' 
        },
        { 
            href: 'en_download.html', 
            text: 'Downloads' 
        },
        { 
            href: 'en_contact.html', 
            text: 'Contact Us' 
        }
    ];

    // 動態創建導覽項目
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);

        // 如果有子選單，則創建子選單
        if (item.submenu) {
            const submenuUl = document.createElement('ul');
            submenuUl.className = 'submenu';
            item.submenu.forEach(subitem => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.href = subitem.href;
                subA.textContent = subitem.text;
                subLi.appendChild(subA);
                submenuUl.appendChild(subLi);
            });
            li.appendChild(submenuUl);
        };
        mainNavUl.appendChild(li);
    });

});