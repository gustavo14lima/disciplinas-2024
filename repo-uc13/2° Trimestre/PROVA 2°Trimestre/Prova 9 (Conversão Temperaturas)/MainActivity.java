package com.example.prova9conversaotemperatura;

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
    public void transformar (View view){
        EditText celsius = findViewById(R.id.editTextNumberDecimal);
        TextView kelvin = findViewById(R.id.kelvin);
        TextView faherenheit = findViewById(R.id.faherenheit);

        if(celsius.getText().toString().isEmpty()){
            Toast.makeText(this, "Insira Valores Válidos, Por favor", Toast.LENGTH_LONG).show();
        }
        else{
            double celsius_temp = Double.parseDouble(celsius.getText().toString());
            double kevin_temp = celsius_temp + 273.15;
            double faherenheit_temp = (celsius_temp * 9/5) + 32;

            kelvin.setText(String.format(String.valueOf(kevin_temp)));
            faherenheit.setText(String.format(String.valueOf(faherenheit_temp)));
        }
    }
}