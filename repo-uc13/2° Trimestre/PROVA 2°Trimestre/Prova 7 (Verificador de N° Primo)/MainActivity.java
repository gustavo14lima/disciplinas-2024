package com.example.prova7numerosprimos;

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

    public void verificar(View view) {
        EditText primo = findViewById(R.id.editTextNumberDecimal);
        int valor = Integer.parseInt(String.valueOf(primo.getText()));

        TextView resultado = findViewById(R.id.Resultado);


        if (primo.getText().toString().isEmpty()) {
            Toast.makeText(this, "Por favor, Preencha o Campo!", Toast.LENGTH_LONG).show();
        } else {
            if (verificador(valor)) {
                resultado.setText("O seu Número " + valor + " é Primo!");
            } else {
                resultado.setText("O seu Número " + valor + " não é Primo!");
            }
        }

    }

    public boolean verificador(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}