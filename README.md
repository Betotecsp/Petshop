# 🐾 Sistema de Agendamento de Banhos em Pet Shop

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" width="120" alt="Petshop Icon"/>
</p>

## 🎓 FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" width="120" alt="Petshop Icon"/>
</p>

### 💼 Disciplina: Desenvolvimento Web Full Stack  
**Professor:** [Francisco Escobar](https://www.linkedin.com/in/francisco-escobar/)  
**Aluno:** [Marcos Paulo](https://www.linkedin.com/in/marcos-nascimento-985775317/)  

---

## ✨ Descrição do Projeto

Este sistema web permite que clientes agendem banhos para seus pets de forma rápida e eficiente. Com funcionalidades completas de cadastro de usuários, login seguro com JWT, gerenciamento de agendamentos e upload de imagem dos pets, o projeto visa simular um sistema real de atendimento em petshops.

---

## 🚀 Funcionalidades

✅ Cadastro de usuários com senha criptografada  
✅ Login seguro com JWT e middleware de proteção  
✅ Agendamento de banhos com:
- Nome do pet
- Raça
- Data e horário
- Observações
- Upload obrigatório de imagem  
✅ Listagem, edição e exclusão de agendamentos  
✅ Visualização da imagem no front-end  
✅ Modularização de rotas no backend (auth, user, appointment, etc.)

---

## 🧪 Tecnologias Utilizadas

- HTML5 + CSS3
- Node.js + Express
- MySQL
- JWT (autenticação)
- Bcrypt (criptografia)
- Multer (upload de imagens)
- Git e GitHub

---

## 🛠 Como Rodar o Sistema

```bash
# Clone o repositório
git clone https://github.com/Betotecsp/Petshop.git

# Entre na pasta do projeto backend
cd Petshop/backend

# Instale as dependências
npm install

# Configure o banco de dados com o arquivo SQL fornecido
# Crie o banco e execute o script banco_petshop.sql

# Copie o .env de exemplo e edite
cp .env.example .env

# Rode o servidor
npm start
```

---

## 🧾 Exemplo de .env

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=banco_petshop
JWT_SECRET=segredo_super_secreto
```

---

## 🖼️ Prints do Sistema

> Você pode adicionar imagens do sistema aqui para mostrar a interface de login, cadastro e agendamentos.

---

## 📂 Estrutura do Projeto

```
/Petshop
├── backend
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── uploads
│   ├── database.js
│   ├── server.js
│   └── .env.example
└── frontend
    ├── index.html
    ├── login.html
    ├── agendamento.html
    └── assets/
```

---

## 🧠 Requisitos Atendidos

### Funcionais
- [x] Cadastro de usuários
- [x] Agendamento com imagem
- [x] CRUD completo de agendamentos

### Não Funcionais
- [x] Senhas criptografadas com bcrypt
- [x] Autenticação com JWT
- [x] Uploads salvos localmente (pasta `/uploads`)

---

## 🌟 Funcionalidade Extra

- [x] Upload com preview de imagem (client-side)
- [x] Interface personalizada com tema visual customizado

---

## 🔗 Link do Repositório

📁 [GitHub - Betotecsp/Petshop](https://github.com/Betotecsp/Petshop)
