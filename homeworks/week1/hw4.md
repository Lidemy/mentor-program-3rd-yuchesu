## 跟你朋友介紹 Git

	哈囉蔡哥好我是師哥，說 Git 給你聽，拜託給我聽，不然不開心。
  
	所謂的 Git 就是版本控制的軟體，你可以用它來保存你每個階段的檔案們。
	例如你今天有個 joke folder，裡面有第一版的檔案們，可以用 `git add .` 將所有檔案加到 stage 區。
	如果確認要保存這一個版本，就用 `git commit -am "why I am so funny hahaha"` 做保存。
	當今天你想要研究新的 joke，為了不破壞原本完美尷尬的 joke，你需要開一個新的分支 `git branch new-joke` ，然後 `git checkout new-joke` 切換到該分支進行研究，如果研究完成了，就一樣 `git add` 和 `git commit` 保存版本。目前這個保存的版本是在新開的分支上，你可以找阿傑和呱吉聽看看，如果他們覺得夠烙賽，那你就可以用 `git checkout master` 先切回你主要的分支，然後 `git merge new-joke` 將新開發的分支合併回主要分支，這樣你之後就可以用主要分支上的最新版本笑話和別人尬聊一波了！

	在一個風光明媚的午後，你忽然覺得總是自己一個人在想新笑話有點累，於是想找壹加壹來一起幫忙，這時候你就會需要使用 GitHub。
	GitHub 就是一個交流的平台，你可以在上面和別人分享自己寫的笑話，也可以看別人寫的笑話，彼此交流分享。透過 `git push origin master` 你可以將自己開發的笑話放到 GitHub 上，Linn 和 Ily 就可以用 `git clone` 搭配你的 repo 位址，將你的笑話下載到他們的電腦中，開新的分支幫你改笑話和寫新笑話。完成之後，他們再 push 回去你的 repo，你確認沒問題，就可以 merge pull request，接著使用 `git pull origin master` 將最新的版本更新到電腦中，這樣你們就一起完成笑話大全，你也可以順利成為電視笑話冠軍了！大 guy 4 john，掰掰～