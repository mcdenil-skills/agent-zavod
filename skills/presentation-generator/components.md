# Каталог HTML-компонентов

> Копируй нужный компонент и подставляй свой контент.
> Все классы уже есть в lesson.css и bonus.css.

---

## 1. lesson-badge (только уроки)
Бейдж серии в начале страницы.
```html
<div style="text-align: center;">
    <span class="lesson-badge">Челлендж: Финансовое приложение</span>
</div>
```

## 2. bonus-main-title
Главный заголовок. В уроках — зелёный, в бонусах — градиентный.
```html
<h1 class="bonus-main-title">Урок 1: Знакомство с Google AI Studio</h1>
```

## 3. subtitle
Подзаголовок под h1.
```html
<p class="subtitle">Регистрируемся, разбираемся в интерфейсе и формулируем идею. Без кода, бесплатно</p>
```

## 4. onboarding-block (только уроки)
Блок "Как пользоваться этой страницей".
```html
<div class="onboarding-block fade-in">
    <div class="onboarding-title">Как пользоваться этой страницей</div>
    <div class="onboarding-text">
        <p>Эта страница &mdash; ваш <strong>самоучитель</strong>. Вы проходите её <strong>сверху вниз</strong>, шаг за шагом &mdash; всё написано так, чтобы вы могли сделать сами.</p>
        <p><strong>Зелёные блоки с кнопкой &laquo;Скопировать&raquo;</strong> &mdash; это готовые тексты (промпты), которые вы копируете и вставляете в [ИНСТРУМЕНТ]. Не нужно ничего придумывать.</p>
        <p><strong>Жёлтые блоки</strong> &mdash; важные предупреждения, не пропускайте их.</p>
        <p>В конце &mdash; <strong>домашнее задание</strong>. Это самая важная часть: пока не сделаете &mdash; к следующему уроку переходить нет смысла.</p>
        <p style="margin-bottom: 0;">Готовы? Поехали!</p>
    </div>
</div>
```

## 5. bonus-toc
Оглавление с кликабельными ссылками. Каждый пункт — оффер!
```html
<div class="bonus-toc fade-in">
    <div class="bonus-toc-title">Что вас ждёт в этом уроке</div>
    <div class="bonus-toc-list">
        <a class="bonus-toc-item" href="#section-1">Зачем создавать приложения с помощью ИИ</a>
        <a class="bonus-toc-item" href="#section-2">Что такое Google AI Studio и почему бесплатный</a>
        <a class="bonus-toc-item" href="#section-3">Регистрация и первый запуск — пошагово</a>
    </div>
</div>
```

## 6. step-block
Пошаговая инструкция.
```html
<div class="step-block">
    <div class="step-number">ШАГ 1</div>
    <div class="step-title">Откройте Google AI Studio</div>
    <p>Нажмите на кнопку ниже &mdash; откроется страница:</p>
    <div class="tools-row">
        <a class="tool-link" href="https://aistudio.google.com" target="_blank">
            <span class="tool-icon">🔗</span> Открыть Google AI Studio
        </a>
    </div>
</div>
```

## 7. prompt-block
Промпт с кнопкой копирования.
```html
<div class="prompt-block">
    <div class="prompt-header">
        <span class="prompt-label">Промпт: Описание идеи приложения</span>
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">📋 Скопировать</button>
    </div>
    <div class="prompt-text">Ты — опытный продуктовый менеджер.

Я хочу создать [ТИП ПРИЛОЖЕНИЯ] для [АУДИТОРИЯ].

Опиши идею в 5 строк:
1. Что это
2. Для кого
3. Что вводит пользователь
4. Что получает
5. Визуальный стиль</div>
</div>
```

## 8. tool-link
Кнопка-ссылка на инструмент.
```html
<div class="tools-row">
    <a class="tool-link" href="https://aistudio.google.com" target="_blank">
        <span class="tool-icon">🔗</span> Google AI Studio
    </a>
    <a class="tool-link" href="https://lovable.dev/invite/I9HLR65" target="_blank">
        <span class="tool-icon">🔗</span> Lovable
    </a>
</div>
```

## 9. bonus-highlight
Ключевой инсайт или предупреждение.
```html
<div class="bonus-highlight">
    <span class="bonus-highlight-icon">💡</span>
    <span class="bonus-highlight-text">Важная мысль, которую нужно выделить. <strong>Жирный текст</strong> для акцента.</span>
</div>
```
Иконки: 💡 (инсайт), ⚠️ (предупреждение), 🎯 (цель), 🔥 (важно)

## 10. data-table
Таблица с данными.
```html
<table class="data-table">
    <tr>
        <th>Параметр</th>
        <th>Значение</th>
    </tr>
    <tr>
        <td>Лендинг</td>
        <td><strong>15 000 – 30 000 ₽</strong></td>
    </tr>
    <tr>
        <td>Telegram-бот</td>
        <td><strong>20 000 – 40 000 ₽</strong></td>
    </tr>
</table>
```

