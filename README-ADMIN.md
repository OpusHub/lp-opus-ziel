# ZielHub Admin - Guia Completo

## 🚀 Visão Geral

Sistema de administração completo para o site ZielHub, com editor rich text AI-powered e integração com backend Go/PostgreSQL.

## 📋 Tecnologias

### Frontend
- **Next.js 16** com App Router e Turbopack
- **React 19** com Server Components
- **Plate.js** - Editor rich text com AI
- **shadcn/ui** - Componentes UI modernos
- **Tailwind CSS v4** - Estilização
- **next-intl** - Internacionalização (PT/EN)

### Backend
- **Go 1.23** com Gin framework
- **PostgreSQL 16** - Banco de dados
- **GORM** - ORM
- **Docker** - Containerização

## 🛠️ Instalação

### 1. Frontend Setup

```bash
cd zielhub-lp-blog

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Editar .env.local
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
```

### 2. Backend Setup

#### Opção A: Com Docker (Recomendado)

```bash
cd ../zielhub-lp-backend

# Iniciar PostgreSQL e API
docker-compose up --build
```

#### Opção B: Local (sem Docker)

**Pré-requisitos:**
- PostgreSQL 16 instalado
- Go 1.23+ instalado

```bash
cd ../zielhub-lp-backend

# 1. Configurar banco de dados PostgreSQL
# No pgAdmin ou psql:
CREATE DATABASE zielhub;

# 2. Configurar .env
cp .env.example .env

# Editar .env com suas credenciais:
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=SUA_SENHA
DB_NAME=zielhub
DB_SSLMODE=disable
PORT=8080
GIN_MODE=debug

# 3. Instalar dependências
go mod download

# 4. Rodar servidor
go run cmd/api/main.go
```

### 3. Iniciar o Frontend

```bash
cd zielhub-lp-blog
npm run dev
```

O site estará disponível em:
- **Site**: http://localhost:3000
- **Admin**: http://localhost:3000/admin (ou /pt/admin, /en/admin)
- **API Backend**: http://localhost:8080

## 📝 Usando o Admin

### Acessar o Admin

1. Abra o navegador em `http://localhost:3000/admin`
2. Você verá 4 abas principais:
   - **Settings** - Configurações do site
   - **Content** - Conteúdo textual multilíngue
   - **Showcases** - Casos de sucesso
   - **Contacts** - Mensagens de contato

### Settings (Configurações)

**Para que serve:** Gerenciar cores, tema, logos e configurações gerais do site.

**Como usar:**
1. Clique em "Add Setting"
2. Preencha:
   - **Key**: Chave única (ex: `primary_color`)
   - **Label**: Nome amigável (ex: `Primary Color`)
   - **Value**: Valor (cor hex, URL, texto, JSON)
   - **Type**: Tipo do valor (text, color, image, json)
   - **Category**: Categoria (branding, theme, content, general)
3. Clique em "Save"

**Exemplos:**
- **Cor primária**:
  - Key: `primary_color`
  - Type: `color`
  - Value: `#3b82f6`
  - Category: `theme`

- **Logo URL**:
  - Key: `site_logo`
  - Type: `image`
  - Value: `https://example.com/logo.svg`
  - Category: `branding`

### Content (Conteúdo)

**Para que serve:** Gerenciar todos os textos do site em português e inglês.

**Como usar:**
1. Selecione o idioma (PT ou EN)
2. Clique em "Add Content"
3. Preencha:
   - **Key**: Chave hierárquica (ex: `hero.title`, `about.description`)
   - **Value**: Use o **editor rich text** para formatar o texto
   - **Locale**: Idioma (pt ou en)
   - **Section**: Seção do site (hero, about, services, etc)
4. Clique em "Save"

**Editor Rich Text:**
- **Formatação**: Bold, italic, underline
- **Títulos**: H1, H2, H3
- **Listas**: Numeradas e com marcadores
- **Links**: Adicione links
- **AI Assistant**: Use comandos de AI para melhorar o texto

**Exemplos:**
- **Título do Hero (PT)**:
  - Key: `hero.title`
  - Value: "Transforme seu negócio com IA"
  - Locale: `pt`
  - Section: `hero`

