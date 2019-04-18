## 請解釋後端與前端的差異。

	* 前端：使用者能看到的部分，像是網頁的外觀、美化、互動，或是 app 的介面都屬前端。
	* 後端：使用者看不到的部分，像是接到 request 之後的邏輯、和資料庫的溝通、如何送出 response 都屬後端。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
  
	1. 按下 enter 後，送出 request 到 google server
	2. google server 從 request 中取出 JavaScript 關鍵字
	3. server 去和後端資料庫做溝通，撈出一堆網頁
	4. 依據 page rank 做排序，回傳 response 給瀏覽器渲染在畫面上


## 請列舉出 3 個課程沒提到的 command line 指令並且說明功用

	1. `history` ：可以查看使用過哪些指令
	2.  `chmod a+r test.txt` ：針對user、group、others都增加read的功能
	  * 將 a 改為 u/g/o 分別代表 user/group/others
	  * 賦予權限用 + ，取消權限用 -
	  * r 為 read，w 為 write，x 為 execute
	3. `head test.txt` ：預設顯示檔案前10行
	 `tail test.txt` ：預設顯示檔案末10行