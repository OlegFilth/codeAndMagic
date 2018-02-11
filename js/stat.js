window.renderStatistics = function(ctx, names, times) {
    
    var drawCloud = function(posX, posY, color) {
        ctx.fillStyle = color;
        ctx.fillRect(posX, posY, 420, 270);
    }

    var typeText = function(posX, posY, color, text) {
        ctx.font ='PT Mono 16px';
        ctx.fillStyle = color;
        ctx.fillText(text, posX, posY);
    }

    var randomOpacity = function() {
        return ( Math.floor(Math.random() * 9) + 1);
    }

    drawCloud(110, 20, 'rgba(0,0,0,.7)');
    drawCloud(100, 10, 'rgb(255,255,255)');
  
    typeText(120, 50, '#333', 'Ура вы победили!');
    typeText(120, 70, '#333', 'Список результатов:');

    var getMaxElement = function(array) {
        var maxValue = -1;
        var maxIndex = -1
        var maxItems = [];
        for (var i = 0; i < array.length; i++) {
            var value = array[i];
            if (value > maxValue) {
                maxValue = value;
                maxIndex = i;
            }
        }
        maxItems.push(maxValue, maxIndex);
        return maxItems;
    } 

    var maxTime = getMaxElement(times)[0];
    var maxIndex = getMaxElement(times)[1];

    var histogramHeight = 100;
    var step = histogramHeight / (maxTime - 0);
    var barWidth = 20;
    var posX = 120;
    var posY = 110;
    var gutter = 50;

    typeText(120, 90, '#c0008c', 'Худшее время: ' + Math.floor(maxTime) + 'ms' + ' у игрока ' + names[maxIndex]);

    for( var i = 0; i < times.length; i++) {
        if (names[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(2, 128, 250,'+ ' .' + randomOpacity(); + ')';
        }
        ctx.fillRect( posX + gutter * i , posY, barWidth , times[Math.floor(i)] * step);
        ctx.fillText(names[i], posX  + gutter * i, posY + 20 + histogramHeight);
    }
};