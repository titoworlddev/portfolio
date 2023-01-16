const getJSON = async url => {
  try {
    return await (await fetch(url)).json();
  } catch (e) {
    return {};
  }
};

// estoy exportando la data al hacer uso del await antes de getJSON, si no lo hago, no puedo usar la data en los otros archivos porque exporta una promesa y no la data en sí
export const tarjetasAssets = await getJSON('/assets/json/tarjetaAssets.json');
