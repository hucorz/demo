class Snake{
    head: HTMLElement;
    // 包括蛇头
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }
    
    // 设置蛇头的坐标
    set X(value){     
        if (this.X === value) {
            return;
        }

        // 发生了水平方向的掉头
        // 判断掉头要在判断撞墙之前,否则会穿墙
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }

        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }

        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }

    set Y(value){
        if (this.Y === value) {
            return;
        }

        
        // 发生了垂直方向的掉头
        // 判断掉头要在判断撞墙之前,否则会穿墙
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }

        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }

        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    // 蛇增加身体
    addBody(){
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    moveBody(){
        // 将后边的身体设置为前边身体的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody(){
        // 获取所有的身体,检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }

}

export default Snake;