- **Título do Hero (EN)**:
  - Key: `hero.title`
  - Value: "Transform your business with AI"
  - Locale: `en`
  - Section: `hero`

### Showcases (Casos de Sucesso)

**Para que serve:** Gerenciar cases de clientes e projetos de sucesso.

**Como usar:**
1. Selecione o idioma
2. Clique em "Add Showcase"
3. Preencha o formulário completo:
   - **Company Name**: Nome da empresa
   - **Slug**: URL amigável (ex: `adidas`)
   - **Title**: Título do case
   - **Category**: Categoria (ex: "Retail IA")
   - **Duration**: Duração do projeto (ex: "3 meses")
   - **Image URL**: URL da imagem principal
   - **Logo URL**: URL do logo da empresa
   - **Challenge**: Use o editor rich text para descrever o desafio
   - **Solution**: Descreva a solução implementada
   - **Results**: Descreva os resultados alcançados
   - **Order**: Ordem de exibição (0, 1, 2...)
   - **Locale**: Idioma
   - **Published**: ✓ para publicar imediatamente
4. Clique em "Save"

**Recursos:**
- **Draft/Published**: Controle de publicação
- **Toggle visibility**: Botão de olho para publicar/despublicar
- **Rich text**: Editor completo para challenge, solution e results

### Contacts (Contatos)

**Para que serve:** Visualizar e gerenciar mensagens enviadas pelo formulário de contato do site.

**Como usar:**
1. **Filtrar**: Clique em "All" ou "Unread"
2. **Visualizar**: Clique em uma mensagem para ver detalhes
3. **Ações**:
   - **Mark as read**: Marcar como lida
   - **Delete**: Excluir mensagem
   - **Reply via Email**: Responder por email (abre cliente de email)

**Indicadores:**
- 🔵 Círculo azul preenchido = Não lida
- ✓ Check cinza = Lida
- Badge azul = Contador de não lidas

## 🎨 Recursos do Editor Rich Text

### Formatação Básica
- **Bold** (Ctrl+B): Negrito
- **Italic** (Ctrl+I): Itálico
- **Underline** (Ctrl+U): Sublinhado
- **Strike**: Tachado
- **Code**: Código inline

### Blocos
- **Heading 1-6**: Títulos
- **Paragraph**: Parágrafo
- **Blockquote**: Citação
- **Code Block**: Bloco de código

### Listas
- **Bullet List**: Lista com marcadores
- **Numbered List**: Lista numerada
- **Todo List**: Lista de tarefas

### Mídia
- **Link**: Inserir links
- **Image**: Inserir imagens
- **Video**: Inserir vídeos
- **Embed**: Embed de conteúdo

### AI Features
- **AI Commands**: Digite `/` para ver comandos AI
- **Copilot**: Assistente de escrita inteligente
- **Auto-complete**: Sugestões automáticas

## 🔌 API Endpoints

### Settings
```
GET    /api/v1/settings                    # Listar todos
GET    /api/v1/settings/:key               # Buscar por chave
GET    /api/v1/settings/category/:category # Buscar por categoria
POST   /api/v1/settings                    # Criar
PUT    /api/v1/settings/:id                # Atualizar
DELETE /api/v1/settings/:id                # Deletar
POST   /api/v1/settings/bulk               # Bulk upsert
```

### Content
```
GET    /api/v1/content?locale=pt           # Listar por idioma
GET    /api/v1/content/:key?locale=pt      # Buscar por chave
GET    /api/v1/content/section/:section    # Buscar por seção
POST   /api/v1/content                     # Criar
PUT    /api/v1/content/:id                 # Atualizar
DELETE /api/v1/content/:id                 # Deletar
POST   /api/v1/content/bulk                # Bulk upsert
```

