# Catalogo de Peliculas
Pequeño proyecto que hice como inducción.

Tecnologías:
- ASP.NET Core 2.1
- Angular 7
- Bootstrap 4
- SQL Server
- EntityFrameworkCore
- Swagger

# TODO:
> 1. Refactorizar Angular services

## Para empezar:

1. Verificar tener instalado las tecnologías mencionadas.

2. En el directorio peliculasWebApi, ejecutar el Migrations para generar la base de datos y las tablas:
> dotnet ef database update --context PeliculaContext
o desde la consola del Package Manager (en Visual Studio)
> Update-Database -context PeliculaContext

3. Intalar los módulos de node. Para esto en el directorio peliculasSite/ClientApp:
> npm install

