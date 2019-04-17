## 教你朋友 CLI

	可...可惡，但如果是叛徒 how 哥，我可以哦哦哦哦哦哦哦哦哦～

### 什麼是 Command Line？

	Command Line 就是使用 terminal，透過下指令的方式來和電腦做溝通。相較於一般常用的 GUI，Command Line的功能更為全面且更快速。

### 如何使用？

  使用的方式就是先開啟 terminal，接著輸入一連串指令和電腦溝通，例如：

	1. 輸入 `pwd` 看目前位置
	2. 輸入 `ls` 看所在位置有哪些檔案（假設有 test folder）
	3. 輸入 `cd test` 切換到資料夾內
	4. 輸入 `touch test.txt` 建立一個檔案 
	5. 輸入 `vim test.txt` 可以開啟 test.txt 並編輯內容，編輯完成 `:wq` 存檔離開
	6. 輸入 `cat test.txt` 可以將檔案內容輸出到 console 上
	7. 輸入 `echo "hello world" > test.txt` 將 "hello world" 字串寫入 test.txt
	8. 輸入 `top` 看一下電腦資源的使用情況
	9. 輸入 `cd ..` 回到上一層資料夾

### 需求實現

	1. `mkdir wifi`
	2. `cd wifi`
	3. `touch afu.js`
	4. `echo "she said yes <3" > afu.js`