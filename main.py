from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def inicio():
    return {"mensaje": "¡Hola desde Muni Sana API!"}

@app.get("/noticias")
def obtener_noticias():
    return [
        {"id": 1, "titulo": "Centro cultural Muni Sana", "descripcion": "Se inauguró un nuevo espacio para talleres comunitarios.", "fecha": "15 julio 2025", "imagen": ""},
        {"id": 2, "titulo": "Programa de reciclaje", "descripcion": "Se implementa reciclaje en barrios.", "fecha": "12 julio 2025", "imagen": ""}
    ]

@app.get("/actividades")
def obtener_actividades():
    return [
        {"id": 1, "titulo": "Taller de cerámica", "descripcion": "Aprende técnicas de alfarería tradicional.", "fecha": "20 julio 2025", "imagen": ""},
        {"id": 2, "titulo": "Caminata familiar", "descripcion": "Actividad recreativa por la ruta del río.", "fecha": "22 julio 2025", "imagen": ""}
    ]
