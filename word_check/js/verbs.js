"use strict";

const lVerbs = '[{"english":"world","russian":"мир","part":"noun"},\
{"english":"statue","russian":"статуя","part":"noun"},\
{"english":"soldier","russian":"солдат","part":"noun"},\
{"english":"war","russian":"война","part":"noun"},\
{"english":"battle","russian":"сражение","part":"noun"},\
{"english":"village","russian":"деревня","part":"noun"},\
{"english":"great","russian":"большой","part":"adjective"},\
{"english":"already","russian":"уже","part":"adverb"},\
{"english":"against","russian":"против","part":"preposition"},\
{"english":"left","russian":"лево","part":""},\
{"english":"teenager","russian":"подросток","part":"noun"},\
{"english":"journey","russian":"поезка / путешествие","part":"noun"},\
{"english":"flight","russian":"полет","part":"noun"},\
{"english":"lucky","russian":"счастливый / удачливый","part":"adjective"},\
{"english":"worried","russian":"обеспокоенный","part":"adjective"},\
{"english":"book","russian":"бронировать","part":"verb"},\
{"english":"show","russian":"показывать","part":"verb"},\
{"english":"arrive","russian":"прибывать","part":"verb"},\
{"english":"land","russian":"приземляться","part":"verb"},\
{"english":"so","russian":"так","part":"conjunction"},\
{"english":"make up","russian":"макеяж","part":"noun"},\
{"english":"cake","russian":"торт / пирожное / выпечка","part":"noun"},\
{"english":"wine","russian":"вино","part":"noun"},\
{"english":"dress","russian":"платье","part":"noun"},\
{"english":"fashions","russian":"мода","part":"noun"},\
{"english":"literature","russian":"литература","part":"noun"},\
{"english":"great","russian":"великий","part":"adjective"},\
{"english":"open","russian":"открытый","part":"adjective"},\
{"english":"closed","russian":"закрытый","part":"adjective"},\
{"english":"pay for","russian":"платить за","part":"verb"},\
{"english":"especially","russian":"особенно","part":"adverb"},\
{"english":"country house","russian":"загородный дом","part":"noun"},\
{"english":"millionaire","russian":"миллионер","part":"noun"},\
{"english":"library","russian":"библиотека","part":"noun"},\
{"english":"murder","russian":"убийство","part":"noun"},\
{"english":"asleep","russian":"спящий","part":"adjective"},\
{"english":"dead","russian":"мертвый","part":"adjective"},\
{"english":"happen","russian":"происходить","part":"verb"},\
{"english":"everybody","russian":"каждый","part":"pronoun"},\
{"english":"somebody","russian":"кто-нибудь","part":"pronoun"},\
{"english":"nobody","russian":"никто","part":"pronoun"},\
{"english":"price","russian":"цена","part":"noun"},\
{"english":"paintings","russian":"изобразительный","part":"noun"},\
{"english":"estate agent","russian":"агент по недвижимости","part":"noun"},\
{"english":"plants","russian":"рассада / растения","part":"noun"},\
{"english":"large","russian":"большой","part":"adjective"},\
{"english":"quiet","russian":"тихий","part":"adjective"},\
{"english":"local","russian":"местный","part":"adjective"},\
{"english":"original","russian":"оригинальный","part":"adjective"},\
{"english":"rent","russian":"арендовать","part":"verb"},\
{"english":"draw","russian":"рисовать","part":"verb"},\
{"english":"ghost","russian":"привидение","part":"noun"},\
{"english":"century","russian":"век","part":"noun"},\
{"english":"priest","russian":"священник","part":"noun"},\
{"english":"guest","russian":"гость","part":"noun"},\
{"english":"nervous","russian":"беспокойный","part":"adjective"},\
{"english":"frightened","russian":"испуганный","part":"adjective"},\
{"english":"strange","russian":"странный","part":"adjective"},\
{"english":"believe","russian":"верить","part":"verb"},\
{"english":"go back","russian":"возвращаться","part":"verb"},\
{"english":"spend","russian":"проводить","part":"verb"},\
{"english":"neighbour","russian":"сосед","part":"noun"},\
{"english":"violin","russian":"скрипка","part":"noun"},\
{"english":"baby","russian":"ребёнок","part":"noun"},\
{"english":"noisy","russian":"шумный","part":"adjective"},\
{"english":"friendly","russian":"дружелюбный","part":"adjective"},\
{"english":"choose","russian":"выбирать","part":"verb"},\
{"english":"argue","russian":"ругаться","part":"verb"},\
{"english":"cry","russian":"плакать","part":"verb"},\
{"english":"bark","russian":"лаять","part":"verb"},\
{"english":"move","russian":"двигать","part":"verb"},\
{"english":"ship","russian":"корабль","part":"noun"},\
{"english":"flag","russian":"флаг","part":"noun"},\
{"english":"trip","russian":"поездка","part":"noun"},\
{"english":"passenger","russian":"пассажир","part":"noun"},\
{"english":"building","russian":"здание","part":"noun"},\
{"english":"view","russian":"вид","part":"noun"},\
{"english":"underground","russian":"метро","part":"noun"},\
{"english":"each","russian":"каждый","part":"determiner"},\
{"english":"through","russian":"через","part":"preposition"},\
{"english":"what a pity","russian":"как жаль","part":""},\
{"english":"basket","russian":"корзина","part":"noun"},\
{"english":"spaghetti","russian":"спагетти","part":"noun"},\
{"english":"dish","russian":"блюдо","part":"noun"},\
{"english":"ingredients","russian":"инградиенты","part":"noun"},\
{"english":"luxury","russian":"роскошь","part":"noun"},\
{"english":"missing","russian":"недостающий / отсутствующий","part":"adjective"},\
{"english":"countable","russian":"исчисляемый","part":"adjective"},\
{"english":"uncountable","russian":"неисчисляемый","part":"adjective"},\
{"english":"litres","russian":"литр","part":"noun"},\
{"english":"tap","russian":"кран (водопроводный)","part":"noun"},\
{"english":"lose","russian":"проигрывать / терять","part":"verb"},\
{"english":"agree","russian":"соглашаться","part":"verb"},\
{"english":"probably","russian":"наверное / возможно","part":"adverb"},\
{"english":"like","russian":"как / так / как бы","part":"preposition"},\
{"english":"a bottle of","russian":"бутылка","part":""},\
{"english":"of course","russian":"конечно","part":""},\
{"english":"more or less","russian":"более или менее","part":""},\
{"english":"for example","russian":"например","part":""},\
{"english":"couple","russian":"пара","part":"noun"},\
{"english":"moment","russian":"момент","part":"noun"},\
{"english":"sights","russian":"взгляд / видение","part":"noun"},\
{"english":"campsite","russian":"кемпинг / загородный лагерь","part":"noun"},\
{"english":"nightlife","russian":"ночная жизнь","part":"noun"},\
{"english":"disaster","russian":"бедствия","part":"noun"},\
{"english":"boat","russian":"лодка","part":"noun"},\
{"english":"ideal","russian":"идеальный","part":"adjective"},\
{"english":"plan","russian":"сажать","part":"verb"},\
{"english":"go camping","russian":"идти в поход","part":"verb"},\
{"english":"surprise","russian":"сюрприз","part":"noun"},\
{"english":"heart","russian":"сердце","part":"noun"},\
{"english":"ring","russian":"кольцо","part":"noun"},\
{"english":"note","russian":"заметка / нота","part":"noun"},\
{"english":"voice","russian":"голос","part":"noun"},\
{"english":"card","russian":"карта","part":"noun"},\
{"english":"sure","russian":"конечно","part":"adjective"},\
{"english":"put","russian":"положить","part":"verb"},\
{"english":"maybe","russian":"возможно","part":"adverb"},\
{"english":"soon","russian":"скоро","part":"adverb"},\
{"english":"mosquitoes","russian":"комары","part":"noun"},\
{"english":"sharks","russian":"акулы","part":"noun"},\
{"english":"tigers","russian":"тигры","part":"noun"},\
{"english":"adult","russian":"взрослый","part":"noun"},\
{"english":"jokes","russian":"шутка","part":"noun"},\
{"english":"personality","russian":"личный","part":"noun"},\
{"english":"the Earth","russian":"Земля","part":"noun"},\
{"english":"Mars","russian":"Марс","part":"noun"},\
{"english":"oxygen","russian":"кислород","part":"noun"},\
{"english":"beer","russian":"пиво","part":"noun"},\
{"english":"air conditioning","russian":"кондиционер","part":"noun"},\
{"english":"capital","russian":"столица","part":"noun"},\
{"english":"geography","russian":"география","part":"noun"},\
{"english":"climate","russian":"климат","part":"noun"},\
{"english":"crowded","russian":"многолюдный","part":"adjective"},\
{"english":"boring","russian":"скучный","part":"adjective"},\
{"english":"imagine","russian":"представлять","part":"verb"},\
{"english":"surprisingly","russian":"удивительно","part":"adverb"},\
{"english":"dreams","russian":"мечты","part":"noun"},\
{"english":"weight","russian":"вес","part":"noun"},\
{"english":"height","russian":"высота","part":"noun"},\
{"english":"experience","russian":"опыт","part":"noun"},\
{"english":"adventure","russian":"приключение","part":"noun"},\
{"english":"chef","russian":"шеф-повар","part":"noun"},\
{"english":"jump","russian":"прыгать","part":"verb"},\
{"english":"last","russian":"длиться","part":"verb"},\
{"english":"suddenly","russian":"вдруг","part":"adverb"},\
{"english":"including","russian":"включая","part":"preposition"},\
{"english":"social life","russian":"светская / общественная жизнь","part":"noun"},\
{"english":"crime","russian":"преступление","part":"noun"},\
{"english":"shy","russian":"осторожный / смущенный","part":"adjective"},\
{"english":"polite","russian":"вежливый","part":"adjective"},\
{"english":"elegant","russian":"элегантный","part":"adjective"},\
{"english":"steal","russian":"украсть","part":"verb"},\
{"english":"dress","russian":"одеваться","part":"verb"},\
{"english":"everywhere","russian":"везде","part":"adverb"},\
{"english":"abroad","russian":"за границей","part":"adverb"},\
{"english":"almost","russian":"почти","part":"adverb"},\
{"english":"sport event","russian":"спортивное мероприятие","part":"noun"},\
{"english":"continent","russian":"континент / материк / часть света","part":"noun"},\
{"english":"spa","russian":"спа / курорт / санаторий","part":"noun"},\
{"english":"miles","russian":"мили","part":"noun"},\
{"english":"jealous","russian":"ревнивый / завистливый","part":"adjective"},\
{"english":"ring","russian":"звонить","part":"verb"},\
{"english":"exactly","russian":"совсем / полностью","part":"adverb"},\
{"english":"somewhere","russian":"где-то","part":"adverb"},\
{"english":"back row","russian":"задний ряд","part":"noun"},\
{"english":"soundtrack","russian":"песня / музыкальная композиция","part":"noun"},\
{"english":"autograph","russian":"автограф","part":"noun"},\
{"english":"bestseller","russian":"бестселлер","part":"noun"},\
{"english":"version","russian":"версия","part":"noun"},\
{"english":"prefer","russian":"предпочитать","part":"verb"},\
{"english":"based on","russian":"основан на","part":""}]';
