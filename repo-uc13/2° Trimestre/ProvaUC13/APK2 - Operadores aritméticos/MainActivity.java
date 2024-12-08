package com.example.apkprova2;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
    public void adicao(View view){
        EditText dado1 = findViewById(R.id.editTextNumberDecimal);
        EditText dado2 = findViewById(R.id.editTextNumberDecimal2);
        String num1 = dado1.getText().toString();
        String num2 = dado2.getText().toString();

        int int1 = Integer.parseInt(num1);
        int int2 = Integer.parseInt(num2);

        TextView resultado = findViewById(R.id.resultado);

        if(num1.isEmpty() || num2.isEmpty()){
            Toast.makeText(this, "Algum Campo não está preenchido, por favor, preencha todos os campos", Toast.LENGTH_LONG).show();
        }else{
            int adicao = Integer.parseInt(String.valueOf(int1 + int2));
            resultado.setText("Seu resultado é: " + adicao);
        }
    }
    public void subtracao(View view){
        EditText dado1 = findViewById(R.id.editTextNumberDecimal);
        EditText dado2 = findViewById(R.id.editTextNumberDecimal2);
        String num1 = dado1.getText().toString();
        String num2 = dado2.getText().toString();

        int int1 = Integer.parseInt(num1);
        int int2 = Integer.parseInt(num2);

        TextView resultado = findViewById(R.id.resultado);

        if(num1.isEmpty() || num2.isEmpty()){
            Toast.makeText(this, "Algum Campo não está preenchido, por favor, preencha todos os campos", Toast.LENGTH_LONG).show();
        }else{
            int subtracao = Integer.parseInt(String.valueOf(int1 - int2));
            resultado.setText("Seu resultado é: " + subtracao);
        }
    }
    public void multiplicacao (View view){
        EditText dado1 = findViewById(R.id.editTextNumberDecimal);
        EditText dado2 = findViewById(R.id.editTextNumberDecimal2);
        String num1 = dado1.getText().toString();
        String num2 = dado2.getText().toString();

        int int1 = Integer.parseInt(num1);
        int int2 = Integer.parseInt(num2);

        TextView resultado = findViewById(R.id.resultado);

        if(num1.isEmpty() || num2.isEmpty()){
            Toast.makeText(this, "Algum Campo não está preenchido, por favor, preencha todos os campos", Toast.LENGTH_LONG).show();
        }else{
            int multiplicacao = Integer.parseInt(String.valueOf(int1 * int2));
            resultado.setText("Seu resultado é: " + multiplicacao);
        }
    }
    public void divisao(View view){
        EditText dado1 = findViewById(R.id.editTextNumberDecimal);
        EditText dado2 = findViewById(R.id.editTextNumberDecimal2);
        String num1 = dado1.getText().toString();
        String num2 = dado2.getText().toString();

        int int1 = Integer.parseInt(num1);
        int int2 = Integer.parseInt(num2);

        TextView resultado = findViewById(R.id.resultado);

        if(num1.isEmpty() || num2.isEmpty()){
            Toast.makeText(this, "Algum Campo não está preenchido, por favor, preencha todos os campos", Toast.LENGTH_LONG).show();
        }else{
            int divisao = Integer.parseInt(String.valueOf(int1 / int2));
            resultado.setText("Seu resultado é: " + divisao);
        }
    }
    public void modulo (View view){
        EditText dado1 = findViewById(R.id.editTextNumberDecimal);
        EditText dado2 = findViewById(R.id.editTextNumberDecimal2);
        String num1 = dado1.getText().toString();
        String num2 = dado2.getText().toString();

        int int1 = Integer.parseInt(num1);
        int int2 = Integer.parseInt(num2);

        TextView resultado = findViewById(R.id.resultado);

        if(num1.isEmpty() || num2.isEmpty()){
            Toast.makeText(this, "Algum Campo não está preenchido, por favor, preencha todos os campos", Toast.LENGTH_LONG).show();
        }else{
            int modulo = Integer.parseInt(String.valueOf(int1 % int2));
            resultado.setText("Seu resultado é: " + modulo);
        }
    }
}