
# Result-list-de-e-commerce

Um projeto simples de e-commerce.


## Configuração do Ambiente - Backend

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### 1. Navegue até o diretório `backend`

```bash
cd backend && npm i
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
npm run start
```

## Configuração do Ambiente - Frontend

### Para rodar o Frontend, é necessário rodar o Backend primeiro.
### Siga os passos anteriores para fazer o Frontend funcionar sem erros.

## Navegue até o diretório `frontend`

```bash
cd frontend && npm i
```

## Inicie o Frontend

Assim, você poderá rodar a interface.


```bash
npm run dev
```


Agora você deve estar pronto para começar a desenvolver!
