import React from "react";
//跨层级通讯  Provider Consumer是组件
export const Context = React.createContext();
//displayName在使用devtool时候，就是分类的名称
Context.displayName = 'MyDisplayName';
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;