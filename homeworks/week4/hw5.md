## 請以自己的話解釋 API 是什麼
    API 就是一個可以讓雙方彼此溝通，交換資料的方式。提供者訂出相關規範，使用者就按照這個規範來得到他想要的東西，至於背後是如何運作的使用者並不需要知道。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
    (1) 401 Unauthorized：未認證，可能需要登入或 Token。
    (2) 503 Service Unavailable：伺服器臨時維護或是快掛了，暫時無法處理請求。
    (3) 504 Gateway Timeout：伺服器上的服務沒有回應。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


| 說明             | Method | path             | 參數                    | 範例                  |
| ---------------- | ------ | ---------------- | ----------------------- | --------------------- |
| 新增餐廳         | POST   | /restaurants     | name: 餐廳名            | 無                    |
| 刪除餐廳         | DELETE | /restaurants/:id | 無                      | 無                    |
| 更改餐廳資料     | PATCH  | /restaurants/:id | name: 餐廳名            | 無                    |
| 回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                      | /restaurants/10       |