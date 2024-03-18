# 專案啟動

### 授權需設定以下環境變數

- FINDARTS_DOMAIN: 依據環境 (`DEV、UAT、PROD`) 設定不同`網域名稱`
- ACCESS_EMAIL: 呼叫授權所需要登入`信箱`
- ACCESS_PASSWORD: 呼叫授權所需要登入`密碼`

```javascript
export default {
  FINDARTS_DOMAIN: ${FINDARTS_DOMAIN},
  ACCESS_EMAIL: ${ACCESS_EMAIL},
  ACCESS_PASSWORD: ${ACCESS_PASSWORD}
}
```
