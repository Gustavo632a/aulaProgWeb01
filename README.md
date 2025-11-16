# 🌿 ONG Vida Selvagem - Website Oficial

![Status](https://img.shields.io/badge/Status-Ativo-success)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-green)

## 📋 Descrição

O website da **ONG Vida Selvagem** é uma plataforma digital dedicada à preservação da vida selvagem brasileira, combate ao tráfico de animais e educação ambiental. O site oferece informações sobre projetos de conservação, animais ameaçados de extinção e formas de participação e doação.

## 🎯 Missão

Proteger e restaurar a biodiversidade, garantindo a sobrevivência das espécies ameaçadas e combatendo ativamente o tráfico de animais silvestres através de conservação de habitats, educação ambiental e mobilização social.

## ✨ Características

- 🌐 **Website Responsivo**: Interface adaptável para desktop, tablet e mobile
- 🎨 **Design Moderno**: Interface intuitiva com navegação sofisticada
- 📱 **Menu Hambúrguer**: Navegação otimizada para dispositivos móveis
- 🔗 **Dropdown Submenu**: Menu interativo com categorias de projeto
- 🗂️ **Formulário de Cadastro**: Sistema para capturar interesse de voluntários
- 📚 **Conteúdo Educativo**: Informações detalhadas sobre animais ameaçados
- ♿ **Acessibilidade**: Código HTML semântico e labels adequados
- ⚡ **Performance**: Carregamento rápido com otimização CSS

## 📁 Estrutura do Projeto

```
aulaProgWeb01/
├── index.html              # Página inicial
├── projeto.html            # Informações sobre projetos
├── cadastro.html           # Formulário de cadastro de voluntários
├── animais.html            # Galeria de animais ameaçados
├── style.css               # Estilos globais
├── navbar.js               # Interatividade da navegação
├── assets/                 # Diretório de imagens
│   └── micoleao.webp       # Imagens dos animais
├── README.md               # Este arquivo
└── .git/                   # Controle de versão Git
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Layout responsivo com flexbox e media queries
- **JavaScript**: Interatividade do menu e dropdown
- **Git**: Controle de versão

## 📄 Páginas Disponíveis

### 1. **Página Inicial (index.html)**
- Quem somos
- Missão da organização
- Informações de contato

### 2. **Projetos (projeto.html)**
- Indicadores de impacto
- Projetos em andamento
- Como ajudar (doação, voluntariado, parcerias)

### 3. **Animais Ameaçados (animais.html)**
- Galeria de 5 animais brasileiros em risco
- Descrições detalhadas de cada espécie
- Importância da preservação

### 4. **Cadastro (cadastro.html)**
- Formulário para voluntários
- Campos: nome, email, CPF, telefone, data de nascimento, endereço, CEP, cidade, estado
- Botão de envio com estilo moderno

## 🚀 Como Usar

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Sem dependências externas necessárias

### Instalação Local

1. **Clone o repositório**
```bash
git clone https://github.com/Gustavo632a/aulaProgWeb01.git
cd aulaProgWeb01
```

2. **Abra no navegador**
Simplesmente abra o arquivo `index.html` no seu navegador favorito:
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

3. **Ou use um servidor local** (recomendado)
```bash
# Usando Python 3
python -m http.server 8000

# Ou Node.js com http-server
npx http-server
```
Acesse `http://localhost:8000` no navegador.

## 🎨 Design e Responsividade

### Breakpoints
- **Desktop**: > 700px - Menu horizontal com dropdown
- **Mobile**: ≤ 700px - Menu hambúrguer com navegação vertical

### Paleta de Cores
- Verde Escuro (Header): `rgb(45, 37, 8)`
- Verde Claro (Accent): `rgb(121, 201, 8)`
- Verde Médio (CTA): `rgb(36, 122, 10)`
- Gradiente de Fundo: `linear-gradient(to top, rgb(210, 197, 178), rgb(180, 170, 150))`

## 🔧 Funcionalidades JavaScript

### Navegação Responsiva
- **Hamburger Toggle**: Abre/fecha o menu em dispositivos móveis
- **Dropdown Menu**: Submenu da seção "Projeto" com hover (desktop) e clique (mobile)
- **Acessibilidade**: Suporte a teclado e aria-labels

## 📝 Conteúdo Principal

### Animais Ameaçados de Extinção
1. **Mico-leão-dourado** - Pequeno primata da Mata Atlântica
2. **Onça-pintada** - Maior felino das Américas
3. **Arara-azul** - Ave emblemática brasileira
4. **Tamanduá-bandeira** - Mamífero de grande porte
5. **Lobo-guará** - Símbolo do Cerrado

### Impacto (Indicadores)
- 2.300+ Animais resgatados
- 120 Operações contra o tráfico
- 48 Comunidades capacitadas
- 85% Reintroduções bem-sucedidas

## 🤝 Como Contribuir

1. **Faça um fork** do repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Áreas de Contribuição
- Melhorias visuais e UX
- Adicionar mais animais ao banco de dados
- Integração com backend para formulários
- Internacionalização (i18n)
- Otimizações de performance

## 📞 Contato

- **Email**: vidaselvagemlivre@gmail.com
- **Telefone**: (83) 99852-4192
- **Endereço**: Rua Pocinhos, 35 - Bairro dos Municípios - Santa Rita/PB

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Comunidade local de conservação ambiental
- Voluntários e doadores que apoiam a missão
- Parceiros públicos e universidades

## 🔮 Roadmap Futuro

- [ ] Backend para processamento de formulários
- [ ] Sistema de blog para notícias e atualizações
- [ ] Galeria de fotos com lightbox
- [ ] Mapa interativo de projetos
- [ ] Integração com redes sociais
- [ ] Sistema de doações online
- [ ] Dashboard de impacto em tempo real
- [ ] Versão em inglês

## 📊 Status do Projeto

- ✅ Estrutura HTML completa
- ✅ Styling CSS responsivo
- ✅ Navegação interativa
- ✅ Páginas de conteúdo
- 🔄 Integração com backend (em planejamento)
- 🔄 Sistema de doações (em planejamento)

---

**Desenvolvido com ❤️ para a conservação da vida selvagem brasileira**

Última atualização: Novembro de 2025