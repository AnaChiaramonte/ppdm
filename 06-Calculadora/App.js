// Calculadora React Native - versão comentada
// Comentários em Português para quem está começando

import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

// ------------------------------------------------------------------
// Este arquivo cria um pequeno app de calculadora usando React Native.
// Vou comentar linha a linha para você entender o que cada parte faz.
// ------------------------------------------------------------------

export default function App() {
  // useState cria "caixinhas" que guardam valores e quando mudam
  // o React Native redesenha a tela para mostrar a nova informação.
  // Aqui criamos duas caixinhas:
  // - valorDigitado: guarda a expressão atual que o usuário está digitando (ex: "12 + 5")
  // - resultado: guarda a expressão anterior (ou uma mensagem de erro)
  const [valorDigitado, setValorDigitado] = useState('');
  const [resultado, setResultado] = useState('');

  // handlePress é chamada quando o usuário toca em um botão.
  // Ela recebe o valor do botão e concatena (junta) ao que já existe.
  // Exemplo: se valorDigitado for "1" e o usuário apertar "+",
  // agora valorDigitado ficará "1 + "
  const handlePress = (value) => {
    // prev é o valor anterior — usamos a função para garantir que
    // sempre atualizamos com base no valor mais recente.
    setValorDigitado((prev) => prev + value);
  };

  // igual() tenta calcular o que está em valorDigitado.
  // ATENÇÃO: este código usa eval, que executa código JavaScript
  // diretamente. Em apps reais isso pode ser perigoso se a expressão
  // vier de fontes não confiáveis (risco de injeção). Para apps
  // publicados prefira bibliotecas como 'mathjs' ou um parser próprio.
  const igual = () => {
    try {
      // eval interpreta a string como uma expressão JS (ex: "1 + 2 * 3").
      const calcResult = eval(valorDigitado);

      // guardamos a expressão original dentro de resultado (para mostrar)
      setResultado(valorDigitado);

      // substituímos o campo de entrada pelo resultado calculado (em texto)
      setValorDigitado(calcResult.toString());
    } catch (error) {
      // se der algum erro (ex: expressão inválida), mostramos "Erro" no campo de resultado
      setResultado('Erro');
    }
  };

  // limpa tanto o input quanto o resultado
  const handleClear = () => {
    setResultado('');
    setValorDigitado('');
  };

  // ----------------------------------------------------------------
  // JSX: a parte que descreve o que aparecerá na tela (a interface)
  // ----------------------------------------------------------------
  return (
    // Container principal. Observação: você importou SafeAreaView mas
    // no código original usou <View>. O SafeAreaView protege conteúdo
    // de áreas cortadas em celulares com notch. Aqui mantive a estrutura
    // original, mas você pode substituir <View> por <SafeAreaView>.
    <View style={styles.container}>
      {/* área de display: onde mostramos resultado e o que o usuário digitou */}
      <View style={styles.display}>
        {/* resultado (expressão anterior ou mensagem) */}
        <Text style={styles.resultText}>{resultado}</Text>

        {/* input atual: o que o usuário está digitando */}
        <Text style={styles.inputText}>{valorDigitado}</Text>
      </View>

      {/* botões da calculadora */}
      <View style={styles.buttons}>
        {/* cada linha de botões é um <View style={styles.row}> */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>

          {/* operador de divisão: o valor real passado para a expressão é ' / ' */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(' / ')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>

          {/* operador de multiplicação (passa ' * ' para a expressão) */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(' * ')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>

          {/* operador de subtração */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(' - ')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          {/* botão limpar */}
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>

          {/* botão decimal: atenção à diferença entre o que aparece (',') e o que é
              passado para a expressão ('.'). No Brasil usamos vírgula visualmente,
              mas JavaScript espera ponto para números decimais. */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('.')}>
            <Text style={styles.buttonText}>,</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(' + ')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          {/* botão de igual ocupa a linha inteira (apenas um botão na linha) */}
          <TouchableOpacity style={styles.button} onPress={igual}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// -------------------- ESTILOS --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    justifyContent: 'flex-end', // empurra o conteúdo para baixo (como calculadora)
    padding: 20,
    backgroundColor: '#222',
  },
  display: {
    marginBottom: 20,
    padding: 20,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'flex-end', // alinha o texto à direita (como em calculadoras)
    borderRadius: 10,
    backgroundColor: '#333',
  },
  inputText: {
    fontSize: 28,
    color: '#fff',
  },
  resultText: {
    fontSize: 24,
    color: '#aaa',
    fontWeight: 'bold',
  },
  buttons: {
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row', // coloca os botões em linha
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1, // cada botão ocupa o mesmo espaço horizontal
    alignItems: 'center',
    margin: 5,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#444',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

// -------------------- NOTAS FINAIS / MELHORIAS --------------------
// - Segurança: evite usar eval em produção. Use 'mathjs' (evaluate) ou implemente
//   um parser simples para números e operadores.
// - UX: implemente tecla de apagar (backspace), formatação de número (milhares)
//   e limite de caracteres.
// - Localização: se quiser que o usuário digite vírgula, transforme a string
//   antes de avaliar: expression = valorDigitado.replace(/,/g, '.');
// - Validação: impeça entradas inválidas como "++" ou começar com um operador.
// ------------------------------------------------------------------
