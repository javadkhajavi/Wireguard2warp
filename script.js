function convertCode() {
    // دریافت کد ورودی از textarea
    let inputCode = document.getElementById('inputCode').value;

    // افزودن warp:// به ابتدای کد
    let modifiedCode = "warp://" + inputCode;

    // تبدیل کد به JSON
    let lines = inputCode.split('\n');
    let jsonObject = {};

    lines.forEach(line => {
        if (line.includes('=') && !line.startsWith('warp://')) {
            let parts = line.split('=');
            let key = parts[0].trim();
            let value = parts[1].trim();
            jsonObject[key] = value;
        }
    });

    // افزودن warp:// به JSON
    jsonObject["prefix"] = "warp://";

    // اضافه کردن مقادیر جدید به JSON
    jsonObject["fake_packets"] = "40-80";
    jsonObject["fake_packets_size"] = "40-100";
    jsonObject["fake_packets_delay"] = "4-8";
    jsonObject["fake_packets_mode"] = "m4";

    // تبدیل به JSON
    let outputCode = JSON.stringify(jsonObject, null, 4);

    // نمایش کد تبدیل شده در textarea خروجی
    document.getElementById('outputCode').value = outputCode;
}
