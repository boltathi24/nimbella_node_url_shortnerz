cd npm install

if [[ -e ../../../.env ]]; then
 cp ../../../.env .env.production
fi

rm -fr build
npm run build
