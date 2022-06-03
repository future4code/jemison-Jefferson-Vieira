´´´function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let qtdVezes = 0
  for(i=0 ; i< arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      qtdVezes++  }  
  }
      if (qtdVezes > 0  )
    {return `O número ${numeroEscolhido} aparece ${qtdVezes}x`
    } else {
      return "Número não encontrado"
    } 
  }´´´ 