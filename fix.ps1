$htmlPath = "C:\Proyectos\divinita\index.html"
$html = Get-Content $htmlPath -Raw -Encoding UTF8

# 1. Usar CSS minificado
$html = $html -replace 'href="css/estyles.css"', 'href="css/estyles.min.css"'

# 2. Agregar <main> alrededor del contenido
$html = $html -replace '<!-- ── MISION ── -->', '<main>
  <!-- ── MISION ── -->'
$html = $html -replace '<!-- ── FOOTER ── -->', '</main>

  <!-- ── FOOTER ── -->'

# 3. aria-label en botón hamburguesa
$html = $html -replace '<button class="hamburger" id="hamburger">', '<button class="hamburger" id="hamburger" aria-label="Abrir menú de navegación">'

# 4. aria-label en botones de copiar
$html = $html -replace '<button class="copy-btn" data-copy="66779376215">Copiar número</button>', '<button class="copy-btn" data-copy="66779376215" aria-label="Copiar número Bancolombia">Copiar número</button>'
$html = $html -replace '<button class="copy-btn" data-copy="458100033083">Copiar número</button>', '<button class="copy-btn" data-copy="458100033083" aria-label="Copiar número Davivienda">Copiar número</button>'
$html = $html -replace '<button class="copy-btn" data-copy="3132943348">Copiar número</button>', '<button class="copy-btn" data-copy="3132943348" aria-label="Copiar número Nequi">Copiar número</button>'

# 5. aria-label en botón calculadora
$html = $html -replace '<button id="calc-btn">Buscar talla</button>', '<button id="calc-btn" aria-label="Buscar talla según medida">Buscar talla</button>'

Set-Content $htmlPath $html -Encoding UTF8
Write-Host "HTML actualizado"