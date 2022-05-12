yarn typeorm migration:create src/migration/initialMigration

#

yarn typeorm migration:generate src/migration/initialMigration -d src/data-source.ts

#

yarn typeorm migration:run -d src/data-source.ts
