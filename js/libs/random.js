Math.seed = 10;
//Генартор случайных чисел с сидом и макс-мин значениями
Math.sRandom = function (max, min) {
    max = max || 1;
    min = min || 0;

    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;

    return min + rnd * (max - min);
};