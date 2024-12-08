package com.example.prova4mdia;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void calcular (View view){
        EditText quantidade = findViewById(R.id.editTextNumberDecimal);
        LinearLayout layout_num = findViewById(R.id.linearLayoutNumeros);
        TextView resultado = findViewById(R.id.media);
        Button btn_media = findViewById(R.id.button2);

        String str_quantidade = quantidade.getText().toString();

        if(str_quantidade.isEmpty()){
            Toast.makeText(this, "Por favor, insira o número de entradas!", Toast.LENGTH_LONG).show();
        }
        else{
            int num_quantidade = Integer.parseInt(str_quantidade);
            layout_num.removeAllViews();

            for (int i = 0; i < num_quantidade; i++){
                EditText startText = new EditText(this);
                startText.setHint("Número " + (i + 1));
                layout_num.addView(startText);
            }
            layout_num.setVisibility(View.VISIBLE);
            btn_media.setVisibility(View.VISIBLE);
        }
    }
    public void cal_media (View view){
        EditText quantidade = findViewById(R.id.editTextNumberDecimal);
        LinearLayout layout_num = findViewById(R.id.linearLayoutNumeros);
        TextView resultado = findViewById(R.id.media);
        Button btn_media = findViewById(R.id.button2);

        int num_quantidade = layout_num.getChildCount();
        double soma = 0;

        for (int i = 0; i < num_quantidade; i++){
            EditText starText = (EditText) layout_num.getChildAt(i);
            String str_quantidade = starText.getText().toString();

            if(str_quantidade.isEmpty()){
                Toast.makeText(this, "Por favor, preencha todos os campos!", Toast.LENGTH_LONG).show();
            }
            else{
                double num = Double.parseDouble(str_quantidade);
                soma += num;
            }
        }
        double media = soma / num_quantidade;
        resultado.setText("A média de todos os Números é: " + media);
    }
}