export const steps = [{}, click, click, click];

function click(container: Element) {
  container.querySelector("script")!.click();
}
