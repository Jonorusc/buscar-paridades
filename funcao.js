function paridadeEntreObjetos(bancoBase = [{}], obj = {}) {
  let contador = 0
  let criterios = []
  let resultado = []

  // pegando as chaves do obj que irão ser usadas para comparar com o objeto base
  Object.entries(obj).forEach(([chave, valor]) => {
    if (valor === null) return;
    criterios.push({
      chave,
      valor: [valor], 
    })
  })

  // se não houver nenhum critério para buscar, então termina o trabalho
  if (criterios.length === 0) return

  // checa se o objeto tem o mesmo valor do criterio
  const buscarParidade = (banco) => {
    contador = 0;
    criterios.forEach((criterio) => {
      if (criterio.valor.indexOf(banco[criterio.chave]) > -1) contador++
    })
    return contador === criterios.length
  }

  bancoBase.forEach((banco) => {
    if (buscarParidade(banco)) resultado.push(banco)
  })

  console.log(resultado)
}
