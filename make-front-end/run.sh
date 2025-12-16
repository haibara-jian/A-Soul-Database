rm -rf ../docs/*
sleep 1
NODE_OPTIONS=--openssl-legacy-provider npm run build
sleep 1
sed -i 's/preview\.pro\.ant\.design/gitasoul.niaohan.top/g' ../docs/CNAME
sleep 1
cd ..
git add .
sleep 1
git commit -m "update"
sleep 1
git push
cd make-front-end
