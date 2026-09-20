@echo off
echo ===================================================
echo   Starting Intzar Ali's Cinematic Portfolio
echo ===================================================
echo Starting backend server on http://localhost:5000 ...
start cmd /k "npm --prefix backend start"
timeout /t 2 /nobreak >nul
echo Starting frontend on http://localhost:3000 ...
start cmd /k "npm --prefix frontend run dev"
echo ===================================================
echo   Portfolio is launching! Check your browser.
echo ===================================================
