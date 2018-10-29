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

  const TAB_HEADER = "<th>#</th><th>Russian</th><th>English</th>";

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
    document.getElementById("counters").innerHTML = "Решено: " + lCnt +
                                                    "; Ошибок: " + lErrors +
                                                    "; Всего: " + lCntTot;
  }

  // инициализация массива слов с определенного уровня
  let wordsInit = function(level, lPredefinedList) {

    if (lParsed !== undefined) {
      lParsed.length = 0;
    }

    if (lPredefinedList === undefined) {
      let lParsedTmp = JSON.parse(lVerbs);

      lParsedTmp.forEach(function(item, i)  { lParsed.push(item);  }
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
  let checkWord = function(russian, english) {
    return (lWord.russian.toLowerCase().trim() === russian.toLowerCase().trim() &&
            lWord.english.toLowerCase().trim() === english.toLowerCase().trim()
           );
  }

  //Показать результат ответа
  let ShowResult = function(isCorrect) {
    document.getElementById("checkResult").style.display = "block";
    if (isCorrect) {
      document.getElementById("checkResult").innerHTML = "Correct!";
      document.getElementById("checkResult").className = "rightblock";
    }
    else {
      document.getElementById("checkResult").innerHTML = "Wrong!<br>" + lWord.russian + " -> '" + lWord.english + "'";
      document.getElementById("checkResult").className = "wrongblock";
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
      if (checkWord(document.getElementById("russian").value,
                    document.getElementById("english").value)) {
        deleteWord();
        ShowResult(true);
      }
      else {
        lErrors++;
        lErrorLst.push(lWord);
        ShowResult(false);
      }
      lCnt++;
      lChecked = true;
    }

    redrawCounters();
  }

  //Отрисовка строки таблицы
  let rowHtmlCode = function(num, russian, english) {
    return ("<td>" + num + "</td><td>" + russian + "</td><td>" + english + "</td>");
  }

  //Результаты прохождения теста
  let showTotalResults = function() {
    document.getElementById("checkResult").style.display = "none";
    document.getElementById("inputForm").style.display   = "none";
    document.getElementById("checkResult").style.display = "none";

    document.getElementById("translation").style.display = "block";
    document.getElementById('translation').innerHTML = "Ответов: " + lCnt +
                                                       "; Ошибок: " + lErrors +
                                                       "; Всего слов: " + lCntTot;
  }

  // Отрисовка нового слова
  let putNewWord = function() {

    lWord = getRandomWord();

    if (lWord === undefined) {
      showTotalResults();
    }
    else {
      document.getElementById("btnCheck").value = "Проверить";
      document.getElementById("russian").value = lWord.russian;
      document.getElementById("english").value = "";
      document.getElementById("english").focus();
      document.getElementById("checkResult").style.display = "none";
    }
  }

  //переход по enter
  let keyPressedEnglish = function(e) {
    let charCode = e.which || e.keyCode;

    if(charCode == 13){
        e.preventDefault();
        document.getElementById("btnCheck").focus();
        document.getElementById("btnCheck").click();
    }
  }

  //отрисовка блоков списка
  let switchToList = function() {
    document.getElementById("inputForm").style.display   = "none";
    document.getElementById("checkResult").style.display = "none";
    document.getElementById("translation").style.display = "none";
    document.getElementById("list").style.display        = "block";
    document.getElementById("counters").innerHTML        = "";
    document.getElementById("btnList").disabled          = true;
    document.getElementById("btnSolve").disabled         = false;
  }

  //отрисовка блоков решения
  let switchToSolve = function(isTraining) {
    document.getElementById("inputForm").style.display   = "block";
    document.getElementById("checkResult").style.display = "none";
    document.getElementById("translation").style.display = "none";
    document.getElementById("list").style.display        = "none";
    document.getElementById("btnList").disabled          = false;
    document.getElementById("btnSolve").disabled         = false;
  }

  //Формирование списка слов для заданного уровня (level)
  let formList = function() {
    let lList = document.getElementById("list");
    lList.innerHTML = "";
    let lTab = document.createElement('table');
    lTab.className = "verbtable";
    lTab.innerHTML = TAB_HEADER;

    let lParsedAll = JSON.parse(lVerbs);
    let j = 0;

    lParsedAll.forEach(function(item, i)
      {
          let lRow = document.createElement('tr');
          let lattr = document.createAttribute("id");
          lattr.value = 'row_' + j;
          lRow.setAttributeNode(lattr);
          lRow.innerHTML = rowHtmlCode(++j, item.russian, item.english);
          lTab.appendChild(lRow);
      }
    );

    lList.appendChild(lTab);
  }

  //список глаголов
  let showList = function() {
    switchToList();
    formList();
  }

  //проверка
  let showSolve = function() {
    switchToSolve();
    wordsInit();
    redrawCounters();
    putNewWord();
  }

  // Основная программа
  let exec = function() {
    document.getElementById("btnList").onclick    = showList;
    document.getElementById("btnSolve").onclick   = showSolve;
    document.getElementById("btnCheck").onclick   = checkPressed;

    document.getElementById("english").onkeypress = keyPressedEnglish;
    showList();
  }

  exec();

});
