export default function VariableTypes() {
    const numberVariable = 123;
    const floatingPointNumber = 234.345;
    const stringVariable = 'Hello World!';
    const booleanVariable = true;
    const isNumber = typeof numberVariable;
    const isString = typeof stringVariable;
    const isBoolean = typeof booleanVariable;
    return (
        <div id="wd-variable-types"><h4>Variables Types</h4>
            const numberVariable = {numberVariable}<br />
            const floatingPointNumber = {floatingPointNumber}<br />
            const stringVariable = {stringVariable}<br />
            const booleanVariable = {booleanVariable + ""}<br />
            const isNumber = {isNumber}<br />
            const isString = {isString}<br />
            const isBoolean = {isBoolean}<hr />
        </div>
    );
}