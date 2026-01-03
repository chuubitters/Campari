document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            navbar.style.padding = "15px 50px";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.padding = "20px 50px";
        }
    });

    // --- Hero Slider Logic ---
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // ฟังก์ชันเปลี่ยน Slide ตามเวลา (Auto)
    function showSlides() {
        // ลบคลาส active ออกจากทุกรูปและจุด
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        // เติมคลาส active ให้รูปปัจจุบัน
        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active');

        // เปลี่ยนรูปทุก 4 วินาที
        setTimeout(showSlides, 4000); 
    }

    // เริ่มทำงาน Auto Slide
    showSlides();
});

// ฟังก์ชันสำหรับกดปุ่ม Dot (Manual)
// หมายเหตุ: แบบ Manual เต็มรูปแบบต้องปรับแก้ JS เพิ่มเติมเพื่อหยุด Loop ชั่วคราว 
// แต่ในระดับเบื้องต้น ใช้ CSS Hover หรือ Auto slide ไปก่อนจะง่ายกว่าครับ