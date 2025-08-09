# Landing Page - FHNET Telecom

Landing page para a empresa de telecomunicações FHNET TELECOM. Este projeto foi desenvolvido para apresentar os serviços e planos da empresa, fornecer informações de contato e permitir que os usuários verifiquem a disponibilidade dos serviços em sua área.

## Tabela de Conteúdo

- [Sobre o Projeto](https://www.google.com/search?q=%23sobre-o-projeto)
- [Tecnologias Utilizadas](https://www.google.com/search?q=%23tecnologias-utilizadas)
- [Começando](https://www.google.com/search?q=%23come%C3%A7ando)
    - [Pré-requisitos](https://www.google.com/search?q=%23pr%C3%A9-requisitos)
    - [Instalação](https://www.google.com/search?q=%23instala%C3%A7%C3%A3o)
- [Licença](https://www.google.com/search?q=%23licen%C3%A7a)

## Sobre o Projeto

Este repositório contém o código-fonte da landing page da FHNET Telecom, um provedor de internet 100% fibra óptica em Guarulhos/SP. A página destaca os planos oferecidos, os benefícios do serviço e fornece um formulário para que potenciais clientes possam solicitar contato e verificar a disponibilidade.

**Funcionalidades:**

- Seção de Herói com chamada para ação (CTA).
- Apresentação detalhada dos planos de internet.
- Formulário de contato para verificação de disponibilidade que redireciona para o WhatsApp.
- Informações de contato e rodapé com links úteis.
- Botão flutuante do WhatsApp para contato rápido.

## Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas de desenvolvimento web:

- **[Vite](https://vitejs.dev/)**: Ferramenta de build para desenvolvimento frontend.
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida.
- **[Shadcn/ui](https://ui.shadcn.com/)**: Coleção de componentes de UI reutilizáveis.
- **[React Hook Form](https://react-hook-form.com/)**: Para gerenciamento de formulários.
- **[Vercel](https://vercel.com/)**: Plataforma para deploy e hospedagem do projeto.

## Começando

Siga estas instruções para configurar e executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

Você precisará ter o Node.js (versão 18.x ou superior) e um gerenciador de pacotes como o npm instalados em sua máquina.

### Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/gustavomotamacedo/lp-fhnet-telecom.git
    cd lp-fhnet-telecom
    ```

2. **Instale as dependências:**
    O projeto utiliza `npm ci` para uma instalação limpa e consistente, conforme definido no fluxo de trabalho de CI.

    ```bash
    npm ci
    ```

    Ou, se preferir, use `npm install`:

    ```bash
    npm install
    ```

3. **Execute o servidor de desenvolvimento:**
    Para iniciar o projeto em modo de desenvolvimento, execute o seguinte comando:

    ```bash
    npm run dev
    ```

    Abra [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080) (ou a porta indicada no seu terminal) para visualizar a aplicação no navegador.

4. **Linting:**
    Para verificar a qualidade do código e executar o linter:

    ```bash
    npm run lint
    ```

5. **Build de produção:**
    Para criar uma versão otimizada do projeto para produção:

    ```bash
    npm run build
    ```

    Os arquivos da build serão gerados no diretório `dist/`.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=gustavomotamacedo/lp-fhnet-telecom/lp-fhnet-telecom-main/LICENSE) para mais detalhes.