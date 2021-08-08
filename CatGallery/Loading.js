export default function Loading({$app, initState}) {
    this.state = initState;
    this.$target = document.createElement('div');
    this.$target.className = 'loading-modal';

    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = `
            <div class="content">
                <h1>로딩중...</h1>
            </div>
        `;
        this.$target.style.display = this.state ? 'block' : 'none';
    }

    this.render();
}