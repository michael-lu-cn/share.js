git pull origin master
brunch b --production
rm -rf /opt/public/social-admin/
cp -r public /opt/public/social-admin
echo 'production deployed!'
