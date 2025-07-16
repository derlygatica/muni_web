from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()  # ← ¡ESTA línea es clave!

# CORS (permite conexión con frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Noticias simuladas
noticias = [
    {
        "id": 1,
        "titulo": "Centro cultural Muni Sana",
        "descripcion": "Se inauguró un nuevo espacio para talleres comunitarios.",
        "fecha": "15 julio 2025",
        "imagen": ""
    },
    {
        "id": 2,
        "titulo": "Programa de reciclaje",
        "descripcion": "Se implementa reciclaje en barrios.",
        "fecha": "12 julio 2025",
        "imagen": ""
    }
]

@app.get("/")
def root():
    return {"mensaje": "¡Hola desde Muni Sana API!"}

@app.get("/noticias")
def obtener_noticias():
    return noticias
