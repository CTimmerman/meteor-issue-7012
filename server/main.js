import xsd from 'libxml-xsd';

const schema = xsd.parse(Assets.getText('any.xsd'));
const validationErrors = schema.validate(Assets.getText('any.xml'));
console.log(validationErrors);
