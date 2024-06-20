package com.example.aula20_06estruturaderepetio;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.method.Touch;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Scanner;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void gerar(View view){
        EditText num = findViewById(R.id.editTextText_num);
        TextView text = findViewById(R.id.textView_resultado);
        int valor = 0;

        do{
            valor = Integer.parseInt(num.getText().toString());
            if (valor < 0){
                Toast.makeText(this, "Insira um número válido!", Toast.LENGTH_LONG).show();
            }else{
                String num_int = String.valueOf(valor);
                text.setText("O seu número escolhido foi: " + num_int);
            }
        }while (valor <= 0);
    }
    public void tela_2(View view){
        Intent intent = new Intent(this, MainActivity2.class);
        startActivity(intent);
    }
}