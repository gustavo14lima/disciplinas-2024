package com.example.prova5somapar_impar;

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
        EditText numero = findViewById(R.id.editTextNumberDecimal);
        int valor = Integer.parseInt(String.valueOf(numero.getText()));
        int soma = 0;

        TextView resultado_impar = findViewById(R.id.textView_impar);
        String resultado_i = "";

        TextView resultado_par = findViewById(R.id.textView_par);
        String resultado_p = "";

        if(valor == 0){
            Toast.makeText(this, "Por favor, Insira o seu Número", Toast.LENGTH_LONG).show();
        }
        else {
            for (int i = 0; i <= valor; i++) {
                soma += i;
            if (i % 2 == 0) {
                String temp = resultado_p;
                resultado_p = temp + "\n";
                    resultado_p += i + " ";

            } else {
                String temp = resultado_i;
                resultado_i = temp + "\n";
                    resultado_i += i + " ";
            }
        }
    }
        resultado_par.setText(resultado_p);
        resultado_impar.setText(resultado_i);
    }
}