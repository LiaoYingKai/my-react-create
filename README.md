# my react create
[Github](https://github.com/LiaoYingKai/my-react-create)

## 緣起
不想要使用 react-app 去 create react project
但每次自己 create 都要設定 webpack、檔案結構、package.json...
所以就先自己做一個公版，可以去拉 github 自己寫好的 template
所以參考別人做的 cli ，可以幫助從自己的 git 下載做好的 template

## 修改方式
### index.js 
裡面有一個 tempIndex，裡面爲 key(要輸入的指令) value(要下載的 template 名稱)，可以自己新增
### src/utils
downloadByGit 這一個 function 的 result 改成想要從那個 git download 
### package.json
bin 爲要下的指令，可以改成自己想要的好記名稱

## 使用方式
以我這一個爲例
可以在 cmd 輸入
```
npm install my-react-create
```
```
create react MyApp
```
第一個參數爲要下載的 template key 第二個爲下載下來的要改成什麼名字
下載完後重新 git init 就可以了

## 參考來源
[前端脚手架，听起来玄乎，实际呢？](https://segmentfault.com/a/1190000016915868)
基本上爲參考這一篇文章自己跟着做一次，有興趣的也可以跟着做
