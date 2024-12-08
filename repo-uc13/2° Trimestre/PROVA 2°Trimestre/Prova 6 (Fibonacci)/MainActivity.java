package com.example.prova6fibonacci;

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
    public void sequencia (View view){
        EditText num = findViewById(R.id.editTextNumberDecimal);
        TextView resultado = findViewById(R.id.resultado);

        String num_text = num.getText().toString();
        int num_int = Integer.parseInt(num_text);

        if(num_text.isEmpty()){
            Toast.makeText(this, "Por Favor, preencha todos os Campos!", Toast.LENGTH_LONG).show();
        }else{
            if (num_int <= 0){
                Toast.makeText(this, "Por Favor, coloque um valor positivo maior que zero!", Toast.LENGTH_LONG).show();
            }else{
                StringBuilder fibonacci_seq = new StringBuilder();
                int a = 0, b = 1;

                for(int i =0; i < num_int; i++){
                    fibonacci_seq.append(a).append(" ");
                    int prox = a + b;
                    a = b;
                    b = prox;
                }
                resultado.setText("A Sequência do Fibonacci, até o " + num_int + "° número é a seguinte sequência: " + fibonacci_seq);
            }
        }
    }
}