## 11. bonus-comparison
Сравнение "Было → Стало".
```html
<div class="bonus-comparison">
    <div class="comparison-item comparison-before">
        <span class="comparison-label">❌ Было</span>
        <span class="comparison-text">Описание проблемной ситуации</span>
    </div>
    <div class="comparison-item comparison-after">
        <span class="comparison-label">✅ Стало</span>
        <span class="comparison-text">Описание улучшенной ситуации</span>
    </div>
</div>
```

## 12. result-block
Результат секции (что получили после шагов).
```html
<div class="result-block">
    <div class="result-label">Результат</div>
    <p class="result-text">Вы зарегистрированы и видите режим Build: слева чат, справа превью</p>
</div>
```

## 13. warning-block
Предупреждение (жёлтый акцент).
```html
<div class="warning-block">
    <div class="warning-title">⚠️ Важно</div>
    <p>Текст предупреждения. Не пропускайте этот момент.</p>
</div>
```

## 14. feature-grid
Сетка из 4+ элементов (2 колонки).
```html
<div class="feature-grid">
    <div class="feature-item">
        <div class="feature-icon">🎨</div>
        <div class="feature-title">Название фичи</div>
        <p class="feature-desc">Краткое описание</p>
    </div>
    <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">Название фичи</div>
        <p class="feature-desc">Краткое описание</p>
    </div>
</div>
```

## 15. hw-block (только уроки)
Домашнее задание с "образом идеального результата".
```html
<div class="hw-block">
    <div class="hw-title">Задание: Сформулируйте идею приложения</div>
    <p>Заполните шаблон из 5 строк...</p>
    <div class="hw-ideal">
        <div class="hw-ideal-label">Образ идеального результата</div>
        <p>Заполненный шаблон, где каждая строка — конкретный ответ. Например: «Трекер расходов для фрилансера, тёмная тема, круговая диаграмма».</p>
    </div>
</div>
```

## 16. direction-block (только бонусы)
Направление/вариант с метриками.
```html
<div class="direction-block">
    <span class="direction-label">Направление 1</span>
    <div class="direction-title">Фриланс — проекты на заказ</div>
    <div class="direction-for">Для тех, кто хочет быстрый доход</div>
    <p>Описание направления.</p>
    <div class="direction-stats">
        <span class="stat-pill">Чек: 25–35 тыс. ₽</span>
        <span class="stat-pill">5–8 проектов/мес</span>
    </div>
    <div class="pros-cons">
        <div class="pros">✅ Быстрый старт, нет вложений</div>
        <div class="cons">⚠️ Доход привязан к времени</div>
    </div>
</div>
```

## 17. scenario-block (только бонусы)
Финансовый сценарий.
```html
<div class="scenario-block">
    <span class="scenario-label">Сценарий А</span>
    <div class="scenario-title">«Чистый фриланс»</div>
    <table class="data-table">
        <tr><td>Средний чек</td><td><strong>30 000 ₽</strong></td></tr>
        <tr><td>Проектов в месяц</td><td><strong>7</strong></td></tr>
    </table>
    <div class="scenario-result">Чистый доход: ~207 000 ₽/мес</div>
</div>
```

## 18. stat-pill
Метрика в плашке (внутри direction-block или standalone).
```html
<span class="stat-pill">125–280 тыс. ₽/мес</span>
```

## 19. pros-cons
Плюсы/минусы (2 колонки).
```html
<div class="pros-cons">
    <div class="pros">✅ Быстрый старт</div>
    <div class="cons">⚠️ Нужно время</div>
</div>
```

## 20. case-block (только бонусы)
Блок кейса.
```html
<div class="case-block">
    <span class="case-label">Кейс</span>
    <div class="case-title">Бот поддержки — снял 70% нагрузки</div>
    <p>Описание кейса с цифрами...</p>
</div>
```

## 21. meta-disclaimer
Дисклеймер Meta (обязательно в конце).
```html
<p class="meta-disclaimer">* Meta Platforms Inc. признана экстремистской организацией, её деятельность запрещена на территории Российской Федерации.</p>
```

## 22. bonus-author + author-socials
Подпись автора и соцсети.
```html
<p class="bonus-author">&mdash; Дмитрий Ледовских</p>
<div class="author-socials">
    <a class="author-social-link social-instagram" href="https://instagram.com/mcdenil" target="_blank">
        <span class="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></span>
        <span class="social-name">Instagram*</span>
    </a>
    <a class="author-social-link social-telegram" href="https://t.me/DmitryLedovskih" target="_blank">
        <span class="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></span>
        <span class="social-name">Telegram</span>
    </a>
    <a class="author-social-link social-youtube" href="https://www.youtube.com/@mcdenil_" target="_blank">
        <span class="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></span>
        <span class="social-name">YouTube</span>
    </a>
</div>
```

## 23. fade-in
Добавь класс `fade-in` на каждую секцию для анимации появления.
```html
<div class="fade-in">
    <h2 id="section-1">Заголовок секции</h2>
    <!-- контент секции -->
</div>
```

---

*Все компоненты стилизованы в lesson.css (зелёная тема) и bonus.css (фиолетовая тема).*