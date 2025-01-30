export type Comportamiento = 'bueno' | 'malo';

export type Nino= {
  nombre: string;
  comportamiento: Comportamiento;
  ubicacion: string; // ID de la ubicación
}

export type Ubicacion= {
  nombre: string;
  coordenadas: number;
  numNinosBuenos: number;
}