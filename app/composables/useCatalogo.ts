import { categorias, productos } from '~/data/catalogo';
import type { Categoria, Producto } from '~/types/catalogo';

export function useCategorias(): Categoria[] {
  return categorias;
}

export function useCategoria(slug: string): Categoria | undefined {
  return categorias.find((c) => c.slug === slug);
}

export function useCategoriaPorId(id: string): Categoria | undefined {
  return categorias.find((c) => c.id === id);
}

export function useProductos(): Producto[] {
  return productos;
}

export function useProductosPorSubcategoria(
  subcategoriaId: string,
): Producto[] {
  return productos.filter((p) => p.subcategoriaId === subcategoriaId);
}

export function useProducto(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}

export function useProductosDestacados(): Producto[] {
  return productos.filter((p) => p.destacado);
}

export function useProductosRelacionados(producto: Producto): Producto[] {
  return productos.filter(
    (p) => p.subcategoriaId === producto.subcategoriaId && p.id !== producto.id,
  );
}
