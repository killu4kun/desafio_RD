import React from "react";
import { Form, Heading, InputContainer, Label } from "./styles";

export default function Forms() {
  return (
    <Form>
      <Heading>
        <h4>Comece seus 10 dias de teste grátis do RD Station Marketing!</h4>
        <subtitle>Não precisa cadastrar cartão de crédito. 😉</subtitle>
      </Heading>
      <InputContainer>
        <Label>Diga, qual seu nome?</Label>
        <input type="text" placeholder="Insira seu nome" required />
      </InputContainer>
      <InputContainer>
        <Label>Seu email de trabalho</Label>
        <input type="text" placeholder="Insira seu e-mail" required />
      </InputContainer>
      <InputContainer>
        <Label>Seu telefone</Label>
        <input type="text" placeholder="Insira seu telefone com DDD" required />
      </InputContainer>
      <InputContainer>
        <Label>Seu cargo de ocupação</Label>
        <select>
          <option disabled>Selecione seu cargo</option>
          {array.map((roles, index) => (
            <option key={index}>{roles}</option>
          ))}
        </select>
      </InputContainer>
      <InputContainer>
        <Label>Crie uma senha</Label>
        <input type="text" required />
      </InputContainer>
      <InputContainer>
        <Label>Confirme sua senha</Label>
        <input type="text" required />
      </InputContainer>
      <InputContainer>
        <Label>Qual o site da sua empresa?</Label>
        <div className="radio-div">
          <input name="endereço" type="radio" required />
          <label>Meu site é</label>
        </div>
        <input
          type="text"
          required
          placeholder="Insira o endereço do seu site"
        />
        <div className="radio-div">
          <input name="endereço" type="radio" required />
          <label>Ainda não tenho site</label>
        </div>
      </InputContainer>
      <div className="terms-div">
        <p>
          ⚫Ao criar minha conta estou de acordo com os <a target='_blank' href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/">termos de uso</a> do
          software e <a target='_blank' href="https://legal.rdstation.com/pt/privacy-policy/">política de privacidade</a>.
        </p>
        <p>
          ⚫Ao preencher o formulário, concordo em receber comunicações de
          acordo com meus interesses.
        </p>
        <p>
          ⚫*Você pode alterar suas permissões de comunicação a qualquer tempo.
        </p>
      </div>
      <button type="submit">CRIAR MINHA CONTA</button>
    </Form>
  );
}

const array = [
  "Sócio(a) / CEO / Proprietário(a)",
  "Diretor(a) de Vendas",
  "Diretor(a) de Marketing",
  "Diretor(a) Outras Áreas",
  "Gerente de Marketing",
  "Gerente de Vendas",
  "Coordenador(a)/Supervisor(a) de Marketing",
  "Coordenador(a)/Supervisor(a) de Vendas",
  "Analista/Assistente de Marketing",
  "Analista/Assistente de Vendas",
  "Vendedor(a) / Executivo(a) de Contas",
  "Estudante",
  "Outros Cargos",
];
