// Navbar öğelerini oluşturup diziye ekleyelim
const navbarItems = [
    { 
        text: "Anasayfa", 
        link: "index.html" 
    },
    { 
        text: "Kurumsal", 
        submenu: [
            { text: "Hakkımızda", link: "#" },
            { text: "Yönetim Kurulu", link: "/pages/kurumsal/yonetim-kurulu/yonetim-kurulu.html" },
            { text: "Üst Yönetim", link: "/pages/kurumsal/ust-yonetim/ust-yonetim.html" },
            { 
                text: "TÜSEB Başkanı", 
                submenu: [
                    { text: "Özgeçmiş", link: "/pages/kurumsal/tuseb-baskani/ozgecmis.html" },
                    { text: "Akademik ve Bilimsel Etkinlikler", link: "/pages/kurumsal/tuseb-baskani/akademik-ve-bilimsel-etkinlikler.html" },
                    { text: "Ropörtaj ve Yayınlar", link: "/pages/kurumsal/tuseb-baskani/roportaj-ve-yayinlar.html" },
                    { text: "Başkan Fotoğrafları", link: "/pages/kurumsal/tuseb-baskani/baskan-fotograflari.html" },

                ]
            },
            { 
                text: "Teşkilat Yapısı", 
                submenu: [
                    { text: "Özel Kalem Müdürlüğü", link: "#" },
                    { 
                        text: "Genel Sekreterlik", 
                        submenu: [
                            { text: "Dış İlişkiler Daire Başkanlığı", link: "#" },
                            { text: "Hukuk Hizmetleri Daire Başkanlığı", link: "#" },
                            { 
                                text: "Strateji Geliştirme Daire Başkanlığı", 
                                submenu: [
                                    { text: "Muhasebe Kesin Hesap Birimi", link: "#" },
                                    { text: "İç Kontrol Birimi", link: "#" },
                                    { text: "Bütçe ve Performans Birimi", link: "#" },
                                    { text: "Strateji Yönetim ve Planlama Birimi", link: "#" },
                
                                ]
                            },
                            { 
                                text: "Yönetim Hizmetleri Daire Başkanlığı", 
                                submenu: [
                                    { text: "Bilgi İşlem Birimi", link: "#" },
                                    { text: "İnsan Kaynakları Birimi", link: "#" },
                                    { text: "Destek Hizmetleri Birimi", link: "#" },
                                    { text: "İdari ve Mali İşler Birimi", link: "#" },
                
                                ]
                            },
        
                        ]
                    },
                    { 
                        text: "Başkan Yardımcısı 1", 
                        submenu: [
                            { text: "Sağlık Endüstrileri Yerlileştirme ve Proje Geliştirme Daire Başkanlığı", link: "#" },
                            { text: "Teknoloji Transfer Ofisi", link: "/pages/kurumsal/teskilat-yapisi/baskan-yardimcisi-1/teknoloji-transfer-ofisi.html" }
        
                        ]
                    },
                    { 
                        text: "Başkan Yardımcısı 2", 
                        submenu: [
                            { text: "Proje Yönetimi ve Destek Daire Başkanlığı", link: "#" },
                            { text: "Proje Destek Politikaları Birimi", link: "#" }
        
                        ]
                    },
                    
                    { text: "Başkan Yardımcısı 3", link: "#" },
                    { text: "Enstitü Başkanlıkları", link: "#" },


                ]
            },
            { 
                text: "Mevzuatlar", 
                submenu: [
                    { text: "Kanunlar", link: "#" },
                    { text: "Cumhurbaşkanlığı Kararnameleri", link: "#" },
                    { text: "Yönetmelikler", link: "/pages/kurumsal/mevzuatlar/yonetmelikler/yonetmelikler.html" },
                    { text: "Usul ve Esaslar", link: "#" },
                    { text: "Genelgeler", link: "#" },
                    { text: "Yönergeler", link: "#" },
                    { text: "Kamu Etik Davranış Kuralları", link: "#" },

                ]
            },
            
            { text: "Mali Duyurular", link: "/pages/kurumsal/mali-duyurular/mali-duyurular.html" },
            { text: "Faaliyet Raporları", link: "#" },
            { text: "Stratejik Planlar", link: "/pages/kurumsal/stratejik-planlar/stratejik-planlar.html" },
            { 
                text: "İç Kontrol", 
                submenu: [
                    { text: "İç Kontrol Hakkında", link: "/pages/kurumsal/ic-kontrol/ic-kontrol-hakkinda.html" },
                    { text: "Eylem Planları", link: "#" },
                    { text: "Değerlendirme Raporları", link: "#" },
                    { text: "İç Kontrol Dökümanları", link: "#" }

                ]
            },
            { text: "Performans Programları", link: "#" },
            { text: "Arabuluculuk Komisyonu", link: "#" },
            { text: "İnsan Kaynakları", link: "#" },
            { 
                text: "Yayınlar", 
                submenu: [
                    { text: "TÜSEB Dergisi", link: "#" },
                    { text: "TÜSEB 2040 Strateji ve Vizyon Çalıştayı Raporu", link: "#" },
                    { text: "Klinik Araştırmalar Mevcut Durum ve Öneriler Çalıştay Raporu", link: "#" },
                    { text: "Türk Devletleri Teşkilatı 8. Türk Tıp Dünyası Kurultayı Çalıştay Raporu", link: "#" },
                    { text: "Analizler ve Raporlar", link: "/pages/kurumsal/yayinlar/analizler-ve-raporlar.html" },
                    { text: "Kitaplar ve Kitap Bölümleri", link: "#" },
                    { text: "Rehberler", link: "#" },
                    { text: "Röportajlar", link: "#" },
                    { text: "TÜSEB Geleceğin Pandemileri Sempozyumu Raporu", link: "#" },
                    { text: "9. Türk Tıp Dünyası Kurultayı Raporu", link: "#" },
                    { 
                        text: "Makaleler", 
                        submenu: [
                            { text: "Sağlıkta Çözüm Teknolojide", link: "#" },
                            { text: "COVID-19'da 'fikirden ürüne' etkin güç: TÜSEB", link: "#" },
                            { text: "TÜSEB'in Biyoteknoloji Alanındaki AR-GE Faaliyet ve Destekleri", link: "#" }
                            
        
                        ]
                    },
                    

                ]
            },
            { text: "Teşkilat Şeması", link: "#" },
            { text: "Yerleşkelerimiz", link: "/pages/kurumsal/yerleskelerimiz/yerleskelerimiz.html" }

        ]
    },
    { 
        text: "Enstitüler", 
        submenu: [
            { text: "Türkiye Anne Çocuk ve Ergen Sağlığı Enstitüsü", link: "#" },
            { text: "Türkiye Biyoteknoloji Enstitüsü", link: "#" },
            { text: "Türkiye Kanser Enstitüsü", link: "#" },
            { text: "Türkiye Halk Sağlığı ve Kronik Hastalıklar Enstitüsü", link: "#" },
            { text: "Türkiye Sağlık Hizmetleri Kalite ve Akreditasyon Enstitüsü", link: "#" },
            { text: "Türkiye Sağlık Politikaları Enstitüsü", link: "#" },
            { text: "Türkiye Aşı Enstitüsü", link: "#" },
            { text: "Türkiye Sağlık Veri Araştırmaları ve Yapay Zeka Uygulamaları Enstitüsü", link: "#" }
            

        ]
    },
    { 
        text: "Merkezler", 
        submenu: [
            { text: "Türkiye Ulusal Genom Merkezi (TUGEM)", link: "#" },
            { text: "BİYAŞAM", link: "#" }
            

        ]
    },
    { text: "Proje Destekleri", link: "#" },
    { 
        text: "TÜSEB TTO", 
        submenu: [
            { text: "Girişimcilik ve İnovasyon Birimi", link: "#" },
            { text: "Yerlileştirme ve Ticarileştirme Birimi", link: "#" },
            { text: "Fikri ve Sınai Mülkiyet Hakları Birimi", link: "#" },
            { text: "Klinik Araştırmalar Koordinasyon Birimi", link: "#" },
            { text: "Teknoloji Dönüşümü Eğitim Birimi", link: "#" },
            { text: "Ekibimiz", link: "/pages/kurumsal/teskilat-yapisi/baskan-yardimcisi-1/teknoloji-transfer-ofisi.html" },
            { text: "TTO İletişim", link: "/pages/tuseb-tto/tto-iletisim.html" }
            

        ]
    },
    { 
        text: "Basın", 
        submenu: [
            { text: "Basında TÜSEB", link: "/pages/basin/basinda-tuseb.html" }
            

        ]
    },
    

];


// Navbar HTML kodunu oluşturmak için gerekli olan fonksiyon
$(document).ready(function() {
    const navbarDiv = $("#navbarNavDropdown");
    const navbarNav = $("<ul>", { class: "navbar-nav " });
    
    let isDropdownHovered = false; // Dropdown menüsünün içinde imleç var mı yok mu
    
    navbarItems.forEach(function(item) {
        const navItem = $("<li>", { class: "nav-item  " });
        
        if (item.submenu) {
            navItem.addClass("dropdown");
            
            const dropdownToggle = $("<div>", { role: "button" ,  id:"nav-link-toggle" });
            const dropdownToggleContent = $("<a>", {
                text: item.text,
                href: "#",
                class: "nav-link"
            });
            const dropdownToggleIcon = $("<i>", { class: "fa-solid fa-caret-down" });
            
            dropdownToggle.append(dropdownToggleContent, dropdownToggleIcon);
            
            const dropdownMenu = $("<ul>", { class: "dropdown-menu" });
            createSubmenuHTML(item.submenu, dropdownMenu);
            
            navItem.append(dropdownToggle, dropdownMenu);
            
            // Dropdown menüsü hover olduğunda icon değişimi
            navItem.hover(function() {
                dropdownToggleIcon.toggleClass('fa-caret-down fa-caret-up');
            });
        } else {
            const navLink = $("<a>", {
                class: "nav-link",
                href: item.link,
                text: item.text
            });
            
            navItem.append(navLink);
        }
        
        navbarNav.append(navItem);
    });
    
    navbarDiv.append(navbarNav);
});







function createSubmenuHTML(submenuItems, parentElement) {
    $.each(submenuItems, function(index, subItem) {
        
        const submenuItem = $("<li>",
        { class: "other-dropdown-item" }
            
        );

        const submenuLink = $("<a>", {
            class: "nav-link other-dropdown-item ",
            href: subItem.link,
            text: subItem.text
        });
        
        submenuItem.append(submenuLink);

        if (subItem.submenu) {
            submenuItem.addClass("dropend");
            
            submenuLink.addClass(" ")
                       .attr({
                           role: "button",
                           
                           "aria-expanded": "false",

                       });
            
            const submenuMenu = $("<ul>", { class: "dropdown-menu" });
            const dropdownToggleIcon = $("<i>", { class: "fa fa-solid fa-caret-right" });
            createSubmenuHTML(subItem.submenu, submenuMenu);

            submenuItem.hover(function() {
                dropdownToggleIcon.toggleClass('fa-caret-right fa-caret-left');
            });
            submenuItem.append(submenuMenu, dropdownToggleIcon);
        }

        parentElement.append(submenuItem);
        
       

    });
}









