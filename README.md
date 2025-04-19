Esta es una aplicación para administrar los pedidos de un restaurante.

## 🚀 Tecnologías usadas

- Next.js
- Prisma (PostgreSQL)
- Tailwind CSS
- TypeScript
- Para guardar imagenes en la base de datos, se utiliza la biblioteca `cloudinary-react`


## 📝 Instrucciones para ejecutar el proyecto

1. Clonar el repositorio
2. Instalar las dependencias
3. Ejecutar el servidor de desarrollo

```bash
git clone https://github.com/fr4nk/quiosco-next.git
cd quiosco-next
npm install
npm run dev
```

## 📝 Instrucciones para ejecutar la aplicación en producción

1. Clonar el repositorio
2. Instalar las dependencias
3. Crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables de entorno:

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/quiosco
```

4. Ejecutar el servidor de producción

```bash
npm run build
npm run start
```

## 📝 Instrucciones para instalar PostgreSQL

1. Descargar e instalar PostgreSQL desde el sitio oficial: https://www.postgresql.org/download/
2. Iniciar el servidor de PostgreSQL en modo de desarrollo:

```bash
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
```

3. Crear un usuario y una base de datos:

```bash
sudo -u postgres createuser -P -R -S postgres
sudo -u postgres createdb -O postgres quiosco
```

4. Configurar el archivo `pg_hba.conf` para permitir el acceso desde localhost:

```bash
echo "host    all       all             127.0.0.1/32            trust" | sudo tee -a /usr/local/var/postgres/pg_hba.conf
echo "host    all             all             ::1/128                 trust" | sudo tee -a /usr/local/var/postgres/pg_hba.conf
```

5. Reiniciar el servidor de PostgreSQL:

```bash
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log restart
```
