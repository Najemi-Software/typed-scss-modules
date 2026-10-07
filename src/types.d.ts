declare module "*.scss" {
    const styles: { [className: string]: string };
    // oxlint-disable-next-line eslint/no-restricted-exports
    export default styles;
}
