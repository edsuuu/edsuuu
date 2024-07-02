cd portfolio/edsuuu/
echo "ACESSANDO A PASTA E REALIZANDO ATUALIZACAO DO REPOSITORIO GIT PARA SERVIDOR"

git pull

if [ $? -eq 0 ]; then
  echo "Git pull realizado com sucesso."

  npm install && npm run build

  if [ $? -eq 0 ]; then
    echo "Build realizado com sucesso."

    sudo rm -rf /home/edson/portfolio/express-from-deploy-static-pages/dist/
    echo "PASTA REMOVIDA DA FEATURE ANTERIOR"

    sudo mv /home/edson/portfolio/edsuuu/dist /home/edson/portfolio/express-from-deploy-static-pages/
    echo "PASTA MOVIDA PARA DEPLOY"

    pm2 restart 0
    echo "PM2 REINICIADO."

    echo "Deploy realizado com sucesso."
  else
    echo "Erro ao realizar o build."
  fi
else
  echo "Erro ao realizar o git push."
fi
