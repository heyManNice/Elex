//vite插件，处理.elex文件
export function elex() {
    return {
        name: 'elex',
        enforce: 'pre',
        transform(code, id) {
            if (!id.endsWith('.elex')) {
                return null;
            }
            return _transform(code,id);
        }
    }
}

function _transform(code,id){
    if(id.endsWith('main.elex')){
        return {
            code: `<script>window.addEventListener('load',()=>{alert('ok')})</script>`,
            map: null
        }
    }
    return {
        code: code,
        map: null
    }
}