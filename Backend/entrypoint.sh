#!/bin/sh

echo " Running migrations..."
npx prisma migrate deploy

echo "Migrations done, starting app..."
exec "$@"