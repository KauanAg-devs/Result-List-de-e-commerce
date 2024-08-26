
# Result-list-de-e-commerce

Um projeto simples de e-commerce.

## Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### 1. Navegue até o diretório `backend`

```bash
cd backend
```

### 2. Crie o arquivo `.env`

Copie o arquivo `.env.example` e renomeie-o para `.env`:

```bash
cp .env.example .env
```

### 3. Gere o Prisma Client

Execute o comando abaixo para gerar o Prisma Client:

```bash
npx prisma generate
```

### 4. Suba os containers com Docker

Inicie os serviços necessários utilizando o Docker Compose:

```bash
docker-compose up -d
```

### 5. Inicie o servidor de desenvolvimento

Por fim, rode o servidor de desenvolvimento:

```bash
npm run dev
```

Agora você deve estar pronto para começar a desenvolver!
