$(document).ready(function() {
        var x = prompt("Введите число от 0 до 99");
        if ((isNaN(x)) || (x < 0) || (x > 99) || (parseInt(x) != x)) {
                $('.result').show().html('Вы ввели неправильное число!');
        } else if (x==0) {
                $('.result').show().html('Вы ввели число: ноль');
        } else {
                var y = NumberToWord(x);
                $('.result').show().html('Вы ввели число:' + ' ' + y);
        }
        function NumberToWord(number) {
                var single = [
                'один',
                'два',
                'три',
                'четыре',
                'пять',
                'шесть',
                'семь',
                'восемь',
                'девять',
                'десять',
                'одиннадцать',
                'двенадцать',
                'тринадцать',
                'четырнадцать',
                'пятнадцать',
                'шестнадцать',
                'семнадцать',
                'восемнадцать',
                'девятнадцать'
                ]
                var doubles = [
                'двадцать',
                'тридцать',
                'сорок',
                'пятьдесят',
                'шестьдесят',
                'семьдесят',
                'восемьдесят',
                'девяносто'
                ];
                if (number < 20) return single[number - 1];
                var result = doubles[Math.floor(number / 10) - 2];
                if (number % 10 != 0) result += ' ' + single[number % 10 - 1];
                return result
        }
});






