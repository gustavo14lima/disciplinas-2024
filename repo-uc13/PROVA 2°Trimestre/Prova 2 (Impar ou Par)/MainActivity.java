package com.example.prova2par_impar;

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
    public void verificar (View view){
        EditText numero = findViewById(R.id.editTextNumberDecimal_Numero);
        if(numero.getText().toString().isEmpty()){
            Toast.makeText(this, "Insira Valores Validos", Toast.LENGTH_LONG).show();
        }
        else{
            int numeroint = Integer.parseInt(numero.getText().toString());
            if(numeroint % 2 == 0){
                TextView resultado = findViewById(R.id.Resultado);
                resultado.setText("O seu número " + numeroint + " é par!");
            }
            else{
                TextView resultado = findViewById(R.id.Resultado);
                resultado.setText("O seu número " + numeroint + " é impar!");
            }
        }
    }
}