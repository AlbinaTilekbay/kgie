
  document.addEventListener("DOMContentLoaded", function() {
    // Получение списка всех вкладок
    const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');

    // Обработчик события клика на вкладку
    function handleTabClick(event) {
      event.preventDefault();

      // Удаление активного класса у всех вкладок
      tabs.forEach(function(tab) {
        tab.classList.remove("active");
      });

      // Добавление активного класса к текущей вкладке
      this.classList.add("active");

      // Получение идентификатора контента, связанного с текущей вкладкой
      const target = this.getAttribute("data-bs-target");

      // Скрытие всех контентов
      const tabContents = document.querySelectorAll(".tab-pane");
      tabContents.forEach(function(content) {
        content.classList.remove("show", "active");
      });

      // Отображение контента, связанного с текущей вкладкой
      const activeContent = document.querySelector(target);
      activeContent.classList.add("show", "active");
    }

    // Добавление обработчика события клика для каждой вкладки
    tabs.forEach(function(tab) {
      tab.addEventListener("click", handleTabClick);
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('#nav a');

    function updateActiveLink(targetLink) {
      navLinks.forEach(function(link) {
        link.classList.toggle('active', link === targetLink);
      });
    }

    function handleNavLinkClick(event) {
      event.preventDefault();
      updateActiveLink(this);
      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }

    navLinks.forEach(function(link) {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Установка активного пункта меню по умолчанию
    updateActiveLink(navLinks[0]);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('#nav a');
    var sections = document.querySelectorAll('section');

    function updateActiveLink(targetLink) {
      navLinks.forEach(function(link) {
        link.classList.toggle('active', link === targetLink);
      });
    }

    function handleNavLinkClick(event) {
      event.preventDefault();
      updateActiveLink(this);
      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }

    function updateActiveLinkOnScroll() {
      var currentScrollPos = window.pageYOffset;

      sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');
        var link = document.querySelector('#nav a[href="#' + sectionId + '"]');

        if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
          updateActiveLink(link);
        }
      });
    }

    navLinks.forEach(function(link) {
      link.addEventListener('click', handleNavLinkClick);
    });

    window.addEventListener('scroll', updateActiveLinkOnScroll);

    // Установка активного пункта меню по умолчанию
    updateActiveLink(navLinks[0]);
  });


var selectedLang = document.getElementById('selectedLang');
var subMenu = document.querySelector('.sub-menu');
var subMenuLinks = document.querySelectorAll('.sub-menu a');

subMenuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var lang = link.getAttribute('data-lang');
    translatePage(lang);
    selectedLang.textContent = link.textContent;
    updateSubMenu();
  });
});

selectedLang.addEventListener('click', function() {
  toggleSubMenu();
});

function toggleSubMenu() {
  subMenu.classList.toggle('show');
}

function updateSubMenu() {
  subMenuLinks.forEach(function(link) {
    if (link.textContent === selectedLang.textContent) {
      link.style.display = 'none';
    } else {
      link.style.display = 'block';
    }
  });
}

function translatePage(lang) {
  // Получение всех элементов с атрибутом data-translate
  var elements = document.querySelectorAll('[data-translate]');

  // Перевод текста для каждого элемента
  elements.forEach(function(element) {
    var translationKey = element.getAttribute('data-translate');
    element.textContent = getTranslation(lang, translationKey);
  });
}