### Showcases
```
GET    /api/v1/showcases?locale=pt         # Listar
GET    /api/v1/showcases/published         # Apenas publicados
GET    /api/v1/showcases/:id               # Buscar por ID
GET    /api/v1/showcases/slug/:slug        # Buscar por slug
POST   /api/v1/showcases                   # Criar
PUT    /api/v1/showcases/:id               # Atualizar
DELETE /api/v1/showcases/:id               # Deletar
POST   /api/v1/showcases/:id/metrics       # Adicionar métrica
POST   /api/v1/showcases/:id/implementations  # Adicionar implementação
POST   /api/v1/showcases/:id/charts        # Adicionar gráfico
```

### Contacts
```
GET    /api/v1/contacts                    # Listar todos
GET    /api/v1/contacts/unread             # Apenas não lidos
GET    /api/v1/contacts/:id                # Buscar por ID
POST   /api/v1/contacts                    # Criar (formulário)
PATCH  /api/v1/contacts/:id/read           # Marcar como lido
DELETE /api/v1/contacts/:id                # Deletar
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: settings
```sql
- id (PK)
- key (unique, indexed)
- value (text)
- type (text, color, image, json)
- category (branding, theme, content, general)
- label
- created_at, updated_at
```

### Tabela: contents
```sql
- id (PK)
- key (indexed)
- value (text)
- locale (pt, en)
- section (hero, about, services, etc)
- created_at, updated_at
- UNIQUE INDEX: (key, locale)
```

### Tabela: showcases
```sql
- id (PK)
- slug (unique)
- company_name
- title
- category
- image, logo
- duration
- challenge (HTML from rich editor)
- solution (HTML from rich editor)
- results (HTML from rich editor)
- order (for sorting)
- published (boolean)
- locale (pt, en)
- created_at, updated_at
```

### Tabela: showcase_metrics
```sql
- id (PK)
- showcase_id (FK)
- label
- value
- change (+38%, -47%)
- order
```

### Tabela: showcase_implementations
```sql
- id (PK)
- showcase_id (FK)
- step (description)
- order
```

### Tabela: showcase_charts
```sql
- id (PK)
- showcase_id (FK)
- type (trend, comparison)
- data (JSON)
```

### Tabela: contacts
```sql
- id (PK)
- name
- email
- phone (optional)
- company (optional)
- message
- read (boolean)
- created_at, updated_at
```

## 🚨 Troubleshooting

### Frontend não inicia
```bash
# Limpar cache e reinstalar
rm -rf .next node_modules
npm install
npm run dev
```

### Backend não conecta ao banco
- Verifique se PostgreSQL está rodando
- Confira as credenciais no `.env`
- Teste a conexão: `psql -U postgres -d zielhub`

### Erro de CORS
- Verifique se `NEXT_PUBLIC_API_URL` está correto no `.env.local`
- Backend deve estar rodando na porta 8080

### Editor não carrega
- O editor é client-side, aguarde alguns segundos
- Verifique o console do navegador para erros
- Certifique-se que JavaScript está habilitado

## 📦 Estrutura de Diretórios

```
zielhub-lp-blog/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── admin/
│   │       │   └── page.tsx          # Página principal do admin
│   │       ├── cases/
│   │       └── page.tsx
│   ├── components/
│   │   ├── admin/
│   │   │   ├── settings-manager.tsx
│   │   │   ├── content-manager.tsx
│   │   │   ├── showcase-manager.tsx
│   │   │   ├── contact-manager.tsx
│   │   │   └── rich-text-editor.tsx  # Editor wrapper
│   │   └── ui/                        # shadcn/ui components
│   ├── lib/
│   │   └── api.ts                     # API client
│   └── messages/
│       ├── pt.json
│       └── en.json
└── package.json

zielhub-lp-backend/
├── cmd/
│   └── api/
│       └── main.go
├── internal/
│   ├── models/
│   ├── repository/
│   ├── service/
│   └── handlers/
├── pkg/
│   └── database/
├── docker-compose.yml
└── Dockerfile
```

## 🔐 Segurança (TODO)

Para produção, adicione:
- [ ] Autenticação (JWT, OAuth)
- [ ] Autorização baseada em roles
- [ ] Rate limiting
- [ ] HTTPS
- [ ] Validação de input
- [ ] Sanitização de HTML do editor
- [ ] CSRF protection

## 📄 Licença

Propriedade de ZielHub. Todos os direitos reservados.
