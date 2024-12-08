package com.example.prova10fatorial;

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
    public void calcular(View view){
        EditText valor_num = findViewById(R.id.editTextNumberDecimal);
        TextView resultado = findViewById(R.id.resultado);

        if(valor_num.getText().toString().isEmpty()){
            Toast.makeText(this, "Por Favor, Preencha Todos os Campos", Toast.LENGTH_LONG).show();
        }else{
            int numero = Integer.parseInt(valor_num.getText().toString());
            if (numero <= 0){
                Toast.makeText(this, "Por Favor, Insira um Valor Positivo!", Toast.LENGTH_LONG).show();
            }else{
                long fatorial = 1;
                for (int i = 1; i<= numero; i++){
                fatorial *= i;
                }
                resultado.setText("O Resultado do " + numero + " em fatorial é " + fatorial);
            }
        }
    }
}