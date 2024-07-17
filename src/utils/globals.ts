export function createArray(cantidad: number): number[] {
	return Array.from({ length: cantidad }, (_, i) => i + 1);
}
