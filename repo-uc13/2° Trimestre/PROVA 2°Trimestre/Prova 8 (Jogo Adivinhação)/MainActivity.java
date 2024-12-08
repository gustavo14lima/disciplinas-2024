package com.example.prova8adivinhacao;

import static java.lang.Math.abs;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void verificar (View view){
        EditText num = findViewById(R.id.editTextNumberDecimal);
        TextView dica = findViewById(R.id.dica);

        int numero = 1 + (int)(Math.random() * 100);

        int num_int = Integer.parseInt(num.getText().toString());

        if(num_int == numero){
            dica.setText("Parabêns!!! Você Acertou! O número correto era " + numero);
        } else if (Math.abs(num_int - numero) <= 10) {
            dica.setText("Wow... O seu Número está Bastante perto...");
        } else if (Math.abs(num_int - numero) <= 20) {
            dica.setText("Bom... O número está perto... Fique atento!");
        } else if (Math.abs(num_int - numero) <= 5) {
            dica.setText("WOW... O NÚMERO ESTÁ MUITO PERTO!!! VOCÊ IRÁ ACHAR ELE!!!");
        }
        else{
            dica.setText("O número está longe ainda...");
        }
    }
}