$(document).ready(function () {

    // Article Data with local image paths
    const articles = [
        { id: 1, title: "راهنمای کامل قانون ارث در ایران", shortText: "ارث یکی از پیچیده‌ترین مباحث حقوقی است که در این مقاله به صورت کامل به آن می‌پردازیم.", fullText: "قانون مدنی ایران در مورد ارث، قوانین مشخصی دارد. بر اساس این قوانین، وراث طبقات مختلفی دارند. طبقه اول شامل پدر، مادر، فرزندان و همسر است. در صورت عدم وجود طبقه اول، طبقه دوم شامل اجداد، برادران و خواهران و... و در نهایت طبقه سوم شامل عمو، عمه، دایی و خاله قرار می‌گیرند. تقسیم ارث میان وراث یک طبقه به صورت مساوی است، مگر در موارد خاص که ذکر آن در این مجال نمی‌گنجد. برای مثال، سهم پسر دو برابر سهم دختر است. نحوه محاسبه سهم هر یک از وراث و پرداخت دیون متوفی قبل از تقسیم، از مراحل کلیدی است.", imageUrl: "pic.jpg" },
        { id: 2, title: "مراحل قانونی دریافت مهریه", shortText: "زن پس از ازدواج مالک مهریه خود است و می‌تواند در هر زمان آن را مطالبه کند. در این مقاله با مراحل آن آشنا شوید.", fullText: "مهریه حق مالی زن است که در عقدنامه ذکر می‌شود. زن می‌تواند پس از عقد، در هر زمانی که بخواهد، برای دریافت آن اقدام کند. مراحل دریافت مهریه معمولاً به این صورت است: ۱. تقدیم دادخواست به دادگاه خانواده. ۲. ارسال اظهارنامه به شوهر برای پرداخت مهریه. ۳. در صورت عدم پرداخت، زن می‌تواند درخواست توقیف اموال شوهر را بدهد. ۴. اگر مهریه عندالمطالبه باشد، زن می‌تواند حتی در زمان عقد نیز آن را مطالبه کند. اگر مهریه حال باشد، باید پس از فوت شوهر یا جدایی، قابل مطالبه است. راهکارهای اجرایی مانند درخواست صدور اجرائیه و توقیف حساب‌های بانکی از جمله اقدامات مؤثر است.", imageUrl: "pic.jpg" },
        { id: 3, title: "طلاق توافقی سریع‌ترین راه جدایی", shortText: "طلاق توافقی فرآیندی است که در آن زوجین بر سر تمام مسائل از جمله حضانت فرزندان و مسائل مالی به توافق می‌رسند.", fullText: "طلاق توافقی به شرایطی گفته می‌شود که هم husband و همسر برای پایان دادن به زندگی مشترک رضایت کامل دارند. این نوع طلاق معمولاً سریع‌تر و با کمترین چالش‌ها در دادگاه به نتیجه می‌رسد. زوجین باید در مورد مواردی مانند حضانت و ملاقات فرزندان، نحوه تقسیم اموال و میزان مهریه به توافق برسند و این موارد را در صورت‌جلسه‌ای که در دفتر خدمات الکترونیک قضایی تنظیم می‌شود، قید کنند. پس از آن، پرونده به دادگاه ارسال و قاضی پس از اطمینان از رضایت طرفین، حکم طلاق را صادر می‌کند. حضور در جلسات مشاوره قبل از طلاق در این روش نیز الزامی است.", imageUrl: "pic.jpg" },
        { id: 4, title: "حضانت فرزند تا چند سالگی با مادر است؟", shortText: "قانون برای حضانت فرزند دختر و پسر سن مشخصی را در نظر گرفته است. اما این قانون مطلق نیست و منافع کودک در اولویت است.", fullText: "بر اساس ماده ۱۱۶۹ قانون مدنی، 'برای حضانت و نگهداری طفلی که ابوین او جدا از یکدیگر زندگی می‌کنند، مادر تا سن هفت سالگی اولویت دارد و پس از آن با پدر است.' این قانون در حالت عادی است. اما اگر مادر ازدواج کند یا به هر دلیلی صلاحیت او برای نگهداری کودک توسط دادگاه تأیید نشود، حضانت به پدر یا جد پدری واگذار می‌شود. نکته مهم این است که در تمام حالات، 'مصلحت طفل' ملاک اصلی قاضی است. دادگاه می‌تواند با در نظر گرفتن شرایط، حضانت را به هر یک از والدین یا حتی اقربای دیگر واگذار کند.", imageUrl: "pic.jpg" },
        { id: 5, title: "نکات کلیدی در تنظیم قراردادهای تجاری", shortText: "یک قرارداد bien نوشته شده می‌تواند از بروز بسیاری از اختلافات در آینده جلوگیری کند. در این مقاله به نکات مهم آن می‌پردازیم.", fullText: "تنظیم قراردادهای تجاری نیازمند دقت و تخصص بالایی است. نکات کلیدی عبارتند از: ۱. مشخص شدن دقیق طرفین قرارداد (مشخصات کامل). ۲. موضوع قرارداد باید شفاف و بدون ابهام باشد. ۳. تعهدات هر یک از طرفین باید به تفصیل ذکر شود. ۴. مبلغ قرارداد، نحوه و زمان پرداخت باید مشخص باشد. ۵. مدت قرارداد و شرایط تمدید یا فسخ آن باید معین شود. ۶. در نظر گرفتن شرایط قهریه (فورس ماژور) و نحوه حل اختلاف (داوری یا مراجعه به دادگاه) از بندهای ضروری است. مشاوره با وکیل متخصص قبل از امضا، بهترین راه برای حفظ حقوق شماست.", imageUrl: "pic.jpg" },
        { id: 6, title: "وکالت در دادگاه کیفری چه مراحلی دارد؟", shortText: "پرونده‌های کیفری به دلیل پیچیدگی‌ها و اهمیت بالای آن، نیازمند حضور وکیل متخصص هستند. مراحل وکالت در این دادگاه‌ها را بررسی می‌کنیم.", fullText: "وکالت در دادگاه کیفری با مراجعه به دادسرا یا دادگاه کیفری آغاز می‌شود. متهم یا شاکی می‌تواند وکیل انتخابی خود را معرفی کند. وکیل پس از بررسی پرونده و تفهیم اتهام، وارد مرحله دفاع می‌شود. دفاع می‌تواند در مرحله تحقیقات مقدماتی (در دادسرا) یا در مرحله دادگاه (در دادگاه کیفری یک یا دو) باشد. وکیل با ارائه لایحه دفاعیه، استناد به ادله و قانون و حضور در جلسات دادگاه، تلاش می‌کند تا حقوق موکل خود را تثبیت کرده یا از مجازات او بکاهد. انتخاب وکیل باتجربه در پرونده‌هایی مانند قتل، کلاهبرداری یا جرایم اقتصادی اهمیت حیاتی دارد.", imageUrl: "pic.jpg" },
        { id: 7, title: "شرایط سلب حضانت از والدین", shortText: "در شرایط خاصی، دادگاه می‌تواند حضانت فرزند را از پدر یا مادر سلب کند. این شرایط بر اساس مصلحت کودک تعیین می‌شود.", fullText: "سلب حضانت یک تصمیم جدی است که دادگاه با در نظر گرفتن منافع کودک اتخاذ می‌کند. شرایطی که می‌تواند منجر به سلب حضانت شود عبارتند از: ۱. اعتیاد یکی از والدین به مواد مخدر یا الکل. ۲. سوءرفتار یا آزار و اذیت کودک. ۳. ابتلا به بیماری‌های روانی یا صعب‌العلاج که توانایی نگهداری از کودک را سلب کند. ۴. فساد اخلاقی و مشاغل نامناسب. ۵. ترک انفاق و عدم توانایی در تأمین نیازهای اساسی کودک. در این موارد، دادگاه پس از اثبات موضوع، حضانت را به والد دیگر یا به یکی از اقربای صالح واگذار می‌کند.", imageUrl: "pic.jpg" },
        { id: 8, title: "دریافت نفقه از همسر سابق", shortText: "نفقه شامل تمام نیازهای متعارف و متناسب با شأن زن است. نحوه دریافت آن از همسری که جدا شده است، در این مقاله آمده است.", fullText: "زن در حالت عادی تا زمانی که در خانه شوهر زندگی می‌کند، مستحق نفقه است. اما پس از طلاق یا جدا شدن، در صورتی که طلاق از طرف زن باشد و او ناشزه (تمرد از تمکین) محسوب نشود، می‌تواند برای دریافت نفقه ایام عده اقدام کند. همچنین اگر طلاق از طرف husband باشد و زن باردار باشد، تا زمان وضع حمل و پس از آن تا دو سال، می‌تواند نفقه فرزند را از پدر بگیرد. برای دریافت نفقه، زن باید توانایی مالی husband را اثبات کند و دادگاه میزان آن را بر اساس شأن زن و وضعیت اقتصادی husband تعیین می‌کند.", imageUrl: "pic.jpg" },
        { id: 9, title: "الزام به تنظیم سند رسمی", shortText: "اگر در معامله‌ای سند رسمی تنظیم نشده باشد، خریدار می‌تواند فروشنده را به دادگاه بکشاند و او را ملزم به تنظیم سند کند.", fullText: "در معاملات املاک و غیره، اگر طرفین توافق کنند که سند رسمی تنظیم شود اما فروشنده از انجام آن امتناع ورزد، خریدار می‌تواند با ارائه اصل قولنامه یا سند عادی و شهادت شهود، دادخواست 'الزام به تنظیم سند رسمی' تقدیم دادگاه کند. دادگاه پس از احراز صحت معامله، حکم به الزام فروشنده به مراجعه به دفترخانه و تنظیم سند رسمی می‌دهد. در صورت عدم اجرای حکم، خریدار می‌تواند از طریق اجرای احکام دادگاه، سند را به نام خود ثبت کند. این امر اهمیت اسناد رسمی را در تضمین معاملات نشان می‌دهد.", imageUrl: "pic.jpg" },
        { id: 10, title: "چالش‌های اجرای احکام خارجی در ایران", shortText: "اجرای احکام دادگاه‌های خارجی در ایران تابع شرایط و تشریفات خاصی است که در این مقاله به آن‌ها اشاره می‌کنیم.", fullText: "بر اساس قوانین ایران، احکام مدنی صادره از دادگاه‌های خارجی در صورتی در ایران قابل اجراست که ۱. دادگاه خارجی صالح بوده باشد. ۲. رأی طبق قوانین ایران ناقض نظم عمومی یا اخلاق حسنه نباشد. ۳. رأی در کشور خارجی قطعی و لازم‌الاجرا باشد. ۴. بین ایران و کشور صادرکننده حکم، معاهده reciprocity (متقابلاً) وجود داشته باشد یا رأی در کشور خارجی بدون پرداخت خسارت به دولت ایران اجرا شده باشد. متقاضی باید درخواست خود را به دادگاه صالح در ایران تقدیم کند و پس از بررسی این شرایط، دادگاه نسبت به صدور دستور اجرای حکم اقدام می‌کند.", imageUrl: "pic.jpg" },
        { id: 11, title: "وکیل آنلاین، راهکار نوین مشاوره حقوقی", shortText: "با پیشرفت تکنولوژی، دریافت مشاوره حقوقی از طریق اینترنت و به صورت آنلاین رواج یافته است. مزایا و معایب آن چیست؟", fullText: "مشاوره حقوقی آنلاین یک روش سریع، کم‌هزینه و در دسترس برای حل مشکلات حقوقی اولیه است. مزایای آن شامل صرفه‌جویی در زمان و هزینه، دسترسی به وکلای متخصص در سراسر کشور و حفظ حریم خصوصی است. اما معایبی نیز دارد؛ از جمله عدم ارتباط چهره به چهره کامل، ریسک امنیتی در به اشتراک گذاشتن اطلاعات حساس و محدودیت در پرونده‌های پیچیده که نیازمند بررسی اسناد و مدارک اصلی هستند. برای مسائل ساده و دریافت راهنمایی اولیه، وکیل آنلاین گزینه مناسبی است، اما برای دفاع در دادگاه و پرونده‌های مهم، حضور فیزیکی وکیل ضروری است.", imageUrl: "pic.jpg" },
        { id: 12, title: "آیین دادرسی مدنی جدید چه تغییراتی داشت؟", shortText: "قانون آیین دادرسی مدنی در سال ۱۳۷۹ با تغییرات اساسی همراه بود که هدف آن تسریع و شفاف‌سازی فرآیند دادرسی بود.", fullText: "قانون جدید آیین دادرسی مدنی با هدف ایجاد تحول در نظام قضایی، تغییرات مهمی را به همراه داشت. از جمله مهم‌ترین این تغییرات می‌توان به موارد زیر اشاره کرد: ۱. ایجاد دادگاه‌های خانواده و تجاری به صورت تخصصی. ۲. الزام به داوری قبل از طرح دعوا در برخی موارد. ۳. امکان صدور رأی غیابی در صورت عدم حضور خوانده. ۴. محدود کردن اعتراض ثالث به موارد خاص. ۵. شفاف‌سازی در نحوه ابلاغ اوراق قضایی. این تغییرات در مجموع به کاهش حجم پرونده‌ها، افزایش سرعت در رسیدگی و تخصصی‌تر شدن بررسی دعاوی کمک شایانی کرده است.", imageUrl: "pic.jpg" }
    ];

    // Load comments from localStorage or initialize as empty array
    let allComments = JSON.parse(localStorage.getItem('articleComments')) || [];
    let currentArticleId = null;
    let currentRating = 0;

    // --- FUNCTIONS ---

    // Function to render article cards
    function renderArticles(articlesToRender, containerId) {
        const container = $(`#${containerId}`);
        container.empty();

        if (articlesToRender.length === 0) {
            container.html('<p class="col-12 text-center">مقاله‌ای یافت نشد.</p>');
            return;
        }

        articlesToRender.forEach(article => {
            const cardHtml = `
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card article-card" data-id="${article.id}">
                        <img src="pic.jpg" class="card-img-top" alt="${article.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text flex-grow-1">${article.shortText}</p>
                            <a href="#" class="btn btn-outline-primary mt-auto">ادامه مطلب</a>
                        </div>
                    </div>
                </div>
            `;
            container.append(cardHtml);
        });
    }

    // Function to display comments for a specific article
    function displayComments(articleId) {
        const commentsList = $('#comments-list');
        const commentsForArticle = allComments.filter(c => c.articleId == articleId);

        // **FIXED:** Clear ALL previous content, not just comment items
        commentsList.empty();

        if (commentsForArticle.length === 0) {
            commentsList.append('<p class="text-muted">هنوز نظری ثبت نشده است. اولین نفر باشید!</p>');
        } else {
            commentsForArticle.forEach(comment => {
                const starsHtml = Array.from({ length: 5 }, (_, i) =>
                    `<i class="fa${i < comment.rating ? 's' : 'r'} fa-star"></i>`
                ).join('');

                const commentHtml = `
                    <div class="comment-item">
                        <div class="comment-header">
                            <span class="comment-author">${comment.name}</span>
                            <span class="comment-rating">${starsHtml}</span>
                        </div>
                        <p class="comment-text">${comment.text}</p>
                        <div class="comment-date">${new Date(comment.date).toLocaleString('fa-IR')}</div>
                    </div>
                `;
                commentsList.append(commentHtml);
            });
        }
    }

    // Function to show article details in modal
    function showArticleDetails(articleId) {
        const article = articles.find(a => a.id === articleId);
        if (!article) return;

        currentArticleId = articleId; // Set the current article ID

        $('#articleModalLabel').text(article.title);
        $('#modal-image').attr('src', article.imageUrl).attr('alt', article.title);
        $('#modal-full-text').html(`<p>${article.fullText.replace(/\n/g, '<br>')}</p>`);

        // Reset form and rating when opening modal
        resetCommentForm();

        // Display existing comments for this article
        displayComments(articleId);

        $('#articleModal').modal('show');
    }

    // Function to reset the comment form
    function resetCommentForm() {
        $('#comment-form')[0].reset();
        $('.form-control, .form-select').removeClass('is-invalid');
        $('#form-feedback').html(''); // Clear feedback
        $('#rating-error').hide(); // Hide rating error
        currentRating = 0;
        $('#rating-value').val(0);

        // Reset stars to empty state by changing their icon class
        $('#star-rating .star').removeClass('fas').addClass('far');
    }


    // --- EVENT HANDLERS ---

    // Initial render: Show first 4 articles
    renderArticles(articles.slice(0, 4), 'articles-preview-container');

    // Show all articles button
    $('#show-all-btn').on('click', function () {
        $('#articles-preview').hide();
        $(this).hide();
        $('#all-articles-view').show();
        renderArticles(articles, 'all-articles-container');
    });

    // Back to preview button
    $('#back-to-preview-btn').on('click', function () {
        $('#all-articles-view').hide();
        $('#articles-preview').show();
        $('#show-all-btn').show();
        $('#search-input').val('');
        renderArticles(articles.slice(0, 4), 'articles-preview-container');
    });

    // Click on a card to open modal (using event delegation)
    $(document).on('click', '.article-card', function (e) {
        e.preventDefault();
        const articleId = $(this).data('id');
        showArticleDetails(articleId);
    });

    // Search functionality
    function performSearch() {
        const searchTerm = $('#search-input').val().toLowerCase().trim();
        const filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(searchTerm)
        );
        $('#articles-preview').hide();
        $('#show-all-btn').hide();
        $('#all-articles-view').show();
        renderArticles(filteredArticles, 'all-articles-container');
    }

    $('#search-btn').on('click', performSearch);
    $('#search-input').on('keyup', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // --- Star Rating Logic (FIXED FOR RTL FILL) ---
    $('#star-rating .star').on('mouseenter', function () {
        const hoverValue = parseInt($(this).data('value'));
        $('.star').removeClass('hover');
        // **FIXED:** Change prevAll to nextAll to fill from right to left
        $(this).addClass('hover').prevAll('.star').addClass('hover');
    });

    $('#star-rating').on('mouseleave', function () {
        $('.star').removeClass('hover');
    });

    $('#star-rating .star').on('click', function () {
        currentRating = parseInt($(this).data('value'));
        $('#rating-value').val(currentRating);
        $('#rating-error').hide();

        // **FIXED:** Update the visual state of the stars by changing their icon class
        $('#star-rating .star').each(function () {
            const starValue = parseInt($(this).data('value'));
            // **FIXED:** Change condition from <= to >= to fill from right to left
            if (starValue <= currentRating) {
                $(this).removeClass('far').addClass('fas');
            } else {
                $(this).removeClass('fas').addClass('far');
            }
        });
    });

    // --- Comment Form Submission and Validation ---
    $('#comment-form').on('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Clear previous errors
        $('.form-control, .form-select').removeClass('is-invalid');
        $('#rating-error').hide();

        // Validate Name
        const name = $('#user-name').val().trim();
        if (name === '') {
            $('#user-name').addClass('is-invalid');
            isValid = false;
        }

        // Validate Email
        const email = $('#user-email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            $('#user-email').addClass('is-invalid');
            isValid = false;
        }

        // Validate Rating
        if (currentRating === 0) {
            $('#rating-error').show();
            isValid = false;
        }

        // Validate Comment
        const comment = $('#user-comment').val().trim();
        if (comment === '') {
            $('#user-comment').addClass('is-invalid');
            isValid = false;
        }

        if (isValid) {
            const newComment = {
                articleId: currentArticleId,
                name: name,
                email: email,
                rating: currentRating,
                text: comment,
                date: new Date().toISOString()
            };

            // Add comment to the array and save to localStorage
            allComments.push(newComment);
            localStorage.setItem('articleComments', JSON.stringify(allComments));

            // Update the UI
            displayComments(currentArticleId);

            // Show success message
            $('#form-feedback').html('<div class="alert alert-success">نظر شما با موفقیت ثبت شد!</div>');

            // Reset form for next comment
            resetCommentForm();

            // Hide success message after 3 seconds
            setTimeout(() => {
                $('#form-feedback').html('');
            }, 3000);

        } else {
            $('#form-feedback').html('<div class="alert alert-danger">لطفا تمام فیلدهای الزامی را به درستی تکمیل کنید.</div>');
        }
    });

});

