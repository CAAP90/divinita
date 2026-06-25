$cssPath  = "C:\Proyectos\divinita\css\estyles.css"
$htmlPath = "C:\Proyectos\divinita\index.html"

# CSS: font-display swap
$css = Get-Content $cssPath -Raw -Encoding UTF8
$css = $css -replace "font-weight: 400;`r`n}", "font-weight: 400;`r`n  font-display: swap;`r`n}"
Set-Content $cssPath $css -Encoding UTF8
Write-Host "CSS listo"

# HTML: preload
$html = Get-Content $htmlPath -Raw -Encoding UTF8
$html = $html -replace '<link rel="stylesheet" href="css/estyles.css" />', '<link rel="preload" as="image" href="img/fondo_perritos2.webp" fetchpriority="high">
  <link rel="stylesheet" href="css/estyles.css" />'

# HTML: fetchpriority en hero
$html = $html -replace 'class="main-hero-image">', 'class="main-hero-image" fetchpriority="high" width="480" height="520">'

# HTML: lazy loading en perritos
$html = $html -replace '<img src="img/', '<img loading="lazy" src="img/'
$html = $html -replace '<img loading="lazy" src="img/fondo_perritos2', '<img src="img/fondo_perritos2'
$html = $html -replace '<img loading="lazy" src="img/logo2', '<img src="img/logo2'

Set-Content $htmlPath $html -Encoding UTF8
Write-Host "HTML listo"
Write-Host "Todo aplicado"