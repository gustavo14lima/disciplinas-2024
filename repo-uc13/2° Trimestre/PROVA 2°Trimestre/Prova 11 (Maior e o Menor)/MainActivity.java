package com.example.prova11maior_menor;

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
    public void calcular (View view){
        EditText num1 = findViewById(R.id.editTextNumberDecimal);
        EditText num2 = findViewById(R.id.editTextNumberDecimal2);
        EditText num3 = findViewById(R.id.editTextNumberDecimal3);
        EditText num4 = findViewById(R.id.editTextNumberDecimal4);
        EditText num5 = findViewById(R.id.editTextNumberDecimal5);

        String num1Text = num1.getText().toString();
        String num2Text = num2.getText().toString();
        String num3Text = num3.getText().toString();
        String num4Text = num4.getText().toString();
        String num5Text = num5.getText().toString();

        if (num1Text.isEmpty() || num2Text.isEmpty() || num3Text.isEmpty() || num4Text.isEmpty() || num5Text.isEmpty()) {
            Toast.makeText(this, "Por Favor, Preencha todos os Campos!", Toast.LENGTH_LONG).show();
        }else {

            int[] numeros = new int[5];
            numeros[0] = Integer.parseInt(num1Text);
            numeros[1] = Integer.parseInt(num2Text);
            numeros[2] = Integer.parseInt(num3Text);
            numeros[3] = Integer.parseInt(num4Text);
            numeros[4] = Integer.parseInt(num5Text);

            int maior = numeros[0];
            int menor = numeros[0];

            for (int i = 1; i < numeros.length; i++) {
                if (numeros[i] > maior) {
                    maior = numeros[i];
                }
                if (numeros[i] < menor) {
                    menor = numeros[i];
                }
            }

            TextView resultado = findViewById(R.id.resultado);
            resultado.setText("O seu maior número é " + maior + " e o seu menor número é " + menor);
        }
    }
}