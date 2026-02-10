#!/bin/sh

echo " Running migrations..."
npx prisma migrate deploy
npx prisma db seed

echo "Migrations done, starting app..."
exec "$@"