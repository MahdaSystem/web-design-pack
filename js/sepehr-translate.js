/*
    Sepehr-Translate v0.3 | github.com/qwerty13
*/

var myLanguage = localStorage.getItem('dispLang');
if (null === myLanguage) {
    localStorage.setItem("dispLang", "en");
    myLanguage = localStorage.getItem('dispLang');
}

const translate_fa = {
    // General
    "Version" : "نسخه",
    "All Rights Reserved" : "تمامی حقوق محفوظ است",
    "General" : "کلی",
    "Enable" : "فعال",
    "Category" : "دسته‌بندی",
    "All" : "همه",
    "None" : "هیچ",
    "Enable" : "فعال",
    "Disable" : "غیرفعال",
    "On" : "روشن",
    "Off" : "خاموش",
    "Turn On" : "روشن کردن",
    "Turn Off" : "خاموش کردن",
    "Not Found" : "پیدا نشد",
    "Unknown" : "ناشناخته",
    "Total" : "کل",
    "Date" : "تاریخ",
    "Time" : "زمان",
    "DateTime" : "تاریخ و زمان",
    "Voltage" : "ولتاژ",
    "Line Voltage" : "ولتاژ خط",
    "Voltages" : "ولتاژ ها",
    "Delete" : "حذف",
    "Delete All" : "حذف همه",
    "Interval" : "بازه",
    "Refresh" : "تازه‌سازی",
    "Refresh: Every" : "تازه‌سازی: هر",
    "Turn On Auto Refresh" : "روشن کردن تازه‌سازی خودکار",
    "Turn Off Auto Refresh" : "خاموش کردن تازه‌سازی خودکار",
    "Go" : "برو",
    "Get" : "دریافت",
    "Save" : "ذخیره",
    "Toggle Darkmode" : "تغییر وضعیت حالت تاریک",
    "Import" : "درون‌ریزی",
    "Export" : "برون‌ریزی",
    "Import Page Settings" : "درون‌ریزی تنظیمات صفحه",
    "Export Page Settings" : "برون‌ریزی تنظیمات صفحه",
    "Go back" : "برگرد عقب",
    "Login" : "ورود",
    "Logout" : "خروج",
    "Username" : "نام کاربری",
    "Password" : "رمز عبور",
    "Change Password" : "تغییر رمز عبور",
    "Current Password" : "رمز عبور فعلی",
    "New Password" : "رمز عبور جدید",
    "Repeat New Password" : "تکرار رمز عبور جدید",
    "New Passwords are not match!" : "رمزهای عبور جدید با هم یکسان نیستند!",
    "Search" : "جستجو",
    "Show Content" : "نمایش محتوا",
    "Show Help" : "نمایش راهنما",
    "From" : "از",
    "To" : "تا",
    "Or" : "یا",
    "Update" : "بروزرسانی",
    "Last Update" : "آخرین بروزرسانی",
    "Reset" : "بازنشانی",
    "Last Reset" : "آخرین بازنشانی",
    "Last Counter Reset" : "آخرین بازنشانی شمارنده",
    "Last min-max Reset" : "آخرین بازنشانی حداقل-حداکثر",
    "Blank" : "خالی",
    "Never" : "هرگز",
    "Per" : "برحسب",
    "Year" : "سال",
    "Yearly" : "سالانه",
    "Month" : "ماه",
    "Monthly" : "ماهانه",
    "Week" : "هفته",
    "Weekly" : "هفتگی",
    "Day" : "روز",
    "Daily" : "روزانه",
    "Hour" : "ساعت",
    "Hours" : "ساعت",
    "Hourly" : "ساعتی",
    "Minute" : "دقیقه",
    "Minutes" : "دقیقه",
    "Second" : "ثانیه",
    "Seconds" : "ثانیه",
    "Sec." : "ثانیه",
    "Sec" : "ثانیه",
    "Second(s)" : "ثانیه",
    "Saturday" : "شنبه",
    "Sunday" : "یکشنبه",
    "Monday" : "دوشنبه"	,
    "Tuesday" : "سه‌شنبه",
    "Wednesday" : "چهارشنبه",
    "Thursday" : "پنجشنبه",
    "Friday" : "جمعه",
    "January" : "ژانویه",
    "February" : "فوریه",
    "March" : "مارس",
    "April" : "آوریل",
    "May" : "مه",
    "June" : "ژوئن",
    "July" : "جولای",
    "August" : "آگوست",
    "September" : "سپتامبر",
    "October" : "اکتبر",
    "November" : "نوامبر",
    "December" : "دسامبر",
    "First day of week" : "اولین روز هفته",
    "Last day of week" : "آخرین روز هفته",
    "First day of" : "اولین روزِ",
    "Last day of" : "آخرین روزِ",
    "Start of" : "شروعِ",
    "End of" : "پایانِ",
    "Description" : "توضیحات",
    "Name" : "نام",
    "Value" : "مقدار",
    "Values" : "مقادیر",
    "Unit" : "واحد",
    "Min" : "حداقل",
    "Minimum" : "حداقل",
    "Maximum" : "حداکثر",
    //
    // Login
    "Login to access this page" : "برای دسترسی به این صفحه وارد شوید",
    //
    // Not Found
    "The page you're looking for not found" : "صفحه‌ای که به دنبال آن هستید پیدا نشد",
    "Make sure your address is correct" : "مطمئن شوید که نشانی وارد شده صحیح باشد",
    //
    // Not Auth
    "Permision Denied" : "دسترسی رد شد",
    "You're not allowed to access the page" : "شما اجازه دسترسی به این صفحه را ندارید",
    "Make sure you're logged in with correct username" : "مطمئن شوید که با نام کاربری صحیح وارد شده‌اید",
    //
    // Alerts
    "Failed to connect to server!" : "ارتباط با سرور ناموفق بود!",
    "You are not authorized to do this!" : "شما مجاز به انجام این کار نیستید!",
    "Check Empty Inputs!" : "ورودی‌های خالی را بررسی کنید!",
    "Check Input Ranges!" : "محدوده‌های ورودی را بررسی کنید!",
    "Check Input Length!" : "تعداد حروف ورودی را بررسی کنید!",
    "Check Input validity!" : "صحیح بودن ورودی را بررسی کنید!",
    "File is corrupted!" : "پرونده خراب است!",
    "Failed to import file!" : "درون‌ریزی کردن پرونده ناموفق بود!",
    "No exportable setting found!" : "تنظیمی که قابل صادر کردن باشد پیدا نشد!",
    "File does not match to this page!" : "پرونده با این صفحه منطبق نیست!",
    "Are you sure?" : "آیا اطمینان دارید؟",
    "Password is incorrect!" : "رمز عبور اشتباه است!",
    "The Password should be at least 8 characters length." : "طول رمز عبور میبایستی حداقل 8 حرف باشد.",
    "The Password should be between 4 and 19 characters length." : "طول رمز عبور میبایستی بین 4 و 19 حرف باشد.",
    "Note" : "نکته",
    "Success" : "موفق بود",
    "Failed" : "ناموفق بود",
    "Log Status Changed" : "وضعیت لاگ تغییر یافت",
    "field(s) changed" : "فیلد تغییر یافت",
    "All fields changed" : "تمامی فیلدها تغییر کردند",
    "Applying changes to this page cause the device to close and create new related log files." : "اعمال تغییر در این صفحه موجب می‌شود تا دستگاه پرونده‌های لاگ مربوطه را بسته و پرونده جدید ایجاد کند.",
    //
}

function findValueOfProperty(obj, propertyName){
    let reg = new RegExp("^" + propertyName.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + "$", "i"); // "i" to make it case insensitive
    return Object.keys(obj).reduce((result, key) => {
        if( reg.test(key) ) result.push(obj[key]);
        return result;
    }, []);
}

function getTranslate(myWord) {
    // return eval("translate_" + myLanguage)[myWord]
    try {
        let tempWord = findValueOfProperty(eval("translate_" + myLanguage), myWord);
        if (tempWord !== undefined && tempWord != "")
            return tempWord;
        else
            return myWord;
    } catch (error) {
        // console.log(error);
        return myWord;
    }
}

function writeTranslate(myWord) {
    document.write(getTranslate(myWord));
}

function prepareTranslate() {
    setTranslateDirection();
    setpropertyTranslate();
}

function setTranslateDirection() {
    document.getElementsByTagName("body")[0].style.direction = (myLanguage == "fa" ? "rtl" : "ltr");
}

function setpropertyTranslate() {
    let elements = document.getElementsByTagName('input');
    for(var i = 0, len = elements.length; i < len; i++) {
        if (elements[i].type == "button") if (elements[i].value) elements[i].value = getTranslate(elements[i].value);
        if (elements[i].type == "submit") if (elements[i].value) elements[i].value = getTranslate(elements[i].value);
    }
    elements = document.querySelectorAll('[data-content]');
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].setAttribute("data-content", getTranslate(elements[i].getAttribute("data-content")));
    }
    elements = document.querySelectorAll('[placeholder]');
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].setAttribute("placeholder", getTranslate(elements[i].getAttribute("placeholder")));
    }
    elements = document.querySelectorAll('[title]');
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].setAttribute("title", getTranslate(elements[i].getAttribute("title")));
    }
    elements = document.querySelectorAll('[data-tooltip]');
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].setAttribute("data-tooltip", getTranslate(elements[i].getAttribute("data-tooltip")));
    }
}

function changeLanguage(newLanguage = "en") {
    localStorage.setItem("dispLang", newLanguage);
    location.reload();
}