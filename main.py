from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"mensaje": "¡Hola desde muni_web API!"}

@app.get("/saludo")
def saludo(nombre: str = "visitante"):
    return {"mensaje": f"Hola, {nombre}. Bienvenido a muni_web!"}
