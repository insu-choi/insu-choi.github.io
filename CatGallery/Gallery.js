export default function Gallery({ $app, initState, onClick, onBackClick }) {
    this.state = initState;
    this.onClick = onClick;
    this.onBackClick = onBackClick;

    this.$target = document.createElement('ul');
    $app.appendChild(this.$target);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        const template = this.state.photoList.map(v => {
            const path = v.type === 'directory' ?
                '/images/folder.png' : v.path;
            return `
                <li class="gallery" data-node-id="${v.id}">
                    <img class="g-img" src="/CatGallery${path}" alt="${v.name}" width="300" height="200"/>${v.name}
                </li>
            `;
        }).join('');
        this.$target.innerHTML = this.state.isRoot ? template : `
            <li class="gallery">
                <img class="g-img" src="/CatGallery/images/folder-prev.png" alt="이전" width="300" height="200"/>이전
            </li>
            ${template}
        `;
    }

    this.$target.addEventListener('click', e => {
        const $node = e.target.closest('.gallery');

        if ($node) {
            const { nodeId } = $node.dataset;

            if (! nodeId) {
                this.onBackClick();
                return;
            }
    
            const selectedNode = this.state.photoList.find(v => v.id === nodeId);
            if (selectedNode) {
                this.onClick(selectedNode);
            }
        }
    });

    this.render();
}