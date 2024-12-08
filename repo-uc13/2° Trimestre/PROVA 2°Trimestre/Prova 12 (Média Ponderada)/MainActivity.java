package com.example.prova12mdiaponderada;

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
        EditText media1 = findViewById(R.id.editTextNumberDecimal);
        EditText media2 = findViewById(R.id.editTextNumberDecimal2);
        EditText media3 = findViewById(R.id.editTextNumberDecimal3);
        EditText peso1 = findViewById(R.id.editTextNumberDecimal4);
        EditText peso2 = findViewById(R.id.editTextNumberDecimal5);
        EditText peso3 = findViewById(R.id.editTextNumberDecimal6);

        TextView resultado = findViewById(R.id.resultado);

        String media1_text = media1.getText().toString();
        String media2_text = media2.getText().toString();
        String media3_text = media3.getText().toString();
        String peso1_text = peso1.getText().toString();
        String peso2_text = peso2.getText().toString();
        String peso3_text = peso3.getText().toString();

        if (media1_text.isEmpty() || media2_text.isEmpty() || media3_text.isEmpty() || peso1_text.isEmpty() || peso2_text.isEmpty() || peso3_text.isEmpty()){
            Toast.makeText(this, "Por Favor, Preencha todos os Campos Necessários!", Toast.LENGTH_LONG).show();
        }else{
            int media1_int = Integer.parseInt(media1_text);
            int media2_int = Integer.parseInt(media2_text);
            int media3_int = Integer.parseInt(media3_text);
            int peso1_int = Integer.parseInt(peso1_text);
            int peso2_int = Integer.parseInt(peso2_text);
            int peso3_int = Integer.parseInt(peso3_text);

            double ponderada = Integer.parseInt(String.valueOf(((media1_int * peso1_int) + (media2_int * peso2_int) + (media3_int * peso3_int)) / (peso1_int + peso2_int + peso3_int)));
            resultado.setText("Sua Média Ponderada é " + ponderada);
        }
    }
}