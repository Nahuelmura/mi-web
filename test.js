console.log("Iniciando tests...");

// Simulamos la función
function suma(a, b) {
  return a + b;
}

// TEST 1
if (suma(2, 2) !== 5) {
  throw new Error("❌ Error en suma");
}

// TEST 2
if (suma(5, 5) !== 10) {
  throw new Error("❌ Error en suma 2");
}

console.log("✅ Todos los tests pasaron");
