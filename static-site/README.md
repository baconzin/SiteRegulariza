# Regulariza.AGR - Site Institucional Estático

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar Repositório no GitHub
1. Acesse [GitHub](https://github.com) e faça login
2. Clique em **New Repository**
3. Nome: `regulariza-agr-site` (ou qualquer nome)
4. Defina como **Public**
5. **NÃO** inicialize com README
6. Clique em **Create Repository**

### Passo 2: Fazer Upload dos Arquivos

**Opção A: Via Interface Web**
1. No repositório recém-criado, clique em **uploading an existing file**
2. Arraste TODOS os arquivos desta pasta
3. Commit com mensagem: "Initial commit - Regulariza.AGR website"

**Opção B: Via Git (linha de comando)**
```bash
# Inicializar repositório local
git init
git add .
git commit -m "Initial commit - Regulariza.AGR website"

# Adicionar repositório remoto
git remote add origin https://github.com/SEU-USUARIO/regulariza-agr-site.git

# Enviar arquivos
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. No repositório, vá em **Settings** > **Pages**
2. Em **Source**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Clique em **Save**
4. Aguarde 1-3 minutos
5. O site estará disponível em: `https://SEU-USUARIO.github.io/regulariza-agr-site/`

### Passo 4: Configurar Domínio Customizado (regulariza.agr.br)

#### No GitHub:
1. Em **Settings** > **Pages**
2. Em **Custom domain**, digite: `regulariza.agr.br`
3. Clique em **Save**
4. Marque **Enforce HTTPS** (aguarde alguns minutos)

#### No Provedor de Domínio (Registro.br, GoDaddy, etc):
Adicione os seguintes registros DNS:

**Para usar domínio raiz (regulariza.agr.br):**
```
Tipo: A
Nome: @
Valor: 185.199.108.153

Tipo: A
Nome: @
Valor: 185.199.109.153

Tipo: A
Nome: @
Valor: 185.199.110.153

Tipo: A
Nome: @
Valor: 185.199.111.153

Tipo: CNAME
Nome: www
Valor: SEU-USUARIO.github.io
```

**OU para usar subdomínio (www.regulariza.agr.br):**
```
Tipo: CNAME
Nome: www
Valor: SEU-USUARIO.github.io
```

### Passo 5: Verificar
- Aguarde propagação DNS (pode levar de 5 minutos a 48 horas)
- Acesse: https://regulariza.agr.br
- Verifique se o certificado SSL está ativo (cadeado verde)

---

## 🛠️ Atualizações

Para atualizar o site:
1. Edite os arquivos localmente
2. Faça commit:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```
3. Aguarde 1-2 minutos para o GitHub Pages atualizar

---

## 📝 Configurações Editáveis

No arquivo `assets/js/main.js`, você pode editar:
```javascript
const CONFIG = {
  WHATSAPP: "+5519971636969",
  EMAIL: "contato@regulariza.agr.br",
  INSTAGRAM: "https://instagram.com/regulariza.agr",
  YOUTUBE: "https://youtube.com/@regularizaagr",
  FRASE_LEGAL: "CNPJ com mais de 16 anos de experiência"
};
```

---

## 📊 Analytics (Opcional)

Para adicionar Google Analytics ou Meta Pixel, edite `assets/js/main.js` e descomente as seções relevantes no final do arquivo.

---

## ❓ Suporte

Problemas com GitHub Pages? Consulte:
- [Documentação Oficial](https://docs.github.com/en/pages)
- [Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

**Regulariza.AGR** - CNPJ com mais de 16 anos de experiência
