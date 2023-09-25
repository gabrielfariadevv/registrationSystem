# Registration System

## Database Configuration

This project uses a MySQL database to store data. Follow the instructions below to set up the database locally.

### Prerequisites

Before you begin, make sure you have MySQL installed on your machine and have access credentials.

### Configuration

1. **Create the Database**

   Use the MySQL client or a database administration tool of your choice to create a database with the name "coursedb".

2. **Configure Access Credentials**

   In the `src/main/resources/application.properties` file, fill in the database connection information. By default, the file should contain the following:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/coursedb
   spring.datasource.username=root
   spring.datasource.password=
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver