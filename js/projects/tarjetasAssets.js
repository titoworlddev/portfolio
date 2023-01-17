const getJSON = async url => {
  try {
    return await fetch(url).then(res => res.json());
  } catch (e) {
    return {};
  }
};

// estoy exportando la data al hacer uso del await antes de getJSON, si no lo hago, no puedo usar la data en los otros archivos porque exporta una promesa y no la data en sí ya que no se ha resuelto la promesa
export const tarjetasAssets = await getJSON('/assets/json/tarjetaAssets.json');
