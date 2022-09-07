# Setup
1. To start the project run `ddev start && ddev composer install`
2. To import the demo database run `ddev import-db --src=./resources/db.sql.gz && ddev drush cr`
3. To launch the project run `ddev launch`
4. To login into the site run `ddev drush uli`

# Export db & files
#### Export content
1. `ddev drush sql-dump --gzip > resources/db.sql.gz`
2. `git add resources/db.sql.gz && git commit -m "Exporting database" && git push`
#### Export files like uploaded media in the site
1. `git add web/sites/default/files && git commit -m "Exporting files" && git push`