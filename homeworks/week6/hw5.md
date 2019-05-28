## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. hr tag : 可以畫出水平線
2. audio tag : 可以放音訊
3. canvas tag : 搭配 script tag (JavaScript) 可以畫出圖形

## 請問什麼是盒模型（box model）
每個元素都是 box model，包含了 width, height, padding, border, margin 等屬性。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline 元素會並排排列，且如果元素超過一行的話會有重疊的情況發生(垂直方向無 margin)。對其設定 box model 的 padding 等屬性不會對其他的元素造成影響。

block 元素一個就會佔據一整行，可以對其設定 box model 的各屬性。

inline-block 元素有 inline 的優點，元素可以並排排列，也有 block 的優點，垂直方向有 margin 不會重疊，且 box model 的各屬性可以正常發揮其功能。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static : 預設的瀏覽器排列方式

relative : 對瀏覽器來說位置一樣是預設的瀏覽器排列方式，不會如果加上其他像是 top, left 等設定，則肉眼看起來元素在瀏覽器上的位置就會相對於原本的位置有所偏移

fixed : 相對於瀏覽器整個頁面固定位置，不論如何捲動頁面，其位置相對於視窗都固定不變

absolute : 相對於其上層所找到的第一個 position 非 static 的元素做定位，如果找不到的話，那他的效果其實就跟 fixed 一樣，位置相對於視窗固定不變