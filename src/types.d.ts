declare module "*.scss" {
    const styles: { [className: string]: string };
    // eslint-disable-next-line no-restricted-exports
    export default styles;
}
