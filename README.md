# ChakuraUI

### 開発サーバー立ち上げ

```
docker exec -it reactad npm run dev
```

＃環境構築

clone したときと新規立ち上げ時

```
docker exec -it chakuraui npm install
docker exec -it chakuraui npm run build
docker exec -it chakuraui npm run dev
```

新規プロジェクト立ち上げ

```
docker-compose run --rm chakuraui npm create vite@latest .
```

1, react 選択
2, typescript+SWC 選択
