// 食物类
class Food{
    element: HTMLElement;
    constructor(){
        // ! 表示不可能为空, 非空断言
        this.element = document.getElementById('food')!;
    }
    // 获取 food 的坐标
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    change(){
        // 生成随机位置
        // 食物的坐标必须是 10 的倍数
        // 因为蛇每一步 移动的距离是 10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;