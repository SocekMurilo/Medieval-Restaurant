$strconn = "Data Source=" + $args[0] + ";Initial Catalog=" + $args[1] + ";Integrated Security=True;TrustServerCertificate=true"
dotnet add package Microsoft.EntityFrameworkCore.Design -v 7.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer -v 7.0.0
dotnet tool install --global dotnet-ef -v 7.0
dotnet ef dbcontext scaffold $strconn Microsoft.EntityFrameworkCore.SqlServer --force -o Model