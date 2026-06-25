$htmlPath = "C:\Proyectos\divinita\index.html"
$html = Get-Content $htmlPath -Raw -Encoding UTF8

# 1. Agregar meta description en el <head>
$html = $html -replace '<title>Divinita — El poder del amor salva vidas</title>', '<title>Divinita — El poder del amor salva vidas</title>
  <meta name="description" content="Divinita al Rescate: calzado colombiano con sentido social. Cada par de zapatos lleva el nombre de un perrito rescatado. Compra y ayuda a salvar vidas." />
  <meta name="robots" content="index, follow" />'

# 2. Reemplazar javascript:void(0) por un botón real
$html = $html -replace '<a href="javascript:void\(0\)" onclick="toggleRescatados\(\)" class="btn-primary">Ver rescatados</a>', '<button type="button" onclick="toggleRescatados()" class="btn-primary">Ver rescatados</button>'

Set-Content $htmlPath $html -Encoding UTF8
Write-Host "SEO corregido"