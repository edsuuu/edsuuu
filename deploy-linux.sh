cd portfolio/edsuuu/
echo "ACESSANDO A PASTA E REALIZANDO ATUALIZACAO DO REPOSITORIO GIT PARA SERVIDOR"

git pull

if [ $? -eq 0 ]; then
  echo "Git pull realizado com sucesso."

  npm install && npm run build

  if [ $? -eq 0 ]; then
    echo "Build realizado com sucesso."

    pm2 restart 3
    echo "PM2 REINICIADO."

    echo "Deploy realizado com sucesso."
  else
    echo "Erro ao realizar o build."
  fi
else
  echo "Erro ao realizar o git push."
fi
