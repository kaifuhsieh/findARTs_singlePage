document.addEventListener('DOMContentLoaded', function () {
    // 桌機選單
    const mainNav = document.querySelector('.main-nav');
    const mainUl = document.createElement('ul');
    const mainNavUl = mainNav.appendChild(mainUl);

    // 創建導覽項目
    const navItems = [
        { 
            href: '../index.html', 
            text: '關於FindARTs' 
        },
        { 
            href: '#', 
            text: '擬真藝屏｜系列產品', 
            submenu: [
                { 
                    href: '../collaboration/collab_tainan400.html', 
                    text: '聯名專區' 
                },
                { 
                    href: '../cht_product_series.html', 
                    text: '數位典藏精品' 
                },
                { 
                    href: '../cht_product_series_add.html', 
                    text: '新增精選畫冊' 
                }
            ]
        },
        { 
            href: '../cht_service_place.html', 
            text: '應用服務案例' 
        },
        { 
            href: '../cht_news.html', 
            text: '媒體報導' 
        },
        { 
            href: '../cht_download.html', 
            text: '相關下載' 
        },
        { 
            href: '#', 
            text: '聯絡我們', 
            submenu: [
                { 
                    href: '../cht_contact.html', 
                    text: '聯絡我們' 
                },
                { 
                    href: '../cht_gallery.html', 
                    text: '實體據點' 
                }
            ]
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


    // 手機選單
    const mNav = document.querySelector('.m-nav');
    const mUl = document.createElement('ul');
    const mNavUl = mNav.appendChild(mUl);

    // 創建導覽項目
    const m_navItems = [
        { 
            href: '../index.html', 
            text: '關於FindARTs' 
        },
        { 
            href: '../cht_product_series.html', 
            text: '數位典藏精品' 
        },
        { 
            href: '../collaboration/collab_tainan400.html', 
            text: '聯名專區' 
        },
        { 
            href: '../cht_product_series_add.html', 
            text: '新增精選畫冊' 
        },
        { 
            href: '../cht_service_place.html', 
            text: '應用服務案例' 
        },
        { 
            href: '../cht_news.html', 
            text: '媒體報導' 
        },
        { 
            href: '../cht_download.html', 
            text: '相關下載' 
        },
        { 
            href: '../cht_contact.html', 
            text: '聯絡我們' 
        },
        { 
            href: '../cht_gallery.html', 
            text: '實體據點' 
        }
    ];

    // 動態創建導覽項目
    m_navItems.forEach(item => {
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
        mNavUl.appendChild(li);
    });
});