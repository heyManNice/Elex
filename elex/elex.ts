//vite插件，处理.elex文件
export function elex() {
    function _transform(code,id){
        
    }
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