@echo off
setlocal

REM Frontend: este repositorio.
set "FRONTEND_DIR=%~dp0"

REM Backend: ajusta esta ruta a tu carpeta real de backend.
REM Ejemplo si backend esta al lado de este repo:
REM set "BACKEND_DIR=%~dp0..\upright-backend"
set "BACKEND_DIR=%~dp0..\upright-backend"

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm no esta disponible en PATH. Instala Node.js y vuelve a intentar.
  pause
  exit /b 1
)

if not exist "%FRONTEND_DIR%\package.json" (
  echo [ERROR] No se encontro package.json en frontend: "%FRONTEND_DIR%"
  pause
  exit /b 1
)

if not exist "%BACKEND_DIR%\package.json" (
  echo [ERROR] No se encontro package.json en backend: "%BACKEND_DIR%"
  echo Edita BACKEND_DIR en start-dev-windows.bat.
  pause
  exit /b 1
)

echo Iniciando backend...
start "Upright Backend" cmd /k "cd /d ""%BACKEND_DIR%"" && npm run dev"

timeout /t 2 /nobreak >nul

echo Iniciando frontend...
start "Upright Frontend" cmd /k "cd /d ""%FRONTEND_DIR%"" && npm run dev"

exit /b 0
