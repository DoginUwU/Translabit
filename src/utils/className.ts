const joinClassNames = (...classNames: any[]) => {
    return classNames.filter(Boolean).join(" ");
}

export { joinClassNames, joinClassNames as jcn };