function convertCode() {
    // دریافت کد ورودی
    let inputCode = document.getElementById('inputCode').value;

    // عملیات تبدیل (به عنوان مثال: تبدیل همه حروف به حروف بزرگ)
    let outputCode = inputCode.toUpperCase();

    // نمایش کد تبدیل شده
    document.getElementById('outputCode').value = outputCode;
}