// Функция получения перевода в соответствии с языком и ключом перевода
function getTranslation(lang, translationKey) {
  var translations = {
    chronology: {
      en: 'Chronology of Major Events',
      kz: 'Негізгі оқиғалар хронологиясы',
      ru: 'Хронология главных событий',
    },
    news: {
      en: 'News',
      kz: 'Жаңалықтар',
      ru: 'Новости',
    },
    nav1: {
      en: 'NEWS',
      kz: 'ЖАҢАЛЫҚТАР',
      ru: 'НОВОСТИ',
    },
    nav2: {
      en: 'STRATEGY',
      kz: 'СТРАТЕГИЯ',
      ru: 'СТРАТЕГИЯ',
    },
    nav3: {
      en: 'EDUCATION',
      kz: 'МАМАНДЫҚТАР',
      ru: 'СПЕЦИАЛЬНОСТИ',
    },
    nav4: {
      en: 'ADMISSION',
      kz: 'ҚАБЫЛДАУ КОМИССИЯСЫ',
      ru: 'ПРИЕМНАЯ КОМИССИЯ',
    },
    nav5: {
      en: 'PARTNERS',
      kz: 'СЕРІКТЕСТЕР',
      ru: 'ПАРТНЕРЫ',
    },
    stimul: {
      en: 'To stimulate the development of Kazakhstan through the transfer of German educational programs, research and technology',
      kz: 'Стимулировать развитие Казахстана путем передачи немецких образовательных программ, исследований и технологий',
      ru: 'Стимулировать развитие Казахстана путем передачи немецких образовательных программ, исследований и технологий',
    },
    napravlenie: {
      en: 'Strategic direction',
      kz: 'Стратегическое направление',
      ru: 'Стратегическое направление',
    },
    obrazovanie: {
      en: 'Education',
      kz: 'Образование',
      ru: 'Образование',
    },
    energy: {
      en: 'Energy, environment, and earth',
      kz: 'Энергия, окружающая среда и земля',
      ru: 'Энергия, окружающая среда и земля',
    },
    sistema: {
      en: 'Logistics flow systems',
      kz: 'Системы логистических потоков',
      ru: 'Системы логистических потоков',
    },
    engineer: {
      en: 'Advanced Engineering',
      kz: 'Передовая инженерия',
      ru: 'Передовая инженерия',
    },
    inform: {
      en: 'Informatics and  Digitization',
      kz: 'Информатика и оцифровка',
      ru: 'Информатика и оцифровка',
    },
    innova: {
      en: 'Innovations',
      kz: 'Инновации',
      ru: 'Инновации',
    },
    sovmest: {
      en: 'Joint research projects',
      kz: 'Совместные исследовательские проекты',
      ru: 'Совместные исследовательские проекты',
    },
    inkubas: {
      en: 'Business incubation and startups',
      kz: 'Бизнес-инкубация и стартапы',
      ru: 'Бизнес-инкубация и стартапы',
    },
    poligon: {
      en: 'Experimental ranges, test benches and  pilot lines',
      kz: 'Экспериментальные полигоны, испытательные стенды и пилотные линии',
      ru: 'Экспериментальные полигоны, испытательные стенды и пилотные линии',
    },
    texno: {
      en: 'Techno Parks',
      kz: 'Технопарки',
      ru: 'Технопарки',
    },
    issl: {
      en: 'Researches',
      kz: 'Исследования',
      ru: 'Исследования',
    },
    integ: {
      en: 'Integration of green hydrogen  production with renewable  energy.',
      kz: 'Интеграция производства экологически чистого водорода с возобновляемыми источниками энергии.',
      ru: 'Интеграция производства экологически чистого водорода с возобновляемыми источниками энергии.',
    },
    hran: {
      en: 'Storage and transportation in  the field of hydrogen energy.',
      kz: 'Хранение и транспортировка в области водородной энергетики.',
      ru: 'Хранение и транспортировка в области водородной энергетики.',
    },
    automatic: {
      en: 'Automation, monitoring and  control of processes based on  Internet of Things.',
      kz: 'Автоматизация, мониторинг и управление процессами на основе Интернета вещей.',
      ru: 'Автоматизация, мониторинг и управление процессами на основе Интернета вещей.',
    },
    bachelor1: {
      en: 'BACHELOR',
      kz: 'БАКАЛАВРИАТ',
      ru: 'БАКАЛАВРИАТ',
    },
    bachelor2: {
      en: 'Educational programs',
      kz: 'Білім беру бағдарламалары',
      ru: 'Образовательные программы',
    },
    bachelor3: {
      en: 'Possible training in Russian and English',
      kz: 'Орыс және ағылшын тілдерінде оқу мүмкіндігі бар',
      ru: 'Возможное обучение на русском и английском языках',
    },
    bachelor4: {
      en: '"Energy and environmental engineering" (ВА)',
      kz: '"Энергетикалық және экологиялық инженерия" (ВА)',
      ru: '"Энергетика и экологическая инженерия" (ВА)',
    },
    bachelor5: {
      en: 'Degree: Bachelor of Technology and Technology in the educational program "Energy and environmental engineering".',
      kz: 'Степень: Бакалавр технологии по образовательной программе "6В07108 - Энергетика и экологическая инженерия".',
      ru: 'Степень: Бакалавр технологии по образовательной программе "6В07108 - Энергетика и экологическая инженерия".',
    },
    bachelor6: {
      en: 'Period of study: 4.5 years - 9 semesters',
      kz: 'Период обучения: 4,5 года – 9 семестров ',
      ru: 'Период обучения: 4,5 года – 9 семестров ',
    },
    bachelor7: {
      en: 'The main goal of the educational program is to train qualified specialists in the field of energy and ecology.',
      kz: 'Основной целью образовательной программы является подготовка квалифицированных специалистов в области энергетики и экологии.',
      ru: 'Основной целью образовательной программы является подготовка квалифицированных специалистов в области энергетики и экологии.',
    },
    bachelor8: {
      en: 'Graduates of this specialty can make a career in the following areas:',
      kz: 'Выпускники данной специальности могут сделать карьеру в следующих областях:',
      ru: 'Выпускники данной специальности могут сделать карьеру в следующих областях:',
    },
    bachelor9: {
      en: 'in the field of design and construction services ;',
      kz: 'в сфере проектно-строительных услуг;',
      ru: 'в сфере проектно-строительных услуг;',
    },
    bachelor14: {
      en: 'work as an energy engineer or environmentalist in an industrial company;',
      kz: 'работа в должности инженера - энергетика или эколога в промышленной компании;',
      ru: 'работа в должности инженера - энергетика или эколога в промышленной компании;',
    },
    bachelor10: {
      en: 'consulting to be a manager in a company;',
      kz: 'консультирование быть менеджером в компании;',
      ru: 'консультирование быть менеджером в компании;',
    },
    bachelor11: {
      en: 'research institutes;',
      kz: 'научно-исследовательских институтах;',
      ru: 'научно-исследовательских институтах;',
    },
    bachelor12: {
      en: 'use of renewable energy sources and their autonomous or centralized grid specialist',
      kz: 'использование возобновляемых источников энергии и их автономный или специалист по централизованным сетям;',
      ru: 'использование возобновляемых источников энергии и их автономный или специалист по централизованным сетям;',
    },
    bachelor13: {
      en: 'full-time',
      kz: 'очная',
      ru: 'очная',
    },
    logistic1: {
      en: 'Logistic',
      kz: 'Логистика',
      ru: 'Логистика',
    },
    logistic2: {
      en: 'Degree: Bachelor of Service in the educational program "6B11309-Logistics" .',
      kz: 'Степень: Бакалавр сервиса по образовательной программе "6B11309 - Logistics".',
      ru: 'Степень: Бакалавр сервиса по образовательной программе "6B11309 - Logistics".',
    },
    logistic3: {
      en: 'Duration of study: 4.5 years - 9 semesters',
      kz: 'Период обучения: 4,5 года – 9 семестров',
      ru: 'Период обучения: 4,5 года – 9 семестров',
    },
    logistic4: {
      en: 'The purpose of the educational program (PEP) is to prepare a qualified person who is able to organize the work of the transport complex in the logistics system of modern commodity circulation and its interaction with the logistics infrastructure of the market for goods and transport services.',
      kz: 'Целью образовательной программы (ЦОП) является подготовка квалифицированного лица , способного организовать работу транспортного комплекса в логистической системе современного товародвижения и его взаимодействие с логистической инфраструктурой рынка товаров и транспортных услуг.',
      ru: 'Целью образовательной программы (ЦОП) является подготовка квалифицированного лица , способного организовать работу транспортного комплекса в логистической системе современного товародвижения и его взаимодействие с логистической инфраструктурой рынка товаров и транспортных услуг.',
    },
    logistic5: {
      en: 'Career opportunities:',
      kz: 'Карьерные возможности:',
      ru: 'Карьерные возможности:',
    },
    logistic6: {
      en: 'Supply Chain Analyst:',
      kz: 'Аналитик цепочки поставок',
      ru: 'Аналитик цепочки поставок',
    },
    logistic7: {
      en: 'Operations Manager:',
      kz: 'Операционный менеджер',
      ru: 'Операционный менеджер',
    },
    logistic8: {
      en: 'Transport Manager',
      kz: 'Менеджер по транспорту',
      ru: 'Менеджер по транспорту',
    },
    logistic9: {
      en: 'Logistics Consultant',
      kz: 'Консультант по логистике',
      ru: 'Консультант по логистике',
    },
    logistic10: {
      en: 'Purchasing Manager',
      kz: 'Менеджер по закупкам',
      ru: 'Менеджер по закупкам',
    },
    logistic11: {
      en: 'Warehouse Operations Manager',
      kz: 'Специалист по управлению запасами',
      ru: 'Специалист по управлению запасами',
    },
    logistic12: {
      en: 'Full-time',
      kz: 'очная',
      ru: 'очная',
    },
    structure1: {
      en: 'Terms of study',
      kz: 'Сроки обучения',
      ru: 'Сроки обучения',
    },
    structure2: {
      en: 'Institute management structure',
      kz: 'Структура управления института',
      ru: 'Структура управления института',
    },
    structure3: {
      en: '1-2-3-4 semester',
      kz: '1-2-3-4 семестр',
      ru: '1-2-3-4 семестр',
    },
    structure32: {
      en: 'september, 2023-2025',
      kz: 'сентябрь, 2023-2025',
      ru: 'сентябрь, 2023-2025',
    },
    structure4: {
      en: '5-6 semester',
      kz: '5-6 семестр',
      ru: '5-6 семестр',
    },
    structure5: {
      en: '7-8-9 semester',
      kz: '7-8-9 семестр',
      ru: '7-8-9 семестр',
    },
    structure6: {
      en: 'Learning German',
      kz: 'Изучение немецкого языка',
      ru: 'Изучение немецкого языка',
    },
    structure7: {
      en: '1 discipline in German',
      kz: '1 дисциплина на немецком языке',
      ru: '1 дисциплина на немецком языке',
    },
    structure8: {
      en: 'Yessenov University or/and DKU',
      kz: 'Yessenov University Или/и DKU',
      ru: 'Yessenov University Или/и DKU',
    },
    structure9: {
      en: '3 disciplines in German',
      kz: '3 дисциплины на немецком языке',
      ru: '3 дисциплины на немецком языке',
    },
    structure10: {
      en: 'Studying at a German university',
      kz: 'Обучение в немецком ВУЗе',
      ru: 'Обучение в немецком ВУЗе',
    },
    structure11: {
      en: 'Partner Universities in Germany',
      kz: 'Университеты-партнеры в Германии',
      ru: 'Университеты-партнеры в Германии',
    },
    applicant1: {
      en: 'For applicants',
      kz: 'Абитуриентам',
      ru: 'Абитуриентам',
    },
    applicant2: {
      en: 'Enrollment in the German Institute of Engineering',
      kz: 'Зачисление в Немецкий инженерный институт',
      ru: 'Зачисление в Немецкий инженерный институт',
    },
    applicant3: {
      en: 'Competition',
      kz: 'Конкурс',
      ru: 'Конкурс',
    },
    applicant4: {
      en: 'Admission of persons entering the University is carried out according to their applications on a competitive basis under the program of obtaining a double and (or) triple diploma with a bachelorʼs degree in educational programs: "Logistics" — Technical University of Wildau and "Energy and Environmental Engineering" — Hamburg Technical University',
      kz: 'Прием лиц, поступающих в Университет, осуществляется по их заявлениям на конкурсной основе по программе получения двойного и (или) тройного диплома с получением степени бакалавра по образовательным программам: «Логистика» — Технический университет Вильдау и «Энергетика и экологическая инженерия» — Гамбургский технический университет',
      ru: 'Прием лиц, поступающих в Университет, осуществляется по их заявлениям на конкурсной основе по программе получения двойного и (или) тройного диплома с получением степени бакалавра по образовательным программам: «Логистика» — Технический университет Вильдау и «Энергетика и экологическая инженерия» — Гамбургский технический университет',
    },
    applicant5: {
      en: 'passed the UNT and scored at least 60 points on its results, while for each subject of the UNT it is necessary to score at least 5 points and the results of the University entrance exam.',
      kz: 'прошедшие ЕНТ и набравшие по его результатам не менее 60 баллов, при этом по каждому предмету ЕНТ необходимо набрать не менее 5-ти баллов и результатами вступительного экзамена Университета.',
      ru: 'прошедшие ЕНТ и набравшие по его результатам не менее 60 баллов, при этом по каждому предмету ЕНТ необходимо набрать не менее 5-ти баллов и результатами вступительного экзамена Университета.',
    },
    applicant8: {
      en: 'The entrance exam provides a test of the level of English proficiency',
      kz: 'Вступительный экзамен предусматривает проверку уровеня владения английским языком',
      ru: 'Вступительный экзамен предусматривает проверку уровеня владения английским языком',
    },
    applicant6: {
      en: 'at the A2/Elementary level.',
      kz: 'на уровне А2/Elementary.',
      ru: 'на уровне А2/Elementary.',
    },
    applicant7: {
      en: 'Applicants are interviewed.',
      kz: 'Поступающие лица проходят собеседование.',
      ru: 'Поступающие лица проходят собеседование.',
    },
    enrollment1: {
      en: 'Enrollment',
      kz: 'Зачисление',
      ru: 'Зачисление',
    },
    enrollment2: {
      en: 'until 20.08.2023',
      kz: 'до 20.08.2023',
      ru: 'до 20.08.2023',
    },
    enrollment3: {
      en: 'Virtual Admission',
      kz: 'Виртуальная приемная комиссия',
      ru: 'Виртуальная приемная комиссия',
    },
    enrollment5: {
      en: 'List of documents for applying for an educational grant and for admission',
      kz: 'Список документов для подачи на образовательный грант и для поступления',
      ru: 'Список документов для подачи на образовательный грант и для поступления',
    },
    enrollment4: {
      en: 'Go over',
      kz: 'Перейти',
      ru: 'Перейти',
    },
    enrollment6: {
      en: 'Download',
      kz: 'Скачать',
      ru: 'Скачать',
    },
    enrollment7: {
      en: 'Submit originals and copies of documents to the university.',
      kz: 'Предоставить в университет оригиналы и копии документов.',
      ru: 'Предоставить в университет оригиналы и копии документов.',
    },
    contacts1: {
      en: 'Contacts',
      kz: 'Контакты',
      ru: 'Контакты',
    },
    contacts2: {
      en: 'Republic of Kazakhstan, Aktau, 32 microdistrict, main academic building, office D219',
      kz: 'Республика Казахстан, г. Актау, 32 мкр, главный учебный корпус, кабинет D219',
      ru: 'Республика Казахстан, г. Актау, 32 мкр, главный учебный корпус, кабинет D219',
    },
    contacts3: {
      en: 'Contact phone: +7 (707) 362 25 10',
      kz: 'Контактный телефон: +7 (707) 362 25 10',
      ru: 'Контактный телефон: +7 (707) 362 25 10',
    },
    contacts4: {
      en: 'Opening hours: Mon-Fri from 09:00 to 18:00 Sat, Sun — day off',
      kz: 'График работы: пн-пт с 09:00 до 18:00 сб, вс — выходной',
      ru: 'График работы: пн-пт с 09:00 до 18:00 сб, вс — выходной',
    },
    footer1: {
      en: 'Address:',
      kz: 'Адрес:',
      ru: 'Адрес:',
    },
    footer2: {
      en: 'Aktau, microdistrict 32, Main building',
      kz: 'г. Актау, микрорайон 32, Главный корпус',
      ru: 'г. Актау, микрорайон 32, Главный корпус',
    },
    footer3: {
      en: 'Telephone:',
      kz: 'Телефон:',
      ru: 'Телефон:',
    },
    newsdata11: {
      en: 'Tokayev instructed to open 5 branches of prestigious foreign universities.',
      kz: 'Токаев поручил открыть 5 филиалов авторитетных зарубежных вузов',
      ru: 'Токаев поручил открыть 5 филиалов авторитетных зарубежных вузов',
    },
    newsdata12: {
      en: 'President Kassym-Jomart Tokayev instructed to increase the accessibility of higher education and open... ',
      kz: 'Президент Касым-Жомарт Токаев поручил повысить доступность высшего образования и открыть пять филиалов...',
      ru: 'Президент Касым-Жомарт Токаев поручил повысить доступность высшего образования и открыть пять филиалов...',
    },
    newsdata13: {
      en: 'Read more',
      kz: 'Читать далее',
      ru: 'Читать далее',
    },
    newsdata21: {
      en: 'Kazakhstani scientists will undergo internships at leading scientific...',
      kz: 'Казахстанские ученые будут стажироваться в научных центрах Германии',
      ru: 'Казахстанские ученые будут стажироваться в научных центрах Германии',
    },
    newsdata22: {
      en: 'The Minister of Science and Higher Education, Sayasat Nurbek, discussed cooperation issues with the...',
      kz: 'Министр науки и высшего образования Саясат Нурбек обсудил вопросы сотрудничества с послом Германии...',
      ru: 'Министр науки и высшего образования Саясат Нурбек обсудил вопросы сотрудничества с послом Германии...',
    },
    newsdata31: {
      en: 'Signing of the Memorandum with the Caspian University of Technology and...',
      kz: 'Подписание Меморандума с Каспийским университетом...',
      ru: 'Подписание Меморандума с Каспийским университетом...',
    },
    newsdata32: {
      en: 'DKU, together with partners, is launching a unique project "Mangystau School of Sustainable Engineering"!On August... ',
      kz: 'DKU совместно с партнерами запускает уникальный проект «Mangystau School of Sustainable Engineering”! Этот уникальный ...',
      ru: 'DKU совместно с партнерами запускает уникальный проект «Mangystau School of Sustainable Engineering”! Этот уникальный ...',
    },
    newsdata41: {
      en: 'Working familiarization trip of the DKU delegation to the Yessenov University',
      kz: 'Рабочая ознакомительная поездка делегации DKU в университет...',
      ru: 'Рабочая ознакомительная поездка делегации DKU в университет...',
    },
    newsdata42: {
      en: 'From October 11 to 15, a working familiarization trip of the DKU delegation to the Yessenov University, Aktau...',
      kz: 'С 11 по 15 октября состоялась рабочая ознакомительная поездка делегации DKU в университет им. Есенова, г. Актау!...',
      ru: 'С 11 по 15 октября состоялась рабочая ознакомительная поездка делегации DKU в университет им. Есенова, г. Актау!...',
    },
    newsdata51: {
      en: 'An Institute of Engineering according to German standards will appear...',
      kz: 'Институт инжиниринга по немецким стандартам появится в Мангистау',
      ru: 'Институт инжиниринга по немецким стандартам появится в Мангистау',
    },
    newsdata52: {
      en: 'On the basis of the Shakhmardan Yessenov Caspian University of Technology and Engineering... ',
      kz: 'На базе Каспийского университета технологий и инжиниринга имени Шахмардана Есенова (Yessenov University)...',
      ru: 'На базе Каспийского университета технологий и инжиниринга имени Шахмардана Есенова (Yessenov University)...',
    },
    newsdata61: {
      en: 'At HAW HAMBURG, a leading university in Northern Germany, partnerships...',
      kz: 'В HAW HAMBURG, ведущем вузе Северной Германии, начались соглашения',
      ru: 'В HAW HAMBURG, ведущем вузе Северной Германии, начались соглашения',
    },
    newsdata62: {
      en: 'The Hamburg University of Applied Sciences is a well-known institution whose aim is to develop sustainable...',
      kz: 'Гамбургский университет прикладных наук – известное заведение, цель которого состоит в выработке устойчивых решений...',
      ru: 'Гамбургский университет прикладных наук – известное заведение, цель которого состоит в выработке устойчивых решений...',
    },
    newsdata71: {
      en: 'Another agreement was signed at the Anhalt University of Applied...',
      kz: 'В Университете прикладных наук Анхальт (Hochschule Anhalt) был подписан...',
      ru: 'В Университете прикладных наук Анхальт (Hochschule Anhalt) был подписан...',
    },
    newsdata72: {
      en: 'he history of Anhalt University of Applied Sciences dates back to the 19th century. There, engineers...',
      kz: 'Было запланировано предстоящие работы по направлениям: проектирование технологических процессов,...',
      ru: 'Было запланировано предстоящие работы по направлениям: проектирование технологических процессов,...',
    },
    newsdata81: {
      en: 'A meeting was held with Mr. Vito Chechere, the official representative of...',
      kz: 'Было проведено встреча с официальным представителем...',
      ru: 'Было проведено встреча с официальным представителем...',
    },
    newsdata82: {
      en: 'At the meeting, the structure of the engineering institute, which will open on the basis of...',
      kz: 'Консультация по структуре инженерного института, которая откроется на базе Yessenov University...',
      ru: 'Консультация по структуре инженерного института, которая откроется на базе Yessenov University...',
    },
    newsdata91: {
      en: 'In Kazakhstan Engineers will be educated be German standards...',
      kz: 'В Казахстане будут готовить инженеров по немецким стандартам...',
      ru: 'В Казахстане будут готовить инженеров по немецким стандартам...',
    },
    newsdata92: {
      en: 'A new Institute of Engineering will be opened in Aktau this year based on the Shakhmardan Yessenov...',
      kz: 'Новый институт инжиниринга откроют в Актау уже в этом году на базе университета имени Шахмардана Есенова...',
      ru: 'Новый институт инжиниринга откроют в Актау уже в этом году на базе университета имени Шахмардана Есенова...',
    },
    news11: {
      en: 'Tokayev instructed to open 5 branches of prestigious foreign universities.',
      kz: 'Токаев поручил открыть 5 филиалов авторитетных зарубежных вузов',
      ru: 'Токаев поручил открыть 5 филиалов авторитетных зарубежных вузов',
    },
    news12: {
      en: 'President Kassym-Jomart Tokayev instructed to increase the accessibility of higher education and open five branches of prestigious foreign universities, reports the correspondent of Tengrinews.kz.',
      kz: 'Президент Касым-Жомарт Токаев поручил повысить доступность высшего образования и открыть пять филиалов авторитетных зарубежных вузов, передает корреспондент Tengrinews.kz. На заседании Мажилиса Токаев заявил, что вопрос доступности высшего образования остается злободневным в Казахстане.',
      ru: 'Президент Касым-Жомарт Токаев поручил повысить доступность высшего образования и открыть пять филиалов авторитетных зарубежных вузов, передает корреспондент Tengrinews.kz. На заседании Мажилиса Токаев заявил, что вопрос доступности высшего образования остается злободневным в Казахстане.',
    },
    news13: {
      en: '"Special attention should be paid to the allocation of targeted grants for young people from densely populated regions of the country. To build a new economy, it is important to enhance the competitiveness of universities. Recently, branches of leading foreign universities began to open in Kazakhstan. In the near future, the opening of branches of advanced Russian technical universities is planned. I believe it is necessary to open at least five branches of prestigious foreign universities in our country by 2025. At the same time, it is necessary to open two branches of universities with a technical bias in the west of the country," said Tokayev.',
      kz: '"Особое внимание следует уделить выделению целевых грантов для молодежи из густонаселенных регионов страны. Для построения новой экономики важно повышение конкурентоспособности вузов. Недавно в Казахстане начали открываться филиалы ведущих зарубежных вузов. В скором времени планируется открытие филиалов передовых технических вузов России. Считаю необходимым к 2025 году открыть в нашей стране не менее пяти филиалов авторитетных зарубежных университетов. При этом два филиала вузов с техническим уклоном необходимо открыть на западе страны", - сказал Токаев.',
      ru: '"Особое внимание следует уделить выделению целевых грантов для молодежи из густонаселенных регионов страны. Для построения новой экономики важно повышение конкурентоспособности вузов. Недавно в Казахстане начали открываться филиалы ведущих зарубежных вузов. В скором времени планируется открытие филиалов передовых технических вузов России. Считаю необходимым к 2025 году открыть в нашей стране не менее пяти филиалов авторитетных зарубежных университетов. При этом два филиала вузов с техническим уклоном необходимо открыть на западе страны", - сказал Токаев.',
    },
    news21: {
      en: 'Kazakhstani scientists will undergo internships at leading scientific centers in Germany.',
      kz: 'Казахстанские ученые будут стажироваться в ведущих научных центрах Германии',
      ru: 'Казахстанские ученые будут стажироваться в ведущих научных центрах Германии',
    },
    news22: {
      en: 'The Minister of Science and Higher Education, Sayasat Nurbek, discussed cooperation issues with the German Ambassador to Kazakhstan, Monika Iversen, reports BaigeNews.kz citing the press service of the Ministry of Science and Higher Education of Kazakhstan.',
      kz: 'Министр науки и высшего образования Саясат Нурбек обсудил вопросы сотрудничества с послом Германии в Казахстане Моникой Иверсен, сообщает BaigeNews.kz со ссылкой на пресс-службу министерства науки и высшего образования Казахстана.',
      ru: 'Министр науки и высшего образования Саясат Нурбек обсудил вопросы сотрудничества с послом Германии в Казахстане Моникой Иверсен, сообщает BaigeNews.kz со ссылкой на пресс-службу министерства науки и высшего образования Казахстана.',
    },
    news23: {
      en: 'The head of the department noted that domestic scientists undergo training abroad to improve their qualifications under the "Bolashak" state program: "We are ready to consider leading German research centers for our scientists to do their internships," said Sayasat Nurbek.',
      kz: 'Глава ведомства отметил, что отечественные ученые для повышения квалификации проходят обучение за рубежом по госпрограмме "Болашак": "Мы готовы рассмотреть ведущие научно-исследовательские центры Германии для прохождения стажировки нашими учёными", — отметил Саясат Нурбек.',
      ru: 'Глава ведомства отметил, что отечественные ученые для повышения квалификации проходят обучение за рубежом по госпрограмме "Болашак": "Мы готовы рассмотреть ведущие научно-исследовательские центры Германии для прохождения стажировки нашими учёными", — отметил Саясат Нурбек.',
    },
    news24: {
      en: 'Monika Iversen proposed to create a Faculty of Sustainable Engineering within the framework of the memorandum between Yessenov University and the Kazakh-German University. Sayasat Nurbek stated his readiness to consider this initiative.',
      kz: 'Моника Иверсен предложила в рамках меморандума между Есенов университетом и Казахстанско-немецким университетом создать факультет устойчивой инженерии. Саясат Нурбек заявил о готовности рассмотреть эту инициативу.',
      ru: 'Моника Иверсен предложила в рамках меморандума между Есенов университетом и Казахстанско-немецким университетом создать факультет устойчивой инженерии. Саясат Нурбек заявил о готовности рассмотреть эту инициативу.',
    },
    news31: {
      en: 'Signing of the Memorandum with the Caspian University of Technology and Engineering named after Sh. Yessenov.',
      kz: 'Подписание Меморандума с Каспийским университетом технологий и инжиниринга им. Ш. Есенова',
      ru: 'Подписание Меморандума с Каспийским университетом технологий и инжиниринга им. Ш. Есенова',
    },
    news32: {
      en: 'DKU, together with partners, is launching a unique project "Mangystau School of Sustainable Engineering"!',
      kz: 'DKU совместно с партнерами запускает уникальный проект «Mangystau School of Sustainable Engineering”!',
      ru: 'DKU совместно с партнерами запускает уникальный проект «Mangystau School of Sustainable Engineering”!',
    },
    news33: {
      en: 'On August 26, 2022, the President of DKU, Mr. Rommel Volrad, and the President of Yessenov University, Mr. Berik Akhmetov, signed a Memorandum of Cooperation within the framework of joint implementation in western Kazakhstan of the international project "Mangystau School of Sustainable Engineering."',
      kz: '26 августа 2022 года президент DKU г-н Роммель Волрад и президент Yessenov University г-н Ахметов Берик подписали Меморандум о сотрудничестве в рамках совместной реализации в западном Казахстане международного проекта «Mangystau School of Sustainable Engineering”.',
      ru: '26 августа 2022 года президент DKU г-н Роммель Волрад и президент Yessenov University г-н Ахметов Берик подписали Меморандум о сотрудничестве в рамках совместной реализации в западном Казахстане международного проекта «Mangystau School of Sustainable Engineering”.',
    },
    news34: {
      en: 'This unique project for Central Asia is aimed at implementing German standards in higher engineering education in the field of hydrogen energy.',
      kz: 'Этот уникальный для Центральной Азии проект направлен на внедрение немецких стандартов в получении высшего инженерного образования в области водородной энергетики.',
      ru: 'Этот уникальный для Центральной Азии проект направлен на внедрение немецких стандартов в получении высшего инженерного образования в области водородной энергетики.',
    },
    news41: {
      en: 'Working familiarization trip of the DKU delegation to the Yessenov University',
      kz: 'Рабочая ознакомительная поездка делегации DKU в университет им. Есенова',
      ru: 'Рабочая ознакомительная поездка делегации DKU в университет им. Есенова',
    },
    news42: {
      en: 'From October 11 to 15, a working familiarization trip of the DKU delegation to the Yessenov University, Aktau city took place! The main topic of discussion was cooperation in the field of engineering and technical direction, logistics.',
      kz: 'С 11 по 15 октября состоялась рабочая ознакомительная поездка делегации DKU в университет им. Есенова, г. Актау!',
      ru: 'С 11 по 15 октября состоялась рабочая ознакомительная поездка делегации DKU в университет им. Есенова, г. Актау!',
    },
    news43: {
      en: 'In addition to this, the following were discussed:',
      kz: 'Помимо этого, были обсуждены:',
      ru: 'Помимо этого, были обсуждены:',
    },
    news44: {
      en: '• discussions about the concept of the school of sustainable engineering on Wednesday and Thursday;',
      kz: '•	беседы о концепции школы устойчивого инжиниринга в среду и четверг;',
      ru: '•	беседы о концепции школы устойчивого инжиниринга в среду и четверг;',
    },
    news45: {
      en: '• educational programs (bachelor’s, master’s, doctoral);',
      kz: '•	учебные программы (бакалавриат, магистратура, аспирантура);',
      ru: '•	учебные программы (бакалавриат, магистратура, аспирантура);',
    },
    news46: {
      en: '• development of curricula and structural plan, double degree programs;',
      kz: '•	разработка учебных планов и структурный план, программы двойного диплома;',
      ru: '•	разработка учебных планов и структурный план, программы двойного диплома;',
    },
    news47: {
      en: '• research topics and research strategy;',
      kz: '•	темы исследования и стратегия исследования;',
      ru: '•	темы исследования и стратегия исследования;',
    },
    news48: {
      en: '• design/setup of laboratories, laboratory needs.',
      kz: '•	проектирование/обустройство лабораторий, потребность лабораторий.',
      ru: '•	проектирование/обустройство лабораторий, потребность лабораторий.',
    },
    news49: {
      en: 'Also, the DKU delegation visited the Aktau port and the Aktau Marine North Terminal to study the potential for cooperation in logistics, skills improvement, and other issues.',
      kz: 'Также делегация DKU посетила порт Актау и Актауский морской северный терминал для изучения потенциала сотрудничества по логистике, повышению квалификации и прочим вопросам.',
      ru: 'Также делегация DKU посетила порт Актау и Актауский морской северный терминал для изучения потенциала сотрудничества по логистике, повышению квалификации и прочим вопросам.',
    },
    news51: {
      en: 'An Institute of Engineering according to German standards will appear in Mangistau this year.',
      kz: 'Институт инжиниринга по немецким стандартам появится в Мангистау в этом году',
      ru: 'Институт инжиниринга по немецким стандартам появится в Мангистау в этом году',
    },
    news52: {
      en: 'On the basis of the Shakhmardan Yessenov Caspian University of Technology and Engineering (Yessenov University), in cooperation with the Kazakh-German University, it is planned to open an Institute of Engineering, reports BaigeNews.kz.',
      kz: 'На базе Каспийского университета технологий и инжиниринга имени Шахмардана Есенова (Yessenov University) совместно с Казахстанско-Немецким университетом планируется открыть институт инжиниринга, передает BaigeNews.kz.',
      ru: 'На базе Каспийского университета технологий и инжиниринга имени Шахмардана Есенова (Yessenov University) совместно с Казахстанско-Немецким университетом планируется открыть институт инжиниринга, передает BaigeNews.kz.',
    },
    news53: {
      en: '"Creating an institute of engineering will solve several pressing issues at once. First of all, we can prepare qualified personnel on the basis of our university, that is, we will contribute to the development of local human capital. Also, a rather painful issue in our country is being addressed – the outflow of youth. Unfortunately, most of those who go abroad to study or work do not return to their homeland. Thus, by creating conditions and providing local youth with quality education according to German standards, we can eliminate brain drain," noted Berik Akhmetov.',
      kz: '"Создание института инжиниринга позволить решить сразу несколько актуальных задач. В первую очередь, мы можем на базе нашего университета готовить квалифицированные кадры, то есть мы будем способствовать развитию локального человеческого капитала. Также решается достаточно болезненный вопрос в нашей стране – это отток молодежи. К сожалению, большинство тех, кто уезжает учиться или работать зарубеж - обратно на Родину не возвращается. Таким образом, создавая условия и обеспечивая местную молодежь качественным образованием по немецким стандартам мы можем ликвидировать утечку кадров", - отметил Берик Ахметов.',
      ru: '"Создание института инжиниринга позволить решить сразу несколько актуальных задач. В первую очередь, мы можем на базе нашего университета готовить квалифицированные кадры, то есть мы будем способствовать развитию локального человеческого капитала. Также решается достаточно болезненный вопрос в нашей стране – это отток молодежи. К сожалению, большинство тех, кто уезжает учиться или работать зарубеж - обратно на Родину не возвращается. Таким образом, создавая условия и обеспечивая местную молодежь качественным образованием по немецким стандартам мы можем ликвидировать утечку кадров", - отметил Берик Ахметов.',
    },
    news54: {
      en: 'Education according to German standards is expected to start in this academic year in two specialties: "Logistics" and "Energy and Environmental Engineering". According to Berik Akhmetov, the rector of Yessenov University, new opportunities will help to curb the outflow of youth from Kazakhstan.',
      kz: 'Обучение по немецким стандартам должно стартовать уже в этом учебном году по двум специальностям "Логистика" и "Энергетический и экологический инжиниринг". По словам ректора Yessenov University Берика Ахметова, новые возможности позволят удержать отток молодежи из Казахстана.',
      ru: 'Обучение по немецким стандартам должно стартовать уже в этом учебном году по двум специальностям "Логистика" и "Энергетический и экологический инжиниринг". По словам ректора Yessenov University Берика Ахметова, новые возможности позволят удержать отток молодежи из Казахстана.',
    },
    news61: {
      en: 'At HAW HAMBURG, a leading university in Northern Germany, partnerships with German universities have begun.',
      kz: 'В HAW HAMBURG, ведущем вузе Северной Германии, начались соглашения о партнерстве с немецкими университетами.',
      ru: 'В HAW HAMBURG, ведущем вузе Северной Германии, начались соглашения о партнерстве с немецкими университетами.',
    },
    news62: {
      en: 'The Hamburg University of Applied Sciences is a well-known institution whose aim is to develop sustainable solutions to today’s and tomorrow’s social problems. HAW Hamburg is a partner to more than 100 European universities, as well as universities in North and South America, Asia, and the Middle East.',
      kz: 'Гамбургский университет прикладных наук – известное заведение, цель которого состоит в выработке устойчивых решений социальных проблем сегодняшнего и завтрашнего дня. HAW Hamburg является партнером более чем 100 европейских университетов, а также университетов Северной и Южной Америки, Азии и Ближнего Востока.',
      ru: 'Гамбургский университет прикладных наук – известное заведение, цель которого состоит в выработке устойчивых решений социальных проблем сегодняшнего и завтрашнего дня. HAW Hamburg является партнером более чем 100 европейских университетов, а также университетов Северной и Южной Америки, Азии и Ближнего Востока.',
    },
    news63: {
      en: 'The partnership agreement with this university will lead to the expansion of the curriculum, inviting professors to our country for experience exchange, academic mobility, and tripartite educational diplomas.',
      kz: 'Соглашение о партнерстве с этим университетом приведет к расширению учебной программы, приглашения профессоров в нашу страну для обмена опытом, академической мобильностью, тремя дипломами образования.',
      ru: 'Соглашение о партнерстве с этим университетом приведет к расширению учебной программы, приглашения профессоров в нашу страну для обмена опытом, академической мобильностью, тремя дипломами образования.',
    },
    news64: {
      en: 'A number of joint projects in energy and ecology are planned with German colleagues.',
      kz: 'Планируется с немецкими коллегами ряд совместных проектов в энергетике и экологии. С новым учебным годом Yessenov University начнет прием студентов на новые востребованные профессии по трем программам выпускников.',
      ru: 'Планируется с немецкими коллегами ряд совместных проектов в энергетике и экологии. С новым учебным годом Yessenov University начнет прием студентов на новые востребованные профессии по трем программам выпускников.',
    },
    news71: {
      en: 'Another agreement was signed at the Anhalt University of Applied Sciences (Hochschule Anhalt). ',
      kz: 'В Университете прикладных наук Анхальт (Hochschule Anhalt) был подписан очередные соглашения.',
      ru: 'В Университете прикладных наук Анхальт (Hochschule Anhalt) был подписан очередные соглашения.',
    },
    news72: {
      en: 'Future work has been planned in areas such as technological process design, electrical engineering, and bioengineering. The history of Anhalt University of Applied Sciences dates back to the 19th century. There, engineers were trained in electrical engineering, mechanical engineering, chemistry, metallurgy, as well as brick and ceramics technology.',
      kz: 'Было запланировано предстоящие работы по направлениям: проектирование технологических процессов, электротехника, биоинженерия. История Анхальтского Университета прикладных наук восходит к XIX веку. Там инженеры обучались электротехнике, машиностроению, химии, металлургии, технологии кирпича и керамике.',
      ru: 'Было запланировано предстоящие работы по направлениям: проектирование технологических процессов, электротехника, биоинженерия. История Анхальтского Университета прикладных наук восходит к XIX веку. Там инженеры обучались электротехнике, машиностроению, химии, металлургии, технологии кирпича и керамике.',
    },
    news73: {
      en: 'Over different years, the foundation of the modern university was laid and expanded through the creation of an experimental station for training agricultural specialists in this region; the establishment of a plant cultivation institute; an applied sciences university for agriculture; as well as its transformation into a university for agriculture and food industry.',
      kz: 'В разные годы с созданием опытной станции подготовки специалистов сельского хозяйства в этом регионе; созданием института растениеводства; Университета прикладных наук для сельского хозяйства; а также преобразованием в университет сельского хозяйства и пищевой промышленности был заложен и расширен фундамент современного университета.',
      ru: 'В разные годы с созданием опытной станции подготовки специалистов сельского хозяйства в этом регионе; созданием института растениеводства; Университета прикладных наук для сельского хозяйства; а также преобразованием в университет сельского хозяйства и пищевой промышленности был заложен и расширен фундамент современного университета.',
    },
    news74: {
      en: 'Later, large technical colleges were added to the structure and the famous Anhalt University of Applied Sciences was formed. Here, technical specialties are mostly taught.Most foreign students prepare here for study at universities in Germany.',
      kz: 'Позже в состав были добавлены крупные технические колледжи и сформирован знаменитый Анхальтский Университет прикладных наук. Здесь в основном преподаются технические специальности. Большинство иностранных студентов готовятся здесь для обучения в университетах Германии.',
      ru: 'Позже в состав были добавлены крупные технические колледжи и сформирован знаменитый Анхальтский Университет прикладных наук. Здесь в основном преподаются технические специальности. Большинство иностранных студентов готовятся здесь для обучения в университетах Германии.',
    },
    news75: {
      en: 'A portion of the students and master’s students who are admitted to the German Institute of Engineering, which will open this year based on Yessenov University, will have the opportunity to study at this university for a year and gain experience.Thus, people possessing artistic and educational knowledge can master their studies and profession, becoming specialists with two or three degrees.',
      kz: 'Часть студентов и магистрантов, поступающих в немецкий Институт инжиниринга, который откроется в этом году на базе Yessenov University, получат возможность обучаться в этом университете в течение года и получить опыт. Таким образом, люди, обладающие художественно-образовательными знаниями, могут овладеть учебой и профессией, стать специалистами с двумя и тремя дипломами.',
      ru: 'Часть студентов и магистрантов, поступающих в немецкий Институт инжиниринга, который откроется в этом году на базе Yessenov University, получат возможность обучаться в этом университете в течение года и получить опыт. Таким образом, люди, обладающие художественно-образовательными знаниями, могут овладеть учебой и профессией, стать специалистами с двумя и тремя дипломами.',
    },
    news81: {
      en: 'A meeting was held with Mr. Vito Chechere, the official representative of the German Ministry of Foreign Affairs.',
      kz: 'Было проведено встреча с официальным представителем Министерства иностранных дел Германии г-ном Вито Чечере.',
      ru: 'Было проведено встреча с официальным представителем Министерства иностранных дел Германии г-ном Вито Чечере.',
    },
    news82: {
      en: 'At the meeting, the structure of the engineering institute, which will open on the basis of Yessenov University, was consulted upon. Apart from strategic directions, the portfolio of educational programs, the period of their implementation, and the development plan for cooperation in science with German partner universities as part of the joint institute were discussed.',
      kz: 'Консультация по структуре инженерного института, которая откроется на базе Yessenov University на встрече. Кроме стратегических направлений, портфеля образовательных программ, периода их реализации, план развития сотрудничества в науке с вузами-партнерами Германии в рамках совместного института.',
      ru: 'Консультация по структуре инженерного института, которая откроется на базе Yessenov University на встрече. Кроме стратегических направлений, портфеля образовательных программ, периода их реализации, план развития сотрудничества в науке с вузами-партнерами Германии в рамках совместного института.',
    },
    news83: {
      en: 'The prospects for quality training of personnel in higher engineering education in the fields of Energy, Ecology and Land Resources, Flow Systems Logistics, Advanced Engineering, Petrochemistry, Information Technology and Digitalization were also discussed.',
      kz: 'Обсудили перспективы качественного обучения кадров в высшем инженерном образовании в областях Энергетика, экология и земельные ресурсы, потоковые системы логистики, передовой инжиниринг, Нефтехимия, Информационные технологии и цифровизация.',
      ru: 'Обсудили перспективы качественного обучения кадров в высшем инженерном образовании в областях Энергетика, экология и земельные ресурсы, потоковые системы логистики, передовой инжиниринг, Нефтехимия, Информационные технологии и цифровизация.',
    },
    news84: {
      en: 'Additionally, the DAAD (German Academic Exchange Service) provided insights into the peculiarities of the German academic exchange service. Within the framework of the newly created institute, the opportunity to organize and finance academic exchanges for researchers and students, as well as the application of advanced German methodologies in scientific research, was not overlooked.',
      kz: 'Г-н Чечер заявил, что поддержит совместную инициативу со ссылкой на высококвалифицированных инженерных и технических специалистов, которые пользуются огромным спросом на мировом рынке труда.',
      ru: 'Г-н Чечер заявил, что поддержит совместную инициативу со ссылкой на высококвалифицированных инженерных и технических специалистов, которые пользуются огромным спросом на мировом рынке труда.',
    },
    news85: {
      en: 'Mr. Chechere stated that he would support this joint initiative, referring to the high demand for highly qualified engineering and technical specialists in the global labor market. This meeting gave a powerful impetus to the work of the Kazakh-German Engineering Institute, established in the Mangistau region.A special meeting was held with Gunter Ziegler, the President of Freie Universität Berlin, the largest university in Berlin in terms of student enrollment, following the meeting with the representative of the ministry. They discussed cooperation priorities and joint work in the key areas of humanities and social sciences.',
      kz: 'Данная встреча придала мощный толчок работе Казахстанско-германского инженерного института, основанного в Мангистауской области. Специальная встреча с президентом Freie Universität Berlin, крупнейшего по количеству студентов университета Берлина, Гюнтером Зиглером, после встречи с представителем министерства. Обсудили с коллегой приоритеты сотрудничества и вопросы совместной работы в основных областях гуманитарных и общественных наук.',
      ru: 'Данная встреча придала мощный толчок работе Казахстанско-германского инженерного института, основанного в Мангистауской области. Специальная встреча с президентом Freie Universität Berlin, крупнейшего по количеству студентов университета Берлина, Гюнтером Зиглером, после встречи с представителем министерства. Обсудили с коллегой приоритеты сотрудничества и вопросы совместной работы в основных областях гуманитарных и общественных наук.',
    },
    news86: {
      en: 'If we successfully carry out such extensive work as directed by the Head of State, we believe that we will make a positive contribution to addressing unemployment issues in the Mangistau region.The time is not far off when we will be preparing our professionals, trained at an international level, for the newly opened alpine plant with the support of investors.',
      kz: 'Если мы успешно осуществим такие масштабные работы по прямому поручению Главы государства, то верим, что сегодня внесем позитивный вклад в решение проблем безработицы в Мангистауской области. Не за горами время готовить наших профессионалов, подготовленных на международном уровне к вновь открытому альпийскому заводу при поддержке инвесторов.',
      ru: 'Если мы успешно осуществим такие масштабные работы по прямому поручению Главы государства, то верим, что сегодня внесем позитивный вклад в решение проблем безработицы в Мангистауской области. Не за горами время готовить наших профессионалов, подготовленных на международном уровне к вновь открытому альпийскому заводу при поддержке инвесторов.',
    },
    news91: {
      en: 'In Kazakhstan Engineers will be educated be German standards.',
      kz: 'В Казахстане будут готовить инженеров по Немецким стандартам',
      ru: 'В Казахстане будут готовить инженеров по Немецким стандартам',
    },
    news92: {
      en: 'Sholpan Naimanbayeva, correspondent: A new Institute of Engineering will be opened in Aktau this year based on the Shakhmardan Yessenov University. The educational institution will serve as a forge for technical professionals who will be trained according to modern European standards. The best programs from top German universities will be selected for the education. The German institute will prepare engineers in various fields. At the initial stage, Kazakhstanis are offered to enroll in two specialties: "Energy Management" and "Logistics". These programs will be launched in collaboration with the Hamburg University of Applied Sciences and the Wildau Technical University. During the trip to Germany, the leadership of Yessenov University visited leading universities in Germany. Partners signed memorandums and discussed further plans.',
      kz: 'Шолпан Найманбаева, корреспондент: - Новый институт инжиниринга откроют в Актау уже в этом году на базе университета имени Шахмардана Есенова. Учебное заведение станет кузницей технических кадров, которых готовят по современным европейским стандартам. Для обучения будут отобраны лучшие программы топовых немецких вузов. В немецком институте будут готовить инженеров разных направлений. На начальном этапе казахстанцам предлагают поступить на две специальности: первая – «Энергоменеджмент» и вторая – «Логистика». Эти программы будут запущены совместно с Гамбургским университетом прикладных наук и Техническим университетом Вильдау. Во время поездки в Германию руководство университета имени Есенова посетило ведущие вузы ФРГ. Партнеры подписали меморандумы и обсудили дальнейшие планы.',
      ru: 'Шолпан Найманбаева, корреспондент: - Новый институт инжиниринга откроют в Актау уже в этом году на базе университета имени Шахмардана Есенова. Учебное заведение станет кузницей технических кадров, которых готовят по современным европейским стандартам. Для обучения будут отобраны лучшие программы топовых немецких вузов. В немецком институте будут готовить инженеров разных направлений. На начальном этапе казахстанцам предлагают поступить на две специальности: первая – «Энергоменеджмент» и вторая – «Логистика». Эти программы будут запущены совместно с Гамбургским университетом прикладных наук и Техническим университетом Вильдау. Во время поездки в Германию руководство университета имени Есенова посетило ведущие вузы ФРГ. Партнеры подписали меморандумы и обсудили дальнейшие планы.',
    },
    news93: {
      en: 'Berik Ahmetov, President of the Caspian University of Technology and Engineering named after Yessenov: You know that the Head of State has given instructions regarding knowledge transfer through the opening of foreign branches in Kazakhstan. In accordance with this instruction, our university is engaging a consortium of German universities. It is not just one university, but a consortium. We are bringing together the best expertise from different universities. Our task is to select the best programs from each university and then apply them here. In the new Institute of Engineering, eight undergraduate programs and six master’s programs will be launched. We plan to gradually increase both the number of students and the number of specialties. On the 4th year, Kazakhstani students will study at a German partner university, and later on, students will have the opportunity to go to Germany for internships and practical training. Berik Ahmetov, President of the Caspian University of Technology and Engineering named after Yessenov: - Of course, education will be conducted in Kazakh and Russian languages at our university. For two years, we will intensively teach them German, so that by the 3rd year, they will be able to take some courses in German. Then, the 4th year will be fully conducted in Germany.',
      kz: 'Берик Ахметов, президент Каспийского университета технологий и инжиниринга им. Есенова: - Вы знаете, что Глава государства дал поручение по трансферту знаний через открытие зарубежных филиалов в Казахстане. И во исполнение этого поручения наш университет привлекает консорциум немецких университетов. Это не один университет, а консорциум. Мы привлекаем лучшие компетенции из разных университетов. Наша задача – отобрать лучшие программы из каждого университета и потом применить здесь. В новом институте инжиниринга откроют восемь программ бакалавриата и шесть – по магистратуре. В планах поэтапно увеличить как число студентов, так и количество специальностей. На 4-м курсе казахстанцы будут обучаться в немецком вузе-партнёре, а позднее студенты смогут пройти в Германии и практику на производстве. Берик Ахметов, президент Каспийского университета технологий и инжиниринга им. Есенова: - Конечно, будет обучение на казахском, русском языках на базе нашего университета. Два года мы будем их интенсивно обучать немецкому, чтобы на 3-м курсе они частично могли взять курсы на немецком языке. Далее 4-й курс они полностью проводят в Германии.',
      ru: 'Берик Ахметов, президент Каспийского университета технологий и инжиниринга им. Есенова: - Вы знаете, что Глава государства дал поручение по трансферту знаний через открытие зарубежных филиалов в Казахстане. И во исполнение этого поручения наш университет привлекает консорциум немецких университетов. Это не один университет, а консорциум. Мы привлекаем лучшие компетенции из разных университетов. Наша задача – отобрать лучшие программы из каждого университета и потом применить здесь. В новом институте инжиниринга откроют восемь программ бакалавриата и шесть – по магистратуре. В планах поэтапно увеличить как число студентов, так и количество специальностей. На 4-м курсе казахстанцы будут обучаться в немецком вузе-партнёре, а позднее студенты смогут пройти в Германии и практику на производстве. Берик Ахметов, президент Каспийского университета технологий и инжиниринга им. Есенова: - Конечно, будет обучение на казахском, русском языках на базе нашего университета. Два года мы будем их интенсивно обучать немецкому, чтобы на 3-м курсе они частично могли взять курсы на немецком языке. Далее 4-й курс они полностью проводят в Германии.',
    },
    enr: {
      en: 'PARTNERS',
      kz: 'СЕРІКТЕСТЕР',
      ru: 'ПАРТНЕРЫ',
    },

    enr: {
      en: 'PARTNERS',
      kz: 'СЕРІКТЕСТЕР',
      ru: 'ПАРТНЕРЫ',
    },

    enr: {
      en: 'PARTNERS',
      kz: 'СЕРІКТЕСТЕР',
      ru: 'ПАРТНЕРЫ',
    },

    enr: {
      en: 'PARTNERS',
      kz: 'СЕРІКТЕСТЕР',
      ru: 'ПАРТНЕРЫ',
    },

    enr: {
      en: 'PARTNERS',
      kz: 'СЕРІКТЕСТЕР',
      ru: 'ПАРТНЕРЫ',
    },

    enr: {
      en: 'PARTNERS',
      kz: 'СЕРІКТЕСТЕР',
      ru: 'ПАРТНЕРЫ',
    },





    // Добавьте другие ключи перевода и их значения для разных элементов
  };

  // Возвращаем перевод в соответствии с выбранным языком и ключом перевода
  return translations[translationKey][lang];
}
