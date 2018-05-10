webpack-dev-server 不生效的时候重新安装了webpack@3.5.5然后重新装回webpack v4莫名其妙就可以热替换了
webpack4 默认开启压缩丑化代码，可以设置环境为dev。即可关闭
webpack4 的按需加载插件 react-loader
``
{
  "presets": [
    "react"
  ],
  "plugins": [
    "syntax-dynamic-import"
  ]
}
react-loadable is a higher-order component for loading components with dynamic imports. It handles all sorts of edge cases automatically and makes code splitting simple! Here’s an example of how to use react-loadable:import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
})

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
``
