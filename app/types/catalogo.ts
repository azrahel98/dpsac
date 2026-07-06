export interface Categoria {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  subcategorias: Subcategoria[];
}

export interface Subcategoria {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  categoriaId: string;
}

export interface Receta {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  ingredientes: string[];
  pasos: string[];
  tiempoPreparacion: string;
  dificultad: 'fácil' | 'media' | 'difícil';
}

export interface Badge {
  tipo: 'nuevo' | 'oferta' | 'mas_vendido';
  texto: string;
}

export interface Producto {
  id: string;
  sku: string;
  nombre: string;
  slug: string;
  descripcion: string;
  imagen: string;
  imagenesExtra: string[];
  categoriaId: string;
  subcategoriaId: string;
  destacado: boolean;
  badge?: Badge;
  recetas: Receta[];
  created_at: string;
}
