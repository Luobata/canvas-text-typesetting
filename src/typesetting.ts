interface textConfig {
    text: string;
    width: string;
    fontSize: string;
    fontFamily: string;
}
export default class TypeSetting {
    config: textConfig;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    body: HTMLElement;

    constructor(config: textConfig) {
        this.config = config;
        this.body = document.body;

        this.testCaseInit();
        this.init();
    }

    testCaseInit() {
        const div = document.createElement('div');
        div.innerText = this.config.text;
        div.style.width = this.config.width;
        div.style.fontSize = this.config.fontSize;
        div.style.fontFamily = this.config.fontFamily;
        div.style.border = '1px solid black';

        this.body.appendChild(div);
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
}
