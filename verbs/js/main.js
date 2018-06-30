$(document).ready(function() {
  'use strict';

  let lParsed = [];
  let lErrorLst = [];
  let lCntTot;
  let lCnt;
  let lWord;
  let lChecked = false;
  let lListLoaded = false;
  let lCIndex = 0;
  let lErrors;
  let lMode = 0; //0 - учить, 1 - решать
  let lCurLevel;
  let lStrict = false;

  const TAB_HEADER = "<th>#</th><th>Translation</th><th>Infinitive</th><th>Past Simple</th><th>Past participle</th>";

  //Удаление текущего слова из массива слов
  let deleteWord = function() {
    lParsed.splice(lCIndex, 1);
  }

  //Случайное слово
  let getRandomWord = function() {
    lCIndex = Math.floor(Math.random() * lParsed.length);
    let lRes = lParsed[lCIndex];

    return lRes;
  }

  //перерисовка счетчиков
  let redrawCounters = function() {
    if (lMode === 2) {
      document.getElementById("counters").innerHTML = "Ответов: " + lCnt +
                                                      "; Осталось: " + lParsed.length +
                                                      "; Ошибок: " + lErrors +
                                                      "; Всего: " + lCntTot;
    }
    else {
      document.getElementById("counters").innerHTML = "Решено: " + lCnt +
                                                      "; Ошибок: " + lErrors +
                                                      "; Всего: " + lCntTot;
    }
  }

  //Проверка соответствует ли слово в массиве требуемому уровню
  let checkLevel = function(itemLevel, level) {
    if (lStrict) {
      return (itemLevel == level || (itemLevel === undefined && level === undefined));
    }
    return (itemLevel <= level || level === undefined);
  }

  // инициализация массива слов с определенного уровня
  let wordsInit = function(level, lPredefinedList) {

    if (lParsed !== undefined) {
      lParsed.length = 0;
    }

    if (lPredefinedList === undefined) {
      let lParsedTmp = JSON.parse(lVerbs);

      lParsedTmp.forEach(function(item, i)
        {
          if (checkLevel(item.level, level)) {
            lParsed.push(item);
          }
        }
      );
    }
    else {
      lParsed = lPredefinedList.splice(0);
    }

    lCnt = 0;
    lErrors = 0;
    lErrorLst.length = 0;
    lCntTot = lParsed.length;
  }

  //Проверка слова
  let checkWord = function(verb, simple, participle) {
    let lsimple_dict_f = lWord.simple.substring(0, lWord.simple.indexOf(';')).trim();
    let lsimple_dict_s = lWord.simple.substring(lWord.simple.indexOf(';') + 1, lWord.simple.length).trim();

    let lsimple_f = simple.toLowerCase().trim().substring(0, simple.toLowerCase().trim().indexOf(';')).trim();
    let lsimple_s = simple.toLowerCase().trim().substring(simple.toLowerCase().trim().indexOf(';') + 1, simple.toLowerCase().trim().length).trim();

    let lparticiple_dict_f = lWord.participle.substring(0, lWord.participle.indexOf(';')).trim();
    let lparticiple_dict_s = lWord.participle.substring(lWord.participle.indexOf(';') + 1, lWord.participle.length).trim();

    let lparticiple_f = participle.toLowerCase().trim().substring(0, participle.toLowerCase().trim().indexOf(';')).trim();
    let lparticiple_s = participle.toLowerCase().trim().substring(participle.toLowerCase().trim().indexOf(';') + 1, participle.toLowerCase().trim().length).trim();

    return (lWord.verb === verb.toLowerCase().trim() &&
            ( (lsimple_dict_f === lsimple_f && lsimple_dict_s === lsimple_s) ||
              (lsimple_dict_f === lsimple_s && lsimple_dict_s === lsimple_f)
            ) &&
            ( (lparticiple_dict_f === lparticiple_f && lparticiple_dict_s === lparticiple_s) ||
              (lparticiple_dict_f === lparticiple_s && lparticiple_dict_s === lparticiple_f)
            )
           );
  }

  //Произнести фразу на нужном языке (lang = ru/en)
  let prounonce = function(lang, phrase) {
    speechSynthesis.cancel();

    let speaker = new SpeechSynthesisUtterance(phrase);
    speaker.lang = lang;
    speechSynthesis.speak(speaker);
  }

  //Показать результат ответа
  let ShowResult = function(isCorrect) {
    document.getElementById("checkResult").style.display = "block";
    if (isCorrect) {
      document.getElementById("checkResult").innerHTML = "Correct!";
      document.getElementById("checkResult").className = "rightblock";
      prounonce("en", "Correct! " + lWord.verb + "; " + lWord.simple + "; " + lWord.participle);
    }
    else {
      document.getElementById("checkResult").innerHTML = "Wrong!<br>" + lWord.verb + " " + lWord.simple + " " + lWord.participle;
      document.getElementById("checkResult").className = "wrongblock";
      prounonce("en", "Wrong! " + lWord.verb + "; " + lWord.simple + "; " + lWord.participle);
    }
    document.getElementById("btnCheck").value = "Дальше!";
  }

  //Считать слово, вызвать проверку
  var checkPressed = function() {

    if (lChecked) {
       lChecked = false;
       putNewWord();
    }
    else {
      if (checkWord(document.getElementById("verbText").value,
                    document.getElementById("simpleText").value,
                    document.getElementById("participleText").value)) {
        deleteWord();
        ShowResult(true);
      }
      else {
        lErrors++;
        if (lMode !== 2) {
          lErrorLst.push(lWord);
          deleteWord();
        }
        ShowResult(false);
      }
      lCnt++;
      lChecked = true;
    }

    redrawCounters();
  }

  //Отрисовка строки таблицы
  let rowHtmlCode = function(num, translation, verb, simple, participle) {
    return ("<td>" + num + "</td><td>" + translation + "</td><td>" + verb + "</td><td>" + simple + "</td><td>" + participle + "</td>");
  }

  //Результаты прохождения теста
  let showTotalResults = function() {
    document.getElementById("checkResult").style.display = "none";
    document.getElementById("inputForm").style.display   = "none";
    document.getElementById("checkResult").style.display = "none";
    document.getElementById("btnRepeat").style.display   = "block";

    if (lMode !== 2)  {
      document.getElementById('translation').innerHTML = "Правильных: " + (lCntTot - lErrors) +
                                                         "; Ошибок: " + lErrors +
                                                         "; Всего: " + lCntTot +
                                                         "; Процент правильных: " + Math.round((100 - lErrors / lCntTot * 100));
      if (lErrors > 0) {
        document.getElementById("list").style.display = "block";

        let lList = document.getElementById("list");
        lList.innerHTML = "";
        let lTab = document.createElement('table');
        lTab.className = "verbtable";
        lTab.innerHTML = TAB_HEADER;

        //Показываем список ошибок
        lErrorLst.forEach(function(item, i) {
            let lRow = document.createElement('tr');
            lRow.innerHTML = rowHtmlCode(i + 1, item.translation, item.verb, item.simple, item.participle);
            lTab.appendChild(lRow);
          }
        );

        lList.appendChild(lTab);
        document.getElementById("btnCheckErrors").style.display = "block";
      }
    }
    else {
      document.getElementById('translation').innerHTML = "Ответов: " + lCnt +
                                                         "; Ошибок: " + lErrors +
                                                         "; Всего слов: " + lCntTot;

    }
  }

  // Отрисовка нового слова
  let putNewWord = function() {

    lWord = getRandomWord();

    if (lWord === undefined) {
      showTotalResults();
    }
    else {
      document.getElementById("btnCheck").value = "Проверить";
      document.getElementById("verbText").value = "";
      document.getElementById("simpleText").value = "";
      document.getElementById("participleText").value = "";
      document.getElementById("verbText").focus();
      document.getElementById('translation').innerHTML = "<p>" + lWord.translation + "</p>";
      document.getElementById("checkResult").style.display = "none";
      prounonce("ru", lWord.translation);
    }
  }

  //переход по enter
  let keyPressedVerb = function(e) {
    let charCode = e.which || e.keyCode;

    if(charCode == 13){
        e.preventDefault();
        document.getElementById("simpleText").focus();
    }
  }

  //переход по enter
  let keyPressedSimple = function(e) {
    let charCode = e.which || e.keyCode;

    if(charCode == 13){
        e.preventDefault();
        document.getElementById("participleText").focus();
    }
  }

  //переход по enter
  let keyPressedParticiple = function(e) {
    let charCode = e.which || e.keyCode;

    if(charCode == 13){
        e.preventDefault();
        document.getElementById("btnCheck").focus();
        document.getElementById("btnCheck").click();
    }
  }

  let keyBtnCloseHelp = function(e) {
    let charCode = e.which || e.keyCode;

    if(charCode == 27){
        e.preventDefault();
        this.click();
    }
  }

  //отрисовка блоков списка
  let switchToList = function() {
    document.getElementById("btnCheckErrors").style.display = "none";
    document.getElementById("btnRepeat").style.display      = "none";
    document.getElementById("inputForm").style.display   = "none";
    document.getElementById("checkResult").style.display = "none";
    document.getElementById("translation").style.display = "none";
    document.getElementById("list").style.display        = "block";
    document.getElementById("counters").innerHTML        = "";
    document.getElementById("btnList").disabled          = true;
    document.getElementById("btnSolve").disabled         = false;
    document.getElementById("btnTrainingSolve").disabled = false;
  }

  //отрисовка блоков решения
  let switchToSolve = function(isTraining) {
    document.getElementById("btnCheckErrors").style.display = "none";
    document.getElementById("btnRepeat").style.display      = "none";
    document.getElementById("inputForm").style.display   = "block";
    document.getElementById("checkResult").style.display = "none";
    document.getElementById("translation").style.display = "block";
    document.getElementById("list").style.display        = "none";
    document.getElementById("btnList").disabled          = false;
    if (isTraining) {
      document.getElementById("btnTrainingSolve").disabled = true;
      document.getElementById("btnSolve").disabled         = false;
    }
    else {
      document.getElementById("btnSolve").disabled         = true;
      document.getElementById("btnTrainingSolve").disabled = false;
    }
  }

  //Формирование списка слов для заданного уровня (level)
  let formList = function(level) {
    let lList = document.getElementById("list");
    lList.innerHTML = "";
    let lTab = document.createElement('table');
    lTab.className = "verbtable";
    lTab.innerHTML = TAB_HEADER;

    let lParsedAll = JSON.parse(lVerbs);
    let j = 0;

    lParsedAll.forEach(function(item, i)
      {
        if (checkLevel(item.level, level) === true) {
          let lRow = document.createElement('tr');
          let lattr = document.createAttribute("id");
          lattr.value = 'row_' + j;
          lRow.setAttributeNode(lattr);
          lRow.onclick = rowClicked;
          lRow.innerHTML = rowHtmlCode(++j, item.translation, item.verb, item.simple, item.participle);
          lTab.appendChild(lRow);
        }
      }
    );

    lList.appendChild(lTab);
  }

  //список глаголов
  let showList = function() {
    lMode = 0;
    switchToList();
    formList(lCurLevel);
  }

  //проверка
  let showSolve = function() {
    lMode = 1;
    switchToSolve();
    wordsInit(lCurLevel);
    redrawCounters();
    putNewWord();
  }

  //Тренировка "до победы"
  let showTraining = function() {
    lMode = 2;
    switchToSolve(true);
    wordsInit(lCurLevel);
    redrawCounters();
    putNewWord();
  }

  //Работа над ошибками
  let checkErrors = function() {
    lMode = 1;
    switchToSolve();
    wordsInit(lCurLevel, lErrorLst);
    redrawCounters();
    putNewWord();
  }

  //Прочитать строку таблицы по щелчку
  let rowClicked = function() {
    prounonce("en", document.getElementById(this.id).children[2].innerHTML + "; " +
                    document.getElementById(this.id).children[3].innerHTML + "; " +
                    document.getElementById(this.id).children[4].innerHTML + "; "
             );
  }

  let refresh = function() {
    if (lMode === 0) {
      showList();
    }
    else if (lMode === 2) {
      showTraining();
    }
    else {
      showSolve();
    }
  }

  let levelChanged = function() {
    lCurLevel = this.value === "100" ? undefined : this.value;
    refresh();
  }

  let noEasyChecked = function() {
    lStrict = this.checked;
    refresh();
  }

  let showHelp = function() {
    document.getElementById("helpPopup").style.display    = "block";
    document.getElementById("helpPopupContent").style.display = "block";
    document.getElementById("btnCloseHelp").focus();
  }

  let closeHelp = function() {
    document.getElementById("helpPopup").style.display    = "none";
    document.getElementById("helpPopupContent").style.display = "none";
  }

  // Основная программа
  let exec = function() {
    document.getElementById("btnList").onclick           = showList;
    document.getElementById("btnSolve").onclick          = showSolve;
    document.getElementById("btnCheck").onclick          = checkPressed;
    document.getElementById("btnTrainingSolve").onclick  = showTraining;
    document.getElementById("btnCheckErrors").onclick    = checkErrors;
    document.getElementById("btnRepeat").onclick         = refresh;


    document.getElementById("btnHelp").onclick           = showHelp;
    document.getElementById("btnCloseHelp").onclick      = closeHelp;

    document.getElementById("verbText").onkeypress       = keyPressedVerb;
    document.getElementById("simpleText").onkeypress     = keyPressedSimple;
    document.getElementById("participleText").onkeypress = keyPressedParticiple;
    document.getElementById("btnCloseHelp").onkeydown    = keyBtnCloseHelp;

    document.getElementById("levelSelect").onchange      = levelChanged;
    document.getElementById("chkNoEasy").onchange        = noEasyChecked;

    showList();
  }

  exec();

});
