package com.example.aula04_04variavel;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.WindowDecorActionBar;

import android.os.Bundle;
import android.text.method.Touch;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void verInt(View view) {
        EditText txtInt = findViewById(R.id.editTextInt);
        int inteiro = 0;
        inteiro = Integer.parseInt(txtInt.getText().toString());
        Toast.makeText(this, "Seu número inteiro é: "+inteiro, Toast.LENGTH_SHORT).show();
    }
    public void verDouble(View view) {
        EditText txtDouble = findViewById(R.id.editTextDouble);
        double decimal = 0;
        decimal = Double.parseDouble((txtDouble.getText().toString()));
        Toast.makeText(this, "Seu número decimal é: "+decimal, Toast.LENGTH_SHORT).show();
    }
    public void verString(View view) {
        EditText txtstring = findViewById(R.id.editTextString);
        String texto;
        texto = String.valueOf((txtstring.getText()));
        Toast.makeText(this, "Seu texto é: "+texto, Toast.LENGTH_SHORT).show();
    }
}
