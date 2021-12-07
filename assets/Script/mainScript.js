// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        item: cc.Prefab,
        lblUserName: cc.EditBox,
        content: cc.Node,
        _btn: cc.Button,
        _scrollV: cc.ScrollView,
    },

    userName() {
        if(this.lblUserName.string.length == 0) return
        let getUser = cc.instantiate(this.item)
        this.content.addChild(getUser)
        getUser.getComponent(cc.Label).string = this.lblUserName.string;
        this.lblUserName.string = ''
    },
    
    // LIFE-CYCLE CALLBACKS:
    
    onLoad () {

    },

    start () {

    },

    // update (dt) {},
});
