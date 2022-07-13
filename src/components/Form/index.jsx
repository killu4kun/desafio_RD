import React, { useState } from "react";
import { Content, Form, Heading, InputContainer, Label } from "./styles";
import eyeIcon from "../../assets/close.png";
import InputMask from "react-input-mask";

export default function Forms(props) {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [url, setUrl] = useState("");

  const [status, setStatus] = useState(true);

  function confirmPasswordIsEqual(password, confirm) {
    if (password === confirm) return true;
    return alert("passwords não batem");
  }

  function checkUrlisValid(url) {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(url);
  }

  function checkEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  }

  return (
    <Form
      method="post"
      action="https://app.rdstation.com.br/signup"
      onSubmit={(e) => {
        e.preventDefault();
        confirmPasswordIsEqual(password, confirmPassword);
        checkUrlisValid(url);
        checkEmail(email);
        setStatus(false);
      }}
    >
      <Heading>
        <h4>Comece seus 10 dias de teste grátis do RD Station Marketing!</h4>
        <subtitle>Não precisa cadastrar cartão de crédito. 😉</subtitle>
      </Heading>
      {status ? (
        <Content>
          <InputContainer>
            <Label>Diga, qual seu nome?</Label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Insira seu nome"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Seu email de trabalho</Label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu e-mail"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Seu telefone</Label>
            <InputMask
              type="text"
              mask="(99)99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Seu cargo de ocupação</Label>
            <select required>
              <option disabled>Selecione seu cargo</option>
              {array.map((roles, index) => (
                <option key={index}>{roles}</option>
              ))}
            </select>
          </InputContainer>
          <InputContainer>
            <Label>Crie uma senha</Label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src={eyeIcon}
              alt="olho"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Confirme sua senha</Label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <img
              src={eyeIcon}
              alt="olho"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
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
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <div className="radio-div">
              <input name="endereço" type="radio" required />
              <label>Ainda não tenho site</label>
            </div>
          </InputContainer>
          <div className="terms-div">
            <p>
              ⚫Ao criar minha conta estou de acordo com os{" "}
              <a
                target="_blank"
                href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/"
              >
                termos de uso
              </a>{" "}
              do software e{" "}
              <a
                target="_blank"
                href="https://legal.rdstation.com/pt/privacy-policy/"
              >
                política de privacidade
              </a>
              .
            </p>
            <p>
              ⚫Ao preencher o formulário, concordo em receber comunicações de
              acordo com meus interesses.
            </p>
            <p>
              ⚫*Você pode alterar suas permissões de comunicação a qualquer
              tempo.
            </p>
          </div>
          <button type="submit">CRIAR MINHA CONTA</button>
        </Content>
      ) : (
        <p>"Obrigado! pelo feedback, entraremos em contato"</p>
      )}
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
