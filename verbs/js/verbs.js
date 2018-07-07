"use strict";

const lVerbs = '[{"verb":"abide","simple":"abode","participle":"abode","translation":"Выносить, терпеть"},\
{"verb":"arise","simple":"arose","participle":"arisen","translation":"Возникать, происходить", "level":2},\
{"verb":"awake","simple":"awoke","participle":"awoken","translation":"Будить, проснуться", "level":1},\
{"verb":"be","simple":"was;were","participle":"been","translation":"Быть", "level":0},\
{"verb":"bear","simple":"bore","participle":"borne","translation":"Нести, выносить"},\
{"verb":"beat","simple":"beat","participle":"beaten","translation":"Бить", "level":1},\
{"verb":"become","simple":"became","participle":"become","translation":"Становиться", "level":1},\
{"verb":"begin","simple":"began","participle":"begun","translation":"Начинать", "level":0},\
{"verb":"behold","simple":"beheld","participle":"beheld","translation":"Созерцать, увидеть", "level":2},\
{"verb":"bend","simple":"bent","participle":"bent","translation":"Сгибать"},\
{"verb":"bereave","simple":"bereft;bereaved","participle":"bereft;bereaved","translation":"Лишать, отнимать"},\
{"verb":"beseech","simple":"besought;beseeched","participle":"besought;beseeched","translation":"Просить, умолять"},\
{"verb":"beset","simple":"beset","participle":"beset","translation":"Окружать", "level":2},\
{"verb":"bet","simple":"bet","participle":"bet","translation":"Поспорить", "level":2},\
{"verb":"bid","simple":"bid","participle":"bidden","translation":"Предложить, приказать", "level":2},\
{"verb":"bind","simple":"bound","participle":"bound","translation":"Связывать", "level":2},\
{"verb":"bite","simple":"bit","participle":"bitten","translation":"Кусать, клевать", "level":2},\
{"verb":"bleed","simple":"bled","participle":"bled","translation":"Кровоточить", "level":2},\
{"verb":"blow","simple":"blew","participle":"blown","translation":"Дуть", "level":1},\
{"verb":"break","simple":"broke","participle":"broken","translation":"Ломать", "level":0},\
{"verb":"breed","simple":"bred","participle":"bred","translation":"Разводить, размножать"},\
{"verb":"bring","simple":"brought","participle":"brought","translation":"Приносить", "level":0},\
{"verb":"browbeat","simple":"browbeat","participle":"browbeaten;browbeat","translation":"Запугивать, стращать"},\
{"verb":"build","simple":"built","participle":"built","translation":"Строить", "level":0},\
{"verb":"burn","simple":"burnt","participle":"burnt","translation":"Гореть", "level":2},\
{"verb":"burst","simple":"burst","participle":"burst","translation":"Разразиться", "level":2},\
{"verb":"bust","simple":"busted","participle":"busted","translation":"Обанкротиться, разориться"},\
{"verb":"buy","simple":"bought","participle":"bought","translation":"Покупать", "level":0},\
{"verb":"cast","simple":"cast","participle":"cast","translation":"Бросать, выкинуть", "level":2},\
{"verb":"catch","simple":"caught","participle":"caught","translation":"Ловить, хватать, успеть", "level":0},\
{"verb":"choose","simple":"chose","participle":"chosen","translation":"Выбирать", "level":1},\
{"verb":"cleave","simple":"cleft","participle":"cleft","translation":"Раскалывать, разрезать"},\
{"verb":"cling","simple":"clung","participle":"clung","translation":"Цепляться, держаться"},\
{"verb":"clothe","simple":"clothed;clad","participle":"clothed;clad","translation":"Одевать", "level":2},\
{"verb":"come","simple":"came","participle":"come","translation":"Приходить", "level":0},\
{"verb":"cost","simple":"cost","participle":"cost","translation":"Стоить", "level":0},\
{"verb":"creep","simple":"crept","participle":"crept","translation":"Ползать", "level":2},\
{"verb":"cut","simple":"cut","participle":"cut","translation":"Резать", "level":1},\
{"verb":"deal","simple":"dealt","participle":"dealt","translation":"Иметь дело", "level":2},\
{"verb":"dig","simple":"dug","participle":"dug","translation":"Копать", "level":2},\
{"verb":"disprove","simple":"disproved","participle":"disproved;disproven","translation":"Опровергать", "level":2},\
{"verb":"dive","simple":"dove;dived","participle":"dived","translation":"Нырять, погружаться", "level":2},\
{"verb":"do","simple":"did","participle":"done","translation":"Делать", "level":0},\
{"verb":"draw","simple":"drew","participle":"drawn","translation":"Рисовать, тащить", "level":1},\
{"verb":"dream","simple":"dreamt","participle":"dreamt","translation":"Мечтать, дремать", "level":1},\
{"verb":"drink","simple":"drank","participle":"drunk","translation":"Пить", "level":0},\
{"verb":"drive","simple":"drove","participle":"driven","translation":"Водить", "level":0},\
{"verb":"dwell","simple":"dwelt;dwelled","participle":"dwelt;dwelled","translation":"Проживать, обитать", "level":2},\
{"verb":"eat","simple":"ate","participle":"eaten","translation":"Есть", "level":0},\
{"verb":"fall","simple":"fell","participle":"fallen","translation":"Падать", "level":0},\
{"verb":"feed","simple":"fed","participle":"fed","translation":"Кормить", "level":1},\
{"verb":"feel","simple":"felt","participle":"felt","translation":"Чувствовать", "level":0},\
{"verb":"fight","simple":"fought","participle":"fought","translation":"Бороться", "level":1},\
{"verb":"find","simple":"found","participle":"found","translation":"Находить", "level":0},\
{"verb":"fit","simple":"fit","participle":"fit","translation":"Подходить по размеру, соответствовать", "level":1},\
{"verb":"flee","simple":"fled","participle":"fled","translation":"Убегать, исчезать", "level":2},\
{"verb":"fling","simple":"flung","participle":"flung","translation":"Бросать, кидать", "level":2},\
{"verb":"fly","simple":"flew","participle":"flown","translation":"Летать", "level":0},\
{"verb":"forbid","simple":"forbade","participle":"forbidden","translation":"Запрещать", "level":2},\
{"verb":"forgo","simple":"forewent","participle":"foregone","translation":"Отказываться, воздерживаться", "level":2},\
{"verb":"forecast","simple":"forecast","participle":"forecast","translation":"Прогнозировать", "level":2},\
{"verb":"foresee","simple":"foresaw","participle":"foreseen","translation":"Предвидеть, предугадывать", "level":2},\
{"verb":"foretell","simple":"foretold","participle":"foretold","translation":"Предсказывать, предвещать", "level":2},\
{"verb":"forget","simple":"forgot","participle":"forgotten","translation":"Забывать", "level":0},\
{"verb":"forgive","simple":"forgave","participle":"forgiven","translation":"Прощать", "level":1},\
{"verb":"forsake","simple":"forsook","participle":"forsaken","translation":"Оставлять, покидать", "level":2},\
{"verb":"freeze","simple":"froze","participle":"frozen","translation":"Замерзать", "level":1},\
{"verb":"get","simple":"got","participle":"got","translation":"Получать", "level":0},\
{"verb":"gild","simple":"gilt","participle":"gilt","translation":"Золотить"},\
{"verb":"give","simple":"gave","participle":"given","translation":"Давать", "level":0},\
{"verb":"go","simple":"went","participle":"gone","translation":"Идти", "level":0},\
{"verb":"grind","simple":"ground","participle":"ground","translation":"Молоть, перемалывать"},\
{"verb":"grow","simple":"grew","participle":"grown","translation":"Расти", "level":1},\
{"verb":"hang","simple":"hung","participle":"hung","translation":"Вешать", "level":1},\
{"verb":"have","simple":"had","participle":"had","translation":"Иметь", "level":0},\
{"verb":"hear","simple":"heard","participle":"heard","translation":"Слышать", "level":0},\
{"verb":"hide","simple":"hid","participle":"hidden","translation":"Прятать", "level":1},\
{"verb":"heave","simple":"heaved;hove","participle":"heaved;hove","translation":"Тянуть, тужиться"},\
{"verb":"hew","simple":"hewed","participle":"hewn;hewed","translation":"Рубить, срубать"},\
{"verb":"hit","simple":"hit","participle":"hit","translation":"Попадать в цель", "level":1},\
{"verb":"hold","simple":"held","participle":"held","translation":"Держать", "level":1},\
{"verb":"hurt","simple":"hurt","participle":"hurt","translation":"Ушибить, ранить", "level":1},\
{"verb":"inlay","simple":"inlaid","participle":"inlaid","translation":"Вкладывать (деньги), инкрустировать", "level":2},\
{"verb":"input","simple":"input","participle":"input","translation":"Ввести, вводить", "level":2},\
{"verb":"interweave","simple":"interwove","participle":"interwoven","translation":"Вплетать", "level":2},\
{"verb":"keep","simple":"kept","participle":"kept","translation":"Содержать, хранить", "level":1},\
{"verb":"kneel","simple":"knelt","participle":"knelt","translation":"Стоять на коленях", "level":2},\
{"verb":"knit","simple":"knit","participle":"knit","translation":"Вязать, штопать"},\
{"verb":"know","simple":"knew","participle":"known","translation":"Знать", "level":0},\
{"verb":"lay","simple":"laid","participle":"laid","translation":"Класть", "level":2},\
{"verb":"lead","simple":"led","participle":"led","translation":"Вести", "level":1},\
{"verb":"lean","simple":"leant","participle":"leant","translation":"Наклоняться"},\
{"verb":"leap","simple":"leapt","participle":"leapt","translation":"Прыгать, скакать"},\
{"verb":"learn","simple":"learnt;learned","participle":"learnt;learned","translation":"Учить, изучать", "level":1},\
{"verb":"leave","simple":"left","participle":"left","translation":"Оставлять", "level":0},\
{"verb":"lend","simple":"lent","participle":"lent","translation":"Занимать, одалживать, сдавать в аренду", "level":1},\
{"verb":"let","simple":"let","participle":"let","translation":"Позволять", "level":1},\
{"verb":"lie","simple":"lay","participle":"lain","translation":"Лежать", "level":1},\
{"verb":"light","simple":"lit","participle":"lit","translation":"Освещать", "level":2},\
{"verb":"lose","simple":"lost","participle":"lost","translation":"Терять", "level":0},\
{"verb":"make","simple":"made","participle":"made","translation":"Производить", "level":0},\
{"verb":"mean","simple":"meant","participle":"meant","translation":"Значить", "level":1},\
{"verb":"meet","simple":"met","participle":"met","translation":"Встречать", "level":0},\
{"verb":"mistake","simple":"mistook","participle":"mistaken","translation":"Ошибаться", "level":1},\
{"verb":"mow","simple":"mowed","participle":"mown","translation":"Косить, стричь"},\
{"verb":"overcome","simple":"overcame","participle":"overcome","translation":"Преодолеть, побороть", "level":1},\
{"verb":"pay","simple":"paid","participle":"paid","translation":"Платить", "level":0},\
{"verb":"plead","simple":"pleaded;pled","participle":"pleaded;pled","translation":"Умолять, просить"},\
{"verb":"prove","simple":"proved","participle":"proven","translation":"Доказывать", "level":1},\
{"verb":"put","simple":"put","participle":"put","translation":"Положить", "level":0},\
{"verb":"quit","simple":"quit","participle":"quit","translation":"Выходить", "level":1},\
{"verb":"read","simple":"read","participle":"read","translation":"Читать", "level":0},\
{"verb":"relay","simple":"relayed","participle":"relayed","translation":"Передавать, транслировать", "level":2},\
{"verb":"rid","simple":"rid","participle":"rid","translation":"Избавлять, освобождать", "level":2},\
{"verb":"ride","simple":"rode","participle":"ridden","translation":"Ездить верхом", "level":1},\
{"verb":"ring","simple":"rang","participle":"rung","translation":"Звенеть", "level":0},\
{"verb":"rise","simple":"rose","participle":"risen","translation":"Подниматься", "level":1},\
{"verb":"run","simple":"ran","participle":"run","translation":"Бежать", "level":0},\
{"verb":"saw","simple":"sawed","participle":"sawed;sawn","translation":"Пилить, распилить"},\
{"verb":"say","simple":"said","participle":"said","translation":"Говорить, произносить", "level":0},\
{"verb":"see","simple":"saw","participle":"seen","translation":"Видеть", "level":0},\
{"verb":"seek","simple":"sought","participle":"sought","translation":"Искать", "level":2},\
{"verb":"sell","simple":"sold","participle":"sold","translation":"Продавать", "level":1},\
{"verb":"send","simple":"sent","participle":"sent","translation":"Посылать", "level":0},\
{"verb":"set","simple":"set","participle":"set","translation":"Ставить (Устанавливать)", "level":1},\
{"verb":"sew","simple":"sewed","participle":"sewn","translation":"Шить"},\
{"verb":"shake","simple":"shook","participle":"shaken","translation":"Встряхивать", "level":1},\
{"verb":"shave","simple":"shaved","participle":"shaved;shaven","translation":"Брить, бриться", "level":1},\
{"verb":"shear","simple":"sheared","participle":"sheared;shorn","translation":"Стричь, срезать"},\
{"verb":"shed","simple":"shed","participle":"shed","translation":"Проливать, терять"},\
{"verb":"shine","simple":"shone","participle":"shone","translation":"Светить, сиять", "level":2},\
{"verb":"shit","simple":"shit","participle":"shit","translation":"Гадить", "level":2},\
{"verb":"shoe","simple":"shod","participle":"shod","translation":"Обувать, подковывать", "level":2},\
{"verb":"shoot","simple":"shot","participle":"shot","translation":"Стрелять, фотографировать", "level":1},\
{"verb":"show","simple":"showed","participle":"shown","translation":"Показывать", "level":1},\
{"verb":"shrink","simple":"shrank","participle":"shrunk","translation":"Уменьшать"},\
{"verb":"shut","simple":"shut","participle":"shut","translation":"Закрывать", "level":1},\
{"verb":"sing","simple":"sang","participle":"sung","translation":"Петь", "level":0},\
{"verb":"sink","simple":"sank;sunk","participle":"sunk","translation":"Тонуть", "level":2},\
{"verb":"sit","simple":"sat","participle":"sat","translation":"Сидеть", "level":0},\
{"verb":"slay","simple":"slew","participle":"slain","translation":"Убивать, умерщвлять", "level":2},\
{"verb":"sleep","simple":"slept","participle":"slept","translation":"Спать", "level":0},\
{"verb":"slide","simple":"slid","participle":"slid","translation":"Скользить"},\
{"verb":"sling","simple":"slung","participle":"slung","translation":"Повесить"},\
{"verb":"slink","simple":"slinked;slunk","participle":"slinked;slunk","translation":"Ускользать"},\
{"verb":"slit","simple":"slit","participle":"slit","translation":"Разрезать, перерезать"},\
{"verb":"smell","simple":"smelt","participle":"smelt","translation":"Пахнуть, чувствовать", "level":2},\
{"verb":"smite","simple":"smote","participle":"smitten","translation":"Поражать, бить"},\
{"verb":"sow","simple":"sowed","participle":"sown","translation":"Сеять"},\
{"verb":"speak","simple":"spoke","participle":"spoken","translation":"Говорить (с кем-то)", "level":0},\
{"verb":"speed","simple":"sped","participle":"sped","translation":"Спешить, мчаться", "level":2},\
{"verb":"spell","simple":"spelt","participle":"spelt","translation":"Произносить по буквам", "level":1},\
{"verb":"spend","simple":"spent","participle":"spent","translation":"Тратить", "level":0},\
{"verb":"spill","simple":"spilt","participle":"spilt","translation":"Проливать", "level":2},\
{"verb":"spin","simple":"spun","participle":"spun","translation":"Крутить, вертеть"},\
{"verb":"spit","simple":"spit;spat","participle":"spit;spat","translation":"Плевать", "level":2},\
{"verb":"split","simple":"split","participle":"split","translation":"Разделять, разбивать", "level":2},\
{"verb":"spoil","simple":"spoilt","participle":"spoilt","translation":"Портить, баловать", "level":1},\
{"verb":"spread","simple":"spread","participle":"spread","translation":"Расстилать", "level":2},\
{"verb":"spring","simple":"sprang","participle":"sprung","translation":"Прыгать", "level":2},\
{"verb":"stand","simple":"stood","participle":"stood","translation":"Стоять", "level":0},\
{"verb":"steal","simple":"stole","participle":"stolen","translation":"Красть", "level":1},\
{"verb":"stick","simple":"stuck","participle":"stuck","translation":"Колоть"},\
{"verb":"sting","simple":"stung","participle":"stung","translation":"Жалить"},\
{"verb":"stink","simple":"stank","participle":"stunk","translation":"Вонять, пахнуть"},\
{"verb":"strew","simple":"strewed","participle":"strewn","translation":"Посыпать"},\
{"verb":"stride","simple":"strode","participle":"stridden","translation":"Шагать", "level":2},\
{"verb":"strike","simple":"struck","participle":"struck;stricken","translation":"Бить, бастовать", "level":2},\
{"verb":"string","simple":"strung","participle":"strung","translation":"Нанизывать, вешать", "level":2},\
{"verb":"strive","simple":"strove;strived","participle":"strove;strived","translation":"Стараться, пытаться"},\
{"verb":"swear","simple":"swore","participle":"sworn","translation":"Клясться, присягать", "level":2},\
{"verb":"sweat","simple":"sweat;sweated","participle":"sweat;sweated","translation":"Потеть", "level":2},\
{"verb":"sweep","simple":"swept","participle":"swept","translation":"Выметать", "level":2},\
{"verb":"swell","simple":"swelled","participle":"swollen","translation":"Разбухать"},\
{"verb":"swim","simple":"swam","participle":"swum","translation":"Плавать", "level":0},\
{"verb":"swing","simple":"swung","participle":"swung","translation":"Качать"},\
{"verb":"take","simple":"took","participle":"taken","translation":"Брать, взять", "level":0},\
{"verb":"teach","simple":"taught","participle":"taught","translation":"Учить, преподавать", "level":1},\
{"verb":"tear","simple":"tore","participle":"torn","translation":"Рвать", "level":1},\
{"verb":"tell","simple":"told","participle":"told","translation":"Рассказывать", "level":0},\
{"verb":"think","simple":"thought","participle":"thought","translation":"Думать", "level":0},\
{"verb":"throw","simple":"threw","participle":"thrown","translation":"Бросать", "level":0},\
{"verb":"thrust","simple":"thrust","participle":"thrust","translation":"Засовывать, воткнуть"},\
{"verb":"tread","simple":"trod","participle":"trodden","translation":"Топтать, давить"},\
{"verb":"undergo","simple":"underwent","participle":"undergone","translation":"Испытывать, переносить", "level":2},\
{"verb":"understand","simple":"understood","participle":"understood","translation":"Понимать", "level":1},\
{"verb":"undertake","simple":"undertook","participle":"undertaken","translation":"Предпринимать, совершать", "level":1},\
{"verb":"undo","simple":"undid","participle":"undone","translation":"Уничтожать, отменять", "level":2},\
{"verb":"upset","simple":"upset","participle":"upset","translation":"Расстраивать, огорчать", "level":2},\
{"verb":"wake","simple":"woke","participle":"woken","translation":"Просыпаться", "level":0},\
{"verb":"wear","simple":"wore","participle":"worn","translation":"Носить", "level":0},\
{"verb":"weave","simple":"wove;weaved","participle":"wove;weaved","translation":"Ткать, плести", "level":2},\
{"verb":"wed","simple":"wed;wedded","participle":"wed;wedded","translation":"Жениться", "level":2},\
{"verb":"weep","simple":"wept","participle":"wept","translation":"Плакать", "level":2},\
{"verb":"wet","simple":"wet","participle":"wet","translation":"Мочить", "level":2},\
{"verb":"win","simple":"won","participle":"won","translation":"Выигрывать", "level":0},\
{"verb":"wind","simple":"wound","participle":"wound","translation":"Извиваться", "level":2},\
{"verb":"withdraw","simple":"withdrew","participle":"withdrawn","translation":"Снимать, удалять", "level":2},\
{"verb":"withhold","simple":"withheld","participle":"withheld","translation":"Удерживать, скрывать", "level":2},\
{"verb":"withstand","simple":"withstood","participle":"withstood","translation":"Выдерживать, сопротивляться", "level":2},\
{"verb":"wring","simple":"wrung","participle":"wrung","translation":"Выжимать, скручивать", "level":2},\
{"verb":"write","simple":"wrote","participle":"written","translation":"Писать", "level":0}\
]';
