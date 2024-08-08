package com.example.apkprova1;

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

import org.w3c.dom.Text;

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
    public void calcular (View view){
        TextView resultadoConta = findViewById(R.id.resultado);
        TextView dados = findViewById(R.id.editTextNumberDecimal);
        String dadosUsuario = dados.getText().toString();
        int dadosNum = Integer.parseInt(dadosUsuario);

        if(dadosUsuario.isEmpty()) {
            Toast.makeText(this, "Escolha um Número, O Campo está vazio! ", Toast.LENGTH_LONG).show();
        }else{
            if (dadosNum % 2 == 0){
                resultadoConta.setText("O número " + dadosNum + " é Par!!!");
            }else{
                resultadoConta.setText("O número " + dadosNum + " é Impar!!!");
            }
        }
    }
}