export interface IndicatorFormat {
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}

export interface DataFormat {
    version: string;
    autor: string;
    fecha: string;
    uf: IndicatorFormat;
    ivp: IndicatorFormat;
    dolar: IndicatorFormat;
    dolar_intercambio: IndicatorFormat;
    euro: IndicatorFormat;
    ipc: IndicatorFormat;
    utm: IndicatorFormat;
    imacec: IndicatorFormat;
    tpm: IndicatorFormat;
    libra_cobre: IndicatorFormat;
    tasa_desempleo: IndicatorFormat;
    bitcoin: IndicatorFormat;
}