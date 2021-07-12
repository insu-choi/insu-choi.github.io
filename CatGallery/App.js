
import { getList } from "./Api.js";
import Gallery from "./Gallery.js";
import Loading from "./Loading.js";
/**
 * this.$target을 따로 만들지 않고 컴포넌트에 $app을 전달
 * @param {*} $app 
 */
const cache = {};
export default function App($app) {
    this.state = {
        welcome: 'Hello App.',
        isRoot: true,
        depth: [],
        photoList: [],
        isLoading: false
    };
    const loading = new Loading({
        $app,
        initState: this.state.isLoading
    })
    // 컴포넌트 선언
    const gallery = new Gallery({
        $app: $app,
        initState: {
            isRoot: this.state.isRoot,
            photoList: this.state.photoList
        },
        onClick: async (node) => {
            try {
                if (node.type === 'directory') {
                    const nextResult = await loadingGetList(node.id);
                    this.setState({
                        ...this.state,
                        isRoot: false,
                        depth: [...this.state.depth, node],
                        photoList: nextResult
                    });
                } else if (node.type === 'picture') {

                }
            } catch(e) {
                    
            }
        },
        onBackClick: async () => {
            try {
                const nextState = { ...this.state };
                nextState.depth.pop();

                const prevNodeId = nextState.depth.length === 0 ?
                    null : nextState.depth[nextState.depth.length - 1].id;

                if (prevNodeId === null) {
                    const result = await loadingGetList();
                    this.setState({
                        ...nextState,
                        isRoot: true,
                        photoList: result
                    });
                } else {
                    const nextResult = await loadingGetList(prevNodeId);
                    this.setState({
                        ...nextState,
                        isRoot: false,
                        photoList: nextResult
                    });
                }
            } catch(e) {

            }
        }
    });


    this.setState = (nextState) => {
        this.state = nextState;
        gallery.setState({
            isRoot: this.state.isRoot,
            photoList: this.state.photoList
        });
        loading.setState(this.state.isLoading);
    }

    const init = async () => {
        try {
            const result = await loadingGetList();
            this.setState({
                ...this.state,
                isRoot: true,
                photoList: result
            });
        } catch(e) {
            console.log('e', e);
        }
    };

    const loadingGetList = async (id) => {
        let cacheId = id ? id : 'root';
        try {
            this.setState({
                ...this.state,
                isLoading: true
            });

            if (cache.hasOwnProperty(cacheId)) {
                return cache[cacheId];
            }

            const res = await getList(id);
            cache[cacheId] = res;
            return res;
        } catch (e) {
            console.error('loadingGetList Error', e);
            throw new Error(e);
        } finally {
            console.log('finally');
            this.setState({
                ...this.state,
                isLoading: false
            });
        }
    }

    // render 따로 없이 앱 실행시 초기화 정보 세팅
    init();
}