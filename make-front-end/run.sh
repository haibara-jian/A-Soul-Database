NODE_OPTIONS=--openssl-legacy-provider npm run build
sleep 1
cd ..
cp -r docs/ /var/www/web
sleep 1
cd make-front-end/
