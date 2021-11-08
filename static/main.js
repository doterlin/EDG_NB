// author: doterlin(岛民小强)
// description: 主要是背景部分的编写，使用ES5

(function (window) {

    document.addEventListener('DOMContentLoaded', function (params) {
        var randomTextArray = [
            ' We are the champions!',
            ' League Of Legends',
            'WORLDS 2021 champions',
            'EDG VS DK',
            'EDWARD GAMING',
            'You can do it!',
            'Penta kill',
            'legendary'
        ];
        var bg = new Bg(document.getElementById('bg'), randomTextArray);
        bg.draw();
    })


    // Bg类，画背景
    // @param parentElement 画背景的节点
    function Bg(parentElement, randomTextArray) {
        this.parentElement = parentElement;
        this.randomTextArray = randomTextArray;
        this.parentW = parentElement.clientWidth,
        this.parentH = parentElement.clientHeight;

        this.rowWidth = 40;
        this.rowMargin = 50;

        this.rowClassName = 'bg-row';

    }
    // 入口方法，开始画背景
    Bg.prototype.draw = function (params) {
        this.drawRow();
    }


    Bg.prototype.drawRow = function (params) {
        // parent节点能画多少列
        var rowNumber = Math.ceil(this.parentW / (this.rowWidth + this.rowMargin));
        
        for (let i = 0; i < rowNumber; i++) {
            var el = document.createElement('div');
            el.setAttribute('class', 'bg-row');
            this.parentElement.append(el);

            new ScrollText(el, this.randomTextArray);
        }
        
        console.log('row num', this, rowNumber)
    }


    Bg.prototype.destroy = function name(params) {
        this.parentElement.innerHTML = '';
    }


    // 滚动文字类
    function ScrollText(rowElement, textArray) {
        this.rowElement = rowElement;
        this.textArray = textArray;
        this.aniTime = 10000; //文字动画滚动时长
    
        // setTimeout(() => {
            this.createRomdomTextEl();
        // }, (Math.random() * 2) * 1000);
    }

    ScrollText.prototype.createRomdomTextEl = function () {
        var text = this.textArray[Math.floor((Math.random() * this.textArray.length))].toUpperCase(); //随机取出一个
        var p = document.createElement('p');
        p.setAttribute('class', 'bg-text');
        p.innerHTML = text;
        var ts = this;
        p.className = 'bg-text slideDown';
        this.rowElement.append(p);

        setTimeout(function () {
            ts.rowElement.removeChild(p)
        }, this.aniTime);
        
        setTimeout(() => {
            ts.createRomdomTextEl();
        }, (Math.random() * 1 + 2) * 1000);
        
    }

})();