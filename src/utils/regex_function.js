
export function regexFunction(path){
    const regexRouteParameters = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(regexRouteParameters, '(?<$1>[a-z0-9\-_]+)')
    const pathRegex = new RegExp(`^${pathWithParams}`)

}