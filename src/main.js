import './style.css';

// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';

// sample 1
var swiper = new Swiper(".mySwiper0", {
  loop:true,
});

// sample 2
var swiper = new Swiper(".mySwiper", {
  // جهت حرکت اسلایدها
  // direction: "rtl", // در صورت نیاز به راست‌چین شدن کامل Swiper فعال کنید
  loop: true,
  
  // تنظیمات ناوبری (فلش‌های بعدی و قبلی)
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  
  // تنظیمات صفحه‌بندی (نقاط اسلایدر)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  // تعداد اسلایدهای قابل مشاهده و فاصله بین آنها
  slidesPerView: 1,
  spaceBetween: 10,
  
  // تنظیمات ریسپانسیو
  breakpoints: {
    // از عرض 640 پیکسل به بالا
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // از عرض 1024 پیکسل به بالا
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});