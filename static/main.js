// author: doterlin(岛民小强)
// description: 主要是背景部分的编写，使用ES5

(function (window) {
    var parentEl = document.getElementById('bullet');

    document.addEventListener('DOMContentLoaded', function (params) {
        
        // 画背景
        var randomTextArray = [
            'We are the champions!',
            'League Of Legends',
            'WORLDS 2021 champions',
            'EDG VS DK',
            'EDWARD GAMING',
            'You can do it!',
            'Penta kill',
            'legendary'
        ];
        var bg = new Bg(document.getElementById('bg'), randomTextArray);
        bg.draw();

        document.getElementById('btn-list').addEventListener('click', function (event) {
            // 播放音乐
            document.getElementById('bgm').play();

            // 发弹幕
            var child = event.target;
            if(child.className === 'btn'){
                makeOneBullet(child.innerText, true)
            }
        })
    })


    function makeOneBullet(text, isMine){
        console.log('skillType: ', document.getElementById('skill-type').value)
        new Bullet(text, document.getElementById('skill-type').value, parentEl).go(isMine)
    }

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
    Bg.prototype.draw = function () {
        this.drawRow();
    }


    Bg.prototype.drawRow = function () {
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


    Bg.prototype.destroy = function () {
        this.parentElement.innerHTML = '';
    }


    // 滚动文字类
    function ScrollText(rowElement, textArray) {
        this.rowElement = rowElement;
        this.textArray = textArray;
        this.aniTime = 10000; //文字动画滚动时长
    
        this.createRomdomTextEl();
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
        }, (Math.random() * 1 + 2.2) * 1000);
        
    }

    // 弹幕类
    // @param text 弹幕文字
    // @param aniType 弹幕动画类型
    function Bullet(text, aniType, parentElement){
        this.text = text;
        this.aniType = aniType;
        this.parentElement = parentElement;
        
        this.el = null;
        this.aniTime = aniType === '1'? 4000: 10000; //弹幕留存时间

        this.create()
    }

    Bullet.prototype.create = function(){
        this.el = document.createElement('div');
        if(this.aniType === '6'){
            this.el.innerHTML = '<img class="img-0-21-0" src="../static/imgs/0-21-0.webp"/><div>' + this.text + '</div>' 
        }else{
            this.el.innerHTML = this.text;
        }
        this.el.setAttribute('class', 'bullet-text bullet-ani' + this.aniType);
        
        //初始高度随机
        this.el.setAttribute('style', 'top: ' + Math.random()* 90 + '%;');
    }

    Bullet.prototype.go = function(){
        var ts = this;
        ts.parentElement.append(ts.el);
        setTimeout(function(){
            ts.parentElement.removeChild(ts.el)
        }, this.aniTime)
    }

})();