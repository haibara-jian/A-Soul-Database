rm -rf ../docs/*
sleep 1
NODE_OPTIONS=--openssl-legacy-provider npm run build
sleep 3
cd ..
git add .
sleep 1
git commit -m "update"
sleep 1
git push
cd make-front-end
