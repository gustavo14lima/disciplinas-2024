package com.example.prova3tabuada;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void calcular (View view){
        EditText numero = findViewById(R.id.editTextNumberDecimal);
        int valor_numero = Integer.parseInt(String.valueOf(numero.getText()));

        TextView resultado = findViewById(R.id.resultado);
        String tabuada = "";

        if (numero.getText().toString().isEmpty()){
            Toast.makeText(this, "Por Favor, insira um número!", Toast.LENGTH_LONG).show();
        }
        else{
            for (int i = 0; i <= 10; i++){
                String temp = tabuada;
                tabuada = temp +"\n"
                        + valor_numero + " x " + i + " = " + (valor_numero * i);
            }
            resultado.setText(tabuada);
        }
    }
}