package com.example.prova1calculadora;

import static java.lang.Double.sum;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    //Começo do Código da Adição
    public void soma(View view) {
        EditText valor1 = findViewById(R.id.editTextNumberDecimal_Valor1);
        EditText valor2 = findViewById(R.id.editTextNumberDecimal_Valor2);

        double soma = 0;

        if ((valor1.getText().toString().isEmpty()) || (valor2.getText().toString().isEmpty())) {
            Toast.makeText(this, "Preencha todos os Campos!!!", Toast.LENGTH_LONG).show();
        } else {
            double valor1_1 = 0;
            valor1_1 = Double.parseDouble(valor1.getText().toString());
            double valor2_1 = 0;
            valor2_1 = Double.parseDouble(valor2.getText().toString());

            if (valor1_1 == 0 && valor2_1 == 0) {
                Toast.makeText(this, "Seus Dados Estão Inválidos!!!", Toast.LENGTH_LONG).show();
            } else {
                soma = sum(valor1_1, valor2_1);

                if (Double.isNaN(soma)) {
                    soma = 0;
                }
                String resultadosoma = String.valueOf(soma);

                TextView txtsoma = findViewById(R.id.resultado);

                txtsoma.setText(resultadosoma);
            }
        }
    }
    public double sum(double x, double y){
        double resultado = x + y;
        return resultado;
    }
    //Fim do Código da Adição
    //Começo do Código de Subtração
    public void subtracao(View view) {
        EditText valor1 = findViewById(R.id.editTextNumberDecimal_Valor1);
        EditText valor2 = findViewById(R.id.editTextNumberDecimal_Valor2);

        double subtracao = 0;

        if ((valor1.getText().toString().isEmpty()) || (valor2.getText().toString().isEmpty())) {
            Toast.makeText(this, "Preencha todos os Campos!!!", Toast.LENGTH_LONG).show();
        } else {
            double valor1_1 = 0;
            valor1_1 = Double.parseDouble(valor1.getText().toString());
            double valor2_1 = 0;
            valor2_1 = Double.parseDouble(valor2.getText().toString());

            if (valor1_1 == 0 && valor2_1 == 0) {
                Toast.makeText(this, "Seus Dados Estão Inválidos!!!", Toast.LENGTH_LONG).show();
            } else {
                subtracao = sub(valor1_1, valor2_1);

                if (Double.isNaN(subtracao)) {
                    subtracao = 0;
                }
                String resultadosub = String.valueOf(subtracao);

                TextView txtsub = findViewById(R.id.resultado);

                txtsub.setText(resultadosub);
            }
        }
    }
    public double sub(double x, double y){
        double resultado = x - y;
        return resultado;
    }
    //Fim do Código de Subtração
    //Começo do Código de Multiplicação
    public void multplicacao(View view) {
        EditText valor1 = findViewById(R.id.editTextNumberDecimal_Valor1);
        EditText valor2 = findViewById(R.id.editTextNumberDecimal_Valor2);

        double multiplicacao = 0;

        if ((valor1.getText().toString().isEmpty()) || (valor2.getText().toString().isEmpty())) {
            Toast.makeText(this, "Preencha todos os Campos!!!", Toast.LENGTH_LONG).show();
        } else {
            double valor1_1 = 0;
            valor1_1 = Double.parseDouble(valor1.getText().toString());
            double valor2_1 = 0;
            valor2_1 = Double.parseDouble(valor2.getText().toString());

            if (valor1_1 == 0 && valor2_1 == 0) {
                Toast.makeText(this, "Seus Dados Estão Inválidos!!!", Toast.LENGTH_LONG).show();
            } else {
                multiplicacao = multiply(valor1_1, valor2_1);

                if (Double.isNaN(multiplicacao)) {
                    multiplicacao = 0;
                }
                String resultadomultiply = String.valueOf(multiplicacao);

                TextView txtmultiply = findViewById(R.id.resultado);

                txtmultiply.setText(resultadomultiply);
            }
        }
    }
    public double multiply(double x, double y){
        double resultado = x * y;
        return resultado;
    }
    //Fim do Código de Multiplicação
    //Começo do Código de Divisão
    public void divisao(View view) {
        EditText valor1 = findViewById(R.id.editTextNumberDecimal_Valor1);
        EditText valor2 = findViewById(R.id.editTextNumberDecimal_Valor2);

        double divisao = 0;
        double resto = 0;

        if ((valor1.getText().toString().isEmpty()) || (valor2.getText().toString().isEmpty())) {
            Toast.makeText(this, "Preencha todos os Campos!!!", Toast.LENGTH_LONG).show();
        } else {
            double valor1_1 = 0;
            valor1_1 = Double.parseDouble(valor1.getText().toString());
            double valor2_1 = 0;
            valor2_1 = Double.parseDouble(valor2.getText().toString());

            if (valor1_1 == 0 && valor2_1 == 0) {
                Toast.makeText(this, "Seus Dados Estão Inválidos!!!", Toast.LENGTH_LONG).show();
            } else {
                divisao = divide(valor1_1, valor2_1);
                resto = rest(valor1_1, valor2_1);

                if (Double.isNaN(divisao) || Double.isNaN(resto)) {
                    divisao = 0;
                    resto = 0;
                }
                String resultadodivide = String.valueOf(divisao);
                String resultadorest = String.valueOf(resto);

                TextView txtdivide = findViewById(R.id.resultado);
                TextView txtrest = findViewById(R.id.resto);

                txtdivide.setText(resultadodivide);
                txtrest.setText(resultadorest);
            }
        }
    }
    public double divide(double x, double y){
        double resultado = x / y;
        return resultado;
    }
    public double rest( double x, double y){
        double resultado = x % y;
        return  resultado;
    }
    //Fim do Código da Divisão
}