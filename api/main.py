# pip install fastapi uvicorn psycopg2-binary
from fastapi import FastAPI
import psycopg2

app = FastAPI()

# Database configuration
db_config = {
    'database': 'test',
    'user': 'postgres',
    'password': '',
    'host': 'localhost',  # Change to your PostgreSQL host
    'port': '5432',       # Change to your PostgreSQL port
}

# Connect to PostgreSQL
def connect_to_db():
    try:
        connection = psycopg2.connect(**db_config)
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
        cursor.execute("SELECT 'Hello, PostgreSQL!'")
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
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM public.testing ORDER BY id ASC")
        customer_data = cursor.fetchall()
        cursor.close()
        connection.close()
        return {"customers": customer_data}
    else:
        return {"message": "Unable to connect to the database"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