AOS.init({
    duration: 1000,
    once: true
});

// Hide loader when page is loaded
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
});

// Smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,.1)';
    }
});

// Search functionality
function searchArticles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.article-card');

    articles.forEach(article => {
        const title = article.querySelector('.article-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            article.parentElement.style.display = 'block';
        } else {
            article.parentElement.style.display = 'none';
        }
    });
}

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchArticles();
    }
});

// Add smooth scroll to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to service cards on hover
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.querySelector('.service-icon').style.transform = 'scale(1.2) rotate(5deg)';
    });

    card.addEventListener('mouseleave', function () {
        this.querySelector('.service-icon').style.transform = 'scale(1) rotate(0deg)';
    });
});




function handleSocialClick(platform, url) {
    const icon = event.currentTarget;

    // Create ripple effect
    createRipple(icon, event);

    // Show loading state
    const originalContent = icon.innerHTML;
    icon.innerHTML = '<div class="loading"></div>';

    // Simulate loading
    setTimeout(() => {
        icon.innerHTML = originalContent;

        // Open link in new tab
        window.open(url, '_blank');

        // Add success animation
        icon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            icon.style.transform = '';
        }, 200);
    }, 500);
}

function createRipple(element, event) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add keyboard navigation
document.addEventListener('keydown', function (e) {
    const icons = document.querySelectorAll('.social-icon');
    const currentIndex = Array.from(icons).findIndex(icon => icon === document.activeElement);

    if (e.key === 'ArrowRight' && currentIndex < icons.length - 1) {
        e.preventDefault();
        icons[currentIndex + 1].focus();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        icons[currentIndex - 1].focus();
    } else if (e.key === 'Enter' && currentIndex >= 0) {
        e.preventDefault();
        icons[currentIndex].click();
    }
});

// Add focus styles for accessibility
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.setAttribute('tabindex', '0');
    icon.setAttribute('role', 'button');
    icon.setAttribute('aria-label', icon.querySelector('.tooltip-custom').textContent);
});

// Optional: Add hover sound effect
let audioContext;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playHoverSound() {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}


