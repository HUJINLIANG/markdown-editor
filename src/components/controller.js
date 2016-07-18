/**
 * Created by lenovo on 2016/7/17.
 */
import React from 'react'

export default class Container extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var {insert,changeMode,mode,changeData,downloadURL} = this.props;
        var controllerClass = "btn-group";
        controllerClass += mode?"":" hidden";
        return (
        <div className="row controller">
            <div className={controllerClass}>
                <button className="btn btn-default" onClick={insert("# ")}><i className="icon-title"></i>标题</button>
                <button className="btn btn-default" onClick={insert(">")}><i className="icon-enter"></i>引用</button>
                <button className="btn btn-default" onClick={insert("*文本*")}><i className="icon-italic"></i>斜体</button>
                <button className="btn btn-default" onClick={insert("**文本**")}><i className="icon-bold"></i>粗体</button>
                <button className="btn btn-default" onClick={insert("* ")}><i className="icon-list2"></i>无序列表</button>
                <button className="btn btn-default" onClick={insert("1. ")}><i className="icon-list-numbered"></i>有序列表</button>
                <button className="btn btn-default" onClick={insert("[baidu](http://www.baidu.com)")}><i className="icon-link"></i>链接</button>
                <button className="btn btn-default" onClick={insert("![cat](cat.png)")}><i className="icon-image"></i>图片</button>
                <button className="btn btn-default" onClick={insert("`code`")}><i className="icon-embed2"></i>代码</button>
                <button className="btn btn-default" onClick={insert("\n    ")}><i className="icon-file-text2"></i>代码块</button>
                <button className="btn btn-default" onClick={insert("\n***\n")}><i className="icon-minus"></i>分割线</button>
                <button className="btn btn-default" onClick={insert("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")}><i className="icon-table"></i>表格</button>
            </div>
            <div className="pull-right">
                <a className="btn btn-default" href={downloadURL} download="README.md" onMouseEnter={changeData}><i className="icon1-markdown"></i>导出md</a>
                <button className="btn btn-info controller-item" onClick={changeMode(1)}><i className="icon1-quill"></i>编辑模式</button>
                <button className="btn btn-success controller-item" onClick={changeMode(0)}><i className="icon1-eye"></i>预览模式</button>
            </div>
        </div>
        )
    }
}