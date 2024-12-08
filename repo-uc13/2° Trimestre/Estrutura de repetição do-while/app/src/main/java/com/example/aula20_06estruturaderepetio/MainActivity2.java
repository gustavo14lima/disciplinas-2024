package com.example.aula20_06estruturaderepetio;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
    }
    public void gerar2(View view){
        EditText num = findViewById(R.id.editTextText_num2);
        TextView text = findViewById(R.id.textView_resultado2);
        int secretNumber = 6;
        int guess;

        do{
            String input = num.getText().toString();
            if(!input.isEmpty()){
                guess = Integer.parseInt(input);
                if(guess == secretNumber){
                    text.setText("Parabéns! Você Acertou o Número! Que é: " + secretNumber);
                    break;
                }
                else{
                    text.setText("Número Errado... Tente Novamente!");
                    break;
                }
            }
            else{
                text.setText("Por favor, isnira um número");
                break;
            }
        }while(true);
    }
    public void tela_1(View view){
        Intent intent = new Intent(this, MainActivity2.class);
        startActivity(intent);
    }
}