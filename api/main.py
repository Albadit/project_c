# pip install fastapi uvicorn mysql-connector-python
from fastapi import FastAPI
import psycopg2
import mysql.connector

app = FastAPI()

# Connect to MySQL
def connect_to_db():
    # Database configuration
    db_config = {
        'user': 'root',
        'password': 'admin',
        'host': 'localhost',    # Change to your MySQL host
        'database': 'test',    # Change to your MySQL database name
    }

    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except Exception as e:
        print(f"Database connection error: {e}")
        return None

# Example API route
@app.get("/")
async def read_root():
    connection = connect_to_db()
    if connection:
        cursor = connection.cursor()
        cursor.execute("SELECT 'Hello, MySQL!'")
        result = cursor.fetchone()[0]
        cursor.close()
        connection.close()
        return {"message": result}
    else:
        return {"message": "Unable to connect to the database"}

@app.get("/test")
async def test():
    connection = connect_to_db()

    if connection:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM `test` ORDER BY id ASC")
        customer_data = cursor.fetchall()
        cursor.close()
        connection.close()
        # return {"test": customer_data}
        return customer_data
    else:
        return {"message": "Unable to connect to the database"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
