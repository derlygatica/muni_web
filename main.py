from fastapi.middleware.cors import CORSMiddleware

# CORS (para que frontend pueda consumir el backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción se recomienda limitar esto
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulación de noticias
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

@app.get("/noticias")
def obtener_noticias():
    return noticias
