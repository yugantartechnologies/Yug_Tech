$files = @(
    "src__components__Navbar.js",
    "src__components__Hero.js",
    "src__components__Footer.js",
    "src__App.js",
    "src__index.css",
    "src__components__ScrollProgress.js",
    "src__components__CustomCursor.js"
)

$sourceDir = Join-Path $PSScriptRoot 'revert-backups\20260711_002352'
foreach ($file in $files) {
    $source = Join-Path $sourceDir $file
    if (Test-Path $source) {
        $target = Join-Path $PSScriptRoot ($file -replace '__', '\')
        Copy-Item $source $target -Force
        Write-Host "Restored: $target"
    } else {
        Write-Host "Missing backup source: $source" -ForegroundColor Yellow
    }
}
Write-Host "Restore complete. Run npm start after verifying files." -ForegroundColor Green
