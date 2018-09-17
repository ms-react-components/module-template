# module-template

### 功能

```
React组件开发，并发布到npm服务器
```

### 使用方法

#### 1)空项目使用

```
第一步：git clone 

第二步：cd module-template

第三步：./renew.js 项目路径/项目名称

如执行./renew.js ../testDemo/   //**testDemo**为新项目名称，与该空项目平级，新项目不带git信息，一个纯的项目

第四步：cd ../testDemo/   //此时不带git信息的新项目testDemo建立完成

```

#### 2)修改`package.json`

`package.json`中不允许出现中文

```
"name": "component-name", 
"author": {
    "name": "name",
    "email": "name@163.com"
}, 
"description": "", 
"keywords": [ 
	
    "react-component",
    "es6",
    "karma",
    "jasmine"
],
"maintainers": [
	{
		"name": "name",
		"email": "name@163.com" 
	}
] 

**组件名称（必填）---quan xiao xie，若为多个单词拼接，则使用`-`划分，如tab-component**

**组件作者（必填）**

**组件概述（必填）**

**组件关键词（必填）eg.Form,Icon,DropDown...**

**维护人员 （必填)**

```

#### 3) 项目文件结构
```
ReactComponent

—— dist
  |
  |—— index.js （webpack打包后的js)
  |
—— examples
  |
  |—— preview
    |—— 预览图.png （组件截图）
  |
  |—— index.html （可直接打开的示例）
  |
—— lib (babel转换后的语法 es6 —> es5) 
  |
—— src
  |
  |—— index.js （组件源码，webpack打包入口）
  |
—— tests (测试文件夹)
  |
  | —— index-spec.js （测试用例）
  |
—— index.html  （组件调用）
  | 
—— index.js （组件调用）
  |
—— karma.conf.js (karma配置)
  |
—— webpack.config.js (webpack配置)
  |
—— package.json （如有依赖，必须写全）
  |
—— README.md （组件使用说明，配置参数）

```

#### 4) 项目运行、打包

* `npm install` 
* `npm run dev` （开发环境打包 port:8080）
* `npm run test` （测试用例）
* `npm run build` （生产环境打包）

#### 5) 组件开发流程

* 新建项目
* 项目导出
* ~~向组织提出申请，将项目加入cnpm组~~
* ~~申请通过后，项目作者需打tag~~

~~打tag后，请同步更新package.json中的version版本号，服务器会`自动`将项目同步或更新到cnpm库中，并添加官方授权，前端组件库会自动添加或更新组件信息（包含文档，示例和预览图）~~

应该使用`0.1.0`作为初始化开发版本。

具体版本信息参考[语义化版本 2.0.0](http://semver.org/lang/zh-CN/#section-2)

#### 6) 组件开发要求

* 必须要有`文档`，包括组件使用说明，配置参数，版本信息
* 必须要有使用`示例`
* ~~必须要有`预览图`~~
* ~~必须编写`单元测试`~~

**[组件接入story步骤]:(http://note.youdao.com/share/?id=413ccdc6cd3570e8cb202468ea0a3696&type=note#/)**

#### 7) 组件开发规范

* 一个`项目`只能对应一个`组件`
* 纯`react`组件，不需要redux相关内容
* 如有依赖其他组件，必须在`package.json`中写全
* 最外层index.js不能命名为其他
* 统一使用`ES6`语法
* css统一使用`sass`, 2个空格缩进
* 代码应有适当`注释`，包括函数、参数
* 测试文件统一以“-spec”为结尾命名，如app-spec.js
* 预览图必须命名为preview.png，可以上传多幅预览图（组件平台会以preview.png为主），命名依次为preview1.png、preview2.png依此类推
* PropTypes定义规范如下：

```
import React, {Component, PropTypes} from 'react'

class Demo extends Component {
  render() {
    return <h1>hello world</h1>
  }
}

Demo.propTypes = {
  total: PropTypes.number,
  next_text: PropTypes.string,
  callback: PropTypes.func
}

module.exports = Demo;
```

### React书写规范

#### 每个文件只包含一个React组件

#### 使用JSX语法

#### Class vs React.createClass

```
// bad
const Listing = React.createClass({
  render() {
    return <div />;
  }
});

// good
class Listing extends React.Component {
  render() {
    return <div />;
  }
}
```

#### 对于 JSX 使用双引号，对其它所有 JS 属性使用单引号

```
// bad
  <Foo style={{ left: '20px' }} />

  // good
  <Foo style={{ left: "20px" }} />
```

#### 在自闭和标签之前留一个空格，若组件无子组件也应使用自闭标签

```
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

#### 如果组件有多行属性，闭合标签应写在新的一行上

```
// bad
<Foo
bar="bar"
baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

#### 生命周期  Composite Component

```
* - constructor
*   - componentWillMount
*   - render
*   - [children's construtors]
*     - [children's componentWillMount and render]
*     - [children's componentDidMount]
*     - componentDidMount
*
*       Update Phase:
*       - componentWillReceiveProps (only called if parent updated)
*       - shouldComponentUpdate
*		  - componentWillUpdate
*           - render
* 			- [children's constructors or receive props phase]
*         - componentDidUpdate
*
* 	    - componentWillUnmount
*  		- [children's componentWillUnmount]
*	- [children's destroyed]
* - (destroyed)
```
#### 执行顺序

```
constructor
optional static methods
getChildContext
componentWillMount
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillUnmount
clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
getter methods for render like getSelectReason() or getFooterContent()
Optional render methods like renderNavigation() or renderProfilePicture()
render
```

### 参考资料

* [React官方文档](https://facebook.github.io/react/)  

* [ES6语法](http://es6.ruanyifeng.com/#docs/intro)

* [Jasmine行为驱动测试官方文档](http://jasmine.github.io/edge/introduction.html)