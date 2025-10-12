//A função debounce recebe uma funcao e um delay
//Seu objetivo é só executar a função passada após esse delay
//Usada principalmente para evitar requisições repetidas ou muito frequentes em apis
//(como em campos de buscar em texto, por exemplo)

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
) {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (...args: Parameters<T>): void {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
  }
}
