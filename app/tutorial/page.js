import Link from "next/link";

export default function Tutorial() {
    return (
        <div className="min-h-screen bg-[#f5f6fa] flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-1/3 flex flex-col items-center justify-start py-12 px-6 md:px-10 border-b md:border-b-0 md:border-r border-[#ececec] bg-[#f5f6fa] md:sticky md:top-0 md:h-screen md:overflow-y-auto">
                <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                    <div className="w-24 h-24 rounded-full bg-[#ffe6a0] flex items-center justify-center shadow-md mb-2">
                        <span className="text-4xl font-bold text-[#8B2C3B]">📚</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[#222] text-center">Tutorial Next.js + Firebase</h1>
                    <p className="text-[#555] text-center text-lg mb-2">
                        Aprende a conectar tu app Next.js con Firestore de Firebase paso a paso, con ejemplos claros y código real.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <Link href="/" className="text-[#8B2C3B] hover:underline text-sm font-semibold">Inicio</Link>
                        <Link href="/cartas" className="text-[#8B2C3B] hover:underline text-sm font-semibold">Cartas</Link>
                        <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] hover:underline text-sm font-semibold">Firebase Console</a>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center py-12 px-2 md:px-10">
                <div className="w-full max-w-3xl flex flex-col gap-8">
                    {/* Paso 0 */}
                    <section className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-8 rounded-full bg-[#ffe6a0] flex items-center justify-center font-bold text-[#8B2C3B]">0</span>
                            <h2 className="text-xl font-bold text-[#8B2C3B]">[Opcional] Instalar Firebase CLI</h2>
                        </div>
                        <ol className="list-decimal list-inside text-[#222] space-y-3">
                            <li>
                                Instala Firebase CLI globalmente usando npm:
                                <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">npm install -g firebase-tools</pre>
                            </li>
                            <li>
                                Inicia sesión en Firebase:
                                <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">firebase login</pre>
                            </li>
                            <li>
                                Inicia el proyecto de Firebase (en la raíz de tu proyecto):
                                <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">firebase init</pre>
                            </li>
                        </ol>
                    </section>

                    {/* Paso 1 */}
                    <section className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-8 rounded-full bg-[#ffe6a0] flex items-center justify-center font-bold text-[#8B2C3B]">1</span>
                            <h2 className="text-xl font-bold text-[#8B2C3B]">Configurar Firebase en Next.js</h2>
                        </div>
                        <ol className="list-decimal list-inside text-[#222] space-y-3">
                            <li>
                                Ve a <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a]">Firebase Console</a> y crea un nuevo proyecto:
                                <ul className="list-disc list-inside ml-6 mt-2 text-[#555]">
                                    <li>Haz clic en &quot;Crear un proyecto&quot;</li>
                                    <li>Dale un nombre a tu proyecto (por ejemplo, &quot;cartas-app&quot;)</li>
                                    <li>Puedes desactivar Google Analytics si no lo necesitas</li>
                                    <li>Haz clic en &quot;Crear proyecto&quot;</li>
                                </ul>
                            </li>
                            <li>
                                Agrega una app web y copia la configuración:
                                <ul className="list-disc list-inside ml-6 mt-2 text-[#555]">
                                    <li>En la página principal del proyecto, haz clic en el ícono de web (&lt;/&gt;)</li>
                                    <li>Registra tu app con un apodo (por ejemplo, &quot;cartas-web&quot;)</li>
                                    <li>No necesitas habilitar Firebase Hosting por ahora</li>
                                    <li>Firebase te mostrará un objeto de configuración como este:</li>
                                </ul>
                                <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">
                                    {`const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "tu-sender-id",
  appId: "tu-app-id"
};`}
                                </pre>
                            </li>
                            <li>
                                Configura Firestore:
                                <ul className="list-disc list-inside ml-6 mt-2 text-[#555]">
                                    <li>En el menú lateral, ve a &quot;Firestore Database&quot;</li>
                                    <li>Haz clic en &quot;Crear base de datos&quot;</li>
                                    <li>Elige &quot;Comenzar en modo de prueba&quot; (podrás cambiar las reglas de seguridad después)</li>
                                    <li>Selecciona la ubicación del servidor más cercana a tus usuarios</li>
                                </ul>
                            </li>
                            <li>Instala Firebase en tu proyecto:
                                <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">npm install firebase</pre>
                            </li>
                            <li>
                                Crea un archivo <b>.env.local</b> en la raíz y pega tus variables de configuración.
                                <p className="text-[#555] mt-2">
                                    El archivo <b>.env.local</b> es un archivo de variables de entorno que Next.js lee automáticamente.
                                    Las variables que empiezan con <b>NEXT_PUBLIC_</b> son accesibles en el navegador, mientras que las demás
                                    solo son accesibles en el servidor. Esto es importante para la seguridad de tus credenciales.
                                </p>
                            </li>
                            <li>Crea una carpeta <b>firebase</b> y un archivo <b>firebase.js</b> con la configuración:</li>
                        </ol>
                        <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 overflow-x-auto border border-[#f3e6c1]">
                            {`import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;`}
                        </pre>

                        {/* Nueva sección sobre seguridad */}
                        <div className="mt-8 p-6 bg-[#fff8e1] rounded-xl border border-[#f3e6c1]">
                            <h3 className="text-lg font-bold text-[#8B2C3B] mb-4">¿Por qué las credenciales de Firebase son públicas?</h3>
                            <p className="text-[#555] mb-4">
                                Es normal preguntarse por qué Firebase permite que sus credenciales sean públicas. La respuesta está en su sistema de seguridad por diseño:
                            </p>
                            <ul className="list-disc list-inside text-[#555] space-y-3">
                                <li>
                                    <b>Reglas de Seguridad:</b> Firebase tiene un sistema de reglas que controla el acceso a los datos, independiente de las credenciales. Por ejemplo:
                                    <pre className="bg-white text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">
                                        {`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;  // Cualquiera puede leer
      allow write: if request.auth != null;  // Solo usuarios autenticados pueden escribir
    }
  }
}`}
                                    </pre>
                                </li>
                                <li>
                                    <b>Dominios Autorizados:</b> Firebase solo permite conexiones desde dominios que hayas autorizado en la consola. Si alguien intenta usar tus credenciales desde un dominio no autorizado, la conexión será rechazada.
                                </li>
                                <li>
                                    <b>Límites de Uso:</b> Cada proyecto tiene límites de uso que puedes monitorear en la consola. Si alguien intenta abusar de tus credenciales, rápidamente alcanzaría estos límites.
                                </li>
                            </ul>
                            <p className="text-[#555] mt-4">
                                Las credenciales son específicas del proyecto y no son credenciales de administrador. Solo permiten acceso según las reglas que hayas definido y no dan acceso a otros proyectos de Firebase.
                            </p>
                        </div>
                    </section>

                    {/* Paso 2 */}
                    <section className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-8 rounded-full bg-[#ffe6a0] flex items-center justify-center font-bold text-[#8B2C3B]">2</span>
                            <h2 className="text-xl font-bold text-[#8B2C3B]">Escribir en Firebase (nueva-carta)</h2>
                        </div>
                        <p className="text-[#222]">Crea una API route en <b>app/api/firestore/route.js</b>:</p>
                        <p className="text-[#555] mb-4">
                            En Next.js 13+, el <b>App Router</b> nos permite crear rutas API dentro de la carpeta <b>app</b>.
                            Los archivos <b>route.js</b> definen endpoints HTTP. En este caso, creamos un endpoint POST
                            que maneja la creación de nuevas cartas.
                        </p>
                        <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 overflow-x-auto border border-[#f3e6c1]">
                            {`import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "../../../firebase";
import { NextResponse } from "next/server";

const firestore = getFirestore(app);

export async function POST(req) {
    const { data } = await req.json();
    try {
        const docRef = doc(collection(firestore, "cartas"));
        const id = docRef.id;
        await setDoc(docRef, { ...data, id });
        return NextResponse.json({ id: id, ...data });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add document " + error });
    }
}`}
                        </pre>
                        <p className="text-[#222]">Y el formulario en <b>app/nueva-carta/page.js</b>:</p>
                        <p className="text-[#555] mb-4">
                            La directiva <b>'use client'</b> al inicio del archivo indica que este componente se ejecutará en el navegador.
                            Esto es necesario porque usamos hooks de React y eventos del navegador. Sin esta directiva,
                            el componente se renderizaría en el servidor y no funcionaría correctamente.
                        </p>
                        <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 overflow-x-auto border border-[#f3e6c1]">
                            {`"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevaCarta() {
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/firestore", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: { nombre, mensaje } }),
        });
        setLoading(false);
        if (res.ok) {
            router.push("/cartas");
        } else {
            alert("Error al enviar la carta");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input className="w-full border border-[#ffe6a0] rounded px-3 py-2" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
            <textarea className="w-full border border-[#ffe6a0] rounded px-3 py-2" value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Mensaje" required />
            <button type="submit" className="w-full py-2 rounded-full bg-[#ffe6a0] text-[#8B2C3B] font-bold shadow-sm transition hover:bg-[#ffda6a]" disabled={loading}>
                {loading ? "Enviando..." : "Enviar carta"}
            </button>
        </form>
    );
}`}
                        </pre>
                        <p className="text-[#555] mt-4">
                            En este componente usamos varios <b>hooks</b> de React:
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li><b>useState</b>: Para manejar el estado del formulario (nombre, mensaje) y el estado de carga</li>
                                <li><b>useRouter</b>: Para la navegación programática después de enviar el formulario</li>
                            </ul>
                        </p>

                        {/* Nueva sección sobre hooks */}
                        <div className="mt-8 p-6 bg-[#fff8e1] rounded-xl border border-[#f3e6c1]">
                            <h3 className="text-lg font-bold text-[#8B2C3B] mb-4">Hooks de React en detalle</h3>

                            <div className="mb-6">
                                <h4 className="font-semibold text-[#8B2C3B] mb-2">useState</h4>
                                <p className="text-[#555] mb-2">
                                    El hook <b>useState</b> es uno de los hooks más fundamentales de React. Nos permite:
                                </p>
                                <ul className="list-disc list-inside text-[#555] space-y-2 ml-4">
                                    <li>Agregar estado local a componentes funcionales</li>
                                    <li>Mantener valores entre renderizados</li>
                                    <li>Actualizar la UI cuando el estado cambia</li>
                                </ul>
                                <p className="text-[#555] mt-2">
                                    En nuestro formulario lo usamos así:
                                </p>
                                <pre className="bg-white text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">
                                    {`const [nombre, setNombre] = useState("");
const [mensaje, setMensaje] = useState("");
const [loading, setLoading] = useState(false);`}
                                </pre>
                                <p className="text-[#555] mt-2">
                                    <a href="https://react.dev/reference/react/useState" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a]">
                                        📚 Documentación oficial de useState
                                    </a>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-[#8B2C3B] mb-2">useRouter</h4>
                                <p className="text-[#555] mb-2">
                                    El hook <b>useRouter</b> es específico de Next.js y nos permite:
                                </p>
                                <ul className="list-disc list-inside text-[#555] space-y-2 ml-4">
                                    <li>Navegar programáticamente entre páginas</li>
                                    <li>Acceder a información de la ruta actual</li>
                                    <li>Manipular la URL del navegador</li>
                                </ul>
                                <p className="text-[#555] mt-2">
                                    En nuestro código lo usamos para redirigir después de enviar el formulario:
                                </p>
                                <pre className="bg-white text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">
                                    {`const router = useRouter();
// ... después de enviar el formulario
router.push("/cartas");`}
                                </pre>
                                <p className="text-[#555] mt-2">
                                    <a href="https://nextjs.org/docs/app/api-reference/functions/use-router" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a]">
                                        📚 Documentación oficial de useRouter
                                    </a>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-[#8B2C3B] mb-2">useEffect</h4>
                                <p className="text-[#555] mb-2">
                                    El hook <b>useEffect</b> nos permite manejar efectos secundarios en componentes funcionales. Es especialmente útil para:
                                </p>
                                <ul className="list-disc list-inside text-[#555] space-y-2 ml-4">
                                    <li>Realizar peticiones a APIs</li>
                                    <li>Suscribirse a eventos</li>
                                    <li>Actualizar el DOM manualmente</li>
                                    <li>Ejecutar código cuando el componente se monta o actualiza</li>
                                </ul>
                                <p className="text-[#555] mt-2">
                                    En nuestro código lo usamos para cargar las cartas cuando el componente se monta:
                                </p>
                                <pre className="bg-white text-[#8B2C3B] rounded-lg p-3 mt-2 mb-2 overflow-x-auto border border-[#f3e6c1]">
                                    {`useEffect(() => {
    fetch("/api/firestore")
        .then(res => res.json())
        .then(data => {
            setCartas(data);
            setLoading(false);
        });
}, []); // El array vacío significa que solo se ejecuta al montar el componente`}
                                </pre>
                                <p className="text-[#555] mt-2">
                                    El segundo argumento de useEffect (el array vacío <code>[]</code>) es el array de dependencias:
                                </p>
                                <ul className="list-disc list-inside text-[#555] space-y-2 ml-4">
                                    <li><code>[]</code> - El efecto se ejecuta solo al montar el componente</li>
                                    <li><code>[variable]</code> - El efecto se ejecuta cuando la variable cambia</li>
                                    <li>Sin array - El efecto se ejecuta en cada renderizado</li>
                                </ul>
                                <p className="text-[#555] mt-2">
                                    <a href="https://react.dev/reference/react/useEffect" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a]">
                                        📚 Documentación oficial de useEffect
                                    </a>
                                </p>
                            </div>

                            <div className="mt-6 p-4 bg-white rounded-lg border border-[#f3e6c1]">
                                <h4 className="font-semibold text-[#8B2C3B] mb-2">Recursos adicionales</h4>
                                <ul className="list-disc list-inside text-[#555] space-y-2">
                                    <li>
                                        <a href="https://react.dev/learn/hooks-overview" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a]">
                                            📖 Introducción a los Hooks de React
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://react.dev/learn/hooks-custom" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a]">
                                            📖 Creando tus propios Hooks
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://nextjs.org/docs/app/building-your-application/routing" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a]">
                                            📖 Routing en Next.js
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Paso 3 */}
                    <section className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-8 rounded-full bg-[#ffe6a0] flex items-center justify-center font-bold text-[#8B2C3B]">3</span>
                            <h2 className="text-xl font-bold text-[#8B2C3B]">Leer de Firebase (cartas)</h2>
                        </div>
                        <p className="text-[#222]">Agrega el método GET en <b>app/api/firestore/route.js</b>:</p>
                        <p className="text-[#555] mb-4">
                            Este endpoint GET se ejecuta en el servidor y obtiene todas las cartas de Firestore.
                            Es una ruta API que devuelve los datos en formato JSON.
                        </p>
                        <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 overflow-x-auto border border-[#f3e6c1]">
                            {`export async function GET() {
    const snapshot = await getDocs(collection(firestore, "cartas"));
    const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
    return NextResponse.json(data);
}`}
                        </pre>
                        <p className="text-[#222]">Y muestra las cartas en <b>app/cartas/page.js</b>:</p>
                        <p className="text-[#555] mb-4">
                            Este componente también usa <b>&quot;use client&quot;</b> porque necesita interactividad del navegador.
                            Utilizamos el hook <b>useEffect</b> para cargar las cartas cuando el componente se monta,
                            y <b>useState</b> para manejar el estado de las cartas y la carga.
                        </p>
                        <pre className="bg-[#fff8e1] text-[#8B2C3B] rounded-lg p-3 overflow-x-auto border border-[#f3e6c1]">
                            {`"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cartas() {
    const [cartas, setCartas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/firestore")
            .then(res => res.json())
            .then(data => {
                setCartas(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#8B2C3B]">Cartas disponibles</h1>
                <Link href="/nueva-carta">
                    <button className="px-6 py-2 rounded-full bg-[#ffe6a0] text-[#8B2C3B] font-bold shadow-sm hover:bg-[#ffda6a] transition">Enviar nueva carta</button>
                </Link>
            </div>
            {loading ? (
                <p className="text-[#8B2C3B]">Cargando cartas...</p>
            ) : (
                <ul className="space-y-4">
                    {cartas.map((carta) => (
                        <li key={carta.id} className="bg-[#fff8e1] rounded-xl p-4 shadow flex flex-col gap-2">
                            <span className="font-semibold text-[#8B2C3B]">{carta.nombre}</span>
                            <span className="text-[#222]">{carta.mensaje}</span>
                            <span className="text-xs text-[#bfa77a]">ID: {carta.id}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}`}
                        </pre>
                    </section>

                    {/* Final */}
                    <section className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 items-center">
                        <h2 className="text-xl font-bold text-[#8B2C3B]">¡Listo!</h2>
                        <p className="text-[#222] text-center">Ya tienes una app Next.js conectada a Firebase con Firestore. Puedes seguir mejorando tu app agregando autenticación, reglas de seguridad y más funcionalidades.</p>
                        <a href="https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/" target="_blank" rel="noopener noreferrer" className="text-[#8B2C3B] underline hover:text-[#a13a4a] font-semibold">Ver tutorial original en freeCodeCamp</a>
                    </section>
                </div>
            </main>
        </div>
    );
